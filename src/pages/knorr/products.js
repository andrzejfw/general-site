import React from "react"
import styled from 'styled-components'
import { graphql } from 'gatsby'
import KnorrHeroImg from '../../assets/images/knorr-products-hero.jpg'
import KnorrHeroImgMobile from '../../assets/images/knorr-products-hero-mobile.jpg'
import ScrollAnimation from 'react-animate-on-scroll'

export const data = graphql`
query MyQueryProductsKnorr {
    allProduct(filter: {brand: {eq: "Lipton"}}) {
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

const KnorrHeroImage = styled.img`
    width: 100%;
    height: 550px;
    object-fit: cover;

    @media (max-width: 1200px) {
        height: 400px;
        content: url(${KnorrHeroImgMobile});
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
        color: #007a33;
        text-align: center;
        margin-bottom: 50px;
        font-weight: 700;
    }

    h2 {
        color: #007a33;
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
      background: linear-gradient(60deg,#fff 0,#007a33 40%,#007a33 60%,#fff 100%);
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
    border: 1px solid #007a33;
    background-color: #007a33;
    margin: 10px 10px;
    border-radius: 10px;
    text-transform:none;
    transition: all .2s ease-in-out;
    outline: none;
    text-decoration:none;
    &:hover{
    text-decoration: none;
    transform: scale(1.1);
    border-color: #ffd32e;
    text-decoration: none;
    color: #fff;
    background-color: #ffd32e;
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
        background: rgba(0,122,51,0.2);
        color: #007a33;
        padding: 0 10px 10px 10px;
        border-radius: 2px;
        width: 80%;
        margin-bottom: 7%;
        font-weight: bold;
        text-align: center;
        height: 90%;

        h3 {
            font-size: 1rem;
            font-weight: bold;
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
    border: 1px solid #007a33;
    background-color: #007a33;
    margin: 10px 10px;
    border-radius: 10px;
    text-transform:none;
    transition: all .2s ease-in-out;
    outline: none;
    text-decoration:none;
    &:hover{
    text-decoration: none;
    transform: scale(1.1);
    border-color: #ffd32e;
    text-decoration: none;
    color: #fff;
    background-color: #ffd32e;
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
    filterFour: false,
    limit: 12, 
}

class ProductsKnorr extends React.Component{

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


    ifURL = () => {
        if (window.location.search == "?filter=Pakisupid") {
            return (
                this.state.allProducts = false,
                this.state.filterOne = true,
                this.state.filterTwo = false,
                this.state.filterThree = false,
                this.state.filterFour = false);
        } else if (window.location.search == "?filter=Topsiroad") {
            return (
                this.state.allProducts = false,
                this.state.filterOne = false,
                this.state.filterTwo = true,
                this.state.filterThree = false,
                this.state.filterFour = false);
        } else if (window.location.search == "?filter=Kiirnuudlid") {
            return (
                this.state.allProducts = false,
                this.state.filterOne = false,
                this.state.filterTwo = false,
                this.state.filterThree = true,
                this.state.filterFour = false);
        } else if (window.location.search == "?filter=Puljongid") {
            return (
                this.state.allProducts = false,
                this.state.filterOne = false,
                this.state.filterTwo = false,
                this.state.filterThree = false,
                this.state.filterFour = true);
        } else {
            return (
                this.state.allProducts = true,
                this.state.filterOne = false,
                this.state.filterTwo = false,
                this.state.filterThree = false,
                this.state.filterFour = false);
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
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true"><KnorrHeroImage src={KnorrHeroImg} alt="Knorr food"/></ScrollAnimation>
        <ProductSectionDiv>
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true">
            <FilterDiv onLoad={this.ifURL()}>
            <h2 style={{textAlign: "center", fontWeight: "bold"}}>Kategooriad:</h2>
            <Filter onClick={ () => {clearURL();this.handleShowAll();}}>
            Kõik tooted
            </Filter>
            <Filter onClick={ () => {addURL("Pakisupid"); this.handleShowFilterOne();}}>
            Pakisupid
            </Filter>
            <Filter onClick={ () => {addURL("Topsiroad"); this.handleShowFilterTwo();}}>
            Topsiroad
            </Filter>
            <Filter onClick={ () => {addURL("Kiirnuudlid"); this.handleShowFilterThree();}}>
            Kiirnuudlid
            </Filter>
            <Filter onClick={ () => {addURL("Puljongid"); this.handleShowFilterFour();}}>
            Puljongid
            </Filter>
        </FilterDiv>
        </ScrollAnimation>
            <ProductDiv>
            <div class="divider"></div>
            {this.state.allProducts ? (
                <div>
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true"><h1 style={{textAlign: "center"}}>Kõik tooted</h1></ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true">
                    <ProductsUl>
                    {data.allProduct.nodes.filter((_,i) => i<this.state.limit).map(item => (
                        <li key={item.id}>
                            <a href={`/knorr/products/${item.id}`}>
                            <div>
                                <img src={item.img}/>
                                <h3>{item.fullName}</h3>
                            </div>
                            </a>
                        </li>
                    ))}
                </ProductsUl></ScrollAnimation>
                {(data.allProduct.nodes.length>12 && this.state.limit<data.allProduct.nodes.length) && 
                <ShowMore background="none" onClick={() => this.setState({limit: this.state.limit+12})}> Show More </ShowMore>}
            </div>
            ) : null}
            
            
            <div class="divider"></div>
            {this.state.filterOne ? (
                <div>
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true"><h1 style={{textAlign: "center" }}>Pakisupid</h1></ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true">
                <ProductsUl>
                    {data.allProduct.nodes.filter(item => (item.shortTitle.includes("Pakisupid"))).map(item => (
                        <li key={item.id}>
                            <a href={`/knorr/products/${item.id}`}>
                            <div>
                                <img src={item.img}/>
                                <h3>{item.fullName}</h3>
                            </div>
                            </a>
                        </li>
                    ))}
                </ProductsUl>
                </ScrollAnimation>
            </div>
            ) : null}
            
            
            <div class="divider"></div>
            {this.state.filterTwo ? (
                <div>
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true"><h1 style={{textAlign: "center"}}>Topsiroad</h1></ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true">
                <ProductsUl>
                    {data.allProduct.nodes.filter(item => (item.shortTitle.includes("Topsiroad"))).map(item => (
                        <li key={item.id}>
                            <a href={`/knorr/products/${item.id}`}>
                            <div>
                                <img src={item.img}/>
                                <h3>{item.fullName}</h3>
                            </div>
                            </a>
                        </li>
                    ))}
                </ProductsUl>
                </ScrollAnimation>
            </div>
            ) : null}
            
            
            <div class="divider"></div>
            {this.state.filterThree ? (
                <div>
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true"><h1 style={{textAlign: "center"}}>Kiirnuudlid</h1></ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true">
                <ProductsUl>
                    {data.allProduct.nodes.filter(item => (item.shortTitle.includes("Kiirnuudlid"))).map(item => (
                        <li key={item.id}>
                            <a href={`/knorr/products/${item.id}`}>
                            <div>
                                <img src={item.img}/>
                                <h3>{item.fullName}</h3>
                            </div>
                            </a>
                        </li>
                    ))}
                </ProductsUl>
                </ScrollAnimation>
            </div>
            ) : null}
            
            
            <div class="divider"></div>
            {this.state.filterFour ? (
                <div>
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true"><h1 style={{textAlign: "center"}}>Puljongid</h1></ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true">
                <ProductsUl>
                    {data.allProduct.nodes.filter(item => (item.shortTitle.includes("Puljongid"))).map(item => (
                        <li key={item.id}>
                            <a href={`/knorr/products/${item.id}`}>
                            <div>
                                <img src={item.img}/>
                                <h3>{item.fullName}</h3>
                            </div>
                            </a>
                        </li>
                    ))}
                </ProductsUl>
                </ScrollAnimation>
            </div>
            ) : null}
            </ProductDiv>
        </ProductSectionDiv>
        </>
      );
      }

}



export default ProductsKnorr;