(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{ACUJ:function(e,t,a){"use strict";a.r(t);var n=a("dI71"),i=a("q1tI"),o=a.n(i),r=a("vOnD"),l=a("PZsQ"),d=a.n(l),c=a("Y6E7"),s=a.n(c),m=a("NGwb"),u=a.n(m),p=r.b.img.withConfig({displayName:"products__DomestosHeroImage",componentId:"sc-14kaud5-0"})(["width:100%;height:550px;object-fit:cover;@media (max-width:1200px){height:400px;content:url(",");}"],s.a),h=r.b.div.withConfig({displayName:"products__ProductSectionDiv",componentId:"sc-14kaud5-1"})(["max-width:100%;width:100%;margin-top:50px;margin-bottom:80px;&:after{content:'';display:block;clear:both;}@media (max-width:692px){margin-top:0px;margin-bottom:0px;}h1{color:#06154b;text-align:center;margin-bottom:50px;font-weight:700;}h2{color:#06154b;font-size:1.3rem;}"]),f=r.b.div.withConfig({displayName:"products__FilterDiv",componentId:"sc-14kaud5-2"})(["width:17%;margin-left:5%;margin-top:100px;float:left;text-align:center;position:sticky;top:120px;left:0;@media (max-width:1500px){width:20%;}@media (max-width:1100px){width:25%;}@media (max-width:692px){display:none;}"]),g=r.b.div.withConfig({displayName:"products__ProductDiv",componentId:"sc-14kaud5-3"})(["width:60%;float:left;position:relative;.divider{width:4px;height:calc(100% - 100px);background:linear-gradient(60deg,#749fe0 0,#06154b 40%,#06154b 60%,#749fe0 100%);border-radius:95%;position:absolute;left:0;top:100px;@media (max-width:692px){display:none;}}@media (max-width:1100px){width:55%;margin-top:20px;}@media (max-width:692px){width:100%;margin-top:20px;}"]),w=r.b.button.withConfig({displayName:"products__Filter",componentId:"sc-14kaud5-4"})(["color:white;padding:10px 30px;width:215px;border:none;margin:10px 10px;background:linear-gradient(180deg,#123c7b,#06154b);text-transform:none;transition:.5s;box-shadow:0px -3px 2px rgba(0,0,0,0.39);outline:none;text-decoration:none;&:hover{transform:scale(1.1);opacity:1;text-decoration:none;}&:focus{outline:none;}"]),x=r.b.ul.withConfig({displayName:"products__ProductsUl",componentId:"sc-14kaud5-5"})(["display:grid;grid-template-columns:repeat(3,1fr);list-style:none;justify-items:center;padding-left:5%;padding-right:5%;img{margin-left:auto;margin-right:auto;display:block;width:80%;transition:all .2s linear;&:hover{transform:scale(1.2);}}div{margin-left:auto;margin-right:auto;box-shadow:5px 5px 10px #cac9c9;color:white;border-radius:15px;width:80%;padding:0 10px 10px 10px;margin-bottom:7%;font-weight:bold;text-align:center;height:90%;h3{font-size:1rem;margin-top:15px;color:#06154b;}}@media (max-width:692px){grid-template-columns:repeat(2,1fr);}"]),b=r.b.button.withConfig({displayName:"products__ShowMore",componentId:"sc-14kaud5-6"})(["color:white;padding:10px 30px;width:150px;border:none;display:block;margin-left:auto;margin-right:auto;background:linear-gradient(180deg,#123c7b,#06154b);border:none;text-transform:none;transition:.5s;box-shadow:0px -3px 2px rgba(0,0,0,0.39);outline:none;text-decoration:none;&:hover{background:linear-gradient(180deg,#123c7b 30%,#06154b);transform:scale(1.15);opacity:1;border:none;outline:none;text-decoration:none;}&:focus{outline:none;}"]),v={allProducts:!0,filterOne:!1,filterTwo:!1,limit:12},E=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state=v,t.handleShowAll=function(){t.setState(Object.assign({},v))},t.handleShowFilterOne=function(){t.setState(Object.assign({},v,{filterOne:!0}))},t.handleShowFilterTwo=function(){t.setState(Object.assign({},v,{filterTwo:!0}))},t.ifURL=function(){return"?filter=WC-puhastusvahendid"==window.location.search?(t.state.allProducts=!1,t.state.filterOne=!0,t.state.filterTwo=!1):"?filter=WC-varskendajad"==window.location.search?(t.state.allProducts=!1,t.state.filterOne=!1,t.state.filterTwo=!0):(t.state.allProducts=!0,t.state.filterOne=!1,t.state.filterTwo=!1)},t}return Object(n.a)(t,e),t.prototype.render=function(){var e=this,t=this.props.data;function a(e){var t=new URL(window.location);t.searchParams.set("filter",e),window.history.pushState({},"",t)}return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,{src:d.a,alt:"Domestos Tooted"}),o.a.createElement(h,null,o.a.createElement(u.a,{animateIn:"animate__fadeInLeft",delay:"200",animateOnce:"true"},o.a.createElement(f,{onLoad:this.ifURL()},o.a.createElement("h2",{style:{textAlign:"center",fontWeight:"bold"}},"Kategooriad:"),o.a.createElement(w,{onClick:function(){var t;(t=new URL(window.location)).searchParams.delete("filter"),window.history.pushState({},"",t),e.handleShowAll()}},"Kõik Tooted"),o.a.createElement(w,{onClick:function(){a("WC-puhastusvahendid"),e.handleShowFilterOne()}},"WC-puhastusvahendid"),o.a.createElement(w,{onClick:function(){a("WC-varskendajad"),e.handleShowFilterTwo()}},"WC-värskendajad"))),o.a.createElement(u.a,{animateIn:"animate__fadeInRight",animateOnce:"true"},o.a.createElement(g,null,o.a.createElement("div",{class:"divider"}),this.state.allProducts?o.a.createElement("div",null,o.a.createElement("h1",{style:{textAlign:"center"}},"Kõik Tooted"),o.a.createElement(x,null,t.allProduct.nodes.filter((function(t,a){return a<e.state.limit})).map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("a",{href:"/domestos/products/"+e.id},o.a.createElement("div",null,o.a.createElement("img",{src:e.img}),o.a.createElement("h3",null,e.fullName))))}))),t.allProduct.nodes.length>12&&this.state.limit<t.allProduct.nodes.length&&o.a.createElement(b,{background:"none",onClick:function(){return e.setState({limit:e.state.limit+12})}}," Näita rohkem ")):null,o.a.createElement("div",{class:"divider"}),this.state.filterOne?o.a.createElement("div",null,o.a.createElement("h1",{style:{textAlign:"center"}},"WC-puhastusvahendid"),o.a.createElement(x,null,t.allProduct.nodes.filter((function(e){return e.shortTitle.includes("WC-puhastusvahendid")})).map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("a",{href:"/domestos/products/"+e.id},o.a.createElement("div",null,o.a.createElement("img",{src:e.img}),o.a.createElement("h3",null,e.fullName))))})))):null,o.a.createElement("div",{class:"divider"}),this.state.filterTwo?o.a.createElement("div",null,o.a.createElement("h1",{style:{textAlign:"center"}},"WC-värskendajad"),o.a.createElement(x,null,t.allProduct.nodes.filter((function(e){return e.shortTitle.includes("WC-värskendajad")})).map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("a",{href:"/domestos/products/"+e.id},o.a.createElement("div",null,o.a.createElement("img",{src:e.img}),o.a.createElement("h3",null,e.fullName))))})))):null))))},t}(o.a.Component);t.default=E},PZsQ:function(e,t,a){e.exports=a.p+"static/domestos-products-hero-7b05450a88516e0927654c8384af125a.jpg"},Y6E7:function(e,t,a){e.exports=a.p+"static/domestos-products-hero-mobile-485a5ca604ed91e0770c6894e03b4ee3.jpg"}}]);
//# sourceMappingURL=component---src-pages-domestos-products-js-68126fb5ed7c19e3988f.js.map