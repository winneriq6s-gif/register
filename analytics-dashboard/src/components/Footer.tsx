import React from "react";

export interface FooterProps {
  title?: string;
  onAction?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ title = "Footer", onAction }) => {
  return (
    <section className="footer-container" aria-label={title}>
      <header className="footer-header">
        <h2>{title}</h2>
      </header>
      <div className="footer-body">
        <p>Content for Footer in analytics-dashboard.</p>
      </div>
      {onAction && (
        <button type="button" onClick={onAction}>
          Action
        </button>
      )}
    </section>
  );
};

export default Footer;

// pr-079 touch

// unique change for PR 73
