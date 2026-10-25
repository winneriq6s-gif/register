import React from "react";

export interface FormProps {
  title?: string;
  onAction?: () => void;
}

export const Form: React.FC<FormProps> = ({ title = "Form", onAction }) => {
  return (
    <section className="form-container" aria-label={title}>
      <header className="form-header">
        <h2>{title}</h2>
      </header>
      <div className="form-body">
        <p>Content for Form in admin-console.</p>
      </div>
      {onAction && (
        <button type="button" onClick={onAction}>
          Action
        </button>
      )}
    </section>
  );
};

export default Form;

// pr-014 touch

// pr-014 touch

// unique change for PR 10
