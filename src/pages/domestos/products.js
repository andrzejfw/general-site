import React from "react"
import styled from 'styled-components'
import { graphql } from 'gatsby'
import DomestosHeroImg from '../../assets/images/domestos-products-hero.jpg'
import DomestosHeroImgMobile from '../../assets/images/domestos-products-hero-mobile.jpg'

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
    width: 150px;
    border: none;
    margin: 10px 10px;
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
      background: white;
      border: solid 2px #06154b;
      color: #06154b;
      font-weight: bold;
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
        background:radial-gradient(circle at 20% 15%,#123c7b,#06154b 61%);
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
    filterThree: false,
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

    handleShowFilterThree = () => {
        this.setState({
            ...defaultState, 
            filterThree: true,
        })
    }


    ifURL = () => {
        if (window.location.search == "?filter=Functional") {
            return (
                this.state.allProducts = false,
                this.state.filterOne = true,
                this.state.filterTwo = false,
                this.state.filterThree = false);
        } else if (window.location.search == "?filter=Herbal") {
            return (
                this.state.allProducts = false,
                this.state.filterOne = false,
                this.state.filterTwo = true,
                this.state.filterThree = false);
        } else if (window.location.search == "?filter=Green") {
            return (
                this.state.allProducts = false,
                this.state.filterOne = false,
                this.state.filterTwo = false,
                this.state.filterThree = true);
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
        <DomestosHeroImage src={DomestosHeroImg} alt="Magnum jäätis"/>
        <ProductSectionDiv>
        <FilterDiv onLoad={this.ifURL()}>
            <h2 style={{textAlign: "center", fontWeight: "bold"}}>Kategooriad:</h2>
            <Filter onClick={ () => {clearURL();this.handleShowAll();}}>
                All​​
            </Filter>
            <Filter onClick={ () => {addURL("Functional"); this.handleShowFilterOne();}}>
                Functional
            </Filter>
            <Filter onClick={ () => {addURL("Herbal"); this.handleShowFilterTwo();}}>
                Herbal
            </Filter>
            <Filter onClick={ () => {addURL("Green"); this.handleShowFilterThree();}}>
                Green
            </Filter>
        </FilterDiv>
        <ProductDiv>
            <div class="divider"></div>
            {this.state.allProducts ? (
                <div>
                <h1 style={{textAlign: "center"}}>All Teas</h1>
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
                <ShowMore background="none" onClick={() => this.setState({limit: this.state.limit+12})}> Show More </ShowMore>}
            </div>
            ) : null}
            </ProductDiv>
            <ProductDiv>
            <div class="divider"></div>
            {this.state.filterOne ? (
                <div>
                <h1 style={{textAlign: "center" }}>Functional</h1>
                <ProductsUl>
                    {data.allProduct.nodes.filter(item => (item.shortTitle.includes("Functional"))).map(item => (
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
            <ProductDiv>
            <div class="divider"></div>
            {this.state.filterTwo ? (
                <div>
                <h1 style={{textAlign: "center"}}>Herbal</h1>
                <ProductsUl>
                    {data.allProduct.nodes.filter(item => (item.shortTitle.includes("Herbal"))).map(item => (
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
            <ProductDiv>
            <div class="divider"></div>
            {this.state.filterThree ? (
                <div>
                <h1 style={{textAlign: "center"}}>Green</h1>
                <ProductsUl>
                    {data.allProduct.nodes.filter(item => (item.shortTitle.includes("Green"))).map(item => (
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
        </ProductSectionDiv>
        </>
      );
      }

}



export default ProductsDomestos;