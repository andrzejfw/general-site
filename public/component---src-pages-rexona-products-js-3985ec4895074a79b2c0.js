(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"5UPe":function(e,t,n){e.exports=n.p+"static/rexona-products-hero-21bc641cdd056ad0696a7abd51f67e10.jpg"},ZB7T:function(e,t,n){e.exports=n.p+"static/rexona-products-hero-mobile-ce246f77f597a26cdc576f024b7578c4.jpg"},vrqa:function(e,t,n){"use strict";n.r(t);var a=n("dI71"),i=n("q1tI"),o=n.n(i),r=n("vOnD"),l=n("5UPe"),d=n.n(l),c=n("ZB7T"),s=n.n(c),m=n("NGwb"),p=n.n(m),u=r.b.img.withConfig({displayName:"products__RexonaHeroImage",componentId:"f4dq1p-0"})(["width:100%;height:550px;object-fit:cover;@media (max-width:1200px){height:400px;content:url(",");}"],s.a),f=r.b.div.withConfig({displayName:"products__ProductSectionDiv",componentId:"f4dq1p-1"})(["max-width:100%;width:100%;margin-top:50px;margin-bottom:80px;&:after{content:'';display:block;clear:both;}@media (max-width:692px){margin-top:0px;margin-bottom:0px;}h1{color:#103073;text-align:center;font-weight:700;text-transform:uppercase;font-size:3rem;-webkit-text-stroke-color:#103073;-webkit-text-fill-color:transparent;-webkit-text-stroke-width:1px;@media(max-width:692px){width:90vw;margin:0 auto 20px;}}h2{color:#103073;font-size:1.3rem;}"]),h=r.b.div.withConfig({displayName:"products__FilterDiv",componentId:"f4dq1p-2"})(["width:15%;margin-left:5%;margin-top:100px;float:left;text-align:center;position:sticky;top:120px;left:0;@media (max-width:1100px){width:25%;}@media (max-width:692px){display:none;}"]),x=r.b.div.withConfig({displayName:"products__ProductDiv",componentId:"f4dq1p-3"})(["width:60%;float:left;position:relative;.divider{width:4px;height:calc(100% - 100px);background:#103073;border-radius:95%;position:absolute;left:0;top:100px;@media (max-width:692px){display:none;}}@media (max-width:1100px){width:55%;margin-top:20px;}@media (max-width:692px){width:100%;margin-top:20px;}"]),w=r.b.button.withConfig({displayName:"products__Filter",componentId:"f4dq1p-4"})(["color:white;font-weight:700;font-size:1.125rem;padding:10px 10px;width:150px;border:1px solid;border-color:#054281;margin:10px 10px;border-radius:3px;background:#103073;text-transform:none;transition:.5s;outline:none;text-decoration:none;&:hover{color:#fff;background-color:#0D233C;text-decoration:none;outline:none;}&:focus{outline:none;}"]),g=r.b.ul.withConfig({displayName:"products__ProductsUl",componentId:"f4dq1p-5"})(["display:grid;grid-template-columns:repeat(3,1fr);list-style:none;justify-items:center;padding-left:5%;padding-right:5%;img{margin-left:auto;margin-right:auto;display:block;width:80%;transition:all .2s linear;&:hover{transform:scale(1.2);}}div{margin-left:auto;margin-right:auto;color:#103073;border-radius:15px;width:80%;padding:0 10px 10px 10px;margin-bottom:7%;font-weight:bold;text-align:center;height:90%;h3{font-size:1rem;margin-top:10px;}}@media (max-width:692px){grid-template-columns:repeat(2,1fr);}"]),b=r.b.button.withConfig({displayName:"products__ShowMore",componentId:"f4dq1p-6"})(["color:white;font-weight:700;font-size:1.125rem;padding:10px 30px;width:150px;border:1px solid;border-color:#054281;margin:10px 10px;border-radius:3px;background:#103073;text-transform:none;transition:.5s;box-shadow:0px -3px 2px rgba(0,0,0,0.39);outline:none;text-decoration:none;&:hover{background:#0D233C;opacity:1;border:none;outline:none;text-decoration:none;}&:focus{outline:none;}"]),E={allProducts:!0,filterOne:!1,filterTwo:!1,limit:12},v=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state=E,t.handleShowAll=function(){t.setState(Object.assign({},E))},t.handleShowFilterOne=function(){t.setState(Object.assign({},E,{filterOne:!0}))},t.handleShowFilterTwo=function(){t.setState(Object.assign({},E,{filterTwo:!0}))},t.ifURL=function(){return"?filter=meeste-deodorandid"==window.location.search?(t.state.allProducts=!1,t.state.filterOne=!0,t.state.filterTwo=!1):"?filter=naiste-deodorandid"==window.location.search?(t.state.allProducts=!1,t.state.filterOne=!1,t.state.filterTwo=!0):void 0},t}return Object(a.a)(t,e),t.prototype.render=function(){var e=this,t=this.props.data;function n(e){var t=new URL(window.location);t.searchParams.set("filter",e),window.history.pushState({},"",t)}return Object(i.useEffect)((function(){e.ifURL()}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(u,{src:d.a,alt:"Rexona move"}),o.a.createElement(f,null,o.a.createElement(p.a,{animateIn:"animate__fadeIn",animateOnce:"true"},o.a.createElement(h,null,o.a.createElement("h2",{style:{textAlign:"center",fontWeight:"bold"}},"Kategooriad:"),o.a.createElement(w,{onClick:function(){var t;(t=new URL(window.location)).searchParams.delete("filter"),window.history.pushState({},"",t),e.handleShowAll()}},"Kõik Tooted"),o.a.createElement(w,{onClick:function(){n("meeste-deodorandid"),e.handleShowFilterOne()}},"Meeste deodorandid"),o.a.createElement(w,{onClick:function(){n("naiste-deodorandid"),e.handleShowFilterTwo()}},"Naiste deodorandid"))),o.a.createElement(x,null,o.a.createElement("div",{class:"divider"}),this.state.allProducts?o.a.createElement("div",null,o.a.createElement(p.a,{animateIn:"animate__fadeInLeft",animateOnce:"true"},o.a.createElement("h1",{style:{textAlign:"center"}},"Kõik Tooted")),o.a.createElement(g,null,t.allProduct.nodes.filter((function(t,n){return n<e.state.limit})).map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("a",{href:"/rexona/products/"+e.id},o.a.createElement("div",null,o.a.createElement("img",{src:e.img}),o.a.createElement("h3",null,e.fullName))))}))),t.allProduct.nodes.length>12&&this.state.limit<t.allProduct.nodes.length&&o.a.createElement(b,{background:"none",onClick:function(){return e.setState({limit:e.state.limit+12})}},"Näita rohkem")):null,o.a.createElement("div",{class:"divider"}),this.state.filterOne?o.a.createElement("div",null,o.a.createElement(p.a,{animateIn:"animate__fadeInLeft",animateOnce:"true"},o.a.createElement("h1",{style:{textAlign:"center"}},"Meeste deodorandid")),o.a.createElement(g,null,t.allProduct.nodes.filter((function(e){return e.shortTitle.includes("meeste-deodorandid")})).map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("a",{href:"/rexona/products/"+e.id},o.a.createElement("div",null,o.a.createElement("img",{src:e.img}),o.a.createElement("h3",null,e.fullName))))})))):null,o.a.createElement("div",{class:"divider"}),this.state.filterTwo?o.a.createElement("div",null,o.a.createElement(p.a,{animateIn:"animate__fadeInLeft",animateOnce:"true"},o.a.createElement("h1",{style:{textAlign:"center"}},"Naiste deodorandid")),o.a.createElement(g,null,t.allProduct.nodes.filter((function(e){return e.shortTitle.includes("naiste-deodorandid")})).map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("a",{href:"/rexona/products/"+e.id},o.a.createElement("div",null,o.a.createElement("img",{src:e.img}),o.a.createElement("h3",null,e.fullName))))})))):null)))},t}(o.a.Component);t.default=v}}]);
//# sourceMappingURL=component---src-pages-rexona-products-js-3985ec4895074a79b2c0.js.map