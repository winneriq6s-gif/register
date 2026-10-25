import React from "react";

export interface ProfileProps {
  title?: string;
  onAction?: () => void;
}

export const Profile: React.FC<ProfileProps> = ({ title = "Profile", onAction }) => {
  return (
    <section className="profile-container" aria-label={title}>
      <header className="profile-header">
        <h2>{title}</h2>
      </header>
      <div className="profile-body">
        <p>Content for Profile in admin-console.</p>
      </div>
      {onAction && (
        <button type="button" onClick={onAction}>
          Action
        </button>
      )}
    </section>
  );
};

export default Profile;

// pr-028 touch

// pr-028 touch

// unique change for PR 24
