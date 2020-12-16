import React from "react"
import Navigation from "../components/Header/Navigation.js"
import NavigationLipton from "../components/HeaderLipton/NavigationLipton.js"
import Footer from "../components/Footer/Footer.js"
import FooterLipton from "../components/FooterLipton/FooterLipton.js"
import FooterMagnum from "../components/FooterMagnum/FooterMagnum.js"
import FooterMagnumStyles from "../components/FooterMagnum/FooterMagnumStyles.js"
import FooterDomestos from "../components/FooterDomestos/FooterDomestos.js"
import FooterDomestosStyles from "../components/FooterDomestos/FooterDomestosStyles.js"
import FooterHellmanns from "../components/FooterHellmanns/FooterHellmanns.js"
import FooterHellmannsStyles from "../components/FooterHellmanns/FooterHellmannsStyles.js"
import GlobalStyle from "../assets/styles/globalStyles.js"
import TabStyle from "../components/TabBrand/TabStyles.js"
import CarouselStyle from "../components/Carousel/CarouselStyles.js"
import CarouselStyleLipton from "../components/CarouselLipton/CarouselStyles.js"
import CarouselStyleMagnum from "../components/CarouselMagnum/CarouselMagnumStyles.js"
import CarouselStyleDomestos from "../components/CarouselDomestos/CarouselDomestosStyles.js"
import CarouselStyleHellmanns from "../components/CarouselHellmanns/CarouselHellmannsStyles.js"
import CarouselStyleLiptonRecipe from "../components/CarouselLiptonRecipe/CarouselLiptonRecipeStyles.js"
import NavigationLiptonStyles from "../components/HeaderLipton/NavigationLiptonStyles"
import NavigationStyles from "../components/Header/NavigationStyles"
import HeaderMagnum from "../components/HeaderMagnum/HeaderMagnum"
import HeaderMagnumStyles from "../components/HeaderMagnum/HeaderMagnumStyles"
import HeaderBurgerMagnum from "../components/HeaderMagnum/HeaderBurgerMagnum"
import HeaderBurgerMagnumStyles from "../components/HeaderMagnum/HeaderBurgerMagnumStyles"
import HeaderDomestos from "../components/HeaderDomestos/HeaderDomestos"
import HeaderDomestosStyles from "../components/HeaderDomestos/HeaderDomestosStyles"
import HeaderBurgerDomestos from "../components/HeaderDomestos/HeaderBurgerDomestos"
import HeaderBurgerDomestosStyles from "../components/HeaderDomestos/HeaderBurgerDomestosStyles"
import HeaderHellmanns from "../components/HeaderHellmanns/HeaderHellmanns"
import HeaderHellmannsStyles from "../components/HeaderHellmanns/HeaderHellmannsStyles"
import HeaderBurgerHellmanns from "../components/HeaderHellmanns/HeaderBurgerHellmanns"
import HeaderBurgerHellmannsStyles from "../components/HeaderHellmanns/HeaderBurgerHellmannsStyles"
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
    {/* <HeaderMagnum/>
    <HeaderMagnumStyles/>
    <HeaderBurgerMagnum/>
    <HeaderBurgerMagnumStyles/> */}
    {/* <HeaderDomestos/>
    <HeaderDomestosStyles/>
    <HeaderBurgerDomestos/>
    <HeaderBurgerDomestosStyles/> */}
    <HeaderHellmanns/>
    <HeaderHellmannsStyles/>
    <HeaderBurgerHellmanns/>
    <HeaderBurgerHellmannsStyles/>
    <TabStyle />
    <ModalStyles/>
    <PopupStyles/>
    <QuotesStyles/>
    <CarouselStyle />
    <CarouselStyleLipton />
    <CarouselStyleMagnum />
    <CarouselStyleDomestos />
    <CarouselStyleHellmanns />
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
    {/* <FooterDomestos/>
    <FooterDomestosStyles/> */}
    <FooterHellmanns/>
    <FooterHellmannsStyles/>
  </>
)

export default MainLayout
