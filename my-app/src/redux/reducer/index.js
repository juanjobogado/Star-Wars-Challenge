import { GET_CHARACTERS, GET_FILMS } from "../actions/actions";

const initialState = {
films : [],
allFilms : [],
characters: [],
allCharacters: []
};

export default function reducer(state = initialState, action){
    switch(action.type) {
        case GET_FILMS:
            return {
                ...state,
                films: action.payload,
                allFilms: action.payload
            };
        case GET_CHARACTERS:
            return {
                ...state,
                characters: action.payload,
                allCharacters: action.payload
            }
        default:
            return state;
    }

}