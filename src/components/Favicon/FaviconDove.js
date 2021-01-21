import React from 'react'
import { Helmet } from 'react-helmet'
import favicondove from '../../assets/images/favicon-dove.ico'

const FaviconDove = () => {
      return(
            <Helmet>
            <link rel="icon" href={favicondove} />
          </Helmet>
      );
  }
  
  export default FaviconDove;

