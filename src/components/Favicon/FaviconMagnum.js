import React from 'react'
import { Helmet } from 'react-helmet'
import faviconmagnum from '../../assets/images/favicon-magnum.ico'

const FaviconMagnum = () => {
      return(
            <Helmet>
            <link rel="icon" href={faviconmagnum} />
          </Helmet>
      );
  }
  
  export default FaviconMagnum;

