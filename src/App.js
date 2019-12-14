import React from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Welcome from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";

const Nav = styled.nav`
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:hover {
        color: gray;
    }
`;

export default function App() {
    return (
        <main>
            <Header />
            <Nav>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/characters">Characters</StyledLink>
            </Nav>
            <Route exact path="/" component={Welcome} />
            <Route path="/characters" component={CharacterList} />
        </main>
    );
}
