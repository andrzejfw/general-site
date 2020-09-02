import { createGlobalStyle } from 'styled-components';

const TabStyle = createGlobalStyle`
.react-tabs{
  margin:auto;
  background:transparent;
  border-radius:0px;
  margin-top:20px;
  padding:35px;
  position:relative;
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  background-image: url("https://www.unilever.pl/resources/7.16.54/images/phoenix/careers-swimlane-bg.png") !important;
    @media(max-width:768px) {
      padding: 10px;
    }
}
.react-tabs__tab{
  padding:30px 25px !important;
  transform: scale(1.1);
  color:transparent;
  position:relative;
  font-weight:bold;
  transition:.4s;
    @media(max-width:768px){
      padding:45px 25px !important;
    }
    &:hover{
      transform: scale(1.18);
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
  margin-top:10px;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 15px;
  background: red;
  width:80%;
  margin-left: 50%;
  transform: translateX(-50%);
    @media (max-width:768px) {
      width:100%;
    }
  }
  img{
    margin-right:10px;
    margin-left:10px;
    max-width:120px;
  }
  img:hover {
    transform: scale(1.1);
  }
}
.react-tabs__tab-list{
  border-bottom:0px !important;
  text-align:center;
  position:relative;

  @media(max-width:768px){
    display:flex;
    flex-direction:column;
  }
}
#react-tabs-0{
  background-size:cover !important;
  width:18%;
  height:auto;
  margin-right:16px;
  margin-left:16px;
  @media(max-width:768px){
   margin-left:15px;
   margin-right:15px;
   margin-top:10px;
   width: fit-content;
  }
}
#react-tabs-2{
  background-size:cover !important;
  width:18%;
  height:auto;
  margin-right:16px;
  margin-left:16px;
  @media(max-width:768px){
    margin-left:15px;
    margin-top:10px;
    width: 90%;
   }
}
#react-tabs-4{
  background-size:cover !important;
  width:18%;
  height:auto;
  margin-right:16px;
  margin-left:16px;
  @media(max-width:768px){
    margin-left:15px;
    margin-top:10px;
    width: 90%;
   }
}
#react-tabs-6{
  background-size:cover !important;
  width:18%;
  height:auto;
  margin-right:16px;
  margin-left:16px;
  @media(max-width:768px){
    margin-left:15px;
    margin-right:15px;
    margin-top:10px;
    width: 90%;
   }
}
.react-tabs__tab-list span{
  position:absolute;
  top:-20%;
  transform: translateX(40%);
  font-weight:bold;
}
// end tabs
`;

export default TabStyle;