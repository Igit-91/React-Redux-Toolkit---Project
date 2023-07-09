
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms } from './redux/slices/filmsSlice';
import FilmsPage from './pages/FilmsPage/FilmsPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  const {films, pageNamber} = useSelector((state) => state.filmsData)
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFilms(pageNamber))
  }, [pageNamber])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/filmPage/:id' element={<FilmsPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
