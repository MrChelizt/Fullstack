import { Link } from "react-router-dom";

import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/material";

import Logo from "../assets/logo-black.png";

import "./Component.css";

export default function Footer() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: 200,
          m: "auto",
        }}
      >
        <a href="https://www.facebook.com/" className="icon">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a href="https://www.instagram.com/" className="icon">
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
        <a href="https://twitter.com/" className="icon">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
        <a href="https://www.youtube.com/" className="icon">
          <FontAwesomeIcon icon={faYoutubeSquare} />
        </a>
      </Box>
      <p className="footerText">
        The content of this website is copyright protected and belongs to
        MrChelizt. <Link to="/copyright">READ MORE</Link>.
      </p>
      <img src={Logo} alt="MrChelizt" height={40} />
      <p className="footerText">Netherlands | €</p>
    </Box>
  );
}
