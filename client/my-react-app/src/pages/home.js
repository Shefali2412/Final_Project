import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import { CarouselComponent } from "../components/gallery";
import axios from "axios";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  const userID = useGetUserID();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
    if (userID) {
      // call only for logged in user
      fetchSavedRecipes();
    }
  }, []);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("http://localhost:3001/recipes", {
        recipeID,
        userID,
      });
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  const isRecipeSaved = (id) => savedRecipes.includes(id);

  return (
    <div className="m-4">
      <section className="introduction-section text-center">
        <h2 className=" text-style">
          Simple recipes made for real, actual, everyday life.
        </h2>
        <h4>Welcome to RecipeHub</h4>

        <p>
          Your ultimate destination for culinary inspiration and organization.
          Discover, create, and savor delightful recipes in one central hub.
        </p>
      </section>
      <div className="my-4">
        <CarouselComponent />
      </div>
      <div className="my-4">
        <h2 className=" text-style">Recipes list</h2>
      </div>
      {recipes.map((recipe) => (
        <div key={recipe._id} className="card mb-3 recipe-card">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                className="recipe-image"
                src={recipe.imageUrl}
                alt={recipe.name}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p className="card-text">{recipe.instructions}</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Cooking Time: {recipe.cookingTime} minutes
                  </small>
                </p>
                <button
                  className={`btn btn-dark ${userID ? "" : "d-none"}`}
                  onClick={() => saveRecipe(recipe._id)}
                  disabled={isRecipeSaved(recipe._id)}
                >
                  {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
