import React, { useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { graphql } from "gatsby"
import { Link } from "gatsby"
// import food1 from '../../assets/images/food3.png'
// import food2 from '../../assets/images/food5.png'
// import ice1 from '../../assets/images/ice3.png'
// import ice2 from '../../assets/images/ice5.png'
// import beauty1 from '../../assets/images/beauty3.png'
// import beauty2 from '../../assets/images/beauty5.png'
// import hc1 from '../../assets/images/hc3.png'
// import hc2 from '../../assets/images/hc5.png'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import Spoon from '../../assets/images/spoon.jpg'
import Bird from '../../assets/images/bird.jpg'
import Clothes from '../../assets/images/clothes.jpg'
import Sun from '../../assets/images/sun.jpg'
import Lipton from '../../assets/images/lipton-logo.png'
import Pukka from '../../assets/images/pukka-logo.png'
import Knorr from '../../assets/images/logo-knorr.png'
import Hellmanns from '../../assets/images/hellmanns-logo.png'
import Magnum from '../../assets/images/magnum-logo.png'
import BenAndJerrys from '../../assets/images/ben-and-jerrys-logo.png'
import Idull from '../../assets/images/idull-logo.png'
import SuperViva from '../../assets/images/super-viva-logo.png'
import Dove from '../../assets/images/dove-logo.png'
import Rexona from '../../assets/images/rexona-logo.png'
import Lbp from '../../assets/images/lbp-logo.png'
import Domestos from '../../assets/images/domestos-logo.png'
import Cif from '../../assets/images/cif-logo.png'
import SeventhGeneration from '../../assets/images/sevent-generation-logo.png'


const TABS = [
  { text: 'Toidukaubad', color_active: `rgb(0, 94, 238)`, color_inactive: `rgb(0, 94, 238)` },
  { text: 'Jäätis', color_active: `rgb(255, 84, 80)`, color_inactive: `rgb(255, 84, 80)` },
  { text: 'Ilu ja hügieen', color_active: `rgb(255, 121, 198)`, color_inactive: `rgb(255, 121, 198)` },
  { text: 'Kodukeemia', color_active: `rgb(0, 215, 197)`, color_inactive: `rgb(0, 215, 197)` },
]


export default class extends React.Component{
    constructor() {
      super();
      this.state = { tabIndex: 0 };
    }

    isTabActive(i) {
      return this.state.tabIndex === i
    }
    
    render() {
      return (
        <Tabs onSelect={i => {
          this.setState({tabIndex : i})
        }}>
            
            <Link to="#meie-kaubamargid">
              <TabList>
                {TABS.map(({text, color_active, color_inactive }, i) => (
                  <Tab
                    key={`tab-${i}`}
                    style={{ background: this.isTabActive(i) ? `${color_active}` : `${color_inactive}` }}
                  >
                      <p style={{color: this.isTabActive(i) ? `#fff` : `#3f3f3f`, fontSize: `1.5rem`}} >
                        {text}
                      </p>

                  </Tab>
                  ))}
              </TabList>
            </Link>

            <TabPanel style={{backgroundImage: `url(${Spoon})`}}>
                <Link to="/index-lipton"><img src={Lipton} alt="Lipton Eesti logo"></img></Link>
                <Link to="/"><img src={Knorr} alt="Knorr Eesti logo"></img></Link>
                <Link to="/index-hellmanns"><img src={Hellmanns} alt="Hellmann's Eesti logo"></img></Link>
                <Link to="/"><img src={Pukka} alt="Pukka tee Eesti logo"></img></Link>
            </TabPanel>

            <TabPanel style={{backgroundImage: `url(${Sun})`}}>
                <Link to="/index-magnum"><img src={Magnum} alt="Magnum Eestis jäätis logo"></img></Link>
                <Link to="/"><img src={BenAndJerrys} alt="Ben&Jerry's jäätis logo"></img></Link>
                <Link to="/"><img src={Idull} alt="Idüll Eesti jäätis logo"></img></Link>
                <Link to="/"><img src={SuperViva} alt="Super Viva Eesti jäätis logo"></img></Link>
            </TabPanel>

            <TabPanel style={{backgroundImage: `url(${Bird})`}}>
                <Link to="/"><img src={Dove} alt="Dove Eesti logo"></img></Link>
                <Link to="/"><img src={Rexona} alt="Rexona Eesti logo"></img></Link>
                <Link to="/"><img src={Lbp} alt="Love Beauty & Planet Eesti logo"></img></Link>
            </TabPanel>

            <TabPanel style={{backgroundImage: `url(${Clothes})`}}>
                <Link to="/index-domestos"><img src={Domestos} alt="Domestos Eesti WC-puhastusvahendid logo"></img></Link>
                <Link to="/"><img src={Cif} alt="Cif Eesti kodukeemia logo"></img></Link>
                <Link to="/"><img src={SeventhGeneration} alt="Seventh Generation Eesti logo"></img></Link>
            </TabPanel>
        </Tabs>
      );
    }
  }




// const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

// export const query = graphql`
//   {
//     __typename
//     file(name: {eq: "hellmans-logo"}) {
//         childImageSharp {
//           fluid(maxWidth: 150, maxHeight: 100, quality: 90) {
//             src
//             srcSet
//             sizes
//           }
//         }
//   }
// `