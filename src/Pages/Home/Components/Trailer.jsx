import React, { useState ,useEffect } from 'react';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import img1 from '../../../assets/avengers.jpg';
import img2 from '../../../assets/baaghi3.jpg';
import img3 from '../../../assets/bahubali.jpg';
import img4 from '../../../assets/got.jpg';
import img5 from '../../../assets/kgf2.jpg';
import img6 from '../../../assets/liger.jpg';
import img7 from '../../../assets/lionking.jpg';
import img8 from '../../../assets/rrr.jpeg';
import img9 from '../../../assets/shamshera.jpg';
import img10 from '../../../assets/sacredgames.jpg';
import img11 from '../../../assets/super30.jpg';
import img12 from '../../../assets/vikram.jpg';
import img13 from '../../../assets/Devara.jpg';

import video1 from '../../../assets/avengers.mp4';
import video2 from '../../../assets/baaghi3.mp4';
import video3 from '../../../assets/Bahubali.mp4';
import video4 from '../../../assets/Got.mp4';
import video5 from '../../../assets/Kgf2.mp4';
import video6 from '../../../assets/Liger.mp4';
import video7 from '../../../assets/Lion_King.mp4';
import video8 from '../../../assets/RRR.mp4';
import video9 from '../../../assets/Shamshera.mp4';
import video10 from '../../../assets/Sacred_games.mp4';
import video11 from '../../../assets/Super30.mp4';
import video12 from '../../../assets/Vikram.mp4';
import video13 from '../../../assets/devara.mp4';

const Trailer = () => {
  const imageVideoPairs = [
    {
      image: img1,
      video: video1,
    },
    {
      image: img2,
      video: video2,
    },
    {
      image: img3,
      video: video3,
    },
    {
      image: img4,
      video: video4,
    },
    {
      image: img5,
      video: video5,
    },
    {
      image: img6,
      video: video6,
    },
    {
      image: img7,
      video: video7,
    },
    {
      image: img8,
      video: video8,
    },
    {
      image: img9,
      video: video9,
    },
    {
      image: img10,
      video: video10,
    },
    {
      image: img11,
      video: video11,
    },
    {
      image: img12,
      video: video12,
    },
    {
      image:img13,
      video:video13,
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(video13);
  

  const changeVideo = (url) => {
    setCurrentVideo(url);
  };

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  useEffect(() => {
   
    setCurrentVideo(video13);
  }, []);


  return (
    <>
    <div>
        <h1 className='head'>Watch Your favourite  <span className="head-text"> Movie Trailer's</span></h1>

      <div className="slide">
         <div className="image-container">
          <Slider {...settings}>
            {imageVideoPairs.map((pair, index) => (
              <div key={index}>
                <img
                  src={pair.image}
                  alt={`Image ${index + 1}`}
                  onClick={() => changeVideo(pair.video)}
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="video-container">
          {currentVideo && (
            <video
              src={currentVideo}
              controls
              autoPlay
              width="600px"
              height="auto"
            />
          )}
        </div>
      </div>
    </div>
    <hr className="divider" />
    </>
    
    
  );
};

export default Trailer;
