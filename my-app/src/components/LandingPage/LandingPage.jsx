import React from "react";
import { Link } from "react-router-dom";
import "../LandingPage/LandingPage.css";

export default function LandingPage(){
return (
    <div>
        <div className="containerLanding">
            <div>
                <h1>Star Wars Challenge</h1>
            </div>
            <div className="btnLanding">
                <Link to = "/home">
                    <button className="btnLan">
                        START
                    </button>
                </Link>
            </div>
        </div>
    </div>
)
};