import React from 'react'
import {motion} from 'framer-motion'

const ConnectWalletBtn = () => {
  return (
    <motion.button 
      className="ui__btn ui__btn-primary ui__btn-center ui__mt-2"
      animate={{
        y: [0, -5, 0],

      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      >
      Connect wallet
    </motion.button>
  )
}

export default ConnectWalletBtn