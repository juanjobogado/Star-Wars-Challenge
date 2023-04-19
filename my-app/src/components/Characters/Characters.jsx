import React, { useEffect } from "react";
import styles from "./Characters.module.css"
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../redux/actions";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function Characters() {
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.characters)
    const { movie } = useParams();

    useEffect(() => {
        if(!characters.length){
            console.log("entra al useEffect de Characters")
            dispatch(getCharacters(movie))
            console.log("se despacha")
            console.log("hola", characters)
        }
    },[dispatch])

    return (
        <div>
        { characters?.map((c) => (<div>
        <h3>{c.name}</h3>
        <h3>{c.eye_color}</h3>
        <h3>{c.gender}</h3>
        </div>))  }
        </div>
    );
    
};