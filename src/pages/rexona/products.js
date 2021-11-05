import React, { useEffect } from "react"
import styled from 'styled-components'
import { graphql } from 'gatsby'
import RexonaHeroImg from '../../assets/images/rexona-products-hero.jpg'
import RexonaHeroImgMobile from '../../assets/images/rexona-products-hero-mobile.jpg'
import ScrollAnimation from 'react-animate-on-scroll';


export const data = graphql`
query MyQueryProductsRexona {
    allProduct(filter: {brand: {eq: "Rexona"}}) {
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

const RexonaHeroImage = styled.img`
    width: 100%;
    height: 550px;
    object-fit: cover;

    @media (max-width: 1200px) {
        height: 400px;
        content: url(${RexonaHeroImgMobile});
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
        color: #103073;
        text-align: center;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 3rem;
        -webkit-text-stroke-color: #103073;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 1px;

        @media(max-width:692px){
        width: 90vw;
        margin: 0 auto 20px;
      }
    }

    h2 {
        color: #103073;
        font-size: 1.3rem;
    }
`;

const FilterDiv = styled.div`
width: 15%;
margin-left: 5%;
margin-top: 100px;
float: left;
text-align: center;
position: sticky;
top: 120px;
left: 0;

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
      background: #103073;
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
    font-weight:700;
    font-size: 1.125rem;
    padding: 10px 10px;
    width: 150px;
    border: 1px solid;
    border-color:#054281;
    margin: 10px 10px;
    border-radius: 3px;
    background:#103073;
    text-transform:none;
    transition:.5s;
    outline: none;
    text-decoration:none;
    &:hover{
      color: #fff;
      background-color: #0D233C;
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
        color: #103073;
        border-radius: 15px;
        width: 80%;
        padding: 0 10px 10px 10px;
        margin-bottom: 7%;
        font-weight: bold;
        text-align: center;
        height: 90%;

        h3 {
            font-size: 1rem;
            margin-top: 10px;
        }
    }
    
    @media (max-width: 692px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const ShowMore = styled.button`
    color: white;
    font-weight:700;
    font-size: 1.125rem;
    padding: 10px 30px;
    width: 150px;
    border: 1px solid;
    border-color:#054281;
    margin: 10px 10px;
    border-radius: 3px;
    background:#103073;
    text-transform:none;
    transition:.5s;
    box-shadow: 0px -3px 2px rgba(0, 0, 0, 0.39);
    outline: none;
    text-decoration:none;
    &:hover{
    background:#0D233C;
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

class ProductsRexona extends React.Component{

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
        if (window.location.search == "?filter=meeste-deodorandid") {
            return (
                this.state.allProducts = false,
                this.state.filterOne = true,
                this.state.filterTwo = false);
        } else if (window.location.search == "?filter=naiste-deodorandid") {
            return (
                this.state.allProducts = false,
                this.state.filterOne = false,
                this.state.filterTwo = true);
        }
    }
    componentDidMount = () => {
        this.ifURL()
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
        <RexonaHeroImage src={RexonaHeroImg} alt="Rexona move"/>
        <ProductSectionDiv>
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true">
        <FilterDiv>
            <h2 style={{textAlign: "center", fontWeight: "bold",}}>Kategooriad:</h2>
            <Filter onClick={ () => {clearURL();this.handleShowAll();}}>
            Kõik Tooted
            </Filter>
            <Filter onClick={ () => {addURL("meeste-deodorandid"); this.handleShowFilterOne();}}>
            Meeste deodorandid
            </Filter>
            <Filter onClick={ () => {addURL("naiste-deodorandid"); this.handleShowFilterTwo();}}>
            Naiste deodorandid
            </Filter>
        </FilterDiv>
        </ScrollAnimation>
        <ProductDiv>
            <div class="divider"></div>
            {this.state.allProducts ? (
                <div>
                <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce="true"><h1 style={{textAlign: "center"}}>Kõik Tooted</h1></ScrollAnimation>
                <ProductsUl>
                    {data.allProduct.nodes.filter((_,i) => i<this.state.limit).map(item => (
                        <li key={item.id}>
                            <a href={`/rexona/products/${item.id}`}>
                            <div>
                                <img src={item.img}/>
                                <h3>{item.fullName}</h3>
                            </div>
                            </a>
                        </li>
                    ))}
                </ProductsUl>
                {(data.allProduct.nodes.length>12 && this.state.limit<data.allProduct.nodes.length) && 
                <ShowMore background="none" onClick={() => this.setState({limit: this.state.limit+12})}>Näita rohkem</ShowMore>}
            </div>
            ) : null}
            
            
            <div class="divider"></div>
            {this.state.filterOne ? (
                <div>
                <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce="true"><h1 style={{textAlign: "center" }}>Meeste deodorandid</h1></ScrollAnimation>
                <ProductsUl>
                    {data.allProduct.nodes.filter(item => (item.shortTitle.includes("meeste-deodorandid"))).map(item => (
                        <li key={item.id}>
                            <a href={`/rexona/products/${item.id}`}>
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
                <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce="true"><h1 style={{textAlign: "center"}}>Naiste deodorandid</h1></ScrollAnimation>
                <ProductsUl>
                    {data.allProduct.nodes.filter(item => (item.shortTitle.includes("naiste-deodorandid"))).map(item => (
                        <li key={item.id}>
                            <a href={`/rexona/products/${item.id}`}>
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
        </>
      );
      }

}



export default ProductsRexona;