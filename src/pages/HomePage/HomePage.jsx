import React from 'react'
import s from "./HomePage.module.css"
import Films from "../../components/Films/Films"
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../../redux/slices/filmsSlice'

const HomePage = () => {
    const {films, pageNamber}  = useSelector((state) => state.filmsData)
    console.log(films)
    const dispatch = useDispatch()
    const changePageUI = () => {
        dispatch(changePage())
    }
  return (
    <>
    <div className={s.films}>
        { 
            films.map(film => <Films key={film.id} film={film}/>) 
        }
    </div>
    <button className={s.btn} onClick={changePageUI}>change page</button>
    <div></div>
    </>
  )
}

export default HomePage