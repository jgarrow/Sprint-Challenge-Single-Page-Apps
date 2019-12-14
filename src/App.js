import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Welcome from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";

export default function App() {
    useEffect(() => {}, []);

    return (
        <main>
            <Header />
            <nav>
                <Link to="/">Home</Link>
                <Link to="/characters">Characters</Link>
            </nav>
            <Route exact path="/" component={Welcome} />
            <Route path="/characters" component={CharacterList} />
        </main>
    );
}
