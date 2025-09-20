import React from "react";
import { IRecipeListProps } from "../types";
import Recipe from "./Recipe";

const RecipeList: React.FC<IRecipeListProps> = ({ recipes }) => {
  return (
    <div>
      {recipes.map((r) => (
        <Recipe key={r.id} recipeData={r} />
      ))}
    </div>
  );
};

export default RecipeList;
