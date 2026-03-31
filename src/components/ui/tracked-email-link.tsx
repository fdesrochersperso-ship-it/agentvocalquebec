"use client";

import { trackContactClick } from "@/lib/analytics";

interface TrackedEmailLinkProps {
  children: React.ReactNode;
  className?: string;
  location: string;
}

export function TrackedEmailLink({
  children,
  className,
  location,
}: TrackedEmailLinkProps) {
  return (
    <a
      href="mailto:info@agentvocalquebec.com"
      onClick={() =>
        trackContactClick({
          location,
          method: "email",
        })
      }
      className={className}
    >
      {children}
    </a>
  );
}
