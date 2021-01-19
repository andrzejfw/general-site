import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import styled from "styled-components"
import SEO from '../../components/Seo/Seo'


const SiteMapWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    ul {
        margin: 50px 0;
    }

    li {
        margin: 5px 0;
        list-style: none;
    }

    a {
        color: #000;
    }

    @media (max-width:768px){
        flex-direction: column;
        ul {margin: 30px 0;}
    }
`;

const SiteMapSection = styled.div`
    margin: 20px 50px;

    @media (max-width:768px){
        margin: 10px 50px;
    }
`;

const SiteMapHeader = styled.h1`
    text-align: center;
    margin: 50px 10px 20px;
    color: #005EEF;

    @media (max-width:768px){
        text-align: left;
        margin: 50px 50px 20px;
    }
`;

export const data = graphql`
    query SiteMap {
        common: allSitePage(sort: {fields: path}) {
            nodes {
                id
                path
            }
          }
        products: allSitePage {
            nodes {
              ...Products
            }
          }
        articles: allSitePage {
            nodes {
              ...Articles
            }
          }

        recipes: allSitePage {
            nodes {
              ...Recipes
            }
          }
      }

      fragment Common on SitePage {
        id
        path
      }
      
      fragment Products on SitePage {
        id
        path
      }
      
      fragment Articles on SitePage {
        id
        path
      }

      fragment Recipes on SitePage {
        id
        path
      }
      
    `;

const SiteMap = ({data}) => {

    const { 
        common: { nodes: commonNodes },
        products: { nodes: productNodes },
        articles: { nodes: articlesNodes },
        recipes: { nodes: recipesNodes }
    } = data;

    return (
        <>
        <SEO title="Saidi Kaart" description="Kasuta Unileveri saidikaarti meie veebilehel navigeerimiseks. Tutvu erinevate brändidega ning loe, millega tegeleb Unilever Eestis ning ka üle maailma."/>
        <SiteMapHeader>Saidi Kaart</SiteMapHeader>
        <SiteMapWrapper>
            <SiteMapSection>
                <h2>Common</h2>
                <ul>
                    {commonNodes
                    .filter(item => !(item.path.includes("404")))
                    .filter(item => !(item.path.includes("/sitemap/")))
                    .filter(item => !(item.path.includes("/products/")))
                    .filter(item => !(item.path.includes("/articles/")))
                    .filter(item => !(item.path.includes("/recipes/")))
                    .map(item => (
                        <li key={item.id}>
                            <Link to={item.path}>
                                {item.path}
                            </Link>
                        </li>
                    ))}
                </ul>
            </SiteMapSection>
            <SiteMapSection>
                <h2>Products</h2>
                <ul>
                    {productNodes
                    .filter(item => (item.path.includes("/products/")))
                    .map(item => (
                        <li key={item.id}>
                            <Link to={item.path}>
                                {item.path}
                            </Link>
                        </li>
                    ))}
                </ul>
            </SiteMapSection>
            <SiteMapSection>
                <h2>Articles</h2>
                <ul>
                    {articlesNodes
                    .filter(item => (item.path.includes("/articles/")))
                    .map(item => (
                        <li key={item.id}>
                            <Link to={item.path}>
                                {item.path}
                            </Link>
                        </li>
                    ))}
                </ul>
            </SiteMapSection>
            <SiteMapSection>
                <h2>Recipes</h2>
                <ul>
                    {recipesNodes
                    .filter(item => (item.path.includes("/recipes/")))
                    .map(item => (
                        <li key={item.id}>
                            <Link to={item.path}>
                                {item.path}
                            </Link>
                        </li>
                    ))}
                </ul>
            </SiteMapSection>
        </SiteMapWrapper>
        </>
    )

};

export default SiteMap;