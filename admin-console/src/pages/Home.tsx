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
        <p>Content for Home in admin-console.</p>
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

// pr-027 touch

// pr-027 touch
