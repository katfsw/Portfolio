import React from "react";
import "./styles.css";
import Carousel from "./Carousel";

const Top = () => {
  return (
    <div className="header">
      <div className="top-flex">
        <h1 className="title"> - Brandy Becker - </h1>
        <p className="bio">
          <p>
            Hey! I'm Brandy, I'm a 23 year old Full Stack Web Developer. I love
            everything from cats, code, and coffee! I love design and I love a
            good challenge.
          </p>
          <br />
          <p>
            I'm very passionate about what I do, and I put my all into my work.
            I knew I wanted to become a developer the moment I first touched a
            keyboard, and I knew I wanted to learn as much as I could behind the
            "how" and "why" that made a computer function.
          </p>
          <br />
          <p>
            I started my journey with HTML & CSS and over time I've learned
            JavaScript, React, Redux, Node, and I've picked around with a few
            projects in React Native.
          </p>
          <p>
            I'm eager to learn, and eager to find my place in what I'm most
            passionate about.
          </p>
        </p>
      </div>
      <div className="header-c">
        <Carousel />
      </div>
    </div>
  );
};

export default Top;