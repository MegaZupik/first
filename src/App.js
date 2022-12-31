import Header from "./components/Header/Header";
import './App.css';
import React from "react";
import Navbar from "./components/Nav/nav.jsx";
import Profile from "./components/Content/Profile/Profile.jsx";
import Adds from "./components/Adds/adds.js";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header message="Privet World!!!"/>
                <Navbar/>
                <div className="app-content">
                    <Routes>
                        <Route path="/profile" element={<Profile
                            state={props.State.ProfilePage}
                            dispatch={props.dispatch}
                           />}

                        />
                        <Route path="/dialogs" element={<Dialogs state={props.State.DialogsPage}/>}/>
                    </Routes>
                </div>
                <Adds/>

            </div>
        </BrowserRouter>
    );
}


export default App;
