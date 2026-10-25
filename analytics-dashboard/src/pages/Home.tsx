import React from "react";

export interface HomeProps {
  title?: string;
  onAction?: () => void;
}

export const Home: React.FC<HomeProps> = ({ title = "Home", onAction }) => {
  return (
    <section className="home-container" aria-label={title}>
      <header className="home-header">
        <h2>{title}</h2>
      </header>
      <div className="home-body">
        <p>Content for Home in analytics-dashboard.</p>
      </div>
      {onAction && (
        <button type="button" onClick={onAction}>
          Action
        </button>
      )}
    </section>
  );
};

export default Home;

// pr-093 touch

// unique change for PR 87
