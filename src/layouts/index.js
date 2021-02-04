import React from "react"
//global
import GlobalStyle from "../assets/styles/globalStyles.js"
import TabStyle from "../components/TabBrand/TabStyles.js"
import CarouselStyle from "../components/Carousel/CarouselStyles.js"
import ModalStyles from "../components/Modal/ModalStyles"
import PopupStyles from "../components/Popup/PopupStyles"
import QuotesStyles from "../components/Quotes/QuotesStyles"
// import CustomerChat from "../components/Messenger/Messenger"
//corporate
import Footer from "../components/Footer/Footer.js"
import Navigation from "../components/Header/Navigation.js"
import NavigationStyles from "../components/Header/NavigationStyles"
import FaviconUni from "../components/Favicon/FaviconUni"

//lipton
import FooterLipton from "../components/FooterLipton/FooterLipton.js"
import NavigationLipton from "../components/HeaderLipton/NavigationLipton.js"
import CarouselStyleLipton from "../components/CarouselLipton/CarouselStyles.js"
import CarouselStyleLiptonRecipe from "../components/CarouselLiptonRecipe/CarouselLiptonRecipeStyles.js"
import NavigationLiptonStyles from "../components/HeaderLipton/NavigationLiptonStyles"
import LiptonCategoriesStyles from "../components/LiptonCategories/LiptonCategoriesStyles"
import LiptonBannerAndTextStyles from "../components/LiptonBannerAndText/LiptonBannerAndTextStyles"
import BannerWithVideoLiptonStyles from "../components/BannerWithVideoLipton/BannerWithVideoLiptonStyles"
import FaviconLipton from "../components/Favicon/FaviconLipton"

//domestos
import FooterDomestos from "../components/FooterDomestos/FooterDomestos.js"
import FooterDomestosStyles from "../components/FooterDomestos/FooterDomestosStyles.js"
import HeaderDomestos from "../components/HeaderDomestos/HeaderDomestos"
import HeaderDomestosStyles from "../components/HeaderDomestos/HeaderDomestosStyles"
import HeaderBurgerDomestos from "../components/HeaderDomestos/HeaderBurgerDomestos"
import HeaderBurgerDomestosStyles from "../components/HeaderDomestos/HeaderBurgerDomestosStyles"
import CarouselStyleDomestos from "../components/CarouselDomestos/CarouselDomestosStyles.js"
import DomestosCategoriesStyles from '../components/DomestosCategories/DomestosCategoriesStyles'
import BannerWithVideoDomestosStyles from "../components/BannerWithVideoDomestos/BannerWithVideoDomestosStyles"
import FaviconDomestos from "../components/Favicon/FaviconDomestos"

//magnum
import FooterMagnum from "../components/FooterMagnum/FooterMagnum.js"
import FooterMagnumStyles from "../components/FooterMagnum/FooterMagnumStyles.js"
import HeaderMagnum from "../components/HeaderMagnum/HeaderMagnum"
import HeaderMagnumStyles from "../components/HeaderMagnum/HeaderMagnumStyles"
import HeaderBurgerMagnum from "../components/HeaderMagnum/HeaderBurgerMagnum"
import HeaderBurgerMagnumStyles from "../components/HeaderMagnum/HeaderBurgerMagnumStyles"
import CarouselStyleMagnum from "../components/CarouselMagnum/CarouselMagnumStyles.js"
import MagnumCategoriesStyles from "../components/MagnumCategories/MagnumCategoriesStyles"
import MagnumBannerAndTextStyles from "../components/MagnumBannerAndText/MagnumBannerAndTextStyles"
import BannerWithVideoMagnumStyles from "../components/BannerWithVideoMagnum/BannerWithVideoMagnumStyles"
import FaviconMagnum from "../components/Favicon/FaviconMagnum"

