import React from "react";
import s from './Section.module.css';
import vector from './../../images/logos/Vector.png'
import videoIcon from './../../images/logos/Play icon.png'


export const Section = () => {
    return (
        <div className={s.section}>
            <h1>Global Brandmakers <br /> making <span className={s.span}>Waves</span></h1>
            <div className={s.buttons}>
                <button className={s.sectionBtn}>Explore our services <img src={vector} alt="arrow" /> </button>
                <button className={s.videoBtn}><img src={videoIcon} alt="play" /> Watch our reel</button>
            </div>
        </div>
    )
}