import { createGlobalStyle } from 'styled-components';

const FooterMagnumStyles = createGlobalStyle`
.footer-magnum-container{
    height: 180px;
    z-index:2;
    background: linear-gradient(60deg,#431f13 0,#d4a65b 40%,#d4a65b 60%,#431f13 100%);

    @media (max-width:992px){
    height:280px;
    background: linear-gradient(60deg,#431f13 0,#d4a65b 45%,#d4a65b 50%,#431f13 100%)
    }
}

.footer-magnum-nav-wrapper {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items:center;
    background-color: transparent;
    position: relative;
    justify-content: space-between;
    text-transform: uppercase;
    margin: 0 37% 0 22%;
    z-index: 2;
    align-self: center;
    
    @media (max-width:1600px){
        margin: 0;
        padding: 0 10%;
        max-width: 1000px;
    }

    @media (max-width:992px){
        height:100%;
        margin: 0 auto 5%;
        justify-content: center;
        align-items: flex-start;
    }
    @media (max-width: 500px) {
        display:flex;
        flex-direction:column;
        margin: 0;
        padding-bottom: 5%;
    }   
}

.footer-magnum-list {
    margin:0;
    padding:0;
    display:flex;
    list-style:none;
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    
    @media(max-width:500px){
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:left;
    }
}

.footer-magnum-section {
    display:flex;
    justify-content: space-between;
}

.footer-magnum-image-containter {
    display:flex;
}

.footer-magnum-item {
    line-height:1.2em;
    text-decoration: none;
    color: #523022;
    /* font-weight:bold; */
    display: inline-block;
    white-space: nowrap;
    margin: 0 1vw; 
    position: relative;  
    text-transform:capitalize;
    list-style:none;
    text-decoration:none;
    display:flex;
    transition: all .2s linear;

    p{
        font-size:12px;
        color: #523022;
    }
    a{
        text-decoration:none;
        color: #523022;
        &:hover {
        font-weight:bold;
    }
    }

    &:hover {
        font-weight:bold;
    
    }
    @media(max-width:500px){
        margin:8px 0;
        color: #fff;

        p{
        font-size:12px;
        color: #fff;
        }
        a{
            text-decoration:none;
            color: #fff;
        }
    }
}

.footer-magnum-item-list {
    text-decoration: none;
    color: #523022 !important;
    /* font-weight:bold; */
    display: inline-block;
    white-space: nowrap;
    margin: 0 1vw;
    position: relative;
    text-transform:capitalize;
    list-style:none;
    text-decoration:none;
    display:flex;
    flex-direction:column;  
    align-items:center; 
    transition: all .2s linear;

    p{
        font-size:12px;
        color: #523022;
    }
    a{
        text-decoration:none;
        color: #523022;
        &:hover {
        font-weight:bold;
    
    }
    }

    @media(max-width:992px){
        margin:4px 0;
        justify-content:center;
        align-items:start;

        p{
        font-size:12px;
        color: #fff;
        }
        a{
            text-decoration:none;
            color: #fff;  
        }  
    }
}

.footer-magnum-social-image {
    width:auto;
    height:50px;
    margin:55px 50px;

    @media (max-width:500px){
        height: 30px;
        margin: 20px 10px 0 0;
  }
}

.mobile-magnum-footer-graphic-image {
    display: none;

    @media (max-width:992px){
        display: inline-block;
        /* transform: rotate(-90deg); */
        position: absolute;
        top: -280px;
        left: 210px;
        height: 352px;
        margin: 0;
    }

    @media (max-width:400px){
        left: 170px;
    }

    @media (max-width:350px){
        left: 140px;
    }
}

.desktop-magnum-footer-graphic-image {
    width:auto;
    height:250px;
    top: -95px;
    left: 30px;
    align-self: center;
    position: absolute;

    @media (max-width:992px){
        display: none;
    }
}

.footer-magnum-unilever-div {
    z-index:2;
    background:#331603;
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

.footer-magnum-unilever-logo {
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

.footer-magnum-unilever-copyright {
    font-size: .8rem;
    color: #fff;
    align-self: center;
    padding-left: 10px;

    @media (max-width:992px){
    padding-bottom: 10px;
    padding-left: 0;
    }
}

`;

export default FooterMagnumStyles;