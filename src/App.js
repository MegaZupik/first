import './App.css';
import React from "react";
import Navbar from "./components/Nav/nav.jsx";
import Adds from "./components/Adds/adds.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import Preloader from "./components/common/preloader/preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import SideBarContainer from "./components/SideBar/SideBarContainer";




const App = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <HeaderContainer message="Privet World!!!"/>
                <Navbar/>
                <div className="app-content">
                    <Routes>

                        <Route path='/Profile' element={<ProfileContainer />} />
                        <Route path='/Profile/:profileId/*' element={<ProfileContainer />} />
                        <Route path="/dialogs" element={<DialogsContainer/>}/>
                        <Route path='/users' element={<UsersContainer /> }/>
                        <Route path='/Preloader' element={<Preloader /> }/>
                        <Route path='/login' element={  <LoginPage /> }/>
                    </Routes>
                </div>
                <Adds/>

            </div>
        </BrowserRouter>
    );
}


export default App;
