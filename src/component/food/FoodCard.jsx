const FoodCard = ({ food }) => {
  return (
    <div className="food-card">
      <img src={food.image} alt="img-food" className="food-card-img" />
      <div className="food-card-details">
        <h2 className="food-card-title">{food.name}</h2>
        <p className="food-card-price">{food.price}</p>
      </div>
    </div>
  );
};

export default FoodCard;
