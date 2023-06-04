import { useState } from "react";
import { data } from "../../data/Data";
import FoodCard from "./FoodCard";

const Food = () => {
  const [foods, setFoods] = useState(data);
  console.log(data);

  const filterByType = (category) => {
    setFoods(
      data.filter((food) => {
        return food.category === category;
      })
    );
  };
  const filterByPrice = (price) => {
    setFoods(
      data.filter((food) => {
        return food.price === price;
      })
    );
  };

  return (
    <div className="foods-container">
      <h1 className="title-food">Top Rated Menu Items</h1>
      <div className="filter-container">
        <h2 className="filter-title">Filter Type</h2>
        <div className="filter-btns">
          <button
            className="filter-btn"
            onClick={() => {
              setFoods(data);
            }}
          >
            All
          </button>
          <button className="filter-btn" onClick={() => filterByType("burger")}>
            Burger
          </button>
          <button className="filter-btn" onClick={() => filterByType("pizza")}>
            Pizza
          </button>
          <button
            className="filter-btn"
            onClick={() => filterByType("chicken")}
          >
            Chicken
          </button>
          <button className="filter-btn" onClick={() => filterByType("salad")}>
            Salads
          </button>
        </div>
      </div>

      <div className="filter-container">
        <h2 className="filter-title">Filter Price</h2>
        <div className="filter-btns">
          <button className="filter-btn" onClick={() => filterByPrice("$")}>
            $
          </button>
          <button className="filter-btn" onClick={() => filterByPrice("$$")}>
            $$
          </button>
          <button className="filter-btn" onClick={() => filterByPrice("$$$")}>
            $$$
          </button>
          <button className="filter-btn" onClick={() => filterByPrice("$$$$")}>
            $$$$
          </button>
        </div>
      </div>

      <div className="foods-card-container">
        {foods.map((food, i) => {
          console.log(food);
          return <FoodCard key={i} food={food} />;
        })}
      </div>
    </div>
  );
};

export default Food;
