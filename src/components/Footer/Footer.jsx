import React from "react";
import s from './Footer.module.css';
import footerImg from './../../images/footer/Vector.png';
import logo from './../../images/footer/Waves.png';
import facebook from './../../images/footer/facebook.png'
import twitter from './../../images/footer/twitter.png'
import instagram from './../../images/footer/Instagram.png'
import linkedin from './../../images/footer/LinkedIn.png'

export const Footer = () => {
    return (
        <div className={s.footer}>
            
            <div className={s.footerNav}>
                <img src={logo} alt="logo" />
                <div className={s.nav}>
                    <a href="#">Home</a>
                    <a href="#">About us</a>
                    <a href="#">Blog</a>
                    <a href="#">Services</a>
                </div>
            </div>
            <div className={s.social}>
                <a href="#"><img src={facebook} alt="logo" /></a>
                <a href="#"><img src={twitter} alt="logo" /></a>
                <a href="#"><img src={instagram} alt="logo" /></a>
                <a href="#"><img src={linkedin} alt="logo" /></a>
            </div>
        </div>
    )
}