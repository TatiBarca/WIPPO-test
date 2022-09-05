import React from "react";
import s from './News.module.css';
import img1 from './../../images/news/img1.png';
import img2 from './../../images/news/img2.png';
import img3 from './../../images/news/img3.png';
import arrow from './../../images/logos/VectorPurple.png'


export const News = () => {
    const news = [
        {
            img: img1,
            about: 'Business',
            date: 'April 25, 2022',
            title: 'Twitter board meets Musk to discuss bid - Reports'
        },
        {
            img: img2,
            about: 'Technology',
            date: 'June 10, 2022',
            title: `Actors launch campaign against AI 'show stealers'`
        },
        {
            img: img3,
            about: 'Science',
            date: 'May 10, 2022',
            title: 'OneWeb: UK satellite firm does deal to use Indian rockets'
        }
    ]

    return (
        <div className={s.news}>
            <h2 className={s.title}>News & Insights</h2>
            <div className={s.block}>
                {news.map((item) => {
                    return (
                        <div className={s.blockItem}>
                            <img className={s.img} src={item.img} alt="" />
                            <div className={s.desc}>
                            <span  className={s.subtitle}>{item.about}</span>
                            <span  className={s.date}>{item.date}</span>
                            </div>
                            
                            <p className={s.text}>{item.title}</p>
                        </div>
                    )
                })}
            </div>
            <button className={s.btn}>Explore all news <img src={arrow} alt="" /></button>
        </div>
    )
}