import React from 'react'
import s from "./Films.module.css"
import { NavLink } from 'react-router-dom'

const imgURL = "https://image.tmdb.org/t/p/w500/"

const Films = ({film}) => {
  return (
    <NavLink to={`/filmPage/${film.id}`} className={s.fm}>
        <img src={imgURL + film.poster_path}/>
        <div>
            <h1>{film.title}</h1>
        </div>
    </NavLink >
  )
}

export default Films