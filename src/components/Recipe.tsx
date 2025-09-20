import React from "react";
import { IRecipeProps } from "../types";

const Recipe: React.FC<IRecipeProps> = ({ recipeData }) => {
  return (
    <div style={{ border: "1px solid gray", margin: "10px 0", padding: "10px" }}>
      <h3>{recipeData.name}</h3>

      <h4>Ingredients</h4>
      <ul>
        {recipeData.ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>

      <h4>Instructions</h4>
      <ol>
        {recipeData.instructions.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
