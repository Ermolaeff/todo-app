import React from "react";

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper px1">
      <a href="/" className="brand-logo">
        Todo App
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a href="/">Sass</a>
        </li>
        <li>
          <a href="/">Components</a>
        </li>
      </ul>
    </div>
  </nav>
);
