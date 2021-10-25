import React from "react"
import styled from 'styled-components'
import { graphql } from 'gatsby'
import DoveHeroImg from '../../assets/images/dove-products-hero.jpg'
import DoveHeroImgMobile from '../../assets/images/dove-products-hero-mobile.jpg'
import ScrollAnimation from 'react-animate-on-scroll'
import SEO from '../../components/Seo/Seo'

export const data = graphql`
query MyQueryProductsDove {
    allProduct(filter: {brand: {eq: "Dove"}}) {
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

const DoveHeroImage = styled.img`
    width: 100%;
    height: 550px;
    object-fit: cover;

    @media (max-width: 1200px) {
        height: 400px;
        /* content: url(${DoveHeroImgMobile}); */
        object-position: 70%;
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
        color: #054281;
        text-align: center;
        margin-bottom: 50px;
        font-weight: 700;
    }

    h2 {
        color: #054281;
        font-size: 1.3rem;
    }
`;

const FilterDiv = styled.div`
width: 16%;
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
        width: 1px;
        height: calc(100% - 50px);
        background: #dbc081;
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
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 13rem;
    padding: 0 1.25rem;
    height: 3.125rem;
    outline: 0;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    white-space: nowrap;
    transition: 0.3s all;
    color: #054281;
    background-color: #fff;
    border: 1px solid;
    border-color: #dbc081;
    margin: 10px 0;
    font-weight: 700;
    width: 170px;

    &:hover{
      border-color: transparent;
      color: #fff;
      background: linear-gradient(to right,#b78938 0,#dabf80 25%,#ffe2ac 51%,#dabf80 76%,#b78938 100%);
      text-decoration:none;
      outline:none;
      
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
    min-height: 400px;

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
        /* background: linear-gradient(180deg,rgb(0 73 118 / 0%) 50%,rgb(204 210 214 / 48%) 100%); */
        color: #054281;
        border-radius: 15px;
        width: 80%;
        padding: 0 10px 10px 10px;
        margin-bottom: 7%;
        font-weight: bold;
        text-align: center;
        height: 90%;

        h3 {
            font-size: 1rem;
            font-weight: bold;
            margin-top: 10px;
        }
    }
    
    @media (max-width: 692px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const ShowMore = styled.button`
color: #054281;
padding: 10px 30px;
font-size: 1.5rem;
width: 150px;
border: 1px solid;
border-color: #054281;
margin: 10px 10px;
border-radius: 3px;
background:white;
text-transform:none;
transition:.5s;
box-shadow: 0px -3px 2px rgba(0, 0, 0, 0.39);
outline: none;
text-decoration:none;
&:hover{
  background:#054281;
  color:white;
  transform: scale(1.05);
  opacity: 1;
  border:none;
  outline: none;
  text-decoration:none;
}
    &:focus{
        outline: none;
      }
    `;

const ImageSection = styled.div`
  position: relative;

  &:after {
      content: '';
      background-color: #fff;
      position: absolute;
      border-radius: 100%;
      height: 80px;
      width: 100%;
      left: 50%;
      transform: translateX(-50%);
      bottom: -40px;
    }

    @media (max-width: 692px) {
      &:after {
        height: 40px;
        bottom: -20px;
      }
    }
`;

const defaultState = {
    allProducts: true,
    filterOne: false,
    filterTwo: false,
    filterThree: false,
    filterFour: false,
    filterFive: false,
    limit: 12, 
}

class ProductsDove extends React.Component{

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

    handleShowFilterThree = () => {
        this.setState({
            ...defaultState, 
            filterThree: true,
        })
    }

    handleShowFilterFour = () => {
        this.setState({
            ...defaultState, 
            filterFour: true,
        })
    }

    handleShowFilterFive = () => {
        this.setState({
            ...defaultState, 
            filterFive: true,
        })
    }


    ifURL = () => {
        if (window.location.search == "?filter=Sampoonid") {
            return (
                this.state.allProducts = false,
                this.state.filterOne = true,
                this.state.filterTwo = false,
                this.state.filterThree = false,
                this.state.filterFour = false,
                this.state.filterFive = false);
        } else if (window.location.search == "?filter=Dusigeelid") {
            return (
                this.state.allProducts = false,
                this.state.filterOne = false,
                this.state.filterTwo = true,
                this.state.filterThree = false,
                this.state.filterFour = false,
                this.state.filterFive = false);
        } else if (window.location.search == "?filter=Deodorandid") {
            return (
                this.state.allProducts = false,
                this.state.filterOne = false,
                this.state.filterTwo = false,
                this.state.filterThree = true,
                this.state.filterFour = false,
                this.state.filterFive = false);
        } else if (window.location.search == "?filter=Seebid") {
            return (
                this.state.allProducts = false,
                this.state.filterOne = false,
                this.state.filterTwo = false,
                this.state.filterThree = false,
                this.state.filterFour = true,
                this.state.filterFive = false);
        } else if (window.location.search == "?filter=Kreemid-ja-muu") {
            return (
                this.state.allProducts = false,
                this.state.filterOne = false,
                this.state.filterTwo = false,
                this.state.filterThree = false,
                this.state.filterFour = false,
                this.state.filterFive = true);
        } else {
            return (
                this.state.allProducts = true,
                this.state.filterOne = false,
                this.state.filterTwo = false,
                this.state.filterThree = false,
                this.state.filterFour = false,
                this.state.filterFive = false);
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
        <SEO title="Dove Tooted" description="Dove tootekataloog - deodorandid, juuksehooldus, kehahooldus ning kreemid. Tutvu lähemalt Dove toodetega ning vaata, kust on võimalik meie tooteid soetada."/>
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true">
        <ImageSection>
            <DoveHeroImage src={DoveHeroImg} alt="Dove Tooted"/>
        </ImageSection>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeIn" delay="600" animateOnce="true">
        <ProductSectionDiv>
        <FilterDiv onLoad={this.ifURL()}>
            <h2 style={{textAlign: "center", fontWeight: "bold"}}>Kategooriad:</h2>
            <Filter onClick={ () => {clearURL();this.handleShowAll();}}>
                Kõik Tooted
            </Filter>
            <Filter onClick={ () => {addURL("Sampoonid"); this.handleShowFilterOne();}}>
                Šampoonid ja palsamid
            </Filter>
            <Filter onClick={ () => {addURL("Dusigeelid"); this.handleShowFilterTwo();}}>
                Dušigeelid
            </Filter>
            <Filter onClick={ () => {addURL("Deodorandid"); this.handleShowFilterThree();}}>
                Deodorandid
            </Filter>
            <Filter onClick={ () => {addURL("Seebid"); this.handleShowFilterFour();}}>
                Seebid
            </Filter>
            <Filter onClick={ () => {addURL("Kreemid-ja-muu"); this.handleShowFilterFive();}}>
                Kreemid ja muu
            </Filter>
        </FilterDiv>
        <ProductDiv>
            <div class="divider"></div>
            {this.state.allProducts ? (
                <div>
                <h1 style={{textAlign: "center"}}>Kõik Tooted</h1>
                <ProductsUl>
                    {data.allProduct.nodes.filter((_,i) => i<this.state.limit).map(item => (
                        <li key={item.id}>
                            <a href={`/dove/products/${item.id}`}>
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
                <h1 style={{textAlign: "center" }}>Šampoonid ja palsamid</h1>
                <ProductsUl>
                    {data.allProduct.nodes.filter(item => (item.shortTitle.includes("Šampoonid ja palsamid"))).map(item => (
                        <li key={item.id}>
                            <a href={`/dove/products/${item.id}`}>
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
                <h1 style={{textAlign: "center"}}>Dušigeelid</h1>
                <ProductsUl>
                    {data.allProduct.nodes.filter(item => (item.shortTitle.includes("Dusigeelid"))).map(item => (
                        <li key={item.id}>
                            <a href={`/dove/products/${item.id}`}>
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
            {this.state.filterThree ? (
                <div>
                <h1 style={{textAlign: "center"}}>Deodorandid</h1>
                <ProductsUl>
                    {data.allProduct.nodes.filter(item => (item.shortTitle.includes("Deodorandid"))).map(item => (
                        <li key={item.id}>
                            <a href={`/dove/products/${item.id}`}>
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
            {this.state.filterFour ? (
                <div>
                <h1 style={{textAlign: "center"}}>Seebid</h1>
                <ProductsUl>
                    {data.allProduct.nodes.filter(item => (item.shortTitle.includes("Seebid"))).map(item => (
                        <li key={item.id}>
                            <a href={`/dove/products/${item.id}`}>
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
            {this.state.filterFive ? (
                <div>
                <h1 style={{textAlign: "center"}}>Kreemid ja muu</h1>
                <ProductsUl>
                    {data.allProduct.nodes.filter(item => (item.shortTitle.includes("Kreemid ja muu"))).map(item => (
                        <li key={item.id}>
                            <a href={`/dove/products/${item.id}`}>
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
        </ProductSectionDiv>
        </ScrollAnimation>
        </>
      );
      }

}



export default ProductsDove;