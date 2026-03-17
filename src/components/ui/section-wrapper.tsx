import { cn } from "@/lib/utils";

export type SectionBackground = "default" | "surface" | "primary";

export interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: SectionBackground;
}

const backgroundStyles: Record<SectionBackground, string> = {
  default: "bg-background",
  surface: "bg-surface",
  primary: "bg-primary text-text-inverse",
};

export function SectionWrapper({
  children,
  className,
  id,
  background = "default",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-8 lg:py-10",
        backgroundStyles[background],
        className
      )}
    >
      <div className="mx-auto max-w-[1200px] px-6">{children}</div>
    </section>
  );
}
