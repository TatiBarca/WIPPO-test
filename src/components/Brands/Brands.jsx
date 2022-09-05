import React from "react";
import s from './Brands.module.css';
import image1 from './../../images/logos/Logo/1.png'
import image2 from './../../images/logos/Logo/2.png'
import image3 from './../../images/logos/Logo/3.png'
import image4 from './../../images/logos/Logo/4.png'
import image5 from './../../images/logos/Logo/5.png'
import image6 from './../../images/logos/Logo/6.png'
import image7 from './../../images/logos/Logo/7.png'
import image8 from './../../images/logos/Logo/8.png'
import image9 from './../../images/logos/Logo/9.png'
import image10 from './../../images/logos/Logo/10.png'
import image11 from './../../images/logos/Logo/11.png'
import image12 from './../../images/logos/Logo/12.png'

export const Brands = () => {
    const brand = [
        {
            img: image1
        },
        {
            img: image2
        },
        {
            img: image3
        },
        {
            img: image4
        },
        {
            img: image5
        },
        {
            img: image6
        },
        {
            img: image7
        },
        {
            img: image8
        },
        {
            img: image9
        },
        {
            img: image10
        },
        {
            img: image11
        },
        {
            img: image12
        },

    ]
    return (
        <div className={s.brandSection}>
            <h2>We are blessed to work with amazing <br /> brands worldwide</h2>
            <div className={s.brandBlock}>
                {brand.map((item) => {
                    return (
                        <button><img src={item.img} alt="logo" /></button>
                    )
                })}
            </div>
        </div>
    )
}

