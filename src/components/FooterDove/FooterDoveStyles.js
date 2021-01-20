import { createGlobalStyle } from 'styled-components';

const FooterDoveStyles = createGlobalStyle`
.footer-dove-container{
    height: 180px;
    z-index:2;
    margin-top: -10px;
    background-color: #f4f4f4;

    @media (max-width: 500px) {
        height: 250px;
    } 
}

.footer-dove-nav-wrapper {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items:center;
    background-color: transparent;
    position: relative;
    justify-content: space-between;
    text-transform: uppercase;
    margin: 0 32% 0 22%;
    z-index: 2;
    align-self: center;
    
    @media (max-width:1600px){
        margin: 0 10% 0 5%;
        padding: 0 10%;
        max-width: 1000px;
    }

    @media (max-width:1200px){
        padding: 0 15% 0 0;
    }

    @media (max-width:692px){
        padding: 0 10%;
        height:100%;
        margin: 0 auto 5%;
        justify-content: center;
        align-items: flex-start;
    }
    @media (max-width: 500px) {
        display:flex;
        flex-direction:column;
        margin: 0;
    }   
}

.footer-dove-list {
    margin:0;
    padding:0;
    display:flex;
    list-style:none;
    justify-content:space-between;
    align-items:flex-start;
    
    @media(max-width:692px){
        flex-direction:column;
        justify-content:center;
        align-items:left;
    }
}

.footer-dove-section {
    display:flex;
    justify-content: space-between;
}

.footer-dove-image-containter {
    display:flex;
}

.footer-dove-item {
    color: #054281;
    display: inline-block;
    white-space: nowrap;
    margin: 0 1vw; 
    position: relative;  
    text-transform:capitalize;
    list-style:none;
    text-decoration:none;
    display:flex;
    transition: all .2s linear;

    a{
        text-decoration:none;
        color: #054281;
        transition: all .3s linear;
        &:hover {
        color: #054281;
        font-weight:bold;
    }
    }
}

.footer-dove-item-list {
    color: #054281 !important;
    display: inline-block;
    white-space: nowrap;
    margin: 0 1vw;
    position: relative;
    text-transform:capitalize;
    list-style:none;
    display:flex;
    flex-direction:column;  
    align-items:center; 

    a{
        text-decoration:none;
        color: #054281;
        transition: all .3s linear;
        &:hover {
        color: #054281;
        font-weight:bold;
    }
    }

    @media(max-width:992px){
        justify-content:center;
        align-items:start;
    }
}

.footer-dove-social-image {
    width:auto;
    height:50px;
    margin:55px 50px;

    @media (max-width:500px){
        height: 30px;
        margin: 20px 10px 0 0;
  }
}

.footer-dove-unilever-div {
    z-index:2;
    background:#7f7f7f;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 3%;

    @media (max-width:992px){
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
  }
}

.footer-dove-unilever-logo {
    width:50px;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    @media(max-width:992px){
      margin: 5px auto 0;
    }
}

.footer-dove-unilever-copyright {
    font-size: .8rem;
    color: #fff;
    align-self: center;
    padding-left: 10px;

    @media (max-width:992px){
    padding-bottom: 10px;
    padding-left: 0;
    }
}

.dove-footer-graphic-image {
    width:auto;
    height:200px;
    top: -68px;
    left: 0;
    align-self: center;
    position: absolute;

    @media (max-width:1200px){
        top: -30px;
        left: 50px;
        height: 150px;
    }

    @media (max-width:800px){
        display: inline-block;
        margin: 0;
    }

    @media (max-width:700px){
        top: -110px;
        left: 200px;
    }

    @media (max-width:500px){
        top: -200px;
        left: 245px;
        height: 200px;
        margin: 0;
    }

    @media (max-width:400px){
        left: 220px;
    }

    @media (max-width:350px){
        left: 180px;
        top: -184px;
        width: 70px;
        height: auto;
    }
}
`;

export default FooterDoveStyles;