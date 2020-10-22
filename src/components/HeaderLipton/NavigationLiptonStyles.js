import { createGlobalStyle } from 'styled-components';

const NavigationLiptonStyles = createGlobalStyle`
    .navbar {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 99;
    box-shadow: 0 0 12px 2px #8888;
  }
  .navbar-nav{
    font-weight:bold;
    font-size:20px;
  }
  .navbar-dark .navbar-nav .nav-link{
    color:white !important;
    text-shadow: 2px 2px 10px rgba(0,0,0,.4);
    padding: 10px 50px;
  }

  .navbar-dark .navbar-nav .nav-link:hover {
    color: #c8381d !important;
  }
  /* icon animated */
    .navbar-toggler {
      border: none;
      background: transparent !important;
    }

    .navbar-toggler:focus {
      outline: none;
      background: transparent !important;
    }

    .navbar-toggler .icon-bar {
      background-color: white;
      transform: rotate(0deg) translate(0px, 0px);
      transition: ease all .2s;
    }

    .navbar-toggler .icon-bar {
      display: block;
      width: 25px;
      height: 4px;
      border-radius: 1px;
    }

    .navbar-toggler .icon-bar+.icon-bar {
      margin-top: 4px;
    }

    .icon-bar:nth-child(2) {
      width: 16px;
      transition: ease all .2s;
    }

    .navbar-toggler:hover>.icon-bar:nth-child(2) {
      width: 25px;
      transition: ease all .2s;
    }

    .navbar-toggler:active>.icon-bar:nth-child(2) {
      width: 25px;
      transition: ease all .2s;
    }

    .navbar-toggler:not(.collapsed) .icon-bar:nth-child(1) {
      transform: rotate(45deg) translate(5px, 4px);
      transition: ease all .2s;
    }

    .navbar-toggler:not(.collapsed) .icon-bar:nth-child(2) {
      opacity: 0;
      transition: ease all .2s;
    }

    .navbar-toggler:not(.collapsed) .icon-bar:nth-child(3) {
      transform: rotate(-45deg) translate(4px, -4px);
      transition: ease all .2s;
      margin-top:0px !important;
    }
    .Navigation__Navbox-ixhOIQ{
      z-index:9;
    }
    .kSJWij{
      position:sticky;
      top:0;
      left:0;
      right:0;
      top:0;
      max-width:100vw;
    }
    .dropdown-menu a{
        color:white !important;
    }

    .dropdown-item:hover {
        background-color: #c8381d !important;
    }

    .dropdown-menu.show{
        transition:height 1s easy !important;
    }

    .dropdown-menu {
        background-color: #fade4c !important;
        border: none !important;
    }

    @media(max-width:992px){
      .dropdown a{
        text-align:center;
        }
        .dropdown-menu{
          background:transparent !important;
          border:none;
        }
        .navbar{
          box-shadow: 0 0 14px 4px #8888;
        }

        .navbar-collapse .ml-lipton {
        margin-left: 0 !important;
        text-align: center;
        }
    }

    @media(min-width:992px){
        .navbar-expand-lg .navbar-nav .dropdown-menu {
            left: 12% !important;
        }
    }

    .bg-yellow {
        background-color: #fade4c!important;
    }

    .ml-lipton {
        margin-left: 15%!important;
    }
`;

export default NavigationLiptonStyles;