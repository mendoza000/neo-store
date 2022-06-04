import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="home__header">
      <div className="home__header-section">
        <h1 className="home__header-title">
          Discover Rare Collections <br /> Of Art & NFT’s
        </h1>
        <div className="home__header-title-line"></div>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.{" "}
        </p>

        <div className="home__header-section-btns">
          <button>Explore</button>
          <button>Create</button>
        </div>
      </div>

      <div className="home__header-section home__header-section-img">
      </div>
    </header>
  )
}

export default Header