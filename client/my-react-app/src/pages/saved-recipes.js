import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

export const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRecipes();
  }, []);
  return (
    <div>
      <h1>Saved Recipes</h1>
      {savedRecipes.length > 0 ? (
        <ul>
          {savedRecipes.map((recipe) => (
            <li
              className="card d-flex "
              style={{ marginRight: "10px" }}
              key={recipe._id}
            >
              <div className="card-body">
                <h2 className="card-title">{recipe.name}</h2>
              </div>
              <p className="card-text">{recipe.description}</p>
              <img
                className="card-img-top"
                src={recipe.imageUrl}
                alt={recipe.name}
              />
              <p>Cooking Time: {recipe.cookingTime} minutes</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};
