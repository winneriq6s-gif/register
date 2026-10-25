import React from "react";

export interface AvatarProps {
  title?: string;
  onAction?: () => void;
}

export const Avatar: React.FC<AvatarProps> = ({ title = "Avatar", onAction }) => {
  return (
    <section className="avatar-container" aria-label={title}>
      <header className="avatar-header">
        <h2>{title}</h2>
      </header>
      <div className="avatar-body">
        <p>Content for Avatar in admin-console.</p>
      </div>
      {onAction && (
        <button type="button" onClick={onAction}>
          Action
        </button>
      )}
    </section>
  );
};

export default Avatar;

// pr-010 touch

// pr-010 touch
