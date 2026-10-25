import React from "react";

export interface ModalProps {
  title?: string;
  onAction?: () => void;
}

export const Modal: React.FC<ModalProps> = ({ title = "Modal", onAction }) => {
  return (
    <section className="modal-container" aria-label={title}>
      <header className="modal-header">
        <h2>{title}</h2>
      </header>
      <div className="modal-body">
        <p>Content for Modal in admin-console.</p>
      </div>
      {onAction && (
        <button type="button" onClick={onAction}>
          Action
        </button>
      )}
    </section>
  );
};

export default Modal;

// pr-016 touch

// pr-016 touch
