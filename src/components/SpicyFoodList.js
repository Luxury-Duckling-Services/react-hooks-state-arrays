import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    console.log(newFood);
    setFoods([ ...foods , newFood])
  }

  const [genre , setGenre] = useState('All')

  function changeGenre(e) { 
    console.log(e.target.value)
    setGenre(e.target.value)
  }

  function handleLiClick(id) {
    setFoods(foods.map( food =>{
      let newFood = {...food}      
      if (food.id===id) {
        newFood.heatLevel +=1
      }
      return newFood
    }))
  }

  const foodList = foods.filter((food) => {
    if (genre === 'All') {
      return true
    } else {
      return food.cuisine === genre
    }
  }).map((food) => (
    <li key={food.id} onClick ={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (  
    <>
    <div>
      <select name="filter" onChange={ (e) => changeGenre(e) }>
      <option value="All">All</option>
      <option value="American">American</option>
      <option value="Sichuan">Sichuan</option>
      <option value="Thai">Thai</option>
      <option value="Mexican">Mexican</option>
      </select>  
    </div>
    
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
    </>
  );
}

export default SpicyFoodList;
