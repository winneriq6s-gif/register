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
        <p>Content for Header in settings-panel.</p>
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
