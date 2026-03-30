import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { PrivateRetellDemo } from "@/components/sections/private-retell-demo";

const outcomeStats = [
  { value: "fr-CA", label: "français d'ici" },
  { value: "24/7", label: "réponse continue" },
  { value: "< 1 min", label: "prise en charge" },
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(196,113,59,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(27,54,93,0.18),_transparent_32%)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,_rgba(255,255,255,0.85),_rgba(255,255,255,0))]" />

      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-14 px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="max-w-[760px]">
            <p className="font-mono text-sm uppercase tracking-[0.28em] text-accent">
              Démo interactive
            </p>
            <h1 className="mt-5 font-display text-[clamp(3rem,7vw,5.5rem)] leading-[0.96] text-primary">
              Un agent vocal qui répond comme si votre équipe décrochait.
            </h1>
            <p className="mt-6 max-w-[62ch] text-lg leading-8 text-text-secondary sm:text-xl">
              Lancez une conversation en direct pour entendre une voix fluide en
              français du Québec, suivre la transcription en temps réel et voir
              comment l&apos;agent qualifie un appel avec calme et clarté.
            </p>
          </div>

          <Card className="border-border-strong bg-white/90 p-7 backdrop-blur-sm">
            <p className="font-mono text-xs uppercase tracking-[0.26em] text-accent">
              Ce que la démo met en valeur
            </p>
            <div className="mt-5 grid gap-4">
              <div className="rounded-xl bg-primary px-5 py-4 text-text-inverse">
                <p className="text-sm uppercase tracking-[0.22em] text-white/70">
                  Impression immédiate
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  Une première réponse humaine, rapide et rassurante
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {outcomeStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border bg-background px-4 py-4 text-center"
                  >
                    <p className="font-display text-3xl leading-none text-primary">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        <PrivateRetellDemo />
      </div>
    </div>
  );
}
