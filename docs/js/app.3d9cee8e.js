(function(e){function t(t){for(var r,o,c=t[0],i=t[1],u=t[2],d=0,f=[];d<c.length;d++)o=c[d],s[o]&&f.push(s[o][0]),s[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==s[i]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},s={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/ItemsJs-Vue-Demo/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),s=n.n(r);s.a},"4dd1":function(e,t,n){"use strict";var r=n("e664"),s=n.n(r);s.a},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"all",function(){return H}),n.d(r,"loaded",function(){return J});var s={};n.r(s),n.d(s,"setProducts",function(){return N}),n.d(s,"setLoaded",function(){return Q});var a={};n.r(a),n.d(a,"load",function(){return V});n("cadf"),n("551c"),n("097d");var o=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],u=(n("034f"),n("2877")),l={},d=Object(u["a"])(l,c,i,!1,null,null,null);d.options.__file="App.vue";var f=d.exports,p=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-layout-header",[n("q-toolbar",{attrs:{color:"primary",glossy:"mat"===e.$q.theme,inverted:"ios"===e.$q.theme}},[n("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu",icon:"menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),n("q-toolbar-title",[e._v("\n        Quasar App\n        "),n("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[e._v("Running on Quasar v"+e._s(e.$q.version))])])],1)],1),n("q-layout-drawer",{attrs:{"content-class":"mat"===e.$q.theme?"bg-grey-2":null},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[n("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[n("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[n("q-list-header",[e._v("Navigation")]),n("q-item",{attrs:{to:"/",exact:""}},[n("q-item-side",{attrs:{icon:"home"}}),n("q-item-main",{attrs:{label:"Home"}})],1),n("q-item",{attrs:{to:"/about"}},[n("q-item-side",{attrs:{icon:"info_outline"}}),n("q-item-main",{attrs:{label:"About"}})],1)],1)],1)],1),n("q-page-container",[n("router-view")],1)],1)},h=[],b=n("e083"),v={name:"LayoutDefault",data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop}},methods:{openURL:b["c"]}},g=v,w=(n("4dd1"),Object(u["a"])(g,m,h,!1,null,null,null));w.options.__file="Default.vue";var O=w.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[n("select-item",{ref:"productModal"}),n("q-btn",{attrs:{disable:!e.productsLoaded},on:{click:function(t){e.selectProduct()}}},[e._v("select product")]),n("pre",[e._v(e._s(e.selection))])],1)},q=[],y=(n("96cf"),n("1da1")),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-modal",{ref:"modal",staticClass:"row",attrs:{"no-backdrop-dismiss":"","content-css":{height:"auto",width:"auto",minWidth:e.$q.platform.is.desktop?"40vw":"100vw"}}},[n("q-card",{staticClass:"col-12"},[n("q-toolbar",[n("q-toolbar-title",[e._v(e._s(e.title))])],1),n("q-card-main",[n("q-scroll-area",{staticStyle:{height:"350px"}},[n("q-list",{attrs:{highlight:""}},e._l(e.items,function(t){return n("q-item",{key:t.id,nativeOn:{click:function(n){n.preventDefault(),e.selectClicked(t)}}},[n("q-item-main",{attrs:{label:t.name}})],1)}))],1)],1),n("q-card-actions",{attrs:{align:"end"}},[n("q-btn",{attrs:{color:"faded"},on:{click:function(t){e.cancelClicked()}}},[e._v("Cancel")])],1)],1)],1)},R=[],D=(n("7f7f"),{name:"SelectItem",props:{title:{type:String,required:!1,default:"Select an item"}},data:function(){return{callerReference:"",items:[],promise:{}}},methods:{open:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(t,n){var r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.items=n,this.promise=new Promise(function(e,t){r.returnDataFromModal=e,r.returnErrorFromModal=t}),this.callerReference=t,e.next=5,this.$refs.modal.show().then(function(){return r.promise});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),cancelClicked:function(){this.$refs.modal.hide(),this.returnDataFromModal({data:{},callerReference:this.callerReference})},selectClicked:function(e){this.$refs.modal.hide(),"errorproduct"===e.name?this.returnErrorFromModal({callerReference:this.callerReference,error:"simulated error: something went wrong while retrieving the item"}):this.returnDataFromModal({data:e,callerReference:this.callerReference})}}}),k=D,x=(n("9621"),Object(u["a"])(k,I,R,!1,null,null,null));x.options.__file="select-item.vue";var L=x.exports,j={components:{SelectItem:L},name:"home",data:function(){return{selection:{}}},created:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("products/load");case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),computed:{productsLoaded:function(){return this.$store.getters["products/loaded"]}},methods:{selectProduct:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.$store.getters["products/all"],e.next=4,this.$refs.productModal.open("myref",t);case 4:this.selection=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.selection=e.t0;case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}()}},$=j,U=Object(u["a"])($,_,q,!1,null,null,null);U.options.__file="Home.vue";var S=U.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[n("p",[e._v("This is an about page")])])},P=[],z={name:"PageAbout"},B=z,E=Object(u["a"])(B,M,P,!1,null,null,null);E.options.__file="About.vue";var C=E.exports;o["a"].use(p["a"]);var F=new p["a"]({routes:[{path:"/",component:O,children:[{path:"",name:"home",component:S},{path:"/about",name:"about",component:C}]}]}),T=n("2f62"),A={products:[],loaded:!1};function H(e){return e.products}function J(e){return e.loaded}function N(e,t){e.products=t.products}function Q(e,t){e.loaded=t.loaded}var X=n("d4ec"),Y=function e(t,n){Object(X["a"])(this,e),this.id=t,this.name=n};function V(e){return W.apply(this,arguments)}function W(){return W=Object(y["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.state.loaded){e.next=2;break}return e.abrupt("return");case 2:for(n=[],b["a"].create({message:"products loading, please wait ...",type:"positive"}),r=0;r<100;r++)n.push(new Y(r,Object(b["d"])()));return e.abrupt("return",new Promise(function(e){return setTimeout(function(){t.commit("setProducts",{products:n}),t.commit("setLoaded",{loaded:!0}),b["a"].create({message:"products loaded",type:"positive"}),e()},100)}));case 6:case"end":return e.stop()}},e,this)})),W.apply(this,arguments)}var G={namespaced:!0,state:A,getters:r,mutations:s,actions:a};o["a"].use(T["a"]);var K=function(){var e=new T["a"].Store({strict:!0,modules:{products:G}});return e};n("a4ac"),n("2826"),n("401b"),n("7e57");o["a"].use(b["b"],{config:{}}),o["a"].config.productionTip=!1,new o["a"]({router:F,store:K,render:function(e){return e(f)}}).$mount("#app")},"64a9":function(e,t,n){},"7f6e":function(e,t,n){},9621:function(e,t,n){"use strict";var r=n("7f6e"),s=n.n(r);s.a},"97cb":function(e,t,n){var r={"./bounce.css":"3d49","./bounceIn.css":"0a58","./bounceInDown.css":"a4a9","./bounceInLeft.css":"5965","./bounceInRight.css":"da80","./bounceInUp.css":"b60e","./bounceOut.css":"f39d","./bounceOutDown.css":"a9b5","./bounceOutLeft.css":"06dd","./bounceOutRight.css":"66bc","./bounceOutUp.css":"908f","./fadeIn.css":"1070","./fadeInDown.css":"1625","./fadeInDownBig.css":"9338","./fadeInLeft.css":"0c2e","./fadeInLeftBig.css":"f357","./fadeInRight.css":"ef8f","./fadeInRightBig.css":"747a","./fadeInUp.css":"e7fb","./fadeInUpBig.css":"b8af","./fadeOut.css":"25cd","./fadeOutDown.css":"93ea","./fadeOutDownBig.css":"c888","./fadeOutLeft.css":"5f1d","./fadeOutLeftBig.css":"a555","./fadeOutRight.css":"8934","./fadeOutRightBig.css":"9438","./fadeOutUp.css":"351b","./fadeOutUpBig.css":"23a5","./flash.css":"58a5","./flip.css":"bda0","./flipInX.css":"58b8","./flipInY.css":"5902","./flipOutX.css":"72c5","./flipOutY.css":"b8ad","./headShake.css":"2289","./hinge.css":"085e","./jello.css":"8014","./lightSpeedIn.css":"eb7d","./lightSpeedOut.css":"d043","./pulse.css":"ab98","./rollIn.css":"dc73","./rollOut.css":"592c","./rotateIn.css":"487d","./rotateInDownLeft.css":"bf6b","./rotateInDownRight.css":"7b96","./rotateInUpLeft.css":"89f8","./rotateInUpRight.css":"cb8c","./rotateOut.css":"de65","./rotateOutDownLeft.css":"8134","./rotateOutDownRight.css":"1ea7","./rotateOutUpLeft.css":"63d1","./rotateOutUpRight.css":"fcc3","./rubberBand.css":"aab2","./shake.css":"15f1","./slideInDown.css":"79ea","./slideInLeft.css":"a963","./slideInRight.css":"3b76","./slideInUp.css":"21e3","./slideOutDown.css":"abed","./slideOutLeft.css":"f857","./slideOutRight.css":"0a43","./slideOutUp.css":"5706","./swing.css":"b968","./tada.css":"3391","./wobble.css":"ed5b","./zoomIn.css":"38f3","./zoomInDown.css":"2577","./zoomInLeft.css":"1992","./zoomInRight.css":"ef68","./zoomInUp.css":"97a1","./zoomOut.css":"cc15","./zoomOutDown.css":"2ac6","./zoomOutLeft.css":"1fd4","./zoomOutRight.css":"fa2f","./zoomOutUp.css":"91e5"};function s(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}s.keys=function(){return Object.keys(r)},s.resolve=a,e.exports=s,s.id="97cb"},a4ac:function(e,t,n){},e664:function(e,t,n){}});
//# sourceMappingURL=app.3d9cee8e.js.map