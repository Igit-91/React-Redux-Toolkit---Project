import { configureStore } from "@reduxjs/toolkit";
import genresReducer from "./slices/genresSlice";
import filmsReducer from "./slices/filmsSlice";

const store = configureStore({
    reducer : {
        genresData : genresReducer,
        filmsData : filmsReducer
    }
})

export default store