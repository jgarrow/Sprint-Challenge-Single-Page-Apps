import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
    // TODO: Add useState to track data from useEffect
    const [characterList, setCharacterList] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios
            .get("https://rickandmortyapi.com/api/character/")
            .then(response => {
                console.log("API response: ", response);
                setCharacterList(response.data.results);
                setSearchResults(response.data.results);
            })
            .catch(err => console.log("API error: ", err));
    }, []);

    return (
        <section className="character-list">
            {/* <h2>TODO: `array.map()` over your state here!</h2> */}
            {characterList !== [] && searchResults !== [] && (
                <SearchForm
                    characterList={characterList}
                    searchResults={searchResults}
                    setSearchResults={setSearchResults}
                />
            )}
            <div>
                {characterList !== [] &&
                    searchResults === characterList &&
                    characterList.map(character => (
                        <CharacterCard
                            key={character.id}
                            image={character.image}
                            character={character}
                        />
                    ))}
            </div>
        </section>
    );
}
