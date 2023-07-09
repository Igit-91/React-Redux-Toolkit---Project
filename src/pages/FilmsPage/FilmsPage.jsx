import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import s from "./FilmsPage.module.css"

const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"
const imgURL = "https://image.tmdb.org/t/p/w500/"


const FilmsPage = () => {
  const [film, setFilm] = useState(null)
  const {id} = useParams()
  const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
        .then(res => setFilm(res.data))
    }, [])

    function goBack(){
      navigate(-1)
    }
    
  return (
    <div className={s.FilmsPage}>
        <h1>{film?.title}</h1>
        <img src={imgURL + film?.poster_path} alt="" />
        <button onClick={goBack}>GoBack</button>
    </div>
  )
}

export default FilmsPage