//cif
import FooterCif from "../components/FooterCif/FooterCif.js"
import FooterCifStyles from "../components/FooterCif/FooterCifStyles.js"
import CarouselStyleCif from "../components/CarouselCif/CarouselCifStyles.js"
import HeaderCif from "../components/HeaderCif/HeaderCif"
import HeaderCifStyles from "../components/HeaderCif/HeaderCifStyles"
import HeaderBurgerCif from "../components/HeaderCif/HeaderBurgerCif"
import HeaderBurgerCifStyles from "../components/HeaderCif/HeaderBurgerCifStyles"
import CifCategoriesStyles from "../components/CifCategories/CifCategoriesStyles"
import CifBannerAndTextStyles from "../components/CifBannerAndText/CifBannerAndTextStyles"
import FaviconCif from "../components/Favicon/FaviconCif"

//dove
import FooterDove from "../components/FooterDove/FooterDove.js"
import FooterDoveStyles from "../components/FooterDove/FooterDoveStyles.js"
import CarouselStyleDove from "../components/CarouselDove/CarouselDoveStyles.js"
import HeaderDove from "../components/HeaderDove/HeaderDove"
import HeaderDoveStyles from "../components/HeaderDove/HeaderDoveStyles"
import HeaderBurgerDove from "../components/HeaderDove/HeaderBurgerDove"
import HeaderBurgerDoveStyles from "../components/HeaderDove/HeaderBurgerDoveStyles"
import FaviconDove from "../components/Favicon/FaviconDove"
import DoveCategoriesStyles from "../components/DoveCategories/DoveCategoriesStyles"
import DoveBannerAndTextStyles from "../components/DoveBannerAndText/DoveBannerAndTextStyles"


//hellmanns
import FooterHellmanns from "../components/FooterHellmanns/FooterHellmanns.js"
import FooterHellmannsStyles from "../components/FooterHellmanns/FooterHellmannsStyles.js"
import CarouselStyleHellmanns from "../components/CarouselHellmanns/CarouselHellmannsStyles.js"
import HeaderHellmanns from "../components/HeaderHellmanns/HeaderHellmanns"
import HeaderHellmannsStyles from "../components/HeaderHellmanns/HeaderHellmannsStyles"
import HeaderBurgerHellmanns from "../components/HeaderHellmanns/HeaderBurgerHellmanns"
import HeaderBurgerHellmannsStyles from "../components/HeaderHellmanns/HeaderBurgerHellmannsStyles"
import HellmannsCategoriesStyles from "../components/HellmannsCategories/HellmannsCategoriesStyles"
import HellmannsBannerAndTextStyles from "../components/HellmannsBannerAndText/HellmannsBannerAndTextStyles"
import VideoHellmannsStyles from "../components/VideoHellmanns/VideoHellmannsStyles"
import BannerWithVideoHellmannsStyles from "../components/BannerWithVideoHellmanns/BannerWithVideoHellmannsStyles"
import FaviconHellmanns from "../components/Favicon/FaviconHellmanns"

//knorr
import FooterKnorr from "../components/FooterKnorr/FooterKnorr.js"
import FooterKnorrStyles from "../components/FooterKnorr/FooterKnorrStyles.js"
import CarouselStyleKnorr from "../components/CarouselKnorr/CarouselKnorrStyles.js"
import HeaderKnorr from "../components/HeaderKnorr/HeaderKnorr"
import HeaderKnorrStyles from "../components/HeaderKnorr/HeaderKnorrStyles"
import HeaderBurgerKnorr from "../components/HeaderKnorr/HeaderBurgerKnorr"
import HeaderBurgerKnorrStyles from "../components/HeaderKnorr/HeaderBurgerKnorrStyles"
import FaviconKnorr from "../components/Favicon/FaviconKnorr"

