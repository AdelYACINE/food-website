const CardsCat = ({ category }) => {
  return (
    <div className="card-category">
      <h1 className="title-cat">{category.name}</h1>
      <img src={category.image} alt="img-cat" className="img-cat" />
    </div>
  );
};

export default CardsCat;
