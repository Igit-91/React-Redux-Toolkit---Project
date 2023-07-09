import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"

export const fetchFilms = createAsyncThunk(
    "fetchFilms",
    async function (pageNamber) {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${pageNamber}`)
        return response.data.results
    }
)
console.log(fetchFilms());
const filmsSlice = createSlice({
    name : "filmsSlice",
    initialState : {
        films : [],
        pageNamber : 2,
        loading : "loading"
    },
    reducers : {
        changePage(state, action){
            state.pageNamber = state.pageNamber + 1
        }
    },

    extraReducers : {
        [fetchFilms.pending] : (state) => {
        
        },
        [fetchFilms.fulfilled] : (state, action) => {
            state.films = action.payload
        },
        [fetchFilms.rejected] : () => {

        },
    }
})


export const {changePage} = filmsSlice.actions
export default filmsSlice.reducer