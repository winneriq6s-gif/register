import React from "react";

export interface SettingsProps {
  title?: string;
  onAction?: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ title = "Settings", onAction }) => {
  return (
    <section className="settings-container" aria-label={title}>
      <header className="settings-header">
        <h2>{title}</h2>
      </header>
      <div className="settings-body">
        <p>Content for Settings in admin-console.</p>
      </div>
      {onAction && (
        <button type="button" onClick={onAction}>
          Action
        </button>
      )}
    </section>
  );
};

export default Settings;

// pr-029 touch

// pr-029 touch
