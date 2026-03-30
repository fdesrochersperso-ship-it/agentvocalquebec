"use client";

import type { RetellWebClient } from "retell-client-js-sdk";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  LoaderCircle,
  MapPin,
  Mic,
  MicOff,
  PhoneCall,
  PhoneOff,
  Sparkles,
  Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type DemoStatus = "idle" | "creating" | "connecting" | "live" | "ended" | "error";

type EndMode = "idle" | "ended" | "error";

interface TranscriptLine {
  speaker: "agent" | "client";
  text: string;
}

const DEFAULT_TRANSCRIPT: TranscriptLine[] = [
  {
    speaker: "client",
    text: "Bonjour, j'appelle pour voir si vous avez encore une place cette semaine.",
  },
  {
    speaker: "agent",
    text: "Oui, bien sûr. Je peux regarder ça avec vous tout de suite et noter les bons détails.",
  },
] as const;

function parseTranscript(rawTranscript: string): TranscriptLine[] {
  return rawTranscript
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(-6)
    .map((line) => {
      const separatorIndex = line.indexOf(":");
      if (separatorIndex === -1) {
        return {
          speaker: "agent" as const,
          text: line,
        };
      }

      const rawSpeaker = line.slice(0, separatorIndex).trim().toLowerCase();
      const text = line.slice(separatorIndex + 1).trim();
      const speaker =
        rawSpeaker === "user" || rawSpeaker === "caller" || rawSpeaker === "client"
          ? ("client" as const)
          : ("agent" as const);

      return { speaker, text };
    });
}

function getErrorMessage(upstreamStatus?: number): string {
  if (upstreamStatus === 402) {
    return "Retell refuse la création d'appel pour l'instant. Vérifiez les crédits ou le mode de facturation du compte.";
  }

  if (upstreamStatus === 401) {
    return "Retell a rejeté la clé API. Vérifiez RETELL_API_KEY dans l'environnement.";
  }

  return "Impossible de démarrer l'appel pour le moment. Vérifiez la configuration Retell puis réessayez.";
}

