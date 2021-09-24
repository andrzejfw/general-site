import React from "react"
import styled from 'styled-components'
import { graphql } from 'gatsby'
import MagnumHeroImg from '../../assets/images/magnum-products-hero.jpg'
import MagnumHeroImgMobile from '../../assets/images/magnum-products-hero-mobile.jpg'

export const data = graphql`
query MyQueryProductsMagnum {
    allProduct(filter: {brand: {eq: "Magnum"}}) {
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

const MagnumHeroImage = styled.img`
    width: 100%;
    height: 550px;
    object-fit: cover;

    @media (max-width: 1200px) {
        height: 400px;
        content: url(${MagnumHeroImgMobile});
    }

    @media (max-width: 692px) {
        margin-top: 50px;
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
    }

    h1 {
        color: #523022;
        text-align: center;
        margin-bottom: 50px;
        font-weight: 700;
    }

    h2 {
        color: #523022;
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
      background: linear-gradient(60deg,#edd496 0,#c5923c 40%,#c5923c 60%,#edd496 100%);
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
    color: #523022;
    padding: 10px 30px;
    width: 150px;
    margin: 10px 10px;
    border-radius: 10px;
    background:linear-gradient(60deg,#c5923c 0,#edd496 40%,#edd496 60%,#c5923c 100%);
    border:none;
    text-transform:none;
    transition:.5s;
    box-shadow: 0px -3px 2px rgba(0, 0, 0, 0.39);
    outline: none;
    text-decoration:none;
    &:hover{
      background: linear-gradient(60deg,#4e2c1d 0,#c5923c 40%,#c5923c 60%,#4e2c1d 100%);
      transform: scale(1.1);
      opacity: 1;
      border:none;
      outline: none;
      text-decoration:none;
    }
    &:focus{
      outline: none;
      background: linear-gradient(60deg,#4e2c1d 0,#c5923c 40%,#c5923c 60%,#4e2c1d 100%);
      color: #523022;
      font-weight: bold;
    }
    &:visited{
        outline: none;
        background: linear-gradient(60deg,#4e2c1d 0,#c5923c 40%,#c5923c 60%,#4e2c1d 100%);
        color: #523022;
        font-weight: bold;
      }
`;
const ProductsUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style: none;
    justify-items: center;
    padding-left: 5%;

    @media (max-width: 692px) {
        border-left: none;
        padding-left: 0;
    }

    img{
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 80%;
        transition: all .2s linear;

        &:hover {
            transform: scale(1.1);
        }
    }
    div {
        margin-left: auto;
        margin-right: auto;
        background: linear-gradient(60deg,#c5923c 0,#edd496 40%,#edd496 60%,#c5923c 100%);;
        color: #523022;
        border-radius: 15px;
        width: 80%;
        padding: 0 10px 10px 10px;
        margin-bottom: 7%;
        font-weight: bold;
        text-align: center;
        height: 90%;

        h3 {
            font-size: 1rem;
        }
    }

    @media (max-width: 692px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const ShowMore = styled.button`
    color: #523022;
    padding: 10px 30px;
    width: 150px;
    border: none;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    background:linear-gradient(60deg,#c5923c 0,#edd496 40%,#edd496 60%,#c5923c 100%);
    border:none;
    text-transform:none;
    transition:.5s;
    box-shadow: 0px -3px 2px rgba(0, 0, 0, 0.39);
    outline: none;
    text-decoration:none;
    &:hover{
      background: linear-gradient(60deg,#4e2c1d 0,#c5923c 40%,#c5923c 60%,#4e2c1d 100%);
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

class ProductsMagnum extends React.Component{

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
        if (window.location.search == "?filter=pulgajaatised") {
            return (
                this.state.allProducts = false,
                this.state.filterOne = true,
                this.state.filterTwo = false, 
                this.state.filterThree = false);
        } else if (window.location.search == "?filter=perejaatised") {
            return (
                this.state.allProducts = false,
                this.state.filterOne = false,
                this.state.filterTwo = true,
                this.state.filterThree = false);
        } else {
            return (
                this.state.allProducts = true,
                this.state.filterOne = false,
                this.state.filterTwo = false,
                this.state.filterThree = false);
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
        <MagnumHeroImage src={MagnumHeroImg} alt="Magnum jäätis"/> 
        <ProductSectionDiv>
        <FilterDiv onLoad={this.ifURL()}>
            <h2>Kategooriad</h2>
            <Filter onClick={ () => {clearURL();this.handleShowAll();}}>
                Kogu jäätis
            </Filter>
            <Filter onClick={ () => {addURL("pulgajaatised"); this.handleShowFilterOne();}}>
                Pulgajäätised
            </Filter>
            <Filter onClick={ () => {addURL("perejaatised"); this.handleShowFilterTwo();}}>
                Perejäätised
            </Filter>
        </FilterDiv>
        <ProductDiv>
            <div class="divider"></div>
            {this.state.allProducts ? (
                <div>
                <h1>Kogu jäätis</h1>
                <ProductsUl>
                    {data.allProduct.nodes.filter((_,i) => i<this.state.limit).map(item => (
                        <li key={item.id}>
                            <a href={`/magnum/products/${item.id}`}>
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
                <h1>Pulgajäätised</h1>
                <ProductsUl>
                    {data.allProduct.nodes.filter(item => (item.productLine.includes("Pulgajäätised"))).map(item => (
                        <li key={item.id}>
                            <div>
                                <img src={item.img}/>
                                <h3>{item.fullName}</h3>
                            </div>
                        </li>
                    ))}
                </ProductsUl>
            </div>
            ) : null}
            
            
            <div class="divider"></div>
            {this.state.filterTwo ? (
                <div>
                <h1 style={{textAlign: "center"}}>Perejäätised</h1>
                <ProductsUl>
                    {data.allProduct.nodes.filter(item => (item.productLine.includes("Perejäätised"))).map(item => (
                        <li key={item.id}>
                            <div>
                                <img src={item.img}/>
                                <h3>{item.fullName}</h3>
                            </div>
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
export default ProductsMagnum;