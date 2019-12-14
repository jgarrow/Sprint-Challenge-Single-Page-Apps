import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CharacterCard from "./CharacterCard";

const Input = styled.input`
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid lightgray;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
    font-size: 1rem;
`;

export default ({ characterList, searchResults, setSearchResults }) => {
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const characters = [...characterList];
        const results = characters.filter(person =>
            person.name.toLowerCase().includes(searchTerm)
        );

        console.log("Search results: ", results);
        setSearchResults(results);
    }, [searchTerm]);

    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    return (
        <section className="search-form">
            <form>
                <label htmlFor="search" />
                <Input
                    id="search"
                    type="text"
                    name="textfield"
                    placeholder="Search by Name"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </form>

            <div>
                {searchResults !== [] &&
                    searchResults.map(character => (
                        <CharacterCard
                            key={character.id}
                            image={character.image}
                            character={character}
                        />

                        // <div key={character.id}>
                        //     <h3>{character.name}</h3>
                        //     <p>{character.species}</p>
                        //     <img src={character.image} alt={character.name} />
                        // </div>
                    ))}
            </div>
        </section>
    );
};
