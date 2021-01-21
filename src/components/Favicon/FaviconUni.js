import React from 'react'
import { Helmet } from 'react-helmet'
import faviconunilever from '../../assets/images/favicon-unilever.ico'

const FaviconUnilever = () => {
      return(
            <Helmet>
            <link rel="icon" href={faviconunilever} />
          </Helmet>
      );
  }
  
  export default FaviconUnilever;

