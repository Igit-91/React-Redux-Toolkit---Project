import React, { useEffect, useState } from 'react'
import s from "./Searchinput.module.css"
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Searchinput = () => {
    const [openPopup, setOpenPopup] = useState(false)
    const [text, setText] = useState("")
    const [searchFilms, setSearchFilms] = useState([])


    const imgURL = "https://image.tmdb.org/t/p/w500/"


    const apiKey ="f36f23edf6e10fd2ddcf939916b1f67a"



    useEffect(() => {
      setTimeout(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${text}`)
        .then(res => setSearchFilms(res.data.results))
      }, 1000)
        
    }, [text])
    
    const textFunc = (e) => {
      setText(e.target.value)
      setOpenPopup(true)
    }
  
    return (
      <div className={s.searchBlock}>
        <div className={s.searchText}>
            <input value={text} onChange={textFunc} placeholder='search...'/>
        </div>
        {
          text.length > 0 ? <div className={s.searchContent}>
              {
                searchFilms.map(item => <NavLink key={item.id}><div className={s.searchFM}>
                  <h5>{item.title}</h5>
                  <img src={imgURL + item.poster_path} alt="" />
                  </div></NavLink>)
              }
            </div> : ""
        }
        
    </div>
  )
}

export default Searchinput