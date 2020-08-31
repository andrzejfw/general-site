import React from "react"
import Navigation from "../components/Header/Navigation"
import Footer from "../components/Footer/Footer.js"
import GlobalStyle from "../assets/styles/globalStyles.js"


const MainLayout = ( {children} ) => (
  <>
    <GlobalStyle />
    <Navigation />
    {children}
    <Footer/>
  </>
)

export default MainLayout
