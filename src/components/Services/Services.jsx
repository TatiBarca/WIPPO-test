import React from "react";
import s from './Services.module.css';
import strategy from './../../images/services/Icon1.png';
import marketing from './../../images/services/Icon2.png';
import design from './../../images/services/Icon3.png';
import development from './../../images/services/Icon4.png';
import arrow from './../../images/logos/VectorPurple.png'

export const Services = () => {
    const item = [
        {
            img: strategy,
            title: 'Strategy services',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus. Nunc porta ipsum et tempor euismod. ',
            link: 'https://www.youtube.com/watch?v=sKro7GvJN2M'
        },
        {
            img: marketing,
            title: 'Marketing services',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus. Nunc porta ipsum et tempor euismod. ',
            link: 'https://www.youtube.com/watch?v=sKro7GvJN2M'
        },
        {
            img: design,
            title: 'Design services',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus. Nunc porta ipsum et tempor euismod. ',
            link: 'https://www.youtube.com/watch?v=sKro7GvJN2M'
        },
        {
            img: development,
            title: 'Development services',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus. Nunc porta ipsum et tempor euismod. ',
            link: 'https://www.youtube.com/watch?v=sKro7GvJN2M'
        },
    ]

    return (
        <div className={s.service}>
            <span>OUR SERVICES</span>
            <h2 >Our agency experts will provide you <br /> with a full stack of services</h2>
            <div className={s.servBlock}>
                {item.map((details) => {
                    return (
                        <div className={s.servDetails}>
                            <img src={details.img} alt="img" />
                            <h3 className={s.subtitle}>{details.title}</h3>
                            <p>{details.about}</p>
                            <a target="_blank" href={details.link}>Learn more</a>
                        </div>
                    )
                })}
                <button>Explore all services <img src={arrow} alt="" /></button>
            </div>

        </div>
    )
}