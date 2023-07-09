import React from 'react'
import s from "./Generes.module.css"

const Generes = (props) => {
  return (
    <button className={s.genBTN}>{props.genre.name}</button>
  )
}

export default Generes