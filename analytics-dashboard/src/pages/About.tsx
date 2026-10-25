import React from "react";

export interface AboutProps {
  title?: string;
  onAction?: () => void;
}

export const About: React.FC<AboutProps> = ({ title = "About", onAction }) => {
  return (
    <section className="about-container" aria-label={title}>
      <header className="about-header">
        <h2>{title}</h2>
      </header>
      <div className="about-body">
        <p>Content for About in analytics-dashboard.</p>
      </div>
      {onAction && (
        <button type="button" onClick={onAction}>
          Action
        </button>
      )}
    </section>
  );
};

export default About;

// pr-091 touch

// unique change for PR 85
