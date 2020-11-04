import React from "react"
import Navigation from "../components/Header/Navigation.js"
import NavigationLipton from "../components/HeaderLipton/NavigationLipton.js"
import Footer from "../components/Footer/Footer.js"
import FooterLipton from "../components/FooterLipton/FooterLipton.js"
import GlobalStyle from "../assets/styles/globalStyles.js"
import TabStyle from "../components/TabBrand/TabStyles.js"
import CarouselStyle from "../components/Carousel/CarouselStyles.js"
import CarouselStyleLipton from "../components/CarouselLipton/CarouselStyles.js"
import CarouselStyleLiptonRecipe from "../components/CarouselLiptonRecipe/CarouselLiptonRecipeStyles.js"
import NavigationLiptonStyles from "../components/HeaderLipton/NavigationLiptonStyles"
import NavigationStyles from "../components/Header/NavigationStyles"
import ModalStyles from "../components/Modal/ModalStyles"
import PopupStyles from "../components/Popup/PopupStyles"
import QuotesStyles from "../components/Quotes/QuotesStyles"
// import CustomerChat from "../components/Messenger/Messenger"


const MainLayout = ( {children} ) => (
  <>
    <GlobalStyle />
    <Navigation />
    <NavigationStyles/>
    {/* <NavigationLipton/>
    <NavigationLiptonStyles/> */}
    <TabStyle />
    <ModalStyles/>
    <PopupStyles/>
    <QuotesStyles/>
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
