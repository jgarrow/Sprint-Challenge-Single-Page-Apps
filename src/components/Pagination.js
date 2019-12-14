import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Pagination = styled.div`
    display: flex;
    width: 80%;
    margin: 0 auto;
    justify-content: ${props =>
        props.previousExists === false ? "flex-end" : "space-between"};
`;

const StyledLink = styled(Link)`
    color: black;
    cursor: pointer;
`;

// const Arrow = ({ setApiUrl, apiUrl, text }) => {
//     return (
//         <StyledLink
//             to={`/character/${pageNum}`}
//             onClick={() => setApiUrl(apiUrl)}
//         >
//             {text}
//         </StyledLink>
//     );
// };

export default ({ pageNum, setPageNum, apiInfo, setApiUrl }) => {
    // const [pageNum, setPageNum] = useState(1);
    // console.log("apiInfo in Pagination.js: ", apiInfo);

    // apiInfo &&
    // useEffect(() => {
    //     currentPage = next page - 1
    //     const apiNextUrl = apiInfo.next;
    //     let currentPage = pageNum;
    //     currentPage = apiNextUrl[apiNextUrl.length - 1];
    //     console.log("Current page: ", currentPage);
    // }, [apiInfo]);

    return (
        <Pagination previousExists={apiInfo.prev === "" ? false : true}>
            {apiInfo.previous ? (
                <StyledLink
                    to={`/characters/${pageNum}`}
                    onClick={() => setApiUrl(apiInfo.prev)}
                >
                    ← Previous
                </StyledLink>
            ) : (
                // <Arrow
                //     setApiUrl={setApiUrl}
                //     apiUrl={apiInfo.prev}
                //     text={"← Previous"}
                // />
                ""
            )}
            {apiInfo.next !== "" ? (
                <StyledLink
                    to={`/characters/${pageNum}`}
                    onClick={() => setApiUrl(apiInfo.next)}
                >
                    Next →
                </StyledLink>
            ) : (
                // <Arrow
                //     setApiUrl={setApiUrl}
                //     apiUrl={apiInfo.next}
                //     text={"Next →"}
                // />
                ""
            )}
        </Pagination>
    );
};
