import { cn } from "@/lib/utils";

export interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary font-body",
        className
      )}
    >
      {children}
    </span>
  );
}
