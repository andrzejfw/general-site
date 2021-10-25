import React from "react"
import styled from 'styled-components'
import { graphql } from 'gatsby'
import DomestosHeroImg from '../../assets/images/domestos-products-hero.jpg'
import DomestosHeroImgMobile from '../../assets/images/domestos-products-hero-mobile.jpg'
import ScrollAnimation from 'react-animate-on-scroll'
import SEO from '../../components/Seo/Seo'

export const data = graphql`
query MyQueryProductsDomestos {
    allProduct(filter: {brand: {eq: "Domestos"}}) {
      nodes {
        id
        fullName
        shortTitle
        slug
        img
        format
      }
    }
  }
`;

const DomestosHeroImage = styled.img`
    width: 100%;
    height: 550px;
    object-fit: cover;

    @media (max-width: 1200px) {
        height: 400px;
        content: url(${DomestosHeroImgMobile});
    }
`;

const ProductSectionDiv = styled.div`
    max-width: 100%;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 80px;
    &:after {
    content: '';
    display: block;
    clear: both;
    }
    @media (max-width: 692px) {
        margin-top: 0px;
        margin-bottom: 0px;
    }

    h1 {
        color: #06154b;
        text-align: center;
        margin-bottom: 50px;
        font-weight: 700;
    }

    h2 {
        color: #06154b;
        font-size: 1.3rem;
    }
`;

const FilterDiv = styled.div`
width: 17%;
margin-left: 5%;
margin-top: 100px;
float: left;
text-align: center;
position: sticky;
top: 120px;
left: 0;

@media (max-width: 1500px) {
    width: 20%;
}

@media (max-width: 1100px) {
    width: 25%;
}

@media (max-width: 692px) {
    display: none;
}
`;

const ProductDiv = styled.div`
    width: 60%;
    float: left;
    position: relative;

    .divider {
      width: 4px;
      height: calc(100% - 100px);
      background: linear-gradient(60deg,#749fe0 0,#06154b 40%,#06154b 60%,#749fe0 100%);
      border-radius: 95%;
      position: absolute;
      left: 0;
      top: 100px;

      @media (max-width: 692px) {
        display: none;
    }
    }

    @media (max-width: 1100px) {
        width: 55%;
        margin-top: 20px;
    }

    @media (max-width: 692px) {
        width: 100%;
        margin-top: 20px;
    }
`;

const Filter = styled.button`
    color: white;
    padding: 10px 30px;
    width: 215px;
    border: none;
    margin: 10px 10px;
    background:linear-gradient(180deg,#123c7b,#06154b);
    text-transform:none;
    transition:.5s;
    box-shadow: 0px -3px 2px rgba(0, 0, 0, 0.39);
    outline: none;
    text-decoration:none;
    &:hover{
        transform: scale(1.1);
        opacity: 1;
        text-decoration:none;
    }
    &:focus{
        outline: none;
    }
`;

const ProductsUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style: none;
    justify-items: center;
    padding-left: 5%;
    padding-right: 5%;

    img{
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 80%;
        transition: all .2s linear;

        &:hover {
            transform: scale(1.2);
        }
    }
    div {
        margin-left: auto;
        margin-right: auto;
        /* background:radial-gradient(circle at 20% 15%,#123c7b,#06154b 61%); */
        box-shadow: 5px 5px 10px #cac9c9;
        color: white;
        border-radius: 15px;
        width: 80%;
        padding: 0 10px 10px 10px;
        margin-bottom: 7%;
        font-weight: bold;
        text-align: center;
        height: 90%;

        h3 {
            font-size: 1rem;
            margin-top: 15px;
            color: #06154b;
        }
    }
    
    @media (max-width: 692px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const ShowMore = styled.button`
    color: white;
    padding: 10px 30px;
    width: 150px;
    border: none;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background:linear-gradient(180deg,#123c7b,#06154b);
    border:none;
    text-transform:none;
    transition:.5s;
    box-shadow: 0px -3px 2px rgba(0, 0, 0, 0.39);
    outline: none;
    text-decoration:none;
    &:hover{
      background:linear-gradient(180deg,#123c7b 30%,#06154b);
      transform: scale(1.15);
      opacity: 1;
      border:none;
      outline: none;
      text-decoration:none;
    }
    &:focus{
        outline: none;
      }
    `;

const defaultState = {
    allProducts: true,
    filterOne: false,
    filterTwo: false,
    limit: 12, 
}

class ProductsDomestos extends React.Component{

    state = defaultState

    handleShowAll = () => {
        this.setState({
            ...defaultState
        })
    }

    handleShowFilterOne = () => {
        this.setState({
            ...defaultState, 
            filterOne: true,
        })
    }

    handleShowFilterTwo = () => {
        this.setState({
            ...defaultState, 
            filterTwo: true,
        })
    }



    ifURL = () => {
        if (window.location.search == "?filter=WC-puhastusvahendid") {
            return (
                this.state.allProducts = false,
                this.state.filterOne = true,
                this.state.filterTwo = false);
        } else if (window.location.search == "?filter=WC-varskendajad") {
            return (
                this.state.allProducts = false,
                this.state.filterOne = false,
                this.state.filterTwo = true);
        } else {
            return (
                this.state.allProducts = true,
                this.state.filterOne = false,
                this.state.filterTwo = false);
        }
    }

    render() {
        const { data } = this.props;

        function addURL(filterName) {
            const url = new URL(window.location);
            url.searchParams.set('filter', filterName);
            window.history.pushState({}, '', url);
        }

        function clearURL() {
            const url = new URL(window.location);
            url.searchParams.delete('filter');
            window.history.pushState({}, '', url);
        }

      return (
        <>
        <SEO title="Domestos Tooted" description="Domestose kodukeemia tootekataloog. Tutvu Domestose WC-värskendajate ning puhastusvahenditega ning vaata lähemalt, kust on võimalik osta Domestose tooteid."/>
        <DomestosHeroImage src={DomestosHeroImg} alt="Domestos Tooted"/>
        <ProductSectionDiv>
        <ScrollAnimation animateIn="animate__fadeInLeft" delay="200" animateOnce="true">
        <FilterDiv onLoad={this.ifURL()}>
            <h2 style={{textAlign: "center", fontWeight: "bold"}}>Kategooriad:</h2>
            <Filter onClick={ () => {clearURL();this.handleShowAll();}}>
                Kõik Tooted
            </Filter>
            <Filter onClick={ () => {addURL("WC-puhastusvahendid"); this.handleShowFilterOne();}}>
                WC-puhastusvahendid
            </Filter>
            <Filter onClick={ () => {addURL("WC-varskendajad"); this.handleShowFilterTwo();}}>
                WC-värskendajad
            </Filter>
        </FilterDiv>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true">
        <ProductDiv>
            <div class="divider"></div>
            {this.state.allProducts ? (
                <div>
                <h1 style={{textAlign: "center"}}>Kõik Tooted</h1>
                <ProductsUl>
                    {data.allProduct.nodes.filter((_,i) => i<this.state.limit).map(item => (
                        <li key={item.id}>
                            <a href={`/domestos/products/${item.id}`}>
                            <div>
                                <img src={item.img}/>
                                <h3>{item.fullName}</h3>
                            </div>
                            </a>
                        </li>
                    ))}
                </ProductsUl>
                {(data.allProduct.nodes.length>12 && this.state.limit<data.allProduct.nodes.length) && 
                <ShowMore background="none" onClick={() => this.setState({limit: this.state.limit+12})}> Näita rohkem </ShowMore>}
            </div>
            ) : null}
            
            
            <div class="divider"></div>
            {this.state.filterOne ? (
                <div>
                <h1 style={{textAlign: "center" }}>WC-puhastusvahendid</h1>
                <ProductsUl>
                    {data.allProduct.nodes.filter(item => (item.shortTitle.includes("WC-puhastusvahendid"))).map(item => (
                        <li key={item.id}>
                            <a href={`/domestos/products/${item.id}`}>
                            <div>
                                <img src={item.img}/>
                                <h3>{item.fullName}</h3>
                            </div>
                            </a>
                        </li>
                    ))}
                </ProductsUl>
            </div>
            ) : null}
            
            
            <div class="divider"></div>
            {this.state.filterTwo ? (
                <div>
                <h1 style={{textAlign: "center"}}>WC-värskendajad</h1>
                <ProductsUl>
                    {data.allProduct.nodes.filter(item => (item.shortTitle.includes("WC-värskendajad"))).map(item => (
                        <li key={item.id}>
                            <a href={`/domestos/products/${item.id}`}>
                            <div>
                                <img src={item.img}/>
                                <h3>{item.fullName}</h3>
                            </div>
                            </a>
                        </li>
                    ))}
                </ProductsUl>
            </div>
            ) : null}
            </ProductDiv>
            </ScrollAnimation>
        </ProductSectionDiv>
        </>
      );
      }

}



export default ProductsDomestos;