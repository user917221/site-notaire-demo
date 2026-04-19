interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-surface rounded-lg p-6 hover:shadow-sm transition-shadow ${className}`}>
      {children}
    </div>
  );
}
