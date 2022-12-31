import React from 'react';
import s from "./Nav.module.css"
import {NavLink} from "react-router-dom";

const  setActive = navData => navData.isActive ? s.active : "";

const Navbar=()=> {
    return <div className={s.nav}>
        <ul className={s.nav}>
            <li className={s.item}><NavLink to="/Profile" className = {setActive}>Профиль</NavLink> </li>
            <li className={s.item}><NavLink to="/Dialogs" className = {setActive}>Сообщения</NavLink> </li>
            <li className={s.item}><a href="*">Контакты</a> </li>
            <li className={s.item}><a href="*">Друзья</a> </li>
            <li className={s.item}><a href="*">Группы</a> </li>
        </ul>
            </div>
}
export default Navbar;