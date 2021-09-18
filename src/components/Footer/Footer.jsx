import React from 'react';
import style from './Footer.module.css';




export const Footer = () => {
    return (
        <div className={style.footer}>
            <p>© 2021 | Eyder Suárez - Todos los derechos reservados</p>
            <div className={style.icon}>
            <a href="https://github.com/suarezt3" target="_blank"><i class="fab fa-github"></i></a> 
            </div>
        </div>
    )
}
