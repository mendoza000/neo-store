import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='ui__footer'>
      <Image
        src={require("@public/neoStore.svg")}
        width={"45rem"}
        height={"45rem"}
        alt={"neoStoreLogo"}
      />

      <div className="ui__footer-div">
        <span>Privacy</span>
        <span>Terms</span>
        <span>Contact Us</span>
      </div>
    </div>
  )
}

export default Footer