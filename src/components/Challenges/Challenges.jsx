import React from 'react';
import style from './Challenges.module.css'

export const Challenges = ({data}) => {

    const{name, imagen, link} = data
    

    return (
        <div className={style.card_challenges}>
            <div className={style.box_img}>
                <img className={style.img} src={imagen} alt="" />
            </div>
            <p className={style.title}>{name}</p>
            <button type="button"> <a href={link} target="blank">Play</a> </button>
        </div>
    )
}

export default Challenges