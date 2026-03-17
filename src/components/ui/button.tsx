"use client";

import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "tertiary";
export type ButtonSize = "default" | "lg";

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-dark transition-all duration-200 ease-[ease] hover:scale-[1.02]",
  secondary:
    "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-200 ease-[ease]",
  tertiary:
    "bg-transparent text-accent underline underline-offset-4 hover:text-accent-dark transition-colors duration-200",
};

const sizeStyles: Record<ButtonSize, Record<ButtonVariant, string>> = {
  default: {
    primary: "rounded-lg px-8 py-4 text-base font-semibold",
    secondary: "rounded-lg px-[30px] py-3.5 text-base font-semibold",
    tertiary: "text-base font-semibold",
  },
  lg: {
    primary: "rounded-lg px-10 py-5 text-lg font-semibold",
    secondary: "rounded-lg px-12 py-4 text-lg font-semibold",
    tertiary: "text-lg font-semibold",
  },
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  {
    variant = "primary",
    size = "default",
    href,
    className,
    children,
    ...props
  },
  ref
) {
  const baseStyles =
    "inline-flex min-h-[44px] min-w-[44px] items-center justify-center font-body focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const combinedClassName = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size][variant],
    className
  );

  if (href) {
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={combinedClassName}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      className={combinedClassName}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
});
