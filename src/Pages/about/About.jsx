import React from "react";
import "../about/About.css";
import image from "../../assestes/about1.jpg";
import image2 from "../../assestes/about2.jpg";
import image3 from "../../assestes/about3.jpg";

const About = () => {
  return (
    <div className="about">
      <h1>About Travel.Net</h1>
      <p>
        India's favourite trip planning website. Coming soon to the entire
        world.
      </p>
      <img src={image} alt="" ></img>
      <span>Travel planning has always been messy and difficult</span>
      <p>
        Planning every single trip needs answers to a number of questions.
        Travel.Net is attempting to collect all the information that you will
        ever need to plan your trip - from when, where and how, to more hidden
        gems in every destination, Travel.Net is the one-stop solution to all
        your travel planning needs.
      </p>
      <div className="mobile">
        <div className="aboutImage">
          <img src={image2} alt=""  />
        </div>
        <div className="atext">
          <h3>Exhaustive, Reliable Content</h3>
          <p>
            Our travel guides are editorially curated, so you can trust that
            they will lead you to the right path. We have invested extensive
            resources over the last 8 years to build exhaustive, in-depth
            content for all destinations - to find answers to all your
            questions.
          </p>
        </div>
      </div>
      <div className="focus">
        <div className="ftext">
          <h3>Goes Around the Globe</h3>
          <p>
            We started with a focus on India - and are proud to be building a
            global company out of India - but our ambitions are global. Soon
            enough, you will be able to research your trip to any destination
            around the world on Travel.Net.
          </p>
        </div>
        <div className="focusImage">
          <img src={image3} alt="" style={{ height: "250px", width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default About;
