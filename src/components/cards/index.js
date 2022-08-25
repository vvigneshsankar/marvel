import "./index.css";

const CharacterCard = ({ item }) => {
  return (
    <div className="card-container">
      <div className="character-img-container">
        <img
          className="character-img"
          src={item.thumbnail.path + ".jpg"}
          alt={"Img not available"}
        />
      </div>
      <div className="hl"></div>
      <section className="section">
        <h5 className="name">{item.name}</h5>
        <p className="description">{item.description}</p>
      </section>
    </div>
  );
};

export default CharacterCard;
