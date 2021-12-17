

import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Log from "./Login/log"
const images = [
  {
    url: "https://img.autocosmos.com/noticias/fotos/extralarge/NAZ_b65480612b9249c0885a3ec88c5641e1.jpg",
  },
  {
    url: "https://static9.depositphotos.com/1682899/1153/i/600/depositphotos_11533615-stock-photo-sport-car.jpg",
  },
  {
    url: "https://topgear.nl/thumbs/hd/2017/07/Cars-3-5.jpg",
  },
  
];
const Slideshow = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1725}
        height={900}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      
    </div>
  );
};
export default Slideshow;