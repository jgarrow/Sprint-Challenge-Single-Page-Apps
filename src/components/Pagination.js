import React from "react";
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

export default ({ pageNum, apiInfo, setApiUrl }) => {
    return (
        <Pagination previousExists={apiInfo.prev === "" ? false : true}>
            {apiInfo.prev !== "" ? (
                <StyledLink
                    // pageNum is actually the page # for next
                    to={`/characters/${pageNum - 2}`}
                    onClick={() => setApiUrl(apiInfo.prev)}
                >
                    ← Previous
                </StyledLink>
            ) : (
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
                ""
            )}
        </Pagination>
    );
};
