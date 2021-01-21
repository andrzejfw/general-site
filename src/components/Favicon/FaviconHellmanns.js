import React from 'react'
import { Helmet } from 'react-helmet'
import faviconhellmanns from '../../assets/images/favicon-hellmanns.ico'

const FaviconHellmanns = () => {
  return(
        <Helmet>
        <link rel="icon" href={faviconhellmanns} />
      </Helmet>
  );
}

export default FaviconHellmanns;

