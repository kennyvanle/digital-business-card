import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithubSquare, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div className="card--footer">
            <FontAwesomeIcon icon={faTwitter} className="footer--icon"/>
            <FontAwesomeIcon icon={faFacebook} className="footer--icon"/>
            <FontAwesomeIcon icon={faInstagram} className="footer--icon"/>
            <FontAwesomeIcon icon={faLinkedin} className="footer--icon"/>
            <FontAwesomeIcon icon={faGithubSquare} className="footer--icon"/>
        </div>
    )
}

export default Footer;