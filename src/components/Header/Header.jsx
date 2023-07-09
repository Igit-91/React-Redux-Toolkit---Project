import React, { useEffect, useState } from 'react'
import s from './Header.module.css'
import Generes from './Generes/Generes'
import Searchinput from './Searchinput/Searchinput'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGenres } from '../../redux/slices/genresSlice'
import { useNavigate } from 'react-router-dom'
 

const Header = () => {
  const dispatch = useDispatch()
  const genres = useSelector((state) => state.genresData.genres)
  const navigate = useNavigate()
  
  useEffect(() => {
    dispatch(fetchGenres())
  }, []) 

  function glxavorEj (){
    navigate('/')
  }

  return (
    <header>
      <button onClick={glxavorEj}>

        <img className={s.img} src="https://thumbs.dreamstime.com/b/abstract-cinema-logo-vector-template-isolated-white-background-79853306.jpg"/>
      </button>
        <div className={s.gen}>
          {
            genres.map(genre => <Generes key={genre.id} genre={genre}/> )
          }
        </div>
       
        <div>
          <Searchinput/>
        </div>
    
        <button>Sign in</button>

    </header>
  )
}

export default Header