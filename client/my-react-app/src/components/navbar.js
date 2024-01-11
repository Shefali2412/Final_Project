import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useGetUserID } from "../hooks/useGetUserID";
export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const userID = useGetUserID();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img
            src="/logo.png"
            width="10"
            height="10"
            className="d-inline-block align-top logo"
            alt="Bootstrap"
          />
        </a>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarColor01"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>

            {userID && (
              <>
                <li className="nav-item">
                  <Link to="/create-recipe">Create Recipe</Link>
                </li>
                <li className="nav-item">
                  <Link to="/saved-recipes">Saved Recipes</Link>
                </li>
              </>
            )}
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              {!cookies.access_token ? (
                <Link to="/auth">Login/Register</Link>
              ) : (
                <button onClick={logout}>Logout</button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
