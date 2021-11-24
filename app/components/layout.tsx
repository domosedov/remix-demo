import * as React from "react";
import { Link } from "remix";

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen grid grid-rows-[auto,1fr,auto]">
      <header className="bg-gray-300">
        <nav className="max-w-5xl mx-auto flex items-center justify-center gap-4 py-5">
          <Link className="px-4 py-2 rounded bg-blue-200" to="/">
            Home
          </Link>
          <Link className="px-4 py-2 rounded bg-blue-200" to="/todos">
            Todos
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};
