import React from "react";

export interface DashboardProps {
  title?: string;
  onAction?: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ title = "Dashboard", onAction }) => {
  return (
    <section className="dashboard-container" aria-label={title}>
      <header className="dashboard-header">
        <h2>{title}</h2>
      </header>
      <div className="dashboard-body">
        <p>Content for Dashboard in admin-console.</p>
      </div>
      {onAction && (
        <button type="button" onClick={onAction}>
          Action
        </button>
      )}
    </section>
  );
};

export default Dashboard;

// pr-026 touch
