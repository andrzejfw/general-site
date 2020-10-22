import React from "react"
// import Navigation from "../components/Header/Navigation.js"
import NavigationLipton from "../components/HeaderLipton/NavigationLipton.js"
import Footer from "../components/Footer/Footer.js"
import FooterLipton from "../components/FooterLipton/FooterLipton.js"
import GlobalStyle from "../assets/styles/globalStyles.js"
import TabStyle from "../components/TabBrand/TabStyles.js"
import CarouselStyle from "../components/Carousel/CarouselStyles.js"
import CarouselStyleLipton from "../components/CarouselLipton/CarouselStyles.js"
import CarouselStyleLiptonRecipe from "../components/CarouselLiptonRecipe/CarouselLiptonRecipeStyles.js"
import NavigationLiptonStyles from "../components/HeaderLipton/NavigationLiptonStyles"
// import CustomerChat from "../components/Messenger/Messenger"


const MainLayout = ( {children} ) => (
  <>
    <GlobalStyle />
    {/* <Navigation /> */}
    <NavigationLipton/>
    <NavigationLiptonStyles/>
    <TabStyle />
    <CarouselStyle />
    <CarouselStyleLipton />
    <CarouselStyleLiptonRecipe />
    {children}
    {/* <CustomerChat /> */}

    {/* <Footer/> */}
    <FooterLipton/>
  </>
)

export default MainLayout
