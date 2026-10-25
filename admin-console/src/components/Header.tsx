import React from "react";

export interface HeaderProps {
  title?: string;
  onAction?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title = "Header", onAction }) => {
  return (
    <section className="header-container" aria-label={title}>
      <header className="header-header">
        <h2>{title}</h2>
      </header>
      <div className="header-body">
        <p>Content for Header in admin-console.</p>
      </div>
      {onAction && (
        <button type="button" onClick={onAction}>
          Action
        </button>
      )}
    </section>
  );
};

export default Header;

// pr-015 touch

// pr-015 touch

// unique change for PR 11
