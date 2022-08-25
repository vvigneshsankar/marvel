import CharacterCard from "../cards";
import "./index.css";

const Characters = ({ characters }) => {
  return (
    <div className="character-container">
      {characters.map((item, index) => (
        <CharacterCard key={index} item={item} />
      ))}
    </div>
  );
};

export default Characters;
