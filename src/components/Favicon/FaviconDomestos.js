import React from 'react'
import { Helmet } from 'react-helmet'
import favicondomestos from '../../assets/images/favicon-domestos.ico'

const FaviconDomestos = () => {
      return(
            <Helmet>
            <link rel="icon" href={favicondomestos} />
          </Helmet>
      );
  }
  
  export default FaviconDomestos;

