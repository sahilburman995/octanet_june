import React from "react";
import "./content.css";
import AOS from "aos";
import "aos/dist/aos.css";
import rok from './rok.avif'
AOS.init();

const Content = () => {
  return (
    <div className="container">
      <div className="item1" data-aos="zoom-in-up" data-aos-duration="900">
        <h1>dkadiooihddajdnkaj</h1>
        <p>
          Water can exist in three states at the same time. This is known as the
          triple boil—or triple point—and it is the temperature and pressure at
          which materials exist as a gas, a liquid, and a solid all at the same
          time.
        </p>
      </div>
      <div className="item2" data-aos="fade-in" data-aos-duration="1000">
      <img src={rok} alt="de"/>

      </div>
      <div className="item3" data-aos="zoom-in-up" data-aos-duration="900">
        <h1>dkjajdnjnwjdn</h1>
        <p>
          Water can exist in three states at the same time. This is known as the
          triple boil—or triple point—and it is the temperature and pressure at
          which materials exist as a gas, a liquid, and a solid all at the same
          time.
        </p>
      </div>
    </div>
  );
};

export default Content;
