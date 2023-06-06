import React, { useState } from "react";
import "./about.css";
//import { useNavigate } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ContactlessIcon from "@mui/icons-material/Contactless";
import InfoIcon from "@mui/icons-material/Info";

import AssignmentIcon from "@mui/icons-material/Assignment";
import Header from "./components/Header";

const About = () => {
  const color = " yellow";
  const [bg, outbg] = useState(color);
  const bgchange = () => {
    let newcol = "white";
    outbg(newcol);
  };

  const [inval, outal] = useState("");

  const onchange = (event) => {
    const newval = event.target.value;
    outal(newval);
  };
  // const navigate=useNavigate();
  /*const gotopage= ()=>{

        navigate("/contact");
    } */
  return (
    <>
      <Header/>
      <section>
        <input
          type="text"
          value={inval}
          placeholder="tyor"
          onChange={onchange}
        ></input>
        <input type="checkBox"></input>

        <h1> YOU HAVE TYPED :- {inval}</h1>
        <input
          style={{ height: 50, width: 100, margin: 0, padding: 0 }}
          type="text"
        ></input>
        <button
          style={{ width: 50, height: 50, textAlign: "center" }}
          onClick={bgchange}
          className="bks"
        >
          {" "}
          <AssignmentIcon />
        </button>
      </section>

      <div className="about-page">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Welcome to my art portfolio! I'm a passionate artist specializing in
            various mediums, including painting, drawing, and digital art. I
            find inspiration in nature, vibrant colors, and emotions.
          </p>
          <p>
            Through my art, I strive to evoke feelings, spark imagination, and
            connect with others. Each piece I create is a unique expression of
            my artistic vision and personal experiences.
          </p>
        </div>
        <div className="artist-image"></div>
      </div>
    </>
  );

};
//what is reduxtoolkit?

export default About;
