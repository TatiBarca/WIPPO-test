import React from "react";
import { Link } from "react-router-dom";
import s from './Nav.module.css';
import logo from './../../images/logos/Waves(1).png';
import vector from './../../images/logos/Vector.png';




export const Nav = () => {
    return (
        <div className={s.nav}>
            <img className={s.img} src={logo} alt="logo" />
            <div className={s.navLinks}>
                <Link to="/home">Home</Link>
                <Link to="/about">About us</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/services">Services</Link>
            </div>
                <button className={s.navBtn}>Contact us <img src={vector} alt="arrow" /></button>
        </div>
    )
}