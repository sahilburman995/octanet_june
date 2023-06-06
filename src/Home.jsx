import React from "react";

import "./home.css";
import "./components/Content";
import Header from "./components/Header";
import logo from "./logo.avif";
import Content from "./components/Content";
import FacebookIcon from "@mui/icons-material/Facebook";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import myimg from "../src/components/inst.avif"
import myimg2 from "../src/components/sci.avif"
import myimg3 from "../src/components/rob.avif"
import myimg4 from "../src/components/rob2.avif"
import myimg5 from "../src/components/k.jpg"
const Home = () => {
  return (
    <>
      <Header />
      <div className="creativebackground">
    <img className="sai" src={myimg}/>
        <img src={myimg2}/>
        
       
       
      </div>
      <div className="sah">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
          recusandae mollitia tempora? Iusto, maxime? Totam, eaque nobis! Quam
          eos praesentium, alias ut esse nam voluptatem modi, quibusdam
          blanditiis, distinctio harum.
        </p>
        <img src={logo} alt="logo" />
      </div>
      <Content />

   
      <div className="sa">   
      <img src={ myimg3}  alt="lo" />
        <img src={myimg4} alt="lo"/>
       
      </div>
      <div className="middle">
    
<img src={myimg5} alt="ff"/>

    </div>
      <div class="circle-background">
        <ul className="footer">
          <li className="li1">
            {" "}
            <FacebookIcon sx={{ color: "white" }} />{" "}
          </li>
          <li className="li1">
            {" "}
            <InstagramIcon sx={{ color: "white" }} />
          </li>
          <li className="li1">
            {" "}
            <AddAlertIcon sx={{ color: "white" }} />
          </li>
          <li className="li1">
            {" "}
            <EmailOutlinedIcon sx={{ color: "white" }} />
          </li>
          <li className="li1">
            {" "}
            <PhoneOutlinedIcon sx={{ color: "white" }} />
          </li>
        </ul>
        <div className="cont">
          <ul className="inside">
            <li className="li2">djndkjq</li>
            <li className="li2">nas mn</li>
            <li className="li2">as aks</li>
            <li className="li2">asasna smn aks</li>
            <li className="li2">assaxbas aks</li>
            <li className="li2">as acb caks</li>
            <li className="li2">as akjdbaks</li>
          </ul>

          <ul className="inside">
            <li className="li2">djndkjq</li>
            <li className="li2">nas mn</li>
            <li className="li2">as aks</li>
            <li className="li2">asasna smn aks</li>
            <li className="li2">assaxbas aks</li>
            <li className="li2">as acb caks</li>
            <li className="li2">as akjdbaks</li>
          </ul>

          <ul className="inside">
            <li className="li2">djndkjq</li>
            <li className="li2">nas mn</li>
            <li className="li2">as aks</li>
            <li className="li2">asasna smn aks</li>
            <li className="li2">assaxbas aks</li>
            <li className="li2">as acb caks</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
