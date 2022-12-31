import React from "react";
import s from "./Header.module.css";

const Header =(props)=> {
    return <header className={s.header}>
        <img src='./img/logo.png' alt="123" />
        {/*<div className='qwe' onClick={neDrug}>{props.message}</div>*/}

    </header>
}
// let i=0;
//
// function drug() {
//     let qwe = document.querySelector('.qwe');
//     console.log(qwe.textContent);
//     let timerId = setInterval(() => qwe.textContent = i++, 1000);
//     qwe.addEventListener("click", ()=> {
//
//     setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 1000);});
// }
//
// function neDrug() {
//
// }
export default Header;