(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"4mTO":function(e,t,n){e.exports=n.p+"static/lipton-products-hero-772ab6d174baf8d27c4622dd99d03c50.jpg"},KX9o:function(e,t,n){"use strict";n.r(t);var a=n("dI71"),i=n("q1tI"),o=n.n(i),r=n("vOnD"),l=n("4mTO"),d=n.n(l),c=n("b5km"),s=n.n(c),m=n("NGwb"),u=n.n(m),p=r.b.img.withConfig({displayName:"products__LiptonHeroImage",componentId:"rd8nu9-0"})(["width:100%;height:550px;object-fit:cover;@media (max-width:1200px){height:400px;content:url(",");margin-top:60px;}"],s.a),h=r.b.div.withConfig({displayName:"products__ProductSectionDiv",componentId:"rd8nu9-1"})(["max-width:100%;width:100%;margin-top:50px;margin-bottom:80px;&:after{content:'';display:block;clear:both;}@media (max-width:692px){margin-top:0px;margin-bottom:0px;}h1{color:#c8381d;text-align:center;margin-bottom:50px;font-weight:700;}h2{color:#c8381d;font-size:1.3rem;}"]),f=r.b.div.withConfig({displayName:"products__FilterDiv",componentId:"rd8nu9-2"})(["width:15%;margin-left:5%;margin-top:100px;float:left;text-align:center;position:sticky;top:120px;left:0;@media (max-width:1100px){width:25%;}@media (max-width:692px){display:none;}"]),g=r.b.div.withConfig({displayName:"products__ProductDiv",componentId:"rd8nu9-3"})(["width:60%;float:left;position:relative;.divider{width:4px;height:calc(100% - 100px);background:linear-gradient(60deg,#fff001 0,#c8381d 40%,#c8381d 60%,#fff001 100%);border-radius:95%;position:absolute;left:0;top:100px;@media (max-width:692px){display:none;}}@media (max-width:1100px){width:55%;margin-top:20px;}@media (max-width:692px){width:100%;margin-top:20px;}"]),w=r.b.button.withConfig({displayName:"products__Filter",componentId:"rd8nu9-4"})(["color:white;padding:10px 0;width:150px;border:none;margin:10px 10px;border-radius:10px;background:#BA2318;text-transform:none;transition:.5s;box-shadow:0px -3px 2px rgba(0,0,0,0.39);outline:none;text-decoration:none;&:hover{background:#BA2318;transform:scale(1.15);opacity:1;border:none;outline:none;text-decoration:none;}&:focus{outline:none;background:#ffe902;color:#c8381d;font-weight:bold;}"]),x=r.b.ul.withConfig({displayName:"products__ProductsUl",componentId:"rd8nu9-5"})(["display:grid;grid-template-columns:repeat(3,1fr);list-style:none;justify-items:center;padding-left:5%;padding-right:5%;img{margin-left:auto;margin-right:auto;display:block;width:80%;transition:all .2s linear;&:hover{transform:scale(1.2);}}div{margin-left:auto;margin-right:auto;color:#c8381d;border-radius:15px;width:80%;padding:0 10px 10px 10px;margin-bottom:7%;font-weight:bold;text-align:center;height:90%;box-shadow:5px 5px 10px #e4e1c0;h3{font-size:1rem;font-weight:bold;}}@media (max-width:692px){grid-template-columns:repeat(2,1fr);}"]),b=r.b.button.withConfig({displayName:"products__ShowMore",componentId:"rd8nu9-6"})(["color:white;padding:10px 30px;width:150px;border:none;display:block;margin-left:auto;margin-right:auto;border-radius:10px;background:#BA2318;border:none;text-transform:none;transition:.5s;box-shadow:0px -3px 2px rgba(0,0,0,0.39);outline:none;text-decoration:none;&:hover{background:#BA2318;transform:scale(1.15);opacity:1;border:none;outline:none;text-decoration:none;}&:focus{outline:none;}"]),E={allProducts:!0,filterOne:!1,filterTwo:!1,filterThree:!1,limit:12},v=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state=E,t.handleShowAll=function(){t.setState(Object.assign({},E))},t.handleShowFilterOne=function(){t.setState(Object.assign({},E,{filterOne:!0}))},t.handleShowFilterTwo=function(){t.setState(Object.assign({},E,{filterTwo:!0}))},t.handleShowFilterThree=function(){t.setState(Object.assign({},E,{filterThree:!0}))},t.ifURL=function(){return"?filter=Must-tee"==window.location.search?(t.state.allProducts=!1,t.state.filterOne=!0,t.state.filterTwo=!1,t.state.filterThree=!1):"?filter=Roheline-tee"==window.location.search?(t.state.allProducts=!1,t.state.filterOne=!1,t.state.filterTwo=!0,t.state.filterThree=!1):"?filter=Funktsionaalne-ja-taimetee"==window.location.search?(t.state.allProducts=!1,t.state.filterOne=!1,t.state.filterTwo=!1,t.state.filterThree=!0):(t.state.allProducts=!0,t.state.filterOne=!1,t.state.filterTwo=!1,t.state.filterThree=!1)},t.componentDidMount=function(){t.ifURL()},t}return Object(a.a)(t,e),t.prototype.render=function(){var e=this,t=this.props.data;function n(e){var t=new URL(window.location);t.searchParams.set("filter",e),window.history.pushState({},"",t)}return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{animateIn:"animate__fadeIn",animateOnce:"true"},o.a.createElement(p,{src:d.a,alt:"Lipton Tooted"})),o.a.createElement(u.a,{animateIn:"animate__fadeIn",delay:"600",animateOnce:"true"},o.a.createElement(h,null,o.a.createElement(f,null,o.a.createElement("h2",{style:{textAlign:"center",fontWeight:"bold"}},"Kategooriad:"),o.a.createElement(w,{onClick:function(){var t;(t=new URL(window.location)).searchParams.delete("filter"),window.history.pushState({},"",t),e.handleShowAll()}},"Kõik Tooted​​"),o.a.createElement(w,{onClick:function(){n("Must-tee"),e.handleShowFilterOne()}},"Must tee"),o.a.createElement(w,{onClick:function(){n("Roheline-tee"),e.handleShowFilterTwo()}},"Roheline tee"),o.a.createElement(w,{onClick:function(){n("Funktsionaalne-ja-taimetee"),e.handleShowFilterThree()}},"Funktsionaalne- ja taimetee")),o.a.createElement(g,null,o.a.createElement("div",{class:"divider"}),this.state.allProducts?o.a.createElement("div",null,o.a.createElement("h1",{style:{textAlign:"center"}},"Kõik Tooted"),o.a.createElement(x,null,t.allProduct.nodes.filter((function(t,n){return n<e.state.limit})).map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("a",{href:"/lipton/products/"+e.id},o.a.createElement("div",null,o.a.createElement("img",{src:e.img}),o.a.createElement("h3",null,e.fullName))))}))),t.allProduct.nodes.length>12&&this.state.limit<t.allProduct.nodes.length&&o.a.createElement(b,{background:"none",onClick:function(){return e.setState({limit:e.state.limit+12})}}," Näita rohkem ")):null,o.a.createElement("div",{class:"divider"}),this.state.filterOne?o.a.createElement("div",null,o.a.createElement("h1",{style:{textAlign:"center"}},"Must tee"),o.a.createElement(x,null,t.allProduct.nodes.filter((function(e){return e.shortTitle.includes("Must tee")})).map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("a",{href:"/lipton/products/"+e.id},o.a.createElement("div",null,o.a.createElement("img",{src:e.img}),o.a.createElement("h3",null,e.fullName))))})))):null,o.a.createElement("div",{class:"divider"}),this.state.filterTwo?o.a.createElement("div",null,o.a.createElement("h1",{style:{textAlign:"center"}},"Roheline tee"),o.a.createElement(x,null,t.allProduct.nodes.filter((function(e){return e.shortTitle.includes("Roheline tee")})).map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("a",{href:"/lipton/products/"+e.id},o.a.createElement("div",null,o.a.createElement("img",{src:e.img}),o.a.createElement("h3",null,e.fullName))))})))):null,o.a.createElement("div",{class:"divider"}),this.state.filterThree?o.a.createElement("div",null,o.a.createElement("h1",{style:{textAlign:"center"}},"Funktsionaalne- ja taimetee"),o.a.createElement(x,null,t.allProduct.nodes.filter((function(e){return e.shortTitle.includes("Funktsionaalne- ja taimetee")})).map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("a",{href:"/lipton/products/"+e.id},o.a.createElement("div",null,o.a.createElement("img",{src:e.img}),o.a.createElement("h3",null,e.fullName))))})))):null))))},t}(o.a.Component);t.default=v},b5km:function(e,t,n){e.exports=n.p+"static/lipton-products-hero-mobile-4dac58049c5a0305be75bcfed38c3c15.jpg"}}]);
//# sourceMappingURL=component---src-pages-lipton-products-js-7fc265292e19b591ee9c.js.map