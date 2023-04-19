import axios from "axios";
import { GET_FILMS, GET_CHARACTERS } from "./actions";

export function getFilms() {
    return async function (dispatch){
        try {
            const json = await axios.get("https://swapi.dev/api/films");
            console.log(json.data);
            return dispatch({
                type: GET_FILMS,
                payload: json.data.results,
            });
        } catch (error) {
            console.log(error.message);
            return error;
        }
    }
};

export function getCharacters() {
    return async function (dispatch){
        try {
            const json = await axios.get("https://swapi.dev/api/films");
            const allCharacters = json.data.results.characters.map(async (c) => {
                const jsonCharacters = await axios.get(c)
                return jsonCharacters;
            });
            return dispatch({
                type: GET_CHARACTERS,
                payload: allCharacters
            })
        } catch (error) {
            console.log(error.message);
            return error;
        }
    }
};