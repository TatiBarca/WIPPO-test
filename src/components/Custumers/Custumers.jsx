import React from "react";
import s from './Customers.module.css';
import customer from './../../images/customer/img2.png'

export const Customers = () => {
    return (
        <div className={s.section}>
            <h2>What our great customers say</h2>
            <div className={s.sectionBlock}>
                <img className={s.img} src={customer} alt="man" />
                <div className={s.sectionDesc}>
                    <p className={s.text}>Waves demonstrates an excellent <br /> understanding of user needs and all of their <br /> designs are creative and elegant in their <br /> simplicity.</p>
                    <span  className={s.name}>Jerome Bell</span>
                    <p className={s.personPost}>President of Sales <span className={s.span}>(Binford Ltd.)</span></p>
                </div>
            </div>
        </div>
    )
}