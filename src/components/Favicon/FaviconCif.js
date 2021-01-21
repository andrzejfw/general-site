import React from 'react'
import { Helmet } from 'react-helmet'
import faviconcif from '../../assets/images/favicon-cif.ico'

const FaviconCif = () => {
      return(
            <Helmet>
            <link rel="icon" href={faviconcif} />
          </Helmet>
      );
  }
  
  export default FaviconCif;

