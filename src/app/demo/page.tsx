import type { Metadata } from "next";
import {
  CheckCircle2,
  MessagesSquare,
  PhoneIncoming,
  Sparkles,
  Waves,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { PrivateRetellDemo } from "@/components/sections/private-retell-demo";

const highlightPoints = [
  "Réponse immédiate, sans attente ni boîte vocale.",
  "Qualification claire dès les premières secondes.",
  "Ton naturel pensé pour des entreprises d'ici.",
] as const;

const outcomeStats = [
  { value: "Voix locale", label: "accueil naturel" },
  { value: "24/7", label: "toujours disponible" },
  { value: "Transcription", label: "suivi en direct" },
] as const;

export const metadata: Metadata = {
  title: "Démo interactive",
  description:
    "Démo interactive d'un agent vocal IA : accueil d'appels, qualification et réponses naturelles en français du Québec.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
};

export default function DemoPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(196,113,59,0.2),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(27,54,93,0.18),_transparent_32%)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,_rgba(255,255,255,0.88),_rgba(255,255,255,0))]" />

      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-14 px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(420px,0.98fr)] lg:items-center">
          <div className="min-w-0 max-w-[640px]">
            <div className="inline-flex items-center gap-3 rounded-full border border-accent/20 bg-white/82 px-4 py-2 text-sm text-accent shadow-[0_10px_30px_rgba(196,113,59,0.10)] backdrop-blur-sm">
              <Sparkles className="h-4 w-4" aria-hidden />
              <p className="font-mono uppercase tracking-[0.24em]">
                Démo vocale en direct
              </p>
            </div>

            <h1 className="mt-7 max-w-[11ch] text-balance font-display text-[clamp(3.15rem,6vw,5.5rem)] leading-[0.9] text-primary">
              Une première réponse qui rassure tout de suite.
            </h1>

            <p className="mt-6 max-w-[58ch] text-[1.08rem] leading-8 text-text-secondary sm:text-[1.18rem]">
              Entendez un agent vocal accueillir l&apos;appel, comprendre la
              demande et guider la conversation avec un ton calme, crédible et
              naturel en français du Québec.
            </p>

            <div className="mt-8 grid gap-3 sm:max-w-[560px]">
              {highlightPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-white/80 px-4 py-3 shadow-[0_10px_30px_rgba(15,35,65,0.06)] backdrop-blur-sm"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    aria-hidden
                  />
                  <p className="text-[0.98rem] leading-7 text-primary">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <div className="relative mx-auto max-w-[560px]">
              <div className="absolute inset-x-[8%] top-6 h-24 rounded-full bg-accent/18 blur-3xl" />

              <Card className="relative overflow-hidden border-border-strong bg-white/92 p-0 shadow-[0_28px_80px_rgba(15,35,65,0.12)] backdrop-blur-sm">
                <div className="border-b border-border px-6 py-5 sm:px-7">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
                        Aperçu de l&apos;expérience
                      </p>
                      <p className="mt-2 text-[1.7rem] font-semibold leading-tight text-primary">
                        Comme un appel pris par votre réception
                      </p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <PhoneIncoming className="h-6 w-6" aria-hidden />
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 px-6 py-6 sm:px-7">
                  <div className="rounded-[28px] bg-primary px-5 py-5 text-text-inverse">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.22em] text-white/68">
                          Impression immédiate
                        </p>
                        <p className="mt-3 max-w-[18ch] text-[1.6rem] font-semibold leading-tight">
                          Une voix confiante, claire et rassurante dès le bonjour.
                        </p>
                      </div>
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10">
                        <Waves className="h-7 w-7 text-white" aria-hidden />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {outcomeStats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-[22px] border border-border bg-background px-4 py-4"
                      >
                        <p className="text-[1.45rem] font-semibold leading-tight text-primary">
                          {stat.value}
                        </p>
                        <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-text-muted">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-[24px] border border-border bg-background px-5 py-5">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent">
                        <MessagesSquare className="h-5 w-5" aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">
                          Ce que vous entendrez
                        </p>
                        <p className="mt-2 text-[1rem] leading-7 text-primary">
                          &ldquo;Bonjour, je voulais voir si vous prenez encore
                          des nouveaux clients.&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <PrivateRetellDemo />
      </div>
    </div>
  );
}
