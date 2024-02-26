import React from 'react'
import image from '../../../assets/device.png'
import video from '../../../assets/devices.mp4'

const Banner = () => {
  return (
    <><div className='banner'>
    <div className="banner-content">
        <h1>Watch everywhere</h1>
        <p>Watch on smart TVs, PlayStation, Xbox, Chromecast,</p>
        <p>Apple TV, Blu-ray players and more.</p>
        </div>
        <div className="banner-image">
            <img src={image} alt="" />
            <video src={video} autoPlay loop muted></video>
        </div>
        
</div>
<hr className="divider" /></>
 

  )
}

export default Banner