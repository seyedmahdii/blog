import React from "react";
import "./App.css";
import Articles from "./Components/Articles/Articles";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
    return (
        <div className="container">
            <div className="app">
                <Articles />
                <Sidebar />
            </div>
        </div>
    );
}

export default App;
