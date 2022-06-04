import Image from "next/image"
import {motion} from 'framer-motion'
import ConnectWalletBtn from "./ConnectWalletBtn"
import SectionInfo from "./SectionInfo"
import SectionCard from "./SectionCard"

const Content = () => {
  return (
    <div className="home__content">
      <div className="home__section">
        <div className="home__section-col">
          <SectionInfo />
        </div>

        <div className="home__section-col">
          <Image 
            src={require('@public/tumb1.svg')} 
            alt={"tumb1"}
          />
          <ConnectWalletBtn />
        </div>
      </div>

      <div className="home__section">
        <div className="home__section-col">
          <SectionInfo />
        </div>

        <div className="home__section-col">
          <Image 
            src={require('@public/tumb2.svg')} 
            alt={"tumb2"}
          />
          <ConnectWalletBtn />
        </div>
      </div>

      <div className="home__section">
        <div className="home__section-col ui__gg-4">
          <h2 className="home__section-title">
            ! Acre + 4000 Sq ft Of <br/> Land Metavarce House
          </h2>
          <Image 
            src={require('@public/tumb3.svg')} 
            alt={"tumb3"}
          />
          <Image 
            src={require('@public/tumb4.svg')} 
            alt={"tumb4"}
          />
          <Image 
            src={require('@public/tumb5.svg')} 
            alt={"tumb5"}
          />
        </div>

        <div className="home__section-col">
          <SectionInfo title={"400 NFT's"}/>
          <ConnectWalletBtn />
        </div>
      </div>

      <div className="home__section">
        <div className="home__section-col">
          <SectionInfo />
        </div>

        <div className="home__section-col">
          <Image 
            src={require('@public/tumb6.svg')} 
            alt={"tumb6"}
          />
          <ConnectWalletBtn />
        </div>
      </div>

      <div className="home__section">
        <h2 className="home__section-title">
          Road Map
        </h2>

        <div className="home__section-col">
          <SectionCard n1={1} n2={2}/>
          <SectionCard n1={3} n2={4}/>
          <SectionCard n1={5} n2={6}/>
          <SectionCard n1={7} n2={8}/>
        </div>
      </div>

      <div className="home__section">
        <div className="home__section-col">
          <Image 
            src={require('@public/tumb7.svg')} 
            alt={"tumb7"}
          />
          <ConnectWalletBtn />
        </div>
        <div className="home__section-col">
          <SectionInfo />
        </div>
      </div>
    </div>
  )
}

export default Content