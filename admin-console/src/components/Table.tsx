import React from "react";

export interface TableProps {
  title?: string;
  onAction?: () => void;
}

export const Table: React.FC<TableProps> = ({ title = "Table", onAction }) => {
  return (
    <section className="table-container" aria-label={title}>
      <header className="table-header">
        <h2>{title}</h2>
      </header>
      <div className="table-body">
        <p>Content for Table in admin-console.</p>
      </div>
      {onAction && (
        <button type="button" onClick={onAction}>
          Action
        </button>
      )}
    </section>
  );
};

export default Table;

// pr-019 touch

// pr-019 touch

// unique change for PR 15
