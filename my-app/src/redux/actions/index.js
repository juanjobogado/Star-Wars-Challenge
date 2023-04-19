import axios from "axios";
import { GET_FILMS, GET_CHARACTERS, FILTER_CHARACTERS_EYECOLOR, FILTER_CHARACTERS_GENDER } from "./actions";

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

export function getCharacters(movie) {
    return async function (dispatch) {
      try {
        const response = await axios.get(`https://swapi.dev/api/films/${movie}/`);
        if (response.data.characters) {
          let characters = response.data?.characters
        
          let characterData = await Promise.all(characters.map(async (character) => {
            let characterResponse = await axios.get(character);
            return characterResponse.data;
          }));
          console.log(characterData);
          return dispatch({
            type: GET_CHARACTERS,
            payload: characterData
          });
        } else {
          throw new Error('No results found');
        }
      } catch (error) {
        console.log(error.message);
        return error;
      }
    };
  };

  export function filterCharactersEyeColor(payload){
    return {
      type: FILTER_CHARACTERS_EYECOLOR,
      payload
    }
  };

  export function filterCharactersGender(payload){
    return {
      type: FILTER_CHARACTERS_GENDER,
      payload
    }
  };
  
