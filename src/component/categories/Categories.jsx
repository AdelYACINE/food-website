import { categories } from "../../data/Data";
import CardsCat from "./CardsCat";

const Categories = () => {
  return (
    <div className="categories-container">
      <h1 className="categories-title">Categories</h1>

      <div className="cards-container-categories">
        {categories.map((cat, i) => {
          return <CardsCat key={i} category={cat} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
