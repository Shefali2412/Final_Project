// Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="app-header">
      <img
        src={process.env.PUBLIC_URL + "/logo.png"}
        alt="RecipeHub Logo"
        className="logo"
      />
    </header>
  );
};

export default Header;
