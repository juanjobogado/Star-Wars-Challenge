import {
  GET_CHARACTERS,
  GET_FILMS,
  FILTER_CHARACTERS_EYECOLOR,
  FILTER_CHARACTERS_GENDER,
  CLEAR_CHARACTERS,
} from "../actions/actions";

const initialState = {
  films: [],
  allFilms: [],
  characters: [],
  allCharacters: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_FILMS:
      return {
        ...state,
        films: action.payload,
        allFilms: action.payload,
      };
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        allCharacters: action.payload,
      };
    case FILTER_CHARACTERS_EYECOLOR:
      const allCharacters = state.allCharacters;
      const selectedCharacter =
        action.payload === "All"
          ? allCharacters
          : allCharacters.filter((e) => {
              let character = "";
              if (e.eye_color === action.payload.toLowerCase()) {
                character = e;
              }
              return character;
            });
      return {
        ...state,
        characters: selectedCharacter,
      };
    case FILTER_CHARACTERS_GENDER:
      const allCharacters2 = state.allCharacters;
      const selectedCharacter2 =
        action.payload === "All"
          ? allCharacters2
          : allCharacters2.filter((e) => {
              let character2 = "";
              if (e.gender === action.payload.toLowerCase()) {
                character2 = 2;
              }
              return character2;
            });
      return {
        ...state,
        characters: selectedCharacter2,
      };
    case CLEAR_CHARACTERS:
      return {
        ...state,
        characters: [],
      };

    default:
      return state;
  }
}
