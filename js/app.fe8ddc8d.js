(function(t){function a(a){for(var s,n,l=a[0],c=a[1],o=a[2],d=0,v=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&v.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(a);while(v.length)v.shift()();return i.push.apply(i,o||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],s=!0,l=1;l<e.length;l++){var c=e[l];0!==r[c]&&(s=!1)}s&&(i.splice(a--,1),t=n(n.s=e[0]))}return t}var s={},r={app:0},i=[];function n(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=s,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)n.d(e,s,function(a){return t[a]}.bind(null,s));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var o=0;o<l.length;o++)a(l[o]);var u=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"01b7":function(t,a,e){"use strict";e("b940")},"028e":function(t,a,e){},"2d64":function(t,a,e){"use strict";e("8320")},"36a8":function(t,a,e){"use strict";e("a82a")},"3a6c":function(t,a,e){"use strict";e("a50e")},"53eb":function(t,a,e){"use strict";e("028e")},"56d7":function(t,a,e){"use strict";e.r(a);var s=e("2b0e"),r=function(){var t=this,a=t._self._c;return a("v-app",[a("FillCastNavbar"),a("v-main",[a("router-view")],1)],1)},i=[],n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"bg"},[a("v-app-bar",{staticClass:"navbar justify-space-around",attrs:{height:"90px",app:""}},[a("v-app-bar-nav-icon",{staticClass:"d-block d-lg-none light",attrs:{fixed:""},on:{click:function(a){t.drawer=!t.drawer}}}),a("v-spacer",{staticClass:"d-block d-lg-none"}),a("v-toolbar-title",{staticClass:"d-flex align-start flex-column transparent ml-5 mt-n5"},[a("v-img",{staticClass:"ml-2",attrs:{src:e("cf05"),width:"48px"}}),a("h4",[t._v("FillCast")])],1),a("nav",{staticClass:"nav d-none d-lg-flex"},t._l(t.routers,(function(e,s){return a("router-link",{key:s,staticClass:"tab",attrs:{to:e.to}},[t._v(" "+t._s(e.name)+" ")])})),1),a("PersonalData",{staticClass:"d-none d-lg-flex"})],1),a("v-navigation-drawer",{attrs:{absolute:"",temporary:"",width:"370px"},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[a("v-list-item",[a("v-list-item-content",[a("PersonalData",{staticStyle:{position:"absolute",width:"300px"}})],1)],1),a("br"),a("v-divider"),a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",t._l(t.routers,(function(e,s){return a("v-list-item",{key:s},[a("router-link",{staticClass:"desktab",attrs:{to:e.to}},[t._v(" "+t._s(e.name)+" ")])],1)})),1)],1)],1)],1)},l=[],c=function(){var t=this,a=t._self._c;return a("div",{staticClass:"right-nav"},[a("v-btn",{staticClass:"transparent",attrs:{id:"coupon",elevation:"0",rounded:"",large:""}},[a("v-img",{staticClass:"mr-1",attrs:{src:e("9f0e"),width:"40px","margin-right":"36px"}}),a("div",{staticClass:"coupon-content"},[t._v(" 100 ")])],1),a("v-btn",{attrs:{id:"bell",large:"",icon:""}},[a("i",{staticClass:"fas fa-bell notion-i"})]),a("v-btn",{attrs:{id:"setting",large:"",icon:""}},[a("i",{staticClass:"fas fa-cog notion-i"})]),a("v-btn",{staticClass:"transparent",attrs:{id:"person",elevation:"0",width:"100px"}},[a("div",{staticClass:"person"},[a("v-avatar",{staticClass:"avatar",attrs:{size:"30"}},[a("v-img",{attrs:{src:e("c121")}})],1),a("div",{staticClass:"name"},[t._v("Ray")]),a("hr",{staticClass:"name_line"})],1)])],1)},o=[],u={name:"PersonalData"},d=u,v=(e("01b7"),e("2877")),p=e("6544"),f=e.n(p),m=e("8212"),b=e("8336"),g=e("adda"),x=Object(v["a"])(d,c,o,!1,null,"47b325e9",null),h=x.exports;f()(x,{VAvatar:m["a"],VBtn:b["a"],VImg:g["a"]});var C={name:"FillCastNavbar",data:()=>({drawer:!1,group:null,routers:[{name:"首頁",to:"/"},{name:"關於我們",to:"/About"},{name:"設計問券",to:"/Design"},{name:"填寫問券",to:"/Write"},{name:"吧檯",to:"/Bar"}]}),watch:{group(){this.drawer=!1}},components:{PersonalData:h}},_=C,w=(e("3a6c"),e("40dc")),y=e("5bc1"),V=e("ce7e"),j=e("8860"),O=e("da13"),k=e("5d23"),S=e("1baa"),T=e("f774"),A=e("2fa4"),I=e("2a7f"),P=Object(v["a"])(_,n,l,!1,null,"4f5c0228",null),D=P.exports;f()(P,{VAppBar:w["a"],VAppBarNavIcon:y["a"],VDivider:V["a"],VImg:g["a"],VList:j["a"],VListItem:O["a"],VListItemContent:k["a"],VListItemGroup:S["a"],VNavigationDrawer:T["a"],VSpacer:A["a"],VToolbarTitle:I["a"]});var F={name:"App",data:()=>({}),components:{FillCastNavbar:D}},B=F,L=e("7496"),M=e("f6c4"),N=Object(v["a"])(B,r,i,!1,null,null,null),G=N.exports;f()(N,{VApp:L["a"],VMain:M["a"]});var H=e("8c4f"),R=function(){var t=this,a=t._self._c;return a("div",{staticClass:"mainpage"},[a("v-container",{staticClass:"py-2 text-center"},[a("carouselCard",{attrs:{articles:t.card1}}),a("card",{attrs:{article:t.card2}})],1)],1)},W=[],q=function(){var t=this,a=t._self._c;return a("v-carousel",{attrs:{"show-arrows":!1,light:"","hide-delimiter-background":"","show-arrows-on-hover":"",height:"260px"}},t._l(t.articles,(function(e,s){return a("v-carousel-item",{key:s},[a("v-card",{staticClass:"mx-auto my-12 d-block d-lg-none",attrs:{"max-width":"400"}},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:e.img}},[a("v-card-title",{staticStyle:{background:"rgba(0,0,0,0.5)"}},[t._v(t._s(e.title))])],1)],1),a("v-card",{staticClass:"d-flex card1 my-12 mx-6 d-none d-lg-block"},[a("v-img",{staticClass:"img",attrs:{src:e.img}}),a("div",{staticClass:"d-flex flex-column",staticStyle:{position:"absolute",left:"270px","z-index":"999"}},[a("v-card-title",{staticClass:"title"},[t._v(t._s(e.title))]),a("v-card-text",{staticClass:"subtitle"},[t._v(t._s(e.subtitle))])],1)],1)],1)})),1)},z=[],J={name:"carousel-card",props:{articles:{type:Array,required:!0}}},Y=J,$=(e("36a8"),e("b0af")),E=e("99d9"),K=e("5e66"),Q=e("3e35"),U=Object(v["a"])(Y,q,z,!1,null,"09577938",null),X=U.exports;f()(U,{VCard:$["a"],VCardText:E["a"],VCardTitle:E["b"],VCarousel:K["a"],VCarouselItem:Q["a"],VImg:g["a"]});var Z=function(){var t=this,a=t._self._c;return a("div",[a("v-card",{staticClass:"mx-auto my-12 d-block d-lg-none",attrs:{"max-width":"400"}},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:t.article.img}},[a("v-card-title",{staticStyle:{background:"rgba(0,0,0,0.5)"}},[t._v(t._s(t.article.title))])],1)],1),a("v-card",{staticClass:"card2 transparent my-12 mx-6 d-none d-lg-block"},[a("div",{staticClass:"img-frame"},[a("v-img",{attrs:{src:t.article.img}})],1),a("v-card-title",{staticClass:"title"},[t._v(t._s(t.article.title))]),a("v-card-text",{staticClass:"subtitle"},[t._v(t._s(t.article.subtitle))])],1)],1)},tt=[],at={name:"card",props:{article:{type:Object,required:!0}}},et=at,st=(e("2d64"),Object(v["a"])(et,Z,tt,!1,null,"ac86e870",null)),rt=st.exports;f()(st,{VCard:$["a"],VCardText:E["a"],VCardTitle:E["b"],VImg:g["a"]});var it={name:"Home",data(){return{card1:[{img:e("b447"),title:"茶湯會  葡萄柚系列",subtitle:"憑會員點數享5折優惠"},{img:e("b447"),title:"茶湯會  葡萄柚系列",subtitle:"憑會員點數享5折優惠"},{img:e("b447"),title:"茶湯會  葡萄柚系列",subtitle:"憑會員點數享5折優惠"}],card2:{img:e("b447"),title:"YSL母親節限量聯名",subtitle:"此為內文 此為內文  此為內文 此為內文  此為內文 此為內文  此為內文 此為內文  此為內文 此為內文  此為內文 此為內文  此為內文 此為內文"}}},components:{carouselCard:X,card:rt}},nt=it,lt=(e("8d15"),e("a523")),ct=Object(v["a"])(nt,R,W,!1,null,"37010566",null),ot=ct.exports;f()(ct,{VContainer:lt["a"]});var ut=function(){var t=this,a=t._self._c;return a("div",{staticClass:"about"},[a("v-container",{staticClass:"py-2 text-center",attrs:{fluid:""}},[a("v-row",[a("v-card",{staticClass:"d-flex flex-wrap transparent mt-16",attrs:{elevation:"0"}},[a("v-col",{staticClass:"col-md-6"},[a("v-card-title",{staticClass:"text-h5 title line d-flex align-end mb-3"},[t._v(" 你"),a("div",{staticClass:"text-h4 white--text title"},[t._v("問")]),t._v("我愛你有多深 ")]),a("v-card-text",{staticClass:"text-h6 text-start"},[t._v(" 正在就讀大學的阿飛，有個期末報告需要用問卷蒐集200個樣本來完成，於是他好不容易製作好問卷發到IG、FB等社群平台上。 ")]),a("v-card-text",{staticClass:"text-h6 text-start"},[t._v(" 眼看報告的dead line就快到了，收到的回覆竟然只有5個...平常只會養蝴蝶的阿飛很苦惱，除了報告不能完成，還發現自己的人緣竟然爛成這樣。 ")]),a("v-card-text",{staticClass:"text-h6 text-start"},[t._v(" 於是在一個失落的夜晚，他走進附近的酒吧，準備買一場醉... ")])],1),a("v-col",{staticClass:"col-md-6 px-16"},[a("v-img",{attrs:{src:e("b447")}})],1)],1)],1),a("v-row",[a("v-card",{staticClass:"d-flex flex-wrap transparent mt-16",attrs:{elevation:"0"}},[a("v-col",{staticClass:"col-md-6 px-16"},[a("v-img",{attrs:{src:e("b447")}})],1),a("v-col",{staticClass:"col-md-6"},[a("v-card-title",{staticClass:"text-h5 title line d-flex align-end mb-3"},[a("div",{staticClass:"text-h4 white--text title"},[t._v("酒")]),t._v("忘卻煩惱的良藥 ")]),a("v-card-text",{staticClass:"text-h6 text-start"},[t._v(" 阿飛一邊喝酒，一邊對超正的bartender抱怨做問卷調查遇到的鳥事。三杯長島冰茶下肚後，阿飛開始出現幻覺...他看到高中很暈的女生對他打招呼，又看到bartender對他拋媚眼...修但幾咧... ")]),a("v-card-text",{staticClass:"text-h6 text-start"},[t._v(" 一個媚眼後是一串莫名其妙的話「我可以幫你解決煩惱，只要用FillCast，不僅問卷可以輕鬆得到回覆，上面還能拿優惠揪我出去玩哦！」 ")]),a("v-card-text",{staticClass:"text-h6 text-start"},[t._v(" 阿飛就這樣半信半疑的搜尋了FillCast...... ")])],1)],1)],1),a("v-row",[a("v-card",{staticClass:"d-flex flex-wrap transparent mt-16",attrs:{elevation:"0"}},[a("v-col",{staticClass:"col-md-6"},[a("v-card-title",{staticClass:"text-h5 title line d-flex align-end mb-3"},[t._v(" 最完善的問卷平台 ")]),a("v-card-text",{staticClass:"text-h6 text-start"},[t._v(" FillCast團隊致力於打造一個能解決學生問卷困擾的線上平台。從打造問卷到發放問卷都能輕鬆完成。 而為了吸引人流來填寫問卷，我們也努力和眾多商家合作，推出最豐富的獎勵優惠卷。確保在得到大量樣本數之餘，大家也能得到超值的回饋。 ")]),a("v-card-text",{staticClass:"text-h6 text-start"},[t._v(" 我們將品牌打造出酒吧的氛圍，希望能提供用戶一個開心或惆悵都能來待著的空間。不論你是為問卷而煩惱還是想找到喜愛商家的優惠，這裡一定是最適合你的好去處。 ")]),a("p",{staticClass:"signature"},[t._v(" Founder Y. R. Lai ")])],1),a("v-col",{staticClass:"col-md-6 px-16"},[a("v-img",{attrs:{src:e("b447")}})],1)],1)],1)],1),a("div",{staticStyle:{width:"100%",height:"90px",position:"relative",overflow:"hidden"}},[a("div",{staticClass:"contactwe"},[t._m(0),a("object",{attrs:{data:e("5e94"),width:"64",height:"64"}}),a("object",{attrs:{data:e("a39e"),width:"64",height:"64"}}),a("div",{staticClass:"gmail"},[a("div",[a("object",{attrs:{data:e("e174"),width:"24",height:"24"}}),t._v("Gamil ")]),t._v(" fillcastCo.Ltd@gmail.com ")])])])],1)},dt=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"declaration"},[a("div",{staticClass:"contact"},[t._v("聯絡我們")])])}],vt={name:"Home",data(){return{}},components:{}},pt=vt,ft=(e("53eb"),e("62ad")),mt=e("0fd9"),bt=Object(v["a"])(pt,ut,dt,!1,null,"621dde6a",null),gt=bt.exports;f()(bt,{VCard:$["a"],VCardText:E["a"],VCardTitle:E["b"],VCol:ft["a"],VContainer:lt["a"],VImg:g["a"],VRow:mt["a"]});var xt=function(){var t=this;t._self._c;return t._m(0)},ht=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"about"},[a("h1",[t._v("這是吧檯")])])}],Ct={},_t=Ct,wt=Object(v["a"])(_t,xt,ht,!1,null,null,null),yt=wt.exports,Vt=function(){var t=this;t._self._c;return t._m(0)},jt=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"about"},[a("h1",[t._v("這是設計問卷")])])}],Ot={},kt=Object(v["a"])(Ot,Vt,jt,!1,null,null,null),St=kt.exports,Tt=function(){var t=this;t._self._c;return t._m(0)},At=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"about"},[a("h1",[t._v("這是填寫問卷")])])}],It={},Pt=Object(v["a"])(It,Tt,At,!1,null,null,null),Dt=Pt.exports,Ft=function(){var t=this;t._self._c;return t._m(0)},Bt=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],Lt={},Mt=Object(v["a"])(Lt,Ft,Bt,!1,null,null,null),Nt=Mt.exports;s["a"].use(H["a"]);const Gt=[{path:"/",name:"Home",component:ot},{path:"/About",name:"About",component:gt},{path:"/Bar",name:"Bar",component:yt},{path:"/Design",name:"Design",component:St},{path:"/Write",name:"Write",component:Dt},{path:"/Account",name:"Account",component:Nt}],Ht=new H["a"]({mode:"history",base:"/",routes:Gt});var Rt=Ht,Wt=e("2f62");s["a"].use(Wt["a"]);var qt=new Wt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),zt=e("f309");s["a"].use(zt["a"]);var Jt=new zt["a"]({});s["a"].config.productionTip=!1,new s["a"]({router:Rt,store:qt,vuetify:Jt,render:t=>t(G)}).$mount("#app")},"5e94":function(t,a,e){t.exports=e.p+"img/ig.d5368227.svg"},8320:function(t,a,e){},"8d15":function(t,a,e){"use strict";e("9cd4")},"9cd4":function(t,a,e){},"9f0e":function(t,a,e){t.exports=e.p+"img/coupon.5bcdef2c.png"},a39e:function(t,a,e){t.exports=e.p+"img/fb.7e0f3567.svg"},a50e:function(t,a,e){},a82a:function(t,a,e){},b447:function(t,a,e){t.exports=e.p+"img/chatom.9b3ae75a.png"},b940:function(t,a,e){},c121:function(t,a,e){t.exports=e.p+"img/user.0acd0e4c.png"},cf05:function(t,a,e){t.exports=e.p+"img/logo.922c25af.png"},e174:function(t,a,e){t.exports=e.p+"img/gmail.27ab7156.svg"}});
//# sourceMappingURL=app.fe8ddc8d.js.map