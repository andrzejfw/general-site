import React from 'react'
import { Helmet } from 'react-helmet'
import faviconlipton from '../../assets/images/favicon-lipton.ico'

const FaviconLipton = () => {
      return(
            <Helmet>
            <link rel="icon" href={faviconlipton} />
          </Helmet>
      );
  }
  
  export default FaviconLipton;

