import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Info() {
    return (
        <div className="card--info">
            <h1>Sisco Heffner-Le</h1>
            <h2>Professional good boy</h2>
            <h3>sisco.website</h3>
            <div className="info--buttons">
                <button className="info--mail">
                    <FontAwesomeIcon icon={faEnvelope} className="info--icon"/>
                    Email
                </button>
                <button className="info--linkedin">
                    <FontAwesomeIcon icon={faLinkedin} className="info--icon"/>
                    LinkedIn
                </button>
            </div>
        </div>
    )
}

export default Info;