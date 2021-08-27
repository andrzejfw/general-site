import React from "react"
import styled from 'styled-components'
import { graphql } from 'gatsby'
import HellmannsHeroImg from '../../assets/images/hellmanns-products-hero.jpg'
import HellmannsHeroImgMobile from '../../assets/images/hellmanns-products-hero-mobile.jpg'
import ScrollAnimation from 'react-animate-on-scroll'

export const data = graphql`
query MyQueryProductsHellmanns {
    allProduct(filter: {brand: {eq: "Hellmanns"}}) {
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

const Section = styled.section`
    width:100%;
    margin:auto;
    padding-bottom:30px;
    text-align: center;
    background: #fdf6e8;

    @media (max-width: 692px) {
      margin-bottom: -50px;
    }
`;

const HellmannsHeroImage = styled.img`
    width: 100%;
    height: 550px;
    object-fit: cover;

    @media (max-width: 1200px) {
        height: 400px;
        content: url(${HellmannsHeroImgMobile});
    }
`;

const ProductSectionDiv = styled.div`
    background: #fdf6e8;  
    max-width: 100%;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 80px;
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
        color: #004976;
        text-align: center;
        margin-bottom: 50px;
        font-weight: 700;
    }

    h2 {
        color: #004976;
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
      width: 2px;
      height: calc(100% - 100px);
      /* background: linear-gradient(60deg,#fff 0,#004976 40%,#004976 60%,#fff 100%); */
      background: #004976;
      /* border-radius: 95%; */
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
    color: #004976;
    font-weight:700;
    padding: 10px 30px;
    width: 200px;
    border: solid 1px #004976;
    margin: 10px 10px;
    border-radius: 4px;
    background:transparent;
    text-transform:none;
    transition:.5s;
    /* box-shadow: 0px -3px 2px rgba(0, 0, 0, 0.39); */
    outline: none;
    text-decoration:none;
    &:hover{
      background:#004976;
      color:white;
      opacity: 1;
      border: solid 1px transparent;
      outline: none;
      text-decoration:none;
    }
    &:focus{
      outline: none;
      background: #004976;
      color: white;
    }
`;

const ProductsUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style: none;
    justify-items: center;
    padding-left: 10%;
    padding-right: 0;

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
        margin: 0 -20px;
        // margin-left: auto;
        // margin-right: auto;
        background: llinear-gradient(180deg,transparent 20%,20%,#ffc72e 80%,80%,transparent 100%);
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
            color: #004976;
        }
    }
    
    @media (max-width: 692px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const ShowMore = styled.button`
    color: #004976;
    font-weight:700;
    padding: 10px 30px;
    width: 150px;
    border: solid 1px #004976;
    margin: 10px 10px;
    border-radius: 4px;
    background:transparent;
    text-transform:none;
    transition:.5s;
    /* box-shadow: 0px -3px 2px rgba(0, 0, 0, 0.39); */
    outline: none;
    text-decoration:none;
    &:hover{
      background:#004976;
      color:white;
      opacity: 1;
      border: solid 1px transparent;
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

class ProductsHellmanns extends React.Component{

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
        if (window.location.search == "?filter=Majonees") {
            return (
                this.state.allProducts = false,
                this.state.filterOne = true,
                this.state.filterTwo = false,
                this.state.filterThree = false);
        } else if (window.location.search == "?filter=Ketsup") {
            return (
                this.state.allProducts = false,
                this.state.filterOne = false,
                this.state.filterTwo = true,
                this.state.filterThree = false);
        } else if (window.location.search == "?filter=Kastmed") {
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
        <Section>
        <ScrollAnimation animateIn="animate__fadeInDown" animateOnce="true">
        <HellmannsHeroImage src={HellmannsHeroImg} alt="Hellmanns Tooted"/>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp" delay="600" animateOnce="true">
        <ProductSectionDiv>
        <FilterDiv onLoad={this.ifURL()}>
            <h2 style={{textAlign: "center", fontWeight: "bold"}}>KATEGOORIAD:</h2>
            <Filter onClick={ () => {clearURL();this.handleShowAll();}}>
                KÕIK TOOTED
            </Filter>
            <Filter onClick={ () => {addURL("Majonees"); this.handleShowFilterOne();}}>
                MAJONEES
            </Filter>
            <Filter onClick={ () => {addURL("Ketsup"); this.handleShowFilterTwo();}}>
                KETŠUP
            </Filter>
            <Filter onClick={ () => {addURL("Kastmed"); this.handleShowFilterThree();}}>
                KASTMED
            </Filter>
        </FilterDiv>
        <ProductDiv>
            <div class="divider"></div>
            {this.state.allProducts ? (
                <div>
                <h1 style={{textAlign: "center"}}>KÕIK TOOTED</h1>
                <ProductsUl>
                    {data.allProduct.nodes.filter((_,i) => i<this.state.limit).map(item => (
                        <li key={item.id}>
                            <a href={`/hellmanns/products/${item.id}`}>
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
            </ProductDiv>
            <ProductDiv>
            <div class="divider"></div>
            {this.state.filterOne ? (
                <div>
                <h1 style={{textAlign: "center" }}>MAJONEES</h1>
                <ProductsUl>
                    {data.allProduct.nodes.filter(item => (item.shortTitle.includes("Majonees"))).map(item => (
                        <li key={item.id}>
                            <a href={`/hellmanns/products/${item.id}`}>
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
                <h1 style={{textAlign: "center"}}>KETŠUP</h1>
                <ProductsUl>
                    {data.allProduct.nodes.filter(item => (item.shortTitle.includes("Ketšup"))).map(item => (
                        <li key={item.id}>
                            <a href={`/hellmanns/products/${item.id}`}>
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
                <h1 style={{textAlign: "center"}}>KASTMED</h1>
                <ProductsUl>
                    {data.allProduct.nodes.filter(item => (item.shortTitle.includes("Kastmed"))).map(item => (
                        <li key={item.id}>
                            <a href={`/hellmanns/products/${item.id}`}>
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
        </Section>
        </>
      );
      }

}



export default ProductsHellmanns;