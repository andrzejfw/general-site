import { createGlobalStyle } from 'styled-components';

const FooterCifStyles = createGlobalStyle`
.footer-cif-container{
    height: 180px;
    z-index:2;
    margin-top: -10px;
    background: linear-gradient(to right,#165648,#20856e);

    @media (max-width: 500px) {
        height: 250px;
    } 
}

.footer-cif-nav-wrapper {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items:center;
    background-color: transparent;
    position: relative;
    justify-content: space-between;
    text-transform: uppercase;
    margin: 0 37% 0 20%;
    z-index: 2;
    align-self: center;
    
    @media (max-width:1600px){
        margin: 0 27% 0 3%;
        padding: 0 10%;
        max-width: 1000px;
    }

    @media (max-width:1200px){
        padding: 0 15% 0 0;
    }

    @media (max-width:692px){
        padding: 0 10% 0 7%;
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

.footer-cif-list {
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

.footer-cif-section {
    display:flex;
    justify-content: space-between;
}

.footer-cif-image-containter {
    display:flex;
}

.footer-cif-item {
    color: #fff;
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
        color: #fff;
        transition: all .2s linear;
        &:hover {
            font-weight: 700;
    }
    }
}

.footer-cif-item-list {
    color: #fff !important;
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
        color: #fff;
        transition: all .2s linear;
        &:hover {
        font-weight: 700;
    }
    }

    @media(max-width:992px){
        justify-content:center;
        align-items:start;
    }

    @media(max-width:692px){
        justify-content:center;
        align-items:start;
    }
}

.footer-cif-social-image {
    width:auto;
    height:50px;
    margin:55px 50px;

    @media (max-width:500px){
        height: 30px;
        margin: 20px 10px 0 0;
  }
}

.footer-cif-unilever-div {
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

.footer-cif-unilever-logo {
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

.footer-cif-unilever-copyright {
    font-size: .8rem;
    color: #fff;
    align-self: center;
    padding-left: 10px;

    @media (max-width:992px){
    padding-bottom: 10px;
    padding-left: 0;
    }
}

.cif-footer-graphic-image-desktop {
    width:auto;
    height:225px;
    top: -97px;
    left: 0;
    align-self: center;
    position: absolute;

    @media (max-width:1200px){
        top: -72px;
        left: 70px;
        height: 200px;
    }

    @media (max-width:800px){
        display: none;
    }
}

.cif-footer-graphic-image-mobile {
    display: none;

    @media (max-width:800px){
        position: absolute;
        display: inline-block;
        height: 210px;
        margin: 0;
        bottom: -4px;
        right: -207px;
    }

    @media (max-width:700px){
        bottom: 0;
        right: 0;
        height: 200px;
        margin: 0;
    }

    @media (max-width:350px){
        height: 150px;
    }
}
`;

export default FooterCifStyles;