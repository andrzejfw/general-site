(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"2IMW":function(e,t,a){e.exports=a.p+"static/knorr-products-hero-3d660c6efd28e4aba5cc176627469e63.jpg"},"QuO/":function(e,t,a){e.exports=a.p+"static/knorr-products-hero-mobile-8758d2634f094c11a6b0e0bc1b339613.jpg"},p7x7:function(e,t,a){"use strict";a.r(t);var n=a("dI71"),i=a("q1tI"),r=a.n(i),l=a("vOnD"),o=a("2IMW"),c=a.n(o),d=a("QuO/"),s=a.n(d),m=a("NGwb"),u=a.n(m),f=l.b.img.withConfig({displayName:"products__KnorrHeroImage",componentId:"bcb4kz-0"})(["width:100%;height:550px;object-fit:cover;@media (max-width:1200px){height:400px;content:url(",");}"],s.a),p=l.b.div.withConfig({displayName:"products__ProductSectionDiv",componentId:"bcb4kz-1"})(["max-width:100%;width:100%;margin-top:50px;margin-bottom:80px;&:after{content:'';display:block;clear:both;}@media (max-width:692px){margin-top:0px;margin-bottom:0px;}h1{color:#007a33;text-align:center;margin-bottom:50px;font-weight:700;}h2{color:#007a33;font-size:1.3rem;}"]),h=l.b.div.withConfig({displayName:"products__FilterDiv",componentId:"bcb4kz-2"})(["width:15%;margin-left:5%;margin-top:100px;float:left;text-align:center;position:sticky;top:120px;left:0;@media (max-width:1100px){width:25%;}@media (max-width:692px){display:none;}"]),g=l.b.div.withConfig({displayName:"products__ProductDiv",componentId:"bcb4kz-3"})(["width:60%;float:left;position:relative;.divider{width:4px;height:calc(100% - 100px);background:linear-gradient(60deg,#fff 0,#007a33 40%,#007a33 60%,#fff 100%);border-radius:95%;position:absolute;left:0;top:100px;@media (max-width:692px){display:none;}}@media (max-width:1100px){width:55%;margin-top:20px;}@media (max-width:692px){width:100%;margin-top:20px;}"]),w=l.b.button.withConfig({displayName:"products__Filter",componentId:"bcb4kz-4"})(["color:white;padding:10px 0;width:150px;border:1px solid #007a33;background-color:#007a33;margin:10px 10px;border-radius:10px;text-transform:none;transition:all .2s ease-in-out;outline:none;text-decoration:none;&:hover{text-decoration:none;transform:scale(1.1);border-color:#ffd32e;text-decoration:none;color:#fff;background-color:#ffd32e;}&:focus{outline:none;}"]),E=l.b.ul.withConfig({displayName:"products__ProductsUl",componentId:"bcb4kz-5"})(["display:grid;grid-template-columns:repeat(3,1fr);list-style:none;justify-items:center;padding-left:5%;padding-right:5%;img{margin-left:auto;margin-right:auto;display:block;width:80%;transition:all .2s linear;&:hover{transform:scale(1.2);}}div{margin-left:auto;margin-right:auto;background:rgba(0,122,51,0.2);color:#007a33;padding:0 10px 10px 10px;border-radius:2px;width:80%;margin-bottom:7%;font-weight:bold;text-align:center;height:90%;h3{font-size:1rem;font-weight:bold;}}@media (max-width:692px){grid-template-columns:repeat(2,1fr);}"]),x=l.b.button.withConfig({displayName:"products__ShowMore",componentId:"bcb4kz-6"})(["color:white;padding:10px 30px;width:150px;border:1px solid #007a33;background-color:#007a33;margin:20px auto;display:flex;border-radius:10px;text-transform:none;transition:all .2s ease-in-out;outline:none;text-decoration:none;&:hover{text-decoration:none;transform:scale(1.1);border-color:#ffd32e;text-decoration:none;color:#fff;background-color:#ffd32e;}&:focus{outline:none;}"]),b={allProducts:!0,filterOne:!1,filterTwo:!1,filterThree:!1,filterFour:!1,limit:12},k=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state=b,t.handleShowAll=function(){t.setState(Object.assign({},b))},t.handleShowFilterOne=function(){t.setState(Object.assign({},b,{filterOne:!0}))},t.handleShowFilterTwo=function(){t.setState(Object.assign({},b,{filterTwo:!0}))},t.handleShowFilterThree=function(){t.setState(Object.assign({},b,{filterThree:!0}))},t.handleShowFilterFour=function(){t.setState(Object.assign({},b,{filterFour:!0}))},t.ifURL=function(){return"?filter=Pakisupid"==window.location.search?(t.state.allProducts=!1,t.state.filterOne=!0,t.state.filterTwo=!1,t.state.filterThree=!1,t.state.filterFour=!1):"?filter=Topsiroad"==window.location.search?(t.state.allProducts=!1,t.state.filterOne=!1,t.state.filterTwo=!0,t.state.filterThree=!1,t.state.filterFour=!1):"?filter=Kiirnuudlid"==window.location.search?(t.state.allProducts=!1,t.state.filterOne=!1,t.state.filterTwo=!1,t.state.filterThree=!0,t.state.filterFour=!1):"?filter=Maitseainesegud-ja-Puljongid"==window.location.search?(t.state.allProducts=!1,t.state.filterOne=!1,t.state.filterTwo=!1,t.state.filterThree=!1,t.state.filterFour=!0):(t.state.allProducts=!0,t.state.filterOne=!1,t.state.filterTwo=!1,t.state.filterThree=!1,t.state.filterFour=!1)},t}return Object(n.a)(t,e),t.prototype.render=function(){var e=this,t=this.props.data;function a(e){var t=new URL(window.location);t.searchParams.set("filter",e),window.history.pushState({},"",t)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{animateIn:"animate__fadeIn",animateOnce:"true"},r.a.createElement(f,{src:c.a,alt:"Knorr food"})),r.a.createElement(p,null,r.a.createElement(u.a,{animateIn:"animate__fadeIn",animateOnce:"true"},r.a.createElement(h,{onLoad:this.ifURL()},r.a.createElement("h2",{style:{textAlign:"center",fontWeight:"bold"}},"Kategooriad:"),r.a.createElement(w,{onClick:function(){var t;(t=new URL(window.location)).searchParams.delete("filter"),window.history.pushState({},"",t),e.handleShowAll()}},"Kõik tooted"),r.a.createElement(w,{onClick:function(){a("Pakisupid"),e.handleShowFilterOne()}},"Pakisupid"),r.a.createElement(w,{onClick:function(){a("Topsiroad"),e.handleShowFilterTwo()}},"Topsiroad"),r.a.createElement(w,{onClick:function(){a("Kiirnuudlid"),e.handleShowFilterThree()}},"Kiirnuudlid"),r.a.createElement(w,{onClick:function(){a("Maitseainesegud-ja-Puljongid"),e.handleShowFilterFour()}},"Maitseainesegud ja puljongid"))),r.a.createElement(g,null,r.a.createElement("div",{class:"divider"}),this.state.allProducts?r.a.createElement("div",null,r.a.createElement(u.a,{animateIn:"animate__fadeIn",animateOnce:"true"},r.a.createElement("h1",{style:{textAlign:"center"}},"Kõik tooted")),r.a.createElement(u.a,{animateIn:"animate__fadeIn",animateOnce:"true"},r.a.createElement(E,null,t.allProduct.nodes.filter((function(t,a){return a<e.state.limit})).map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"/knorr/products/"+e.id},r.a.createElement("div",null,r.a.createElement("img",{src:e.img}),r.a.createElement("h3",null,e.fullName))))})))),t.allProduct.nodes.length>12&&this.state.limit<t.allProduct.nodes.length&&r.a.createElement(x,{background:"none",onClick:function(){return e.setState({limit:e.state.limit+12})}}," Näita rohkem ")):null,r.a.createElement("div",{class:"divider"}),this.state.filterOne?r.a.createElement("div",null,r.a.createElement(u.a,{animateIn:"animate__fadeIn",animateOnce:"true"},r.a.createElement("h1",{style:{textAlign:"center"}},"Pakisupid")),r.a.createElement(u.a,{animateIn:"animate__fadeIn",animateOnce:"true"},r.a.createElement(E,null,t.allProduct.nodes.filter((function(e){return e.productLine.includes("Pakisupid")})).map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"/knorr/products/"+e.id},r.a.createElement("div",null,r.a.createElement("img",{src:e.img}),r.a.createElement("h3",null,e.fullName))))}))))):null,r.a.createElement("div",{class:"divider"}),this.state.filterTwo?r.a.createElement("div",null,r.a.createElement(u.a,{animateIn:"animate__fadeIn",animateOnce:"true"},r.a.createElement("h1",{style:{textAlign:"center"}},"Topsiroad")),r.a.createElement(u.a,{animateIn:"animate__fadeIn",animateOnce:"true"},r.a.createElement(E,null,t.allProduct.nodes.filter((function(e){return e.productLine.includes("Topsiroad")})).map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"/knorr/products/"+e.id},r.a.createElement("div",null,r.a.createElement("img",{src:e.img}),r.a.createElement("h3",null,e.fullName))))}))))):null,r.a.createElement("div",{class:"divider"}),this.state.filterThree?r.a.createElement("div",null,r.a.createElement(u.a,{animateIn:"animate__fadeIn",animateOnce:"true"},r.a.createElement("h1",{style:{textAlign:"center"}},"Kiirnuudlid")),r.a.createElement(u.a,{animateIn:"animate__fadeIn",animateOnce:"true"},r.a.createElement(E,null,t.allProduct.nodes.filter((function(e){return e.productLine.includes("Kiirnuudlid")})).map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"/knorr/products/"+e.id},r.a.createElement("div",null,r.a.createElement("img",{src:e.img}),r.a.createElement("h3",null,e.fullName))))}))))):null,r.a.createElement("div",{class:"divider"}),this.state.filterFour?r.a.createElement("div",null,r.a.createElement(u.a,{animateIn:"animate__fadeIn",animateOnce:"true"},r.a.createElement("h1",{style:{textAlign:"center"}},"Maitseainesegud ja puljongid")),r.a.createElement(u.a,{animateIn:"animate__fadeIn",animateOnce:"true"},r.a.createElement(E,null,t.allProduct.nodes.filter((function(e){return e.productLine.includes("Maitseainesegud ja puljongid")})).map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"/knorr/products/"+e.id},r.a.createElement("div",null,r.a.createElement("img",{src:e.img}),r.a.createElement("h3",null,e.fullName))))}))))):null)))},t}(r.a.Component);t.default=k}}]);
//# sourceMappingURL=component---src-pages-knorr-products-js-65ac329d06fd9fd63025.js.map