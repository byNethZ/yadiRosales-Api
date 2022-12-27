import React, { useEffect, useState } from "react";
import requests from "../request";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "./Shared.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

interface Props {
    list_number: number | undefined
}

function Slider({list_number}: Props) {

  const [urlsImage, setUrlsImage] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await fetch(`${requests.fetchImagesUrl}${list_number}`)
        .then((response) => response.json())
        .then((info) => {
          setUrlsImage(info.imagesUrl);
        });
    }
    if(list_number) fetchData();
  }, [list_number]);

  return (
    <>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={3000}
        //cssModule={coreStyles}
      >
        {urlsImage.map((image, index) => (
          <div key={index} data-src={image ? image : "img/No_image_available.jpg"} />
        ))}
      </AutoplaySlider>

    </>
  );
}

export default Slider;