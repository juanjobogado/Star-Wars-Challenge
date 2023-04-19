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

// export function getCharacters(movie) {
//     return async function (dispatch){
//         try {
//             // console.log("entró a la funcion")
//             const json = await axios.get(`https://swapi.dev/api/films/${movie}`);
//             console.log(json.data)
//             console.log("HPÑA")
//             // const allCharacters = json.data.results.characters.map(async (c) => {
//             //     const jsonCharacters = await axios.get(c)
//             //     return jsonCharacters;
                
//             // });
//             const allCharactersPromises = json.data.results.characters.map(async (c) => {
//                 const jsonCharacters = await axios.get(c);
//                 return jsonCharacters.data;
//               });
//               const allCharactersPromise = Promise.all(allCharactersPromises);
              
//               allCharactersPromise.then((allCharacters) => {
//                 console.log(allCharactersPromises);
//               });
//             return dispatch({
//                 type: GET_CHARACTERS,
//                 payload: allCharactersPromise
//             })
//         } catch (error) {
//             console.log(error.message);
//             return error;
//         }
//     }
// };

// export function getCharacters(movie) {
//     return async function (dispatch) {
//       try {
//         const response = await axios.get(`https://swapi.dev/api/films/?search=${movie}`);
//         const characterUrls = response.data.results.characters;
//         const characters = await Promise.all(
//           characterUrls?.map(async (url) => {
//             const characterResponse = await axios.get(url);
//             return characterResponse.data;
//           })
//         );
//         return dispatch({
//           type: GET_CHARACTERS,
//           payload: characters,
//         });
//       } catch (error) {
//         console.log(error.message);
//         return error;
//       }
//     };
//   }

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