export function PrivateRetellDemo() {
  const clientRef = useRef<RetellWebClient | null>(null);
  const endModeRef = useRef<EndMode>("ended");
  const businessName = "Clinique Villeray";
  const industry = "Clinique dentaire";
  const city = "Montréal";
  const offerFocus = "prise de rendez-vous";

  const [sdkReady, setSdkReady] = useState(false);
  const [status, setStatus] = useState<DemoStatus>("idle");
  const [callId, setCallId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [agentSpeaking, setAgentSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [transcriptLines, setTranscriptLines] =
    useState<TranscriptLine[]>(DEFAULT_TRANSCRIPT);

  useEffect(() => {
    let disposed = false;

    async function setupClient() {
      const { RetellWebClient } = await import("retell-client-js-sdk");
      if (disposed) return;

      const client = new RetellWebClient();
      clientRef.current = client;

      client.on("call_started", () => {
        setStatus("live");
        setError(null);
      });

      client.on("call_ready", () => {
        setStatus("live");
      });

      client.on("call_ended", () => {
        setStatus(endModeRef.current);
        setAgentSpeaking(false);
        setIsMuted(false);
        endModeRef.current = "ended";
      });

      client.on("agent_start_talking", () => {
        setAgentSpeaking(true);
      });

      client.on("agent_stop_talking", () => {
        setAgentSpeaking(false);
      });

      client.on("update", (update: { transcript?: string }) => {
        if (typeof update.transcript !== "string" || !update.transcript.trim()) {
          return;
        }
        setTranscriptLines(parseTranscript(update.transcript));
      });

      client.on("error", () => {
        endModeRef.current = "error";
        setError("La session audio a rencontré une erreur. Arrêtez l'appel puis redémarrez la démonstration.");
      });

      setSdkReady(true);
    }

    void setupClient();

    return () => {
      disposed = true;
      clientRef.current?.stopCall();
      clientRef.current?.removeAllListeners();
      clientRef.current = null;
    };
  }, []);

  async function startDemoCall() {
    const client = clientRef.current;
    if (!client || !sdkReady) return;

    setError(null);
    setStatus("creating");
    setCallId(null);
    setTranscriptLines(DEFAULT_TRANSCRIPT);
    endModeRef.current = "ended";

    try {
      const res = await fetch("/api/retell-web-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName,
          industry,
          city,
          offerFocus,
        }),
      });

      const data = (await res.json()) as
        | {
            ok: true;
            accessToken: string;
            callId: string;
          }
        | {
            ok: false;
            error: string;
            upstreamStatus?: number;
            missing?: Record<string, boolean>;
          };

      if (!res.ok || !data.ok) {
        if ("error" in data && data.error === "retell_non_configure") {
          setError(
            "La démonstration n'est pas disponible pour le moment. Vérifiez la configuration de l'appel puis réessayez."
          );
        } else {
          setError(getErrorMessage("upstreamStatus" in data ? data.upstreamStatus : undefined));
        }
        setStatus("error");
        return;
      }

      setCallId(data.callId);
      setStatus("connecting");
      await client.startCall({
        accessToken: data.accessToken,
        sampleRate: 24000,
      });
      await client.startAudioPlayback().catch(() => undefined);
    } catch {
      setStatus("error");
      setError("Une erreur réseau a empêché le démarrage de l'appel. Réessayez avec une connexion stable.");
    }
  }

  function stopDemoCall() {
    const client = clientRef.current;
    if (!client) return;
    endModeRef.current = "idle";
    client.stopCall();
  }

  function toggleMute() {
    const client = clientRef.current;
    if (!client || status !== "live") return;

    if (isMuted) {
      client.unmute();
      setIsMuted(false);
      return;
    }

    client.mute();
    setIsMuted(true);
  }

  const startDisabled = !sdkReady || status === "creating" || status === "connecting" || status === "live";
  const stopDisabled = status !== "live" && status !== "connecting";
  const muteDisabled = status !== "live";

  return (
    <div className="grid gap-6 lg:grid-cols-[1.18fr_0.82fr]">
      <Card className="border-border-strong bg-white/92 p-0 backdrop-blur-sm">
        <div className="border-b border-border px-6 py-5 sm:px-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
                Conversation en direct
              </p>
              <h2 className="mt-3 font-display text-[2.3rem] leading-tight text-primary">
                Entendez comment l&apos;agent accueille, comprend et oriente un appel.
              </h2>
            </div>
            <div className="rounded-full border border-border bg-background px-4 py-2 text-sm text-text-secondary">
              Statut:{" "}
              <span className="font-semibold text-primary">
                {status === "idle" && "prêt"}
                {status === "creating" && "création"}
                {status === "connecting" && "connexion"}
                {status === "live" && "en direct"}
                {status === "ended" && "terminé"}
                {status === "error" && "erreur"}
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-7 px-6 py-6 sm:px-7 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-border bg-background px-5 py-5">
                <p className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-text-muted">
                  <Building2 className="h-4 w-4 text-accent" aria-hidden />
                  Entreprise en démonstration
                </p>
                <p className="mt-3 text-xl font-semibold text-primary">{businessName}</p>
              </div>

              <div className="rounded-[24px] border border-border bg-background px-5 py-5">
                <p className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-text-muted">
                  <MapPin className="h-4 w-4 text-accent" aria-hidden />
                  Présence
                </p>
                <p className="mt-3 text-xl font-semibold text-primary">
                  {city} · {industry}
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-border bg-primary px-6 py-6 text-text-inverse">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-white/70">
                    Session audio
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    {callId ? `Appel ${callId.slice(0, 10)}...` : "Aucun appel actif"}
                  </p>
                </div>
                <motion.div
                  animate={
                    agentSpeaking && status === "live"
                      ? { scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }
                      : { scale: 1, opacity: 0.65 }
                  }
                  transition={{
                    duration: 1.2,
                    repeat: agentSpeaking && status === "live" ? Infinity : 0,
                  }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10"
                >
                  <Waves className="h-8 w-8 text-white" aria-hidden />
                </motion.div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  type="button"
                  onClick={() => void startDemoCall()}
                  disabled={startDisabled}
                  className="min-w-[220px] bg-accent hover:bg-accent-dark"
                >
                  {status === "creating" || status === "connecting" ? (
                    <>
                      <LoaderCircle className="mr-2 h-5 w-5 animate-spin" aria-hidden />
                      Préparation de l&apos;appel...
                    </>
                  ) : (
                    <>
                      <PhoneCall className="mr-2 h-5 w-5" aria-hidden />
                      Démarrer l&apos;appel démo
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  variant="secondary"
                  onClick={stopDemoCall}
                  disabled={stopDisabled}
                  className="min-w-[180px] border-white/40 text-white hover:bg-white hover:text-primary"
                >
                  <PhoneOff className="mr-2 h-5 w-5" aria-hidden />
                  Arrêter
                </Button>

                <Button
                  type="button"
                  variant="secondary"
                  onClick={toggleMute}
                  disabled={muteDisabled}
                  className="min-w-[160px] border-white/40 text-white hover:bg-white hover:text-primary"
                >
                  {isMuted ? (
                    <>
                      <Mic className="mr-2 h-5 w-5" aria-hidden />
                      Réactiver
                    </>
                  ) : (
                    <>
                      <MicOff className="mr-2 h-5 w-5" aria-hidden />
                      Muet
                    </>
                  )}
                </Button>
              </div>

              {error ? (
                <div className="mt-5 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm leading-6 text-white">
                  {error}
                </div>
              ) : (
                <div className="mt-5 rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-sm leading-6 text-white/84">
                  Cliquez pour démarrer l&apos;appel, puis parlez comme un vrai client. L&apos;agent répond immédiatement et guide la conversation naturellement.
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[28px] border border-border bg-background px-5 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/12 text-accent">
                  <Sparkles className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-text-muted">
                    Essayez de demander
                  </p>
                  <p className="mt-1 text-base font-medium text-primary">
                    &ldquo;Bonjour, j&apos;appelle pour voir si vous prenez encore des nouveaux clients.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-border bg-background px-5 py-5">
              <p className="text-sm uppercase tracking-[0.2em] text-text-muted">
                Transcription en direct
              </p>
              <div className="mt-4 space-y-3">
                {transcriptLines.map((item, index) => (
                  <div
                    key={`${item.speaker}-${index}-${item.text}`}
                    className={`max-w-[92%] rounded-2xl px-4 py-3 ${
                      item.speaker === "client"
                        ? "bg-white text-primary"
                        : "ml-auto bg-accent text-white"
                    }`}
                  >
                    <p
                      className={`text-[11px] uppercase tracking-[0.18em] ${
                        item.speaker === "client" ? "text-text-muted" : "text-white/75"
                      }`}
                    >
                      {item.speaker === "client" ? "Client" : "Agent"}
                    </p>
                    <p className="mt-1 text-[0.98rem] leading-7">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-6">
        <Card className="border-border-strong bg-white/92 p-7 backdrop-blur-sm">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
            Ce que l&apos;agent fait pour vous
          </p>
          <div className="mt-5 space-y-4 text-base leading-7 text-text-secondary">
            <p>
              Il répond avec une voix posée et accueillante, dans un français du
              Québec naturel et rassurant.
            </p>
            <p>
              Il comprend rapidement la raison de l&apos;appel, pose les bonnes
              questions et évite les allers-retours inutiles.
            </p>
            <p>
              Il conclut proprement avec une prochaine étape claire: rappel,
              rendez-vous, confirmation ou transmission à l&apos;équipe.
            </p>
          </div>
        </Card>

        <Card className="border-border-strong bg-primary p-7 text-text-inverse shadow-[0_18px_60px_rgba(15,35,65,0.18)]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/70">
            Pourquoi cette expérience marque les esprits
          </p>
          <div className="mt-5 space-y-4 text-base leading-7 text-white/88">
            <p>Réponse immédiate, même hors des heures de bureau.</p>
            <p>Conversations fluides, sans ton robotique ni scripts rigides.</p>
            <p>Qualification utile dès le premier appel, pour protéger chaque occasion.</p>
          </div>
        </Card>

        <Card className="border-border-strong bg-white/92 p-7 backdrop-blur-sm">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
            Quelques demandes à essayer
          </p>
          <div className="mt-5 space-y-4 text-base leading-7 text-primary">
            <p>1. &ldquo;Est-ce que vous avez encore de la place cette semaine?&rdquo;</p>
            <p>2. &ldquo;Je rappelle parce que j&apos;ai manqué votre appel.&rdquo;</p>
            <p>3. &ldquo;J&apos;aimerais parler à quelqu&apos;un pour un cas un peu urgent.&rdquo;</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
