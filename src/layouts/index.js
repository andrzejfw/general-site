import React from "react"
import Navigation from "../components/Navigation/Navigation.js"
import Footer from "../components/Navigation/Footer.js"
import GlobalStyle from "../assets/styles/globalStyles.js"


const MainLayout = ( {children} ) => (
  <>
    <GlobalStyle />
    <Navigation />
    {children}
    {/* <Footer/> */}
  </>
)

export default MainLayout
