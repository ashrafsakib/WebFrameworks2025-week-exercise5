import React, { useEffect, useState } from "react";
import RecipeTagList from "./components/RecipeTagList";
import RecipeList from "./components/RecipeList";
import { IRecipe } from "./types";

const App: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  // Load tags on start
  useEffect(() => {
    fetch("https://dummyjson.com/recipes/tags")
      .then((res) => res.json())
      .then((data) => setTags(data));
  }, []);

  // Load recipes when a tag is selected
  useEffect(() => {
    if (selectedTag) {
      fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`)
        .then((res) => res.json())
        .then((data) => setRecipes(data.recipes));
    }
  }, [selectedTag]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>ACME Recipe O'Master</h1>
      {!selectedTag ? (
        <RecipeTagList tagList={tags} onSelectTag={setSelectedTag} />
      ) : (
        <div>
          <h2>Recipes for {selectedTag}</h2>
          <button onClick={() => setSelectedTag(null)}>Back</button>
          <RecipeList recipes={recipes} />
        </div>
      )}
    </div>
  );
};

export default App;
