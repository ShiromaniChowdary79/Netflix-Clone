import React from 'react'
import image from '../../../assets/children.png'

const Childrens = () => {
  return (
    <>
      <section className='childrens'>
          <div className="child-image">
            <img src={image} alt="" />
          </div>
          <div className="child-content">
            <h1>Create profiles for kids</h1>
            <p>Send children on adventures with their favourite</p>
            <p>characters in a space made just for them—free with</p>
            <p>your membership.</p>
          </div>
          
      </section>
      <hr className="divider" />
    </>
  )
}

export default Childrens
