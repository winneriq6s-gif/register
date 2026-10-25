import React from "react";

export interface SidebarProps {
  title?: string;
  onAction?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ title = "Sidebar", onAction }) => {
  return (
    <section className="sidebar-container" aria-label={title}>
      <header className="sidebar-header">
        <h2>{title}</h2>
      </header>
      <div className="sidebar-body">
        <p>Content for Sidebar in admin-console.</p>
      </div>
      {onAction && (
        <button type="button" onClick={onAction}>
          Action
        </button>
      )}
    </section>
  );
};

export default Sidebar;

// pr-018 touch

// pr-018 touch
