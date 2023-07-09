// axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)




import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a" 


export const fetchGenres = createAsyncThunk(
    "fetchGenres",
    async function(){
        const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
        return response.data.genres
    }
)

const genresSlice = createSlice({
    name : "genresSlice",
    initialState : {
        genres : []
    },
    reducers : {

    },

    extraReducers : {
        [fetchGenres.pending] : (state, action) => {

        },
        [fetchGenres.fulfilled] : (state, action) => {
            state.genres = action.payload
        },
        [fetchGenres.rejected] : (state, action) => {
            
        }
    }
})


export default genresSlice.reducer