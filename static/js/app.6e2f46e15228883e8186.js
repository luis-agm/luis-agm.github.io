webpackJsonp([1],[,,,,,,function(e,t,n){"use strict";var a=n(1),o=n(34),s=n(36),i=n.n(s);a.a.use(i.a),a.a.use(o.a),t.a=new o.a({routes:[]})},function(e,t,n){function a(e){n(14)}var o=n(0)(n(9),n(31),a,null,null);e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=n(7),s=n.n(o),i=n(6);a.a.config.productionTip=!1,new a.a({el:"#app",router:i.a,template:"<App/>",components:{App:s.a}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(28),o=n.n(a),s=n(29),i=n.n(s),r=n(27),l=n.n(r);t.default={data:function(){return{nav:!1}},name:"app",components:{TopSection:i.a,Toolbar:o.a,MainFooter:l.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(21),o=n.n(a);t.default={data:function(){return{pageTitle:"DevDevDev",navItems:[{title:"Home",link:"#"},{title:"About Me",link:"#"},{title:"Projects",link:"#"}],solidHeader:!1}},methods:{positionCheck:function(){console.log("waat"),window.scrollY>=56&&(this.solidHeader=!0),window.scrollY<56&&(this.solidHeader=!1)}},mounted:function(){window.addEventListener("scroll",o()(this.positionCheck,70))},destroyed:function(){window.removeEventListener("scroll",o()(this.positionCheck,70))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(26),o=(n.n(a),n(37)),s=n.n(o);t.default={name:"MainHeader",mounted:function(){var e=this;console.log(s.a),window.particlesJS("header",s.a),setInterval(function(){e.cycleTags()},1500)},data:function(){return{showTag:!0,currentTag:"Full-Stack",tagPos:0,headerTitle:"Make Great Stuff",tags:["JavaScript","Babel/ES6","NodeJS","Python","VueJS","React-Redux"]}},methods:{cycleTags:function(){var e=this;this.showTag=!1,setTimeout(function(){e.currentTag=e.tags[e.tagPos],e.tagPos===e.tags.length-1?e.tagPos=0:e.tagPos+=1,e.showTag=!0},300)}}}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,,,,,,,,function(e,t,n){function a(e){n(15)}var o=n(0)(n(10),n(32),a,null,null);e.exports=o.exports},function(e,t,n){function a(e){n(16)}var o=n(0)(n(11),n(33),a,null,null);e.exports=o.exports},function(e,t,n){function a(e){n(13)}var o=n(0)(n(12),n(30),a,null,null);e.exports=o.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header",attrs:{id:"header"}},[n("div",{attrs:{id:"parts"}}),e._v(" "),n("div",{staticClass:"header__banner"},[n("h1",{staticClass:"header__main-banner name"},[e._v("Luis González ,")]),e._v(" "),n("transition",{attrs:{name:"fade"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!0===e.showTag,expression:"showTag === true"}],staticClass:"header__main-banner great"},[e._v(e._s(e.currentTag))])]),e._v(" "),n("h1",{staticClass:"header__main-banner developer"},[e._v(" Developer")])],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("toolbar"),e._v(" "),n("top-section",{staticClass:"topsection"}),e._v(" "),n("main-footer"),e._v(" "),e.nav?n("router-view"):e._e()],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("span",{staticClass:"footer__text"},[e._v("Copyright  ©  2017 Luis González. All right reserved.")]),e._v(" "),n("span",{staticClass:"footer__text"},[e._v("Picture: "),n("a",{attrs:{href:"https://www.google.com/search?q=Mount+Roraima&oq=Mount+Roraima"}},[e._v("Mount Roraima")])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-toolbar",{staticClass:"main-toolbar elevation-0",class:{solid:e.solidHeader,"fixed-style":e.solidHeader},attrs:{light:""}},[n("v-toolbar-side-icon",{attrs:{light:""}}),e._v(" "),n("v-toolbar-title",{staticClass:"main-toolbar__title toolbar-text",class:{"fixed-style":e.solidHeader}},[e._v("Developer")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-toolbar-items",e._l(e.navItems,function(t){return n("v-toolbar-item",{key:t,staticClass:"main-toolbar__item toolbar-text",class:{"fixed-style":e.solidHeader},attrs:{ripple:""}},[e._v("\n        "+e._s(t.title)+"\n      ")])}))],1)},staticRenderFns:[]}},,,,function(e,t){e.exports={particles:{number:{value:200,density:{enable:!0,value_area:3e3}},color:{value:"#20BF55"},shape:{type:"triangle",stroke:{width:0,color:"#20BF55"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:0,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:70,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#20BF55",opacity:.2,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:200,line_linked:{opacity:1}},bubble:{distance:200,size:4,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}}],[8]);
//# sourceMappingURL=app.6e2f46e15228883e8186.js.map