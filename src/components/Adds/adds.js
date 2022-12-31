import React from "react";
import s from './adds.module.css';

const Adds = () => {
    return <div className={s.adds} onDrag={() => console.log('123')}>
        <img src="./img/adds.webp" alt=""/>
    </div>
}
export default Adds;