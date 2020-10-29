import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({ description, title }) => {
    return(
        <Helmet
            title={title}
            meta={[
                {
                    name: 'description',
                    content: description
                },
                {
                    property: 'og:title',
                    content: title,
                },
                {
                    property: 'og:description',
                    content: description,
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
            ]} 
        />
    );
}

export default SEO;