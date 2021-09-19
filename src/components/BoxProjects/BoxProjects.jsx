import React, { useState } from 'react'
import data from '../../data/data.json'
import Challenges from '../Challenges/Challenges'
import style from './BoxProjects.module.css'

const BoxProjects = () => {

    // const data = info;

    const [challanges, setChallanges] = useState(data)

    const inputChange = (e) => {
      const search = e.target.value.toLowerCase().trim()
      if (search === "") {
        setChallanges(data)
      } else {
        const filterChallanges = data.filter(challange => challange.name.toLowerCase().startsWith(search))
        setChallanges(filterChallanges)
      }
    }

    return (
        <>
                <div className={style.search_box}>
                    <input className={style.input} onChange={(e)=> inputChange(e)} placeholder="Search..." 
                    type="t"/>
                </div>
            <div className={style.box}>
                {challanges.map(element =>(
                    <Challenges key={element.id} data={element}  />
                ))}
            </div>
        </>
    )
}

export default BoxProjects
