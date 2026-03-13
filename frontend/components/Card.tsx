import { type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  /** Optional title shown at top of card */
  title?: string;
};

export default function Card({ children, className = "", title }: CardProps) {
  return (
    <section
      className={`rounded border border-white/10 bg-white/5 ${className}`}
      aria-labelledby={title ? "card-title" : undefined}
    >
      {title && (
        <h2
          id="card-title"
          className="px-5 py-3 border-b border-white/10 text-sm font-medium text-white/90 uppercase tracking-wider"
        >
          {title}
        </h2>
      )}
      <div className="p-5">{children}</div>
    </section>
  );
}
