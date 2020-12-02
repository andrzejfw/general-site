import React from "react"
import Navigation from "../components/Header/Navigation.js"
import NavigationLipton from "../components/HeaderLipton/NavigationLipton.js"
import Footer from "../components/Footer/Footer.js"
import FooterLipton from "../components/FooterLipton/FooterLipton.js"
import FooterMagnum from "../components/FooterMagnum/FooterMagnum.js"
import FooterMagnumStyles from "../components/FooterMagnum/FooterMagnumStyles.js"
import FooterDomestos from "../components/FooterDomestos/FooterDomestos.js"
import GlobalStyle from "../assets/styles/globalStyles.js"
import TabStyle from "../components/TabBrand/TabStyles.js"
import CarouselStyle from "../components/Carousel/CarouselStyles.js"
import CarouselStyleLipton from "../components/CarouselLipton/CarouselStyles.js"
import CarouselStyleMagnum from "../components/CarouselMagnum/CarouselMagnumStyles.js"
import CarouselStyleLiptonRecipe from "../components/CarouselLiptonRecipe/CarouselLiptonRecipeStyles.js"
import NavigationLiptonStyles from "../components/HeaderLipton/NavigationLiptonStyles"
import NavigationStyles from "../components/Header/NavigationStyles"
import HeaderMagnum from "../components/HeaderMagnum/HeaderMagnum"
import HeaderMagnumStyles from "../components/HeaderMagnum/HeaderMagnumStyles"
import HeaderBurgerMagnum from "../components/HeaderMagnum/HeaderBurgerMagnum"
import HeaderBurgerMagnumStyles from "../components/HeaderMagnum/HeaderBurgerMagnumStyles"
import ModalStyles from "../components/Modal/ModalStyles"
import PopupStyles from "../components/Popup/PopupStyles"
import QuotesStyles from "../components/Quotes/QuotesStyles"
import LiptonCategoriesStyles from "../components/LiptonCategories/LiptonCategoriesStyles"
import MagnumCategoriesStyles from "../components/MagnumCategories/MagnumCategoriesStyles"
import LiptonBannerAndTextStyles from "../components/LiptonBannerAndText/LiptonBannerAndTextStyles"
import MagnumBannerAndTextStyles from "../components/MagnumBannerAndText/MagnumBannerAndTextStyles"
import BannerWithVideoMagnumStyles from "../components/BannerWithVideoMagnum/BannerWithVideoMagnumStyles"
import BannerWithVideoLiptonStyles from "../components/BannerWithVideoLipton/BannerWithVideoLiptonStyles"
// import CustomerChat from "../components/Messenger/Messenger"


const MainLayout = ( {children} ) => (
  <>
    <GlobalStyle />
    {/* <Navigation />
    <NavigationStyles/> */}
    {/* <NavigationLipton/>
    <NavigationLiptonStyles/> */}
    <HeaderMagnum/>
    <HeaderMagnumStyles/>
    <HeaderBurgerMagnum/>
    <HeaderBurgerMagnumStyles/>
    <TabStyle />
    <ModalStyles/>
    <PopupStyles/>
    <QuotesStyles/>
    <CarouselStyle />
    <CarouselStyleLipton />
    <CarouselStyleMagnum />
    <LiptonCategoriesStyles/>
    <MagnumCategoriesStyles/>
    <CarouselStyleLiptonRecipe />
    <CarouselStyleLiptonRecipe />
    <LiptonCategoriesStyles/>
    <LiptonBannerAndTextStyles/>
    <MagnumBannerAndTextStyles/>
    <BannerWithVideoMagnumStyles/>
    <BannerWithVideoLiptonStyles/>
    {children}
    {/* <CustomerChat /> */}

    {/* <Footer/> */}
    {/* <FooterLipton/> */}
    {/* <FooterMagnum/>
    <FooterMagnumStyles/> */}
    <FooterDomestos/>
  </>
)

export default MainLayout
