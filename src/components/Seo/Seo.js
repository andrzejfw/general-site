import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

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

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}

export default SEO;