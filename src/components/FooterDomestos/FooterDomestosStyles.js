import { createGlobalStyle } from 'styled-components';

const FooterDomestosStyles = createGlobalStyle`
.footer-domestos-container{
    height: 180px;
    z-index:2;
    background:radial-gradient(circle at 20% 15%,#123c7b,#06154b 61%);

    @media (max-width:692px){
    height:150px;
    background:radial-gradient(circle at 20% 15%,#123c7b,#06154b 61%);
    }

    @media (max-width:492px){
    height:280px;
    background:radial-gradient(circle at 20% 15%,#123c7b,#06154b 61%);
    }
}

.footer-domestos-nav-wrapper {
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
  }
  @media (max-width: 500px) {
    display:flex;
    flex-direction:column;
    margin: 0;
    padding-bottom: 10%;
  }  
}
.footer-domestos-list {
    margin:0;
    padding:0;
    display:flex;
    list-style:none;
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    
    @media(max-width:692px){
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
}

.footer-domestos-section {
    display:flex;
    justify-content: space-between;
}

.footer-domestos-image-containter {
    display:flex;
}

.footer-domestos-item {
    line-height:1.2em;
    text-decoration: none;
    color: #fff;
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
        color: #fff;
    }
    a{
        text-decoration:none;
        color: #fff;
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

.footer-domestos-item-list {
    text-decoration: none;
    color: #fff !important;
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
        color: #fff;
    }
    a{
        text-decoration:none;
        color: #fff;
        &:hover {
        font-weight:bold;
    
    }
    }

    @media(max-width:692px){
        margin:4px 0;
        justify-content:center;
        align-items: center;
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

.footer-domestos-social-image {
    width:auto;
    height:50px;
    margin:55px 50px;

    @media (max-width:500px){
        height: 30px;
        margin: 20px 0 0;
  }
}

/* .mobile-domestos-footer-graphic-image {
    display: none;

    @media (max-width:500px){
        display: inline-block;
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
} */

.desktop-domestos-footer-graphic-image {
    width: auto;
    height: 193px;
    position: absolute;
    top: -8px;
    right: -29%;

    @media (max-width:1192px){
        display: none;
    }

    @media (max-width:1600px){
        right: -15%;
    }
}

.footer-domestos-unilever-div {
    z-index:2;
    background:#7f7f7f;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 3%;

    @media (max-width:692px){
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
  }
}

.footer-domestos-unilever-logo {
    width:50px;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    @media(max-width:692px){
      margin: 5px auto 0;
    }
}

.footer-domestos-unilever-copyright {
    font-size: .8rem;
    color: #fff;
    align-self: center;
    padding-left: 10px;

    @media (max-width:692px){
    padding-bottom: 10px;
    padding-left: 0;
    }
}

`;

export default FooterDomestosStyles;