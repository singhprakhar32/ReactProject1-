import ItemsList from "./ItemList";
import { useState } from "react";
const RestaurantCategories = ({ data ,showItems,setShowIndex}) => {
  const handleClick=() => { 
    setShowIndex();
  }
  return (
    <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        {" "}
        <span className ="font-bold text-lg">
          {data.title}({data.itemCards.length})
        </span>
        <span>{showItems?"⬆️":"⬇️"}</span>
      </div>
      {showItems && <ItemsList data={data.itemCards}/>}
    </div>
  );
};
export default RestaurantCategories;
