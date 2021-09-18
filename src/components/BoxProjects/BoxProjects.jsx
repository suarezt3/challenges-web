import React from 'react';
import { Challenges } from '../Challenges/Challenges';
import style from './BoxProjects.module.css';
import data from '../../data/data.json'

export const BoxProjects = () => {
    console.log(data.retos.map(retos => retos.name))
    
    return (
        <div className={style.box}>
            {
                data.retos.map((retos, index) => (<Challenges 
                    key={index}
                    name={retos.name}
                    link={retos.link}
                    imagen={retos.imagen} />))
            }
            
           
        </div>
    )
}
