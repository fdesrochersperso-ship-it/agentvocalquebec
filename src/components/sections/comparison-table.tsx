"use client";

import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const COLUMNS = [
  "Agent Vocal QC",
  "Réceptionniste",
  "Service trad.",
  "Rien",
] as const;

type CellValue = string | { type: "check" } | { type: "cross" };

const ROWS: { label: string; values: CellValue[] }[] = [
  {
    label: "Coût/mois",
    values: ["149–397$", "4 200–5 400$", "53–194$", "0$"],
  },
  {
    label: "Disponibilité",
    values: ["24/7", "40h/sem", "Variable", "0h"],
  },
  {
    label: "Appels simultanés",
    values: ["Illimités", "1", "1-2", "0"],
  },
  {
    label: "Prise de RDV auto",
    values: [{ type: "check" }, { type: "check" }, { type: "cross" }, { type: "cross" }],
  },
  {
    label: "Québécois authentique",
    values: [{ type: "check" }, { type: "check" }, "Variable", "—"],
  },
  {
    label: "Bilingue (FR/EN)",
    values: [{ type: "check" }, "Variable", "Variable", "—"],
  },
  {
    label: "Sync calendrier",
    values: [{ type: "check" }, { type: "check" }, { type: "cross" }, { type: "cross" }],
  },
  {
    label: "Intégrations CRM",
    values: [{ type: "check" }, { type: "check" }, { type: "cross" }, { type: "cross" }],
  },
  {
    label: "Support",
    values: ["Courriel + prioritaire", "N/A", "Variable", "—"],
  },
  {
    label: "Appels manqués",
    values: ["~0%", "~35%", "~15%", "100%"],
  },
];

function CellContent({ value }: { value: CellValue }) {
  if (typeof value === "object") {
    if (value.type === "check") {
      return (
        <Check size={20} strokeWidth={1.5} className="text-success" aria-hidden />
      );
    }
    return (
      <X size={20} strokeWidth={1.5} className="text-text-muted" aria-hidden />
    );
  }
  return <span>{value}</span>;
}

export function ComparisonTable() {
  return (
    <SectionWrapper>
      <AnimateOnScroll className="flex flex-col gap-8 lg:gap-10">
        <div className="flex flex-col gap-4">
          <Badge className="w-fit">Comparaison détaillée</Badge>
          <h2 className="font-display text-h1 font-normal text-primary leading-[1.15]">
            Comparatif
          </h2>
        </div>

        {/* Table with horizontal scroll on mobile */}
        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr>
                <th className="border-b border-border p-4 text-left font-body text-sm font-semibold text-text-muted">
                  {""}
                </th>
                {COLUMNS.map((col) => (
                  <th
                    key={col}
                    className="border-b border-border p-4 text-center font-body text-sm font-semibold text-primary"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-0">
                  <td className="p-4 font-body text-sm font-medium text-primary">
                    {row.label}
                  </td>
                  {row.values.map((value, i) => (
                    <td
                      key={i}
                      className="p-4 text-center font-body text-sm text-text-secondary"
                    >
                      <span className="inline-flex items-center justify-center">
                        <CellContent value={value} />
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </AnimateOnScroll>
    </SectionWrapper>
  );
}
