import Header from "./components/Header/Header";
import './App.css';
import React from "react";
import Navbar from "./components/Nav/nav.jsx";
import Profile from "./components/Content/Profile/Profile.jsx";
import Adds from "./components/Adds/adds.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header message="Privet World!!!"/>
                <Navbar/>
                <div className="app-content">
                    <Routes>
                        <Route path="/profile" element={<Profile/> }/>

                           />}

                        />
                        <Route path="/dialogs" element={<DialogsContainer/>}/>
                    </Routes>
                </div>
                <Adds/>

            </div>
        </BrowserRouter>
    );
}


export default App;
