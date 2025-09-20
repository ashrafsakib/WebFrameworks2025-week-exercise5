import React from "react";
import { IRecipeTagListProps } from "../types";
import RecipeTag from "./RecipeTag";

const RecipeTagList: React.FC<IRecipeTagListProps> = ({ tagList, onSelectTag }) => {
  return (
    <div>
      <h2>Choose a tag below</h2>
      <div>
        {tagList.map((tag) => (
          <RecipeTag key={tag} tagName={tag} onSelectTag={onSelectTag} />
        ))}
      </div>
    </div>
  );
};

export default RecipeTagList;
