import React from 'react'
import { Helmet } from 'react-helmet'
import faviconrexona from '../../assets/images/favicon-rexona.ico'

const FaviconRexona = () => {
      return(
            <Helmet>
            <link rel="icon" href={faviconrexona} />
          </Helmet>
      );
  }
  
  export default FaviconRexona;

