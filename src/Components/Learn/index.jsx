import React from "react";
import text1 from "./images/text.png";
import cycle from "./images/cycle.png";
import travel from "./images/traveling.png";
import video from "./images/videos.png";
import video2 from "./images/video2.png";

function Learn() {
  const imageStyles = { height: "218px" };
  return (
    <div className="flex flex-col p-4 gap-6">
      <h1 className="text-2xl text-center">Learn more ... </h1>
      <iframe
        src="https://www.youtube.com/embed/Dwkh46MZuIc"
        title="What Are Carbon Footprints | Environmental Chemistry | Chemistry | FuseSchool"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        src="https://www.youtube.com/embed/6r06-dpRsEg"
        title="How to reduce your carbon footprint by 80% | Matthew Tolley | TEDxTelford"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        src="https://www.youtube.com/embed/YbEFJd-fJpQ"
        title="How to reduce your environmental footprint | WWF"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Learn;
