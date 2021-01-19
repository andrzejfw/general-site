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
import FooterDove from "../components/FooterDove/FooterDove.js"
import FooterDoveStyles from "../components/FooterDove/FooterDoveStyles.js"
import FooterCif from "../components/FooterCif/FooterCif.js"
import FooterCifStyles from "../components/FooterCif/FooterCifStyles.js"
import FooterRexona from "../components/FooterRexona/FooterRexona.js"
import FooterRexonaStyles from "../components/FooterRexona/FooterRexonaStyles.js"
import FooterKnorr from "../components/FooterKnorr/FooterKnorr.js"
import FooterKnorrStyles from "../components/FooterKnorr/FooterKnorrStyles.js"
import GlobalStyle from "../assets/styles/globalStyles.js"
import TabStyle from "../components/TabBrand/TabStyles.js"
import CarouselStyle from "../components/Carousel/CarouselStyles.js"
import CarouselStyleLipton from "../components/CarouselLipton/CarouselStyles.js"
import CarouselStyleMagnum from "../components/CarouselMagnum/CarouselMagnumStyles.js"
import CarouselStyleDomestos from "../components/CarouselDomestos/CarouselDomestosStyles.js"
import CarouselStyleCif from "../components/CarouselCif/CarouselCifStyles.js"
import CarouselStyleHellmanns from "../components/CarouselHellmanns/CarouselHellmannsStyles.js"
import CarouselStyleDove from "../components/CarouselDove/CarouselDoveStyles.js"
import CarouselStyleRexona from "../components/CarouselRexona/CarouselRexonaStyles.js"
import CarouselStyleKnorr from "../components/CarouselKnorr/CarouselKnorrStyles.js"
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
import HeaderDove from "../components/HeaderDove/HeaderDove"
import HeaderDoveStyles from "../components/HeaderDove/HeaderDoveStyles"
import HeaderBurgerDove from "../components/HeaderDove/HeaderBurgerDove"
import HeaderBurgerDoveStyles from "../components/HeaderDove/HeaderBurgerDoveStyles"
import HeaderCif from "../components/HeaderCif/HeaderCif"
import HeaderCifStyles from "../components/HeaderCif/HeaderCifStyles"
import HeaderBurgerCif from "../components/HeaderCif/HeaderBurgerCif"
import HeaderBurgerCifStyles from "../components/HeaderCif/HeaderBurgerCifStyles"
import HeaderRexona from "../components/HeaderRexona/HeaderRexona"
import HeaderRexonaStyles from "../components/HeaderRexona/HeaderRexonaStyles"
import HeaderBurgerRexona from "../components/HeaderRexona/HeaderBurgerRexona"
import HeaderBurgerRexonaStyles from "../components/HeaderRexona/HeaderBurgerRexonaStyles"
import HeaderKnorr from "../components/HeaderKnorr/HeaderKnorr"
import HeaderKnorrStyles from "../components/HeaderKnorr/HeaderKnorrStyles"
import HeaderBurgerKnorr from "../components/HeaderKnorr/HeaderBurgerKnorr"
import HeaderBurgerKnorrStyles from "../components/HeaderKnorr/HeaderBurgerKnorrStyles"
import ModalStyles from "../components/Modal/ModalStyles"
import PopupStyles from "../components/Popup/PopupStyles"
import QuotesStyles from "../components/Quotes/QuotesStyles"
import LiptonCategoriesStyles from "../components/LiptonCategories/LiptonCategoriesStyles"
import DomestosCategoriesStyles from "../components/DomestosCategories/DomestosCategoriesStyles"
import MagnumCategoriesStyles from "../components/MagnumCategories/MagnumCategoriesStyles"
import HellmannsCategoriesStyles from "../components/HellmannsCategories/HellmannsCategoriesStyles"
import LiptonBannerAndTextStyles from "../components/LiptonBannerAndText/LiptonBannerAndTextStyles"
import MagnumBannerAndTextStyles from "../components/MagnumBannerAndText/MagnumBannerAndTextStyles"
import HellmannsBannerAndTextStyles from "../components/HellmannsBannerAndText/HellmannsBannerAndTextStyles"
import BannerWithVideoMagnumStyles from "../components/BannerWithVideoMagnum/BannerWithVideoMagnumStyles"
import BannerWithVideoLiptonStyles from "../components/BannerWithVideoLipton/BannerWithVideoLiptonStyles"
import BannerWithVideoHellmannsStyles from "../components/BannerWithVideoHellmanns/BannerWithVideoHellmannsStyles"
import VideoHellmannsStyles from "../components/VideoHellmanns/VideoHellmannsStyles"
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
    {/* <HeaderHellmanns/>
    <HeaderHellmannsStyles/>
    <HeaderBurgerHellmanns/>
    <HeaderBurgerHellmannsStyles/>   */}
    {/* <HeaderDove/>
    <HeaderDoveStyles/>
    <HeaderBurgerDove/>
    <HeaderBurgerDoveStyles/> */}
    {/* <HeaderCif/>
    <HeaderCifStyles/>
    <HeaderBurgerCif/>
    <HeaderBurgerCifStyles/> */}
    {/* <HeaderRexona/>
    <HeaderRexonaStyles/>
    <HeaderBurgerRexona/>
    <HeaderBurgerRexonaStyles/> */}
    <HeaderKnorr/>
    <HeaderKnorrStyles/>
    <HeaderBurgerKnorr/>
    <HeaderBurgerKnorrStyles/>
    <TabStyle />
    <ModalStyles/>
    <PopupStyles/>
    <QuotesStyles/>
    <CarouselStyle />
    <CarouselStyleLipton />
    <CarouselStyleMagnum />
    <CarouselStyleDomestos />
    <CarouselStyleCif />
    <CarouselStyleHellmanns />
    <CarouselStyleDove />
    <CarouselStyleRexona />
    <CarouselStyleKnorr />
    <LiptonCategoriesStyles/>
    <MagnumCategoriesStyles/>
    <CarouselStyleLiptonRecipe />
    <CarouselStyleLiptonRecipe />
    <LiptonCategoriesStyles/>
    <DomestosCategoriesStyles/>
    <HellmannsCategoriesStyles/>
    <LiptonBannerAndTextStyles/>
    <MagnumBannerAndTextStyles/>
    <HellmannsBannerAndTextStyles/>
    <BannerWithVideoMagnumStyles/>
    <BannerWithVideoLiptonStyles/>
    <BannerWithVideoHellmannsStyles/>
    <VideoHellmannsStyles/>
    {children}
    {/* <CustomerChat /> */}

    {/* <Footer/> */}
    {/* <FooterLipton/> */}
    {/* <FooterMagnum/>
    <FooterMagnumStyles/> */}
    {/* <FooterDomestos/>
    <FooterDomestosStyles/> */}
    {/* <FooterHellmanns/>
    <FooterHellmannsStyles/> */}
    {/* <FooterDove/>
    <FooterDoveStyles/> */}
    {/* <FooterCif/>
    <FooterCifStyles/> */}
    <FooterRexona/>
    <FooterRexonaStyles/>
    {/* <FooterKnorr/>
    <FooterKnorrStyles/> */}
  </>
)

export default MainLayout
