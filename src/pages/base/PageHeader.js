import React from "react";

export function PageHeader({ title }) {
  return (
    <div className="page-header">
      <h1 className="page-header__title">{title}</h1>
    </div>
  );
}
