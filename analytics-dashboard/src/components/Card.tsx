import React from "react";

export interface CardProps {
  title?: string;
  onAction?: () => void;
}

export const Card: React.FC<CardProps> = ({ title = "Card", onAction }) => {
  return (
    <section className="card-container" aria-label={title}>
      <header className="card-header">
        <h2>{title}</h2>
      </header>
      <div className="card-body">
        <p>Content for Card in analytics-dashboard.</p>
      </div>
      {onAction && (
        <button type="button" onClick={onAction}>
          Action
        </button>
      )}
    </section>
  );
};

export default Card;

// pr-077 touch
