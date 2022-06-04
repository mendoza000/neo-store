import React from 'react'

const SectionInfo = ({title}) => {
  return (
    <>
      <h2 className="home__section-title">
        {
          (!title)
          ? `1 cr of land mint price \n 3000 NFT’s`
          : title
        }
      </h2>
      <p className="home__section-text">
        <span className="home__section-text-number">1</span>
        1 Acre of digital land that you will own
      </p>
      <p className="home__section-text">
        <span className="home__section-text-number">2</span>
        Walk around your land in the metaverse
      </p>
      <p className="home__section-text">
        <span className="home__section-text-number">3</span>
        Invite friends and resell your land on opensea
      </p>
    </>
  )
}

export default SectionInfo