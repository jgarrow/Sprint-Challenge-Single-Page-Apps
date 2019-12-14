import React, { useState, useEffect } from "react";

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
                <input
                    id="search"
                    type="text"
                    name="textfield"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </form>

            <div>
                {searchResults !== [] &&
                    searchResults.map(character => (
                        <div key={character.id}>
                            <h3>{character.name}</h3>
                            <p>{character.species}</p>
                            <img src={character.image} alt={character.name} />
                        </div>
                    ))}
            </div>
        </section>
    );
};
