import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Navigation from "../components/Navigation/Navigation.js"
import Footer from "../components/Navigation/Footer.js"
import { graphql, useStaticQuery } from "gatsby"


const IndexPage = () => {
  const gatsbyRepoData = useStaticQuery(graphql`
  query {
    example{
      count
      next
    }    
     
    }
  `)
  return (
    <section>
      <p>
        Build Time Data: Gatsby repo{` `}
        <p >
          {gatsbyRepoData.example.count} <br />
          {gatsbyRepoData.example.next}
        </p>
      </p>
    </section>
  )
}
export default IndexPage
