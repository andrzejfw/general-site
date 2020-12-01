import React from "react"
import styled from 'styled-components'
import { graphql } from 'gatsby'



export const data = graphql`
query MyQueryProductsLipton {
    allProduct {
      nodes {
        id
        fullName
        slug
      }
    }
  }
  

`;

const FilterDiv = styled.div`
    max-width: 1200px;
    margin: 50px auto 20px;
    text-align: center;
`;

const Filter = styled.button`
    color: white;
    background: #c8381d;
    padding: 10px 30px;
    width: 150px;
    border: none;
    margin: 20px 10px;
    border-radius: 10px;
`;

const ProductsUl = styled.ul`
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
    margin: 0 auto 100px;
    justify-items: center;
`;





class ProductsLipton extends React.Component{
    
    state = {
        allProducts: true,
        filterOne: false,
        filterTwo: false,
        filterThree: false,
    }

    handleShowAll = () => {
        this.setState({
            allProducts: true,
            filterOne: false,
            filterTwo: false,
            filterThree: false,
        })
    }

    handleShowFilterOne = () => {
        this.setState({
            allProducts: false,
            filterOne: true,
            filterTwo: false,
            filterThree: false,
        })
    }

    handleShowFilterTwo = () => {
        this.setState({
            allProducts: false,
            filterOne: false,
            filterTwo: true,
            filterThree: false,
        })
    }

    handleShowFilterThree = () => {
        this.setState({
            allProducts: false,
            filterOne: false,
            filterTwo: false,
            filterThree: true,
        })
    }
    

    ifURL = () => {
        if (window.location.search == "?filter=black") {
            return (
                this.state.allProducts = false,
                this.state.filterOne = true,
                this.state.filterTwo = false, 
                this.state.filterThree = false);
        } else if (window.location.search == "?filter=green") {
            return (
                this.state.allProducts = false,
                this.state.filterOne = false,
                this.state.filterTwo = true,
                this.state.filterThree = false);
        } else if (window.location.search == "?filter=functional") {
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
        <FilterDiv onLoad={this.ifURL()}>
            <Filter onClick={ () => {clearURL();this.handleShowAll();}}>
                All​​
            </Filter>
            <Filter onClick={ () => {addURL("black"); this.handleShowFilterOne();}}>
                Black​​
            </Filter>
            <Filter onClick={ () => {addURL("green"); this.handleShowFilterTwo();}}>
                Green​​
            </Filter>
            <Filter onClick={ () => {addURL("functional"); this.handleShowFilterThree();}}>
                Functional
            </Filter>
        </FilterDiv>

            {this.state.allProducts ? (
                <div>
                <h1 style={{textAlign: "center"}}>All Teas</h1>
                <ProductsUl>
                    {data.allProduct.nodes.map(item => (
                        <li key={item.id}>
                            <img src={item.img} width="200px"/>
                            <div>
                                {item.fullName}
                            </div>
                        </li>
                    ))}
                </ProductsUl>
            </div>
            ) : null}

            {this.state.filterOne ? (
                <div>
                <h1 style={{textAlign: "center"}}>Black Teas</h1>
                <ProductsUl>
                    {data.allProduct.nodes
                    .filter(item => (item.fullName.includes("FULL TITLE2")))
                    .map(item => (
                        <li key={item.id}>
                            <img src={item.img} width="200px"/>
                            <div>
                                {item.fullName}
                            </div>
                        </li>
                    ))}
                </ProductsUl>
            </div>
            ) : null}

            {this.state.filterTwo ? (
                <div>
                <h1 style={{textAlign: "center"}}>Green Teas</h1>
                <ProductsUl>
                    {data.allProduct.nodes
                    .filter(item => (item.fullName.includes("FULL TITLE")))
                    .map(item => (
                        <li key={item.id}>
                            <img src={item.img} width="200px"/>
                            <div>
                                {item.fullName}
                            </div>
                        </li>
                    ))}
                </ProductsUl>
            </div>
            ) : null}

            {this.state.filterThree ? (
                <div>
                <h1 style={{textAlign: "center"}}>Functional Teas</h1>
                <ProductsUl>
                    {data.allProduct.nodes
                    .filter(item => (item.fullName.includes("FULL TITLE2")))
                    .map(item => (
                        <li key={item.id}>
                            <img src={item.img} width="200px"/>
                            <div>
                                {item.fullName}
                            </div>
                        </li>
                    ))}
                </ProductsUl>
            </div>
            ) : null}
        
        
        </>
      );
      }
        
}



export default ProductsLipton;