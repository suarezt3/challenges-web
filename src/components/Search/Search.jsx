import React from 'react';
import style from './Search.module.css';
//import DataListInput from "react-datalist-input";
//import data from '../../data/data.json';
//import { useState } from 'react';
//import { Challenges } from '../Challenges/Challenges'


export const Search = () => {

    
    //const [searchTerm, setSearchTerm] = useState("")

    return (
        <div className={style.box_search}>
            <input className={style.search} type="search" name="search" id="search" placeholder="Search..."  /*onChange={event => {setSearchTerm(event.target.{Challenges})}}*/ />
            
          

            {/* {
                // eslint-disable-next-line array-callback-return
                data.retos.filter(({Challenges}) => {
                    if (searchTerm === "") {
                        return value
                    }else if ({Challenges}.toLowerCase().includes(searchTerm.toLowerCase())) {

                    }
                
                }).map((value, key) => {
                    return <p>{Challenges}</p>;
                })
            } */}

                
           
            
        </div>
    )
}
