import React from "react";

export interface ChartProps {
  title?: string;
  onAction?: () => void;
}

export const Chart: React.FC<ChartProps> = ({ title = "Chart", onAction }) => {
  return (
    <section className="chart-container" aria-label={title}>
      <header className="chart-header">
        <h2>{title}</h2>
      </header>
      <div className="chart-body">
        <p>Content for Chart in admin-console.</p>
      </div>
      {onAction && (
        <button type="button" onClick={onAction}>
          Action
        </button>
      )}
    </section>
  );
};

export default Chart;

// pr-012 touch
