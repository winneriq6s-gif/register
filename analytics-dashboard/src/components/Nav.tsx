import React from "react";

export interface NavProps {
  title?: string;
  onAction?: () => void;
}

export const Nav: React.FC<NavProps> = ({ title = "Nav", onAction }) => {
  return (
    <section className="nav-container" aria-label={title}>
      <header className="nav-header">
        <h2>{title}</h2>
      </header>
      <div className="nav-body">
        <p>Content for Nav in analytics-dashboard.</p>
      </div>
      {onAction && (
        <button type="button" onClick={onAction}>
          Action
        </button>
      )}
    </section>
  );
};

export default Nav;

// pr-083 touch

// unique change for PR 77
