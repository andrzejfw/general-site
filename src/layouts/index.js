import React from "react"
import Navigation from "../components/Header/Navigation.js"
import Footer from "../components/Footer/Footer.js"
import GlobalStyle from "../assets/styles/globalStyles.js"
import TabStyle from "../components/TabBrand/TabStyles.js"
import CarouselStyle from "../components/Carousel/CarouselStyles.js"
// import CustomerChat from "../components/Messenger/Messenger"


const MainLayout = ( {children} ) => (
  <>
    <GlobalStyle />
    <Navigation />
    <TabStyle />
    <CarouselStyle />
    {children}
    {/* <CustomerChat /> */}

    <Footer/>
  </>
)

export default MainLayout
