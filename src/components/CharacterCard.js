import React from "react";
import styled from "styled-components";

const Card = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    padding: 1rem;
    border: 1px solid lightgray;
    border-radius: 15px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    margin: 2rem;

    img {
        border-radius: 15px;
    }
`;

const Info = styled.div`
    align-self: flex-start;
`;

export default ({ image, character }) => {
    return (
        <Card>
            <img src={image} alt={character.name} />
            <Info>
                <h3>{character.name}</h3>
                <p>Species: {character.species}</p>
            </Info>
        </Card>
    );
};
