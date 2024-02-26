import React from 'react'
import video from "../../../assets/video.mp4"
const Hero = () => {
  return (
   <> <div className='hero'>
   <video src={video} autoPlay loop muted></video>
   <div className="content">
      <h1>Unlimited movies, TV shows and more</h1>
      <p>Watch anywhere. Cancel anytime.</p>
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Email Address" />
        <button className="input-group-button">Get Started</button>
      </div>
   </div>
  </div>
    <hr className="divider" /></>
  )
}

export default Hero
