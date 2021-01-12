import { createGlobalStyle } from 'styled-components';

const FooterRexonaStyles = createGlobalStyle`
.footer-rexona-container{
    height: 180px;
    z-index:2;
    margin-top: -10px;
    background: #103073;

    @media (max-width: 500px) {
        height: 250px;
    } 
}

.footer-rexona-nav-wrapper {
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
        margin: 0 17% 0 8%;
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

.footer-rexona-list {
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

.footer-rexona-section {
    display:flex;
    justify-content: space-between;
}

.footer-rexona-image-containter {
    display:flex;
}

.footer-rexona-item {
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

    @media(max-width:500px){        
    }
}

.footer-rexona-item-list {
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

    @media(max-width:500px){
        justify-content:center;
        align-items:start;
    }
}

.footer-rexona-social-image {
    width:auto;
    height:50px;
    margin:55px 50px;

    @media (max-width:500px){
        height: 30px;
        margin: 20px 10px 0 0;
  }
}

.footer-rexona-unilever-div {
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

.footer-rexona-unilever-logo {
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

.footer-rexona-unilever-copyright {
    font-size: .8rem;
    color: #fff;
    align-self: center;
    padding-left: 10px;

    @media (max-width:992px){
    padding-bottom: 10px;
    padding-left: 0;
    }
}

.rexona-footer-graphic-image {
    width:auto;
    height:200px;
    top: -72px;
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

    @media (max-width:500px){
        top: -210px;
        left: 245px;
        height: 200px;
        margin: 0;
    }

    @media (max-width:400px){
        left: 220px;
    }

    @media (max-width:350px){
        left: 180px;
        top: -193px;
        width: 70px;
        height: auto;
    }
}
`;

export default FooterRexonaStyles;