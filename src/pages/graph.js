import React, {Component} from "react"
import styled from 'styled-components'
import Chart from "react-apexcharts";
import { graphql, useStaticQuery } from "gatsby"
import Slider from "../components/Carousel/Carousel"
import ButtonRadius from "../components/Button"
import Tabs from "../components/TabBrand/TabBrand"
import Popup from "../components/Popup/Popup"
import RichText from "../components/RichText/RichText"
import Example from "../components/Modal/Modal"
import Quotes from "../components/Quotes/Quotes"
import Accordion from '../components/Accordion/Accordion'
import CustomerChat from "../components/Messenger/Messenger"
import SEO from '../components/Seo/Seo'
import Hero from "../assets/images/World-farmer-logo-scene1.jpg"
import Image from '../assets/images/world-sustainability-hands-scene.jpg'
import { Link } from "gatsby"

//nowe

const Section = styled.section`
    /* width:100%; */
    /* max-width:1200px; */
    margin:auto;
`;

const HeroSection = styled.div`
  position: relative;
  @media(max-width:992px){
        margin-bottom: 70px;
    }
`;

const GraphBg = styled.div`
    background: rgba(0, 0, 0, .35);
    background-image: url("https://i1.wp.com/action24.gr/wp-content/uploads/2020/06/World-sustainability-hands-scene-2640-x-1485-scaled.jpg?fit=2560%2C1440&ssl=1");
    background-size: 100% auto;
    width: 100%;
    padding-top: 70px;
    padding-bottom: 70px;
`; 

const HeroImage = styled.img`
  width:100%;
  height: auto;
  margin: 0 auto;
  object-fit:cover;
  object-position: 0 55%;
  height: 400px;

    @media(max-width:992px){
        height: 200px;
    }

    @media(min-width:1400px){
        height: 500px;
    }
`;

const ButtonSection = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  font-size: .8rem;
  @media(max-width:992px){
    font-size: .6rem;
    top: 46%;
    width: 90vw;
    }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Heading = styled.h1`
  text-align: center;
  color: #1f36c7;
  margin: 40px 20px 20px;
  font-weight: bold;
`;


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
              chart: {
                height: 'auto',
                type: 'bar',
                width: '30%',
                offsetX: 150,
              },
              plotOptions: {
                bar: {
                  dataLabels: {
                    position: 'top', // top, center, bottom
                  },
                }
              },
              dataLabels: {
                enabled: true,
                formatter: function (val) {
                  return val + " mln";
                },
                offsetY: -40,
                style: {
                  fontSize: '22px',
                  colors: ["white"]
                }
              },
              xaxis: {
                categories: ["2014", "2015", "2016", "2017", "2018", "2019"],
                position: 'bottom',
                labels: {
                  style: {
                    colors: ["white", "white", "white", "white", "white", "white"],
                    fontWeight: 600,
                    fontSize: '22px',
                  }
                },
                axisBorder: {
                  show: true,
                  height: 3,
                  color: 'white',
                },
                axisTicks: {
                  show: false
                },
                crosshairs: {
                  show: true,
                  fill: {
                    type: 'gradient',
                    gradient: {
                      colorFrom: '#D8E3F0',
                      colorTo: '#BED1E6',
                      stops: [0, 100],
                      opacityFrom: 0.4,
                      opacityTo: 0.5,
                    }
                  }
                },
                tooltip: {
                  enabled: false,
                }
              },
              yaxis: {
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false,
                },
                labels: {
                  show: false,
                  formatter: function (val) {
                    return val + " miljon";
                  }
                }
              },
              grid: {
                show: false,
              },
              fill: {
                colors: ['#fff', 'white', 'white', 'white', 'white', 'white'],
                opacity: 0.7,
              },
              // title: {
              //   text: 'Võtsime eesmärgiks parandada ühe miljardi inimese tervist ja heaolu aastaks 2020',
              //   floating: true,
              //   offsetY: 0,
              //   align: 'center',
              //   style: {
              //     color: 'white'
              //   }
              // }
            },
      series: [
        {
          name: "series-1",
          data: [397, 482, 538, 601, 1280, 1300]
        }
      ]
    };
  }

  render() {
    return (
  //  <SEO title="Unilever Eesti" description=""/>
    <Section>    
    <HeroSection>
         <HeroImage src={Hero}></HeroImage>
        <ButtonSection>
           <ButtonRadius><Link to="/about">Ettevõttest</Link></ButtonRadius>
         </ButtonSection>
       </HeroSection>      
       <div className="divAnchor" id="meie-kaubamargid"></div>
       {/* Heading: Our brands */}
       <Heading>Meie kaubamärgid</Heading>
       <Tabs></Tabs>
       {/* below hero image as placeholder for animated chart */}
       {/* <Slider></Slider> */}
       {/* <ButtonRadius></ButtonRadius> */}
       {/* <RichText></RichText>
       <Example></Example>
       <Quotes></Quotes>
       <Popup></Popup> */}
       {/* <CustomerChat></CustomerChat> */}
      {/* <HeroImage src={Image}> */}
      <GraphBg>
      <Heading>Muudame jätkusuutliku elu tavapäraseks</Heading>
       <Chart
              options={this.state.options}
              series={this.state.series}
              position="absolute"
              type="bar"
              width="50%"
       />
       <div></div>
       </GraphBg>
        {/* </HeroImage> */}
      </Section>
    );
  }
}

export default App;

//nowe

// const IndexPage = () => {
  
//   return (
//    <>
//    <SEO title="Unilever Eesti" description=""/>
//     <Section>    
//       <HeroSection>
//         <HeroImage src={Hero}></HeroImage>
//         <ButtonSection>
//           <ButtonRadius><Link to="/about">Ettevõttest</Link></ButtonRadius>
//         </ButtonSection>
//       </HeroSection>      
//       <div className="divAnchor" id="meie-kaubamargid"></div>
//       {/* Heading: Our brands */}
//       <Heading>Meie kaubamärgid</Heading>
//       <Tabs></Tabs>
//       {/* below hero image as placeholder for animated chart */}
//       <HeroImage src={Image}></HeroImage>



//       {/* <Slider></Slider> */}
//       {/* <ButtonRadius></ButtonRadius> */}
//       {/* <RichText></RichText>
//       <Example></Example>
//       <Quotes></Quotes>
//       <Popup></Popup> */}
//       {/* <CustomerChat></CustomerChat> */}
//     </Section>
//     </>
//   )
// }
// export default IndexPage
