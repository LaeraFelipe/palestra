import React from "react";

export default function Footer({ user, onUnregister }) {
  return (
    <div className="footer">
      <p>
        {user && `Olá ${user.name.split(" ")[0]} | `}
        {user && (
          <>
            <a className="link" href="#unregister" onClick={onUnregister}>
              Sair
            </a>
          </>
        )}
      </p>
    </div>
  );
}
