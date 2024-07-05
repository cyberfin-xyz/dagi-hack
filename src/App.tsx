import React, { useEffect } from 'react';
import Main from "./Main/Main";
import './assets/fonts/font-face.css';
import { HashRouter as Router } from "react-router-dom";

function App() {

    return (
        <Router>
            <Main />
        </Router>
    )
};

export default App;