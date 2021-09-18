import React from 'react';
import { Search } from '../Search/Search';
import style from './Header.module.css';



export const Header = () => {


    return (
        <div className={style.header}>
            <h1 className={style.title} >Web Challenges</h1>
            <Search />
        </div>
    )
}
