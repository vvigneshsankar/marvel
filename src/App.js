import { useEffect, useState } from "react";
import axios from "axios";

import Characters from "./components/characters";
import Search from "./components/search";

import "./App.css";

function App() {
  const [charactersList, setCharctersList] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=3a7d57d7b824b21bfb4dd88246c940f4&hash=9618ea7b452cfdc344268d1ecfed819f"
      )
      .then((res) => {
        setCharctersList(res.data.data.results);
      })
      .catch((err) => {
        console.log("Something went wrong!!", err);
      });
  }, []);

  useEffect(() => {
    if (!search) {
      setCharacters(charactersList);
    } else {
      const filteredCharacters = charactersList.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setCharacters(filteredCharacters);
    }
  }, [search, charactersList]);

  const onChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <div className="app-container">
      <Search onChange={onChange} />
      {characters?.length > 0 ? (
        <Characters characters={characters} />
      ) : (
        <div className="no-data">No data</div>
      )}
    </div>
  );
}

export default App;
