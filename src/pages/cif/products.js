import React from "react"
import styled from 'styled-components'
import { graphql } from 'gatsby'
import CifHeroImg from '../../assets/images/cif-products-hero.jpg'
import CifHeroImgMobile from '../../assets/images/cif-products-hero-mobile.jpg'
import ScrollAnimation from 'react-animate-on-scroll'
import SEO from '../../components/Seo/Seo'

export const data = graphql`
query MyQueryProductsCif {
    allProduct(filter: {brand: {eq: "Cif"}}) {
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

const CifHeroImage = styled.img`
    width: 100%;
    height: 550px;
    object-fit: cover;

    @media (max-width: 1200px) {
        height: 400px;
        content: url(${CifHeroImgMobile});
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
        color: #165648;
        text-align: center;
        margin-bottom: 50px;
        font-weight: 700;
    }

    h2 {
        color: #165648;
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
      background: linear-gradient(60deg,#20856e 0,#165648 40%,#165648 60%,#20856e 100%);
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
    /* padding: 0 1.25rem; */
    width: 200px;
    height: 3.125rem;
    border: transparent;
    /* border-bottom: 3px solid #2fa354;
    border-left: 3px solid #2fa354; */
    margin: 10px 10px;
    /* border-radius: 50%; */
    background:linear-gradient(to right,#165648,#20856e);
    text-transform:none;
    transition:.5s;
    outline: none;
    text-decoration:none;
    font-size: 1.5rem;
    &:hover{
      background:linear-gradient(to right,#20856e,#165648);
      /* transform: scale(1.15); */
      opacity: 1;
      /* border-bottom: 1px solid transparent;
      border-left: 1px solid transparent;
      border-top: 3px solid #2fa354;
      border-right: 3px solid #2fa354; */
      outline: none;
      text-decoration:none;
      transition:.5s;
    }
    &:focus{
      outline: none;
      background: #3b7b6d;
      color: white;
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
        box-shadow: 5px 5px 20px #9fb9b4;
        color: #165648;
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
        }
    }
    
    @media (max-width: 692px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const ShowMore = styled.button`
    color: white;
    padding: 0 1.25rem;
    width: 150px;
    height: 3.125rem;
    border: transparent;
    border-bottom: 3px solid #2fa354;
    border-left: 3px solid #2fa354;
    margin: 10px 10px;
    border-radius: 50%;
    background:#71b0a2;
    text-transform:none;
    transition:.5s;
    outline: none;
    text-decoration:none;
    font-size: 1.5rem;
    &:hover{
    background:#71b0a2;
    transform: scale(1.15);
    opacity: 1;
    border-bottom: 1px solid transparent;
    border-left: 1px solid transparent;
    border-top: 3px solid #2fa354;
    border-right: 3px solid #2fa354;
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

class ProductsCif extends React.Component{

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
        if (window.location.search == "?filter=Puhastuskreemid") {
            return (
                this.state.allProducts = false,
                this.state.filterOne = true,
                this.state.filterTwo = false);
        } else if (window.location.search == "?filter=Pihustid") {
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
        <SEO title="Cif Tooted" description="Cif tootekataloog - puhastuskreemid ja pihustid. Tutvu meie tootevalikuga. Puhastusvahendid terve kodu jaoks. Vaata lähemalt."/>
        <CifHeroImage src={CifHeroImg} alt="Cif Tooted"/>
        <ProductSectionDiv>
        <ScrollAnimation animateIn="animate__fadeInLeft" delay="200" animateOnce="true" >
        <FilterDiv onLoad={this.ifURL()}>
            <h2 style={{textAlign: "center", fontWeight: "bold"}}>Kategooriad:</h2>
            <Filter onClick={ () => {clearURL();this.handleShowAll();}}>
                Kõik Tooted
            </Filter>
            <Filter onClick={ () => {addURL("Puhastuskreemid"); this.handleShowFilterOne();}}>
                Puhastuskreemid
            </Filter>
            <Filter onClick={ () => {addURL("Pihustid"); this.handleShowFilterTwo();}}>
                Pihustid
            </Filter>
        </FilterDiv>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true" >
        <ProductDiv>
            <div class="divider"></div>
            {this.state.allProducts ? (
                <div>
                <h1 style={{textAlign: "center"}}>Kõik Tooted</h1>
                <ProductsUl>
                    {data.allProduct.nodes.filter((_,i) => i<this.state.limit).map(item => (
                        <li key={item.id}>
                            <a href={`/cif/products/${item.id}`}>
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
                <h1 style={{textAlign: "center" }}>Puhastuskreemid</h1>
                <ProductsUl>
                    {data.allProduct.nodes.filter(item => (item.shortTitle.includes("Puhastuskreemid"))).map(item => (
                        <li key={item.id}>
                            <a href={`/cif/products/${item.id}`}>
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
                <h1 style={{textAlign: "center"}}>Pihustid</h1>
                <ProductsUl>
                    {data.allProduct.nodes.filter(item => (item.shortTitle.includes("Pihustid"))).map(item => (
                        <li key={item.id}>
                            <a href={`/cif/products/${item.id}`}>
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



export default ProductsCif;