import React from "react";
import { IRecipeTagProps } from "../types";

const RecipeTag: React.FC<IRecipeTagProps> = ({ tagName, onSelectTag }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        cursor: "pointer",
      }}
      onClick={() => onSelectTag(tagName)}
    >
      {tagName}
    </div>
  );
};

export default RecipeTag;
