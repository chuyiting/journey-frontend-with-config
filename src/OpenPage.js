import "./style.css";

import React from "react";
import { Link } from "react-router-dom";

function OpenPage() {
  return (
    <div>
      <body>
        <video muted="" autoplay="" className="video">
          <source type="video/mp4" src="smoke.mp4"></source>
        </video>
        <h2 className="opening">
          <Link
            to="./playground"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <span>W</span>
          </Link>
          <span>el</span>
          <span>come</span>
          <span> to </span>
          <span>Sou</span>
          <span>rce</span>
          <span> Acad</span>
          <span>emy</span>
        </h2>
      </body>
    </div>
  );
}

export default OpenPage;
