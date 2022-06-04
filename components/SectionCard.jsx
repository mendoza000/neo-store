import React from 'react'

const SectionCard = ({n1, n2}) => {
  return (
    <div className="home__section-card">
      <p className="home__section-text">
        <span className="home__section-text-number">
          {n1}
        </span>
        Buil custom manage for mansion holders
      </p>

      <p className="home__section-text">
        <span className="home__section-text-number">
          {n2}
        </span>
        Launch our own crypto token for staking
      </p>
    </div>
  )
}

export default SectionCard