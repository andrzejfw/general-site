import { createGlobalStyle } from 'styled-components';


const PrivacyStyle = createGlobalStyle`

    .row{
        padding:20px 40px !important;
    }

    h1{
        color:#007dbb !important;
        width:100%;
        font-size:1.75rem !important;
        margin-bottom:40px;
        font-weight:bold;
    }
    h2{
        font-size:1.1rem !important;
        color:#007dbb;
        text-transform:uppercase;
        margin-bottom:20px;
        font-weight:bold;
        width:100%;
    }
    h3{
        margin:50px 0 30px 0;
        color:#007dbb !important;
        font-size:1rem !important;
    }
    p{
        font-weight:100;
    }
    a{
        color:#e201a5;
        /* text-decoration:none; */
    }
    a:hover{
        color:#74ae00;
        text-decoration:none;
    }
    .gfHYfS{
        width:90% !important;
    }
    .bSGTyL{
        width:90% !important;
        border:none !important;
        background:transparent !important;
        padding:15px 50px !important;
        border-bottom:1px solid #007dbb !important;;
        border-radius:0 !important;
    }
    @media(max-width:992px){
        .bSGTyL{
            width:85vw !important;
            padding:15px 15px !important;
        }
    }
    .bSGTyL p{
        color:#000 !important;
        font-weight:normal !important;
        text-transform:none !important;
        font-weight:100;
    }
    .bSGTyL div{
        color:#007dbb !important;
        text-shadow:none !important;
        font-size:1.3rem !important;
        text-transform:uppercase;
        font-weight:100 !important;

    }
    .bSGTyL span{
        color:#007dbb !important;
    }
    ul{
        margin:0 0 20px 30px !important;
    }
    ul li{
        font-size:16px !important;
        text-transform:none !important;
        font-weight:100;
        color:#000 !important;
    }

`;

export default PrivacyStyle;