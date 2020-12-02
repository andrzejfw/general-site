import { createGlobalStyle } from 'styled-components';

const TabStyle = createGlobalStyle`
.react-tabs{
  margin:auto;
  background:transparent;
  border-radius:0px;
  margin-top:20px;
  padding:35px;
  position:relative;
  width: 100%;
  margin-left: 50%;
  transform: translateX(-50%);
    @media(max-width:768px) {
      padding: 10px;
    }
}
.react-tabs__tab{
  padding:30px 25px !important;
  /* transform: scale(1.1); */
  color:transparent;
  position:relative;
  font-weight:bold;
  transition:.4s;
  border-radius: 5px 5px 0 0;
  bottom: -7px !important;
    @media(max-width:768px){
      /* padding:45px 25px !important; */
      bottom: 0 !important;
    }
    &:hover{
      /* transform: scale(1.18); */
    }
    &:after{
      position:absolute;
      content:"";
      left:0;
      top:0;
      width:100%;
      height:100%;
    }
}
.react-tabs__tab--selected{
    background: transparent;
    border:none;
  &:after{
    position:absolute;
    content:"";
    left:0;
    top:0;
    width:100%;
    height:100%;
    background-color:rgba(0, 0, 0, 0) !important;
  }
}
.react-tabs__tab-panel--selected{
  display:flex;
  align-items:center;
  justify-content:center;
  margin:10px auto 40px;
  padding-top: 50px;
  padding-bottom: 30px;
  border-radius: 0 0 15px 15px;
  /* background: red; */
  width:80vw;
  margin-left: 50%;
  transform: translateX(-50%);
  height: 200px;
    @media (max-width:768px) {
      display:grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      width:90.1vw;
      background-position: 50%;
      padding: 20px 10px !important;
      height: 350px;
    }
  
  img{
    margin: -15px 10px 0;
    max-width:150px;
    background: rgba(255,255,255,.5);
    border-radius: 10px;
  }
  img:hover {
    transform: scale(1.1);
  }
  @media(max-width:768px){
    img {
      margin: 8px 0;
      max-width:120px;
    }
  }
}
.react-tabs__tab-list{
  border-bottom:0px !important;
  text-align:center;
  position:relative;
  margin-bottom: -4px;

  @media(max-width:768px){
    display:flex;
    flex-direction:column;
  }
}
#react-tabs-0{
  background-size:cover !important;
  width:19.6vw;
  height:100px;
  margin-right:.5vw;
  /* margin-right:16px;
  margin-left:16px; */
  &:hover {
    /* background: rgb(0, 94, 238) !important; */
    p {color: #fff !important;}
  }
  a {
    color: inherit;
    text-decoration: none !important;
  }
  @media(max-width:768px){
    /* margin-left:15px;
    margin-right:15px; */
    margin:10px auto -20px;
    width: 90vw;
  }
}
#react-tabs-2{
  background-size:cover !important;
  width:19.6vw;
  height:100px;
  margin-right:.5vw;
  /* margin-right:16px;
  margin-left:16px; */
  &:hover {
    /* background: rgb(255, 84, 80) !important; */
    p {color: #fff !important;}
  }
  @media(max-width:768px){
    /* margin-left:15px;
    margin-right:15px; */
    margin:10px auto -20px;
    width: 90vw;
   }
}
#react-tabs-4{
  background-size:cover !important;
  width:19.6vw;
  height:100px;
  margin-right:.5vw;
  /* margin-right:16px;
  margin-left:16px; */
  &:hover {
    /* background: rgb(255, 121, 198) !important; */
    p {color: #fff !important;}
  }
  @media(max-width:768px){
    /* margin-left:15px;
    margin-right:15px; */
    margin:10px auto -20px;
    width: 90vw;
   }
}
#react-tabs-6{
  background-size:cover !important;
  width:19.6vw;
  height:100px;
  /* margin-right:16px;
  margin-left:16px; */
  &:hover {
    /* background: rgb(0, 215, 197) !important; */
    p {color: #fff !important;}
  }
  @media(max-width:768px){
    /* margin-left:15px;
    margin-right:15px; */
    margin:10px auto -20px;
    width: 90vw;
   }
}
.react-tabs__tab-list span{
  position:absolute;
  top:-20%;
  transform: translateX(40%);
  font-weight:bold;
}
// end tabs

.divAnchor {
  @media(min-width:768px){
    display: none;
  }
}

a:hover {
  text-decoration: none !important;
}

.react-tabs__tab:focus {
  box-shadow: none !important;
  border-color: transparent !important;
}

`;



export default TabStyle;