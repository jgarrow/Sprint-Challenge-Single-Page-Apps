import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CharacterCard from "./CharacterCard";

const Form = styled.form`
    margin-left: 2rem;
`;

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
    }, [searchTerm, characterList, setSearchResults]);

    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    return (
        <section className="search-form">
            <Form>
                <label htmlFor="search" />
                <Input
                    id="search"
                    type="text"
                    name="textfield"
                    placeholder="Search by Name"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </Form>

            <div>
                {searchResults !== [] &&
                    searchResults.map(character => (
                        <CharacterCard
                            key={character.id}
                            image={character.image}
                            character={character}
                        />
                    ))}
            </div>
        </section>
    );
};
