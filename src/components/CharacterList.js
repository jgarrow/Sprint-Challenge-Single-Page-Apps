import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import Pagination from "./Pagination";

export default function CharacterList({ apiUrl, setApiUrl }) {
    // TODO: Add useState to track data from useEffect
    const [characterList, setCharacterList] = useState([]);
    const [apiInfo, setApiInfo] = useState({});
    const [searchResults, setSearchResults] = useState([]);
    const [pageNum, setPageNum] = useState(1);

    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios
            .get(`${apiUrl}`)
            .then(response => {
                const apiNextUrl = response.data.info.next;
                let currentPage = pageNum;
                currentPage = parseInt(apiNextUrl[apiNextUrl.length - 1]);

                setCharacterList(response.data.results);
                setApiInfo(response.data.info);
                setSearchResults(response.data.results);
                setPageNum(currentPage);
            })
            .catch(err => alert("API error: ", err));
    }, [apiUrl, pageNum]);

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
            {characterList !== [] && apiInfo && (
                <Pagination
                    pageNum={pageNum}
                    setPageNum={setPageNum}
                    apiInfo={apiInfo}
                    setApiUrl={setApiUrl}
                />
            )}
        </section>
    );
}
