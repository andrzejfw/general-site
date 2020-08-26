import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { graphql } from "gatsby"
import { Link } from "gatsby"



export default class extends React.Component{
    constructor() {
      super();
      this.state = { tabIndex: 0 };
    }
    render() {
      return (
        <Tabs>
            <TabList>
                <span>All Products</span>
                <Tab>All products</Tab>
                <span>Food</span>
                <Tab>Food</Tab>
                <span>Ice Cream</span>
                <Tab>Ice Cream</Tab>
                <span>Beaty</span>
                <Tab>Beaty</Tab>
                <span>Home-care</span>
                <Tab>Home Care</Tab>
            </TabList>

            <TabPanel>
              <Link to="hellmanns.cz"> <img src="https://www.hellmanns.cz/sk-eu/content/dam/brands/hellmanns/us/en/hellmanns-logo.png.rendition.380.380.png"/></Link>
              <Link to="knorr.pl"><img src="https://asset-eu.unileversolutions.com/content/dam/unilever/knorr_world/global/english/logo/knorr_small_scale_under_354px-1714335-png.png.ulenscale.354x354.png"></img></Link>
              <Link to="https://www.bigmilk.pl/"><img src="https://www.bigmilk.pl/sk-eu/content/dam/brands/big-milk/pl/pl/algida-logo.png.rendition.1960.1960.png"></img></Link>
              <Link to="https://www.benjerry.com/"><img src="https://www.benjerry.com/modules/bnj-templates/img/logo-small.png"></img></Link>
              <Link to="https://www.magnumicecream.com/pl/home.html"><img src="https://asset-eu.unileversolutions.com/content/dam/unilever/magnum/global/logo/logo_true_to_pleasure_2-1815173-png.png"></img></Link>
              <Link to="https://www.dove.com/pl/home.html"><img src="https://www.dove.com/content/dam/unilever/dove/global/Dove.png"></img></Link>
              <Link to="https://www.axe.com/pl/home.html"><img src="https://asset-eu.unileversolutions.com/content/dam/unilever/axe/global/logo/others/deodorants_and_fragrances/fragrances/logo-white@3x-567173.png"></img></Link>
              <Link to="https://www.rexona.com/pl/home.html"><img src="https://asset-eu.unileversolutions.com/content/dam/unilever/rexona/global/logo/deodorants_and_fragrances/deodorants_and_fragrances_unidentified/rexona_blue_new_2_-794527-840145.png"></img></Link>
              <Link to="https://www.domestos.com/pl/home.html"><img src="https://domestos-com.homecare.digital/static/cf1f3789ff9af2fab2fef003e7ba1eb0/d786d/DOMESTOS-master-cropped.png.png"></img></Link>
              <Link to="https://www.cif.pl/home.html"><img src="https://asset-eu.unileversolutions.com/content/dam/unilever/cif/global/logo/cif-logo_web-1489380-png.png"></img></Link>
            </TabPanel>

            <TabPanel>
                <Link to="hellmanns.cz"> <img src="https://www.hellmanns.cz/sk-eu/content/dam/brands/hellmanns/us/en/hellmanns-logo.png.rendition.380.380.png"/></Link>
                <Link to="knorr.pl"><img src="https://asset-eu.unileversolutions.com/content/dam/unilever/knorr_world/global/english/logo/knorr_small_scale_under_354px-1714335-png.png.ulenscale.354x354.png"></img></Link>
            </TabPanel>

            <TabPanel>
                <Link to="https://www.bigmilk.pl/"><img src="https://www.bigmilk.pl/sk-eu/content/dam/brands/big-milk/pl/pl/algida-logo.png.rendition.1960.1960.png"></img></Link>
                <Link to="https://www.benjerry.com/"><img src="https://www.benjerry.com/modules/bnj-templates/img/logo-small.png"></img></Link>
                <Link to="https://www.magnumicecream.com/pl/home.html"><img src="https://asset-eu.unileversolutions.com/content/dam/unilever/magnum/global/logo/logo_true_to_pleasure_2-1815173-png.png"></img></Link>
            </TabPanel>

            <TabPanel>
                <Link to="https://www.dove.com/pl/home.html"><img src="https://www.dove.com/content/dam/unilever/dove/global/Dove.png"></img></Link>
                <Link to="https://www.axe.com/pl/home.html"><img src="https://asset-eu.unileversolutions.com/content/dam/unilever/axe/global/logo/others/deodorants_and_fragrances/fragrances/logo-white@3x-567173.png"></img></Link>
                <Link to="https://www.rexona.com/pl/home.html"><img src="https://asset-eu.unileversolutions.com/content/dam/unilever/rexona/global/logo/deodorants_and_fragrances/deodorants_and_fragrances_unidentified/rexona_blue_new_2_-794527-840145.png"></img></Link>
            </TabPanel>

            <TabPanel>
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