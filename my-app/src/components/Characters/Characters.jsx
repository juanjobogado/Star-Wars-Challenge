import React from "react";


export default function Characters({ name, eye_color, gender}) {
    return (
        <div>
        <h3>{name}</h3>
        <h3>{eye_color}</h3>
        <h3>{gender}</h3>
        </div>
    );
};