//rexona
import FooterRexona from "../components/FooterRexona/FooterRexona.js"
import FooterRexonaStyles from "../components/FooterRexona/FooterRexonaStyles.js"
import CarouselStyleRexona from "../components/CarouselRexona/CarouselRexonaStyles.js"
import HeaderRexona from "../components/HeaderRexona/HeaderRexona"
import HeaderRexonaStyles from "../components/HeaderRexona/HeaderRexonaStyles"
import HeaderBurgerRexona from "../components/HeaderRexona/HeaderBurgerRexona"
import HeaderBurgerRexonaStyles from "../components/HeaderRexona/HeaderBurgerRexonaStyles"
import FaviconRexona from "../components/Favicon/FaviconRexona"

const MainLayout = ({ children, location }) => (
  <>
    {location.pathname === '/' && 
      <>
      <Navigation/>
      <NavigationStyles/>
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle />
      <FaviconUni/>

      </>
    }
    {location.pathname === '/about' && 
      <>
      <Navigation/>
      <NavigationStyles/>
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle />
      <FaviconUni/>
      </>
    }
    {/* {location.pathname === '/404' && 
      <>
      <Navigation/>
      <NavigationStyles/>
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle />
      <FaviconUni/>
      </>
    }
    {location.pathname === '/500' && 
      <>
      <Navigation/>
      <NavigationStyles/>
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle />
      <FaviconUni/>
      </>
    } */}
    {location.pathname === '/brands' && 
      <>
      <Navigation/>
      <NavigationStyles/>
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle />
      <FaviconUni/>
      </>
    }
    {location.pathname === '/contact' && 
      <>
      <Navigation/>
      <NavigationStyles/>
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle />
      <FaviconUni/>
      </>
    }
    {location.pathname === '/cookie-notice' && 
      <>
      <Navigation/>
      <NavigationStyles/>
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle />
      <FaviconUni/>
      </>
    }
    {location.pathname === '/legal-notice' && 
      <>
      <Navigation/>
      <NavigationStyles/>
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle />
      <FaviconUni/>
      </>
    }
    {location.pathname === '/privacy-notice' && 
      <>
      <Navigation/>
      <NavigationStyles/>
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle />
      <FaviconUni/>
      </>
    }
    {location.pathname === '/sitemap' && 
      <>
      <Navigation/>
      <NavigationStyles/>
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle />
      <FaviconUni/>
      </>
    }
    {location.pathname === '/sustainability' && 
      <>
      <Navigation/>
      <NavigationStyles/>
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle />
      <FaviconUni/>
      </>
    }
    {location.pathname.match('magnum') && 
      <>
      <HeaderMagnum/>
      <HeaderMagnumStyles/>
      <HeaderBurgerMagnum/>
      <HeaderBurgerMagnumStyles/>
      <CarouselStyleMagnum />
      <MagnumBannerAndTextStyles/>
      <MagnumCategoriesStyles/>
      <BannerWithVideoMagnumStyles/>
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle />
      <FaviconMagnum/>
      </>
    }
    {location.pathname.match('domestos') && 
      <>
      <HeaderDomestos/>
      <HeaderDomestosStyles/>
      <HeaderBurgerDomestos/>
      <HeaderBurgerDomestosStyles/>
      <CarouselStyleDomestos />
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle />
      <DomestosCategoriesStyles />
      <BannerWithVideoDomestosStyles />
      <FaviconDomestos/>
      </>
    }
    {location.pathname.match('lipton') && 
      <>
      <NavigationLipton/>
      <CarouselStyleLipton/>
      <CarouselStyleLiptonRecipe/>
      <NavigationLiptonStyles/>
      <LiptonCategoriesStyles/>
      <LiptonBannerAndTextStyles/>
      <BannerWithVideoLiptonStyles/>
      <GlobalStyle/>
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle />
      <FaviconLipton/>
      </>
    }
    {location.pathname.match('cif') && 
      <>
      <CarouselStyleCif/>
      <HeaderCif/>
      <HeaderCifStyles/>
      <HeaderBurgerCif/>
      <HeaderBurgerCifStyles/> 
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle/>
      <CifCategoriesStyles/>
      <CifBannerAndTextStyles/>
      <FaviconCif/>
      </>
    }
    {location.pathname.match('dove') && 
      <>
      <CarouselStyleDove/>
      <HeaderDove/>
      <HeaderDoveStyles/>
      <HeaderBurgerDove/>
      <HeaderBurgerDoveStyles/>
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle/>
      <FaviconDove/>
      <DoveCategoriesStyles/>
      <DoveBannerAndTextStyles/>
      </>
    }
    {location.pathname .match('hellmanns') &&
      <>
      <CarouselStyleHellmanns/>
      <HeaderHellmanns />
      <HeaderHellmannsStyles/>
      <HeaderBurgerHellmanns/>
      <HeaderBurgerHellmannsStyles/>
      <HellmannsCategoriesStyles/>
      <HellmannsBannerAndTextStyles/>
      <VideoHellmannsStyles/>
      <BannerWithVideoHellmannsStyles/>
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle/>
      <FaviconHellmanns/>
      </>
    }
    {location.pathname.match('knorr') && 
      <>
      <CarouselStyleKnorr/>
      <HeaderKnorr/>
      <HeaderKnorrStyles/>
      <HeaderBurgerKnorr/>
      <HeaderBurgerKnorrStyles/>
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle/>
      <FaviconKnorr/>
      </>
    }
    {location.pathname.match('rexona') && 
      <>
      <CarouselStyleRexona/>
      <HeaderRexona/>
      <HeaderRexonaStyles/>
      <HeaderBurgerRexona/>
      <HeaderBurgerRexonaStyles/>
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle/>
      <FaviconRexona/>
      </>
    }
    
    {/* children */}
    {children}
    {/* children */}

    {location.pathname === '/' &&
      <>
      <Footer/>
      </>
    }
    {location.pathname === '/about' &&
      <>
      <Footer/>
      </>
    }
    {/* {location.pathname === '/404' &&
      <>
      <Footer/>
      </>
    }
    {location.pathname === '/500' &&
      <>
      <Footer/>
      </>
    } */}
    {location.pathname === '/brands' &&
      <>
      <Footer/>
      </>
    }
    {location.pathname === '/contact' &&
      <>
      <Footer/>
      </>
    }
    {location.pathname === '/cookie-notice' &&
      <>
      <Footer/>
      </>
    }
    {location.pathname === '/legal-notice' &&
      <>
      <Footer/>
      </>
    }
    {location.pathname === '/privacy-notice' &&
      <>
      <Footer/>
      </>
    }
    {location.pathname === '/sitemap' &&
      <>
      <Footer/>
      </>
    }
    {location.pathname === '/sustainability' &&
      <>
      <Footer/>
      </>
    }
    {location.pathname.match('magnum') && 
      <>
      <FooterMagnum/>
      <FooterMagnumStyles/>
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle/>
      </>
    }
    {location.pathname.match('domestos') && 
      <>
      <FooterDomestos/>
      <FooterDomestosStyles/>
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle/>
      </>
    }
    {location.pathname.match('lipton') && 
      <>
      <FooterLipton/>
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle/>
      </>
    }
    {location.pathname.match('cif') && 
      <>
      <FooterCif/>
      <FooterCifStyles/>
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle/>
      </>
    }
    {location.pathname.match('dove') && 
      <>
      <FooterDove/>
      <FooterDoveStyles/>
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle/>
      </>
    }
    {location.pathname.match('hellmanns') && 
      <>
      <FooterHellmanns/>
      <FooterHellmannsStyles/>
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle/>
      </>
    }
    {location.pathname.match('knorr') && 
      <>
      <FooterKnorr/>
      <FooterKnorrStyles/>
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle/>
      </>
    }
        {location.pathname.match('rexona') && 
      <>
      <FooterRexona/>
      <FooterRexonaStyles/>
      <GlobalStyle />
      <TabStyle />
      <ModalStyles/>
      <PopupStyles/>
      <QuotesStyles/>
      <CarouselStyle/>
      </>
    }
  </>
);
export default MainLayout