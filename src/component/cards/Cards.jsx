const Cards = () => {
  return (
    <div className="cards-container">
      <div className="card one">
        <div className="overlay-cards"></div>
        <h2 className="title-card">Sun's Out,Bogo's Out</h2>
        <p className="text-card">Through 8/26</p>
        <button className="btn-card">Order Now</button>
      </div>

      <div className="card two">
        <div className="overlay-cards"></div>
        <h2 className="title-card">New Restaurants</h2>
        <p className="text-card">Added Daily</p>
        <button className="btn-card">Order Now</button>
      </div>

      <div className="card three">
        <div className="overlay-cards"></div>
        <h2 className="title-card">We Delivery Desserts </h2>
        <p className="text-card">Tasty Treats</p>
        <button className="btn-card">Order Now</button>
      </div>
    </div>
  );
};

export default Cards;
