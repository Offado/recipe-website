import React from 'react'

const RecipeList = ({recipes}) => {
  return (
    <div>
      <ul>
        {
            recipes.map((recipe) => (
                <li>{recipe.name}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default RecipeList;
