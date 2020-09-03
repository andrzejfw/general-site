import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { graphql } from "gatsby"
import { Link } from "gatsby"
import food1 from '../../assets/images/food3.png'
import food2 from '../../assets/images/food5.png'
import ice1 from '../../assets/images/ice3.png'
import ice2 from '../../assets/images/ice5.png'
import beauty1 from '../../assets/images/beauty3.png'
import beauty2 from '../../assets/images/beauty5.png'
import hc1 from '../../assets/images/hc3.png'
import hc2 from '../../assets/images/hc5.png'
// import AnchorLink from 'react-anchor-link-smooth-scroll'

const TABS = [
  { text: 'Food', img_active: food1, img_inactive: food2 },
  { text: 'Ice Cream', img_active: ice1, img_inactive: ice2 },
  { text: 'Beauty', img_active: beauty1, img_inactive: beauty2 },
  { text: 'Home Care', img_active: hc1, img_inactive: hc2 },
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
            <TabList>
              {TABS.map(({text, img_active, img_inactive }, i) => (
                <Tab
                  key={`tab-${i}`}
                  style={{ backgroundImage: this.isTabActive(i) ? `url(${img_active})` : `url(${img_inactive})` }}
                >
                    {text}
                </Tab>
                ))}
            </TabList>

            <TabPanel style={{backgroundColor: 'rgba(235,145,38,0.8)'}}>
                <Link to="hellmanns.cz"> <img src="https://www.bigmilk.pl/sk-eu/content/dam/brands/big-milk/pl/pl/algida-logo.png.rendition.1960.1960.png"></img></Link>
                <Link to="knorr.pl"><img src="https://www.bigmilk.pl/sk-eu/content/dam/brands/big-milk/pl/pl/algida-logo.png.rendition.1960.1960.png"></img></Link>
            </TabPanel>

            <TabPanel style={{backgroundColor: 'rgba(53,180,239,0.8)'}}>
                <Link to="https://www.bigmilk.pl/"><img src="https://www.bigmilk.pl/sk-eu/content/dam/brands/big-milk/pl/pl/algida-logo.png.rendition.1960.1960.png"></img></Link>
                <Link to="https://www.benjerry.com/"><img src="https://www.benjerry.com/modules/bnj-templates/img/logo-small.png"></img></Link>
                <Link to="https://www.magnumicecream.com/pl/home.html"><img src="https://asset-eu.unileversolutions.com/content/dam/unilever/magnum/global/logo/logo_true_to_pleasure_2-1815173-png.png"></img></Link>
            </TabPanel>

            <TabPanel style={{backgroundColor: 'rgba(227,55,119,0.8)'}}>
                <Link to="https://www.dove.com/pl/home.html"><img src="https://www.dove.com/content/dam/unilever/dove/global/Dove.png"></img></Link>
                <Link to="https://www.axe.com/pl/home.html"><img src="https://asset-eu.unileversolutions.com/content/dam/unilever/axe/global/logo/others/deodorants_and_fragrances/fragrances/logo-white@3x-567173.png"></img></Link>
                <Link to="https://www.rexona.com/pl/home.html"><img src="https://asset-eu.unileversolutions.com/content/dam/unilever/rexona/global/logo/deodorants_and_fragrances/deodorants_and_fragrances_unidentified/rexona_blue_new_2_-794527-840145.png"></img></Link>
            </TabPanel>

            <TabPanel style={{backgroundColor: 'rgba(0,162,47,0.8)'}}>
                <Link to="https://www.domestos.com/pl/home.html"><img src="https://domestos-com.homecare.digital/static/cf1f3789ff9af2fab2fef003e7ba1eb0/d786d/DOMESTOS-master-cropped.png.png"></img></Link>
                <Link to="https://www.cif.pl/home.html"><img src="https://asset-eu.unileversolutions.com/content/dam/unilever/cif/global/logo/cif-logo_web-1489380-png.png"></img></Link>
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