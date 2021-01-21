import React from 'react'
import { Helmet } from 'react-helmet'
import faviconknorr from '../../assets/images/favicon-knorr.ico'

const FaviconKnorr = () => {
      return(
            <Helmet>
            <link rel="icon" href={faviconknorr} />
          </Helmet>
      );
  }
  
  export default FaviconKnorr;

