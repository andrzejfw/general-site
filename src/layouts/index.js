import React from "react"
import Navigation from "../components/Navigation/Navigation.js"
import GlobalStyle from "../assets/styles/globalStyles.js"


const MainLayout = ( {children} ) => (
  <>
    <GlobalStyle />
    <Navigation />
    {children}
  </>
)

export default MainLayout
