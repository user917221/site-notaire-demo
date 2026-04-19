"use client";

import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-foreground text-white hover:bg-foreground/85 transition-colors",
  secondary: "bg-surface text-foreground hover:bg-border transition-colors",
  ghost: "text-muted hover:text-foreground transition-colors",
  outline: "border border-border text-foreground hover:bg-surface transition-colors",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-sm",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", href, children, className = "", ...props }, ref) => {
    const classes = `inline-flex items-center justify-center gap-2 rounded-md font-medium cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return <a href={href} className={classes}>{children}</a>;
    }

    return <button ref={ref} className={classes} {...props}>{children}</button>;
  }
);

Button.displayName = "Button";
export default Button;
