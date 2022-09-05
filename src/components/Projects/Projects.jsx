import React from "react";
import s from './Projects.module.css';
import image1 from './../../images/projects/pic1.png'
import image2 from './../../images/projects/pic2.png'
import image3 from './../../images/projects/pic3.png'
import image4 from './../../images/projects/pic4.png'
import arrow from './../../images/logos/Vector.png'


export const Projects = () => {
    const about = [
        {
            img: image1,
            name:'BLBCK',
            descr:'Branding'
        },
        {
            img: image2,
            name:'CREAM',
            descr:'Branding'
        },
        {
            img: image3,
            name:'FREDI',
            descr:'Branding'
        },
        {
            img: image4,
            name:'APOLLO',
            descr:'Branding'
        }
    ]


    return (
        <div className={s.project}>
            <span>PROJECTS</span>
            <h2>We guide game-changing companies, across <br /> platforms & places, through agile design & <br /> digital experience. We make <span className={s.wave}>waves</span></h2>
            <div className={s.block}>
                {about.map((item) => {
                    return (
                        <div className={s.blockProducts}>
                            <img src={item.img} alt="img" />
                                <div className={s.blockAbout}>
                                    <span className={s.span}>{item.name}</span>
                                    <span>{item.descr}</span>
                                </div>
                        </div>
                    )
                })}
                <button>Explore all projects <img src={arrow} alt="" /></button>
            </div>
        </div>
    )
}