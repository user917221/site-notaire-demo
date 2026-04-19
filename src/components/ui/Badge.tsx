interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "muted";
  className?: string;
}

export default function Badge({ children, variant = "accent", className = "" }: BadgeProps) {
  const base = "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase";
  const styles = {
    accent: "bg-foreground/5 text-foreground border border-foreground/10",
    muted: "bg-surface text-muted border border-border",
  };

  return (
    <span className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
}
