import { cn } from "@/lib/utils";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 ease-[ease] hover:border-border-strong hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]",
        className
      )}
    >
      {children}
    </div>
  );
}
