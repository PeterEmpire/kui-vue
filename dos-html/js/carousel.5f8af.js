/*! kui-vue v1.8.8 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"/AIv":function(e,t,s){(e.exports=s("I1BE")(!1)).push([e.i,"\n.k-carousel-item-demo {\n  height: 160px;\n  line-height: 160px;\n  background: #6c98d6;\n  text-align: center;\n  font-size: 20px;\n  color: #fff;\n}\n",""])},"0UDH":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={base:'<Carousel>\n  <CarouselItem class="k-carousel-item-demo">1</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">2</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">3</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">4</CarouselItem>\n</Carousel>',vertical:'<Carousel vertical>\n  <CarouselItem class="k-carousel-item-demo">1</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">2</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">3</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">4</CarouselItem>\n</Carousel>',autoplay:'<Carousel autoplay>\n  <CarouselItem class="k-carousel-item-demo">1</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">2</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">3</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">4</CarouselItem>\n</Carousel>',radius:'<Carousel dotsType="radius">\n  <CarouselItem class="k-carousel-item-demo">1</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">2</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">3</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">4</CarouselItem>\n</Carousel>'};t.default=a},BybE:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"resize",rawName:"v-resize",value:e.setHeight,expression:"setHeight"}],ref:"dom",class:e.classes,style:e.styles},[s("div",{ref:"demo",staticClass:"k-demo-main"},[s("div",{staticClass:"k-content"},[e._t("content")],2),e._v(" "),s("div",{staticClass:"k-desc"},[s("a",{staticClass:"k-desc-title"},[e._v(e._s(e.title))]),e._v(" "),s("div",{staticClass:"k-desc-content"},[e._t("desc")],2),e._v(" "),s("a",{staticClass:"k-code-expan",on:{click:e.toggle}},[s("Icon",{attrs:{type:e.icons}})],1)])]),e._v(" "),s("div",{staticClass:"k-demo-line"}),e._v(" "),s("Collapse",[s("Code",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"expand"}],ref:"code",attrs:{lang:e.lang}},[e._t("code")],2)],1)],1)},o=[];s.d(t,"a",function(){return a}),s.d(t,"b",function(){return o})},C8VU:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=s("z7BB"),l=(a=o)&&a.__esModule?a:{default:a};t.default=l.default},DbLR:function(e,t,s){"use strict";var a=s("SgGg");s.n(a).a},SZ3q:function(e,t,s){"use strict";s.r(t);var a=s("rXeU"),o=s.n(a);for(var l in a)"default"!==l&&function(e){s.d(t,e,function(){return a[e]})}(l);t.default=o.a},SgGg:function(e,t,s){var a=s("/AIv");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,s("SZ7m").default)("765ac2ea",a,!0,{})},mm18:function(e,t,s){"use strict";s.r(t);var a=s("q5sj"),o=s("SZ3q");for(var l in o)"default"!==l&&function(e){s.d(t,e,function(){return o[e]})}(l);s("DbLR");var r=s("KHd+"),u=Object(r.a)(o.default,a.a,a.b,!1,null,null,null);t.default=u.exports},q5sj:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v("Carousel 走马灯")]),e._v(" "),s("p",[e._v("就是传说中的大图轮播")]),e._v(" "),s("h3",[e._v("代码示例")]),e._v(" "),s("Row",{attrs:{gutter:"8"}},[s("Col",{attrs:{span:"12"}},[s("Demo",{attrs:{layout:"vertical",title:"基本"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Carousel",[s("CarouselItem",{staticClass:"k-carousel-item-demo"},[e._v("1")]),e._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[e._v("2")]),e._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[e._v("3")]),e._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[e._v("4")])],1)],1),e._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("最基本的用法。")]),e._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.base))])]),e._v(" "),s("Demo",{attrs:{layout:"vertical",title:"垂直"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Carousel",{attrs:{vertical:""}},[s("CarouselItem",{staticClass:"k-carousel-item-demo"},[e._v("1")]),e._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[e._v("2")]),e._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[e._v("3")]),e._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[e._v("4")])],1)],1),e._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("垂直显示,此时不显示左右箭头")]),e._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.vertical))])])],1),e._v(" "),s("Col",{attrs:{span:"12"}},[s("Demo",{attrs:{layout:"vertical",title:"自动播放"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Carousel",{attrs:{autoplay:""}},[s("CarouselItem",{staticClass:"k-carousel-item-demo"},[e._v("1")]),e._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[e._v("2")]),e._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[e._v("3")]),e._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[e._v("4")])],1)],1),e._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("定时切换下一张。")]),e._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.autoplay))])]),e._v(" "),s("Demo",{attrs:{layout:"vertical",title:"圆形指示器"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Carousel",{attrs:{dotsType:"radius"}},[s("CarouselItem",{staticClass:"k-carousel-item-demo"},[e._v("1")]),e._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[e._v("2")]),e._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[e._v("3")]),e._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[e._v("4")])],1)],1),e._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("圆形指示器")]),e._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.radius))])])],1)],1),e._v(" "),s("h3",[e._v("API")]),e._v(" "),e._m(0)],1)},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"table-border"},[s("table",[s("tr",[s("th",[e._v("属性")]),e._v(" "),s("th",[e._v("说明")]),e._v(" "),s("th",[e._v("类型")]),e._v(" "),s("th",[e._v("默认值")])]),e._v(" "),s("tr",[s("td",[e._v("value")]),e._v(" "),s("td",[e._v("幻灯片的索引，从 0 开始，可以使用 v-model 双向绑定数据")]),e._v(" "),s("td",[e._v("String,Number")]),e._v(" "),s("td",[e._v("0")])]),e._v(" "),s("tr",[s("td",[e._v("loop")]),e._v(" "),s("td",[e._v("是否开启循环")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[e._v("true")])]),e._v(" "),s("tr",[s("td",[e._v("autoplay")]),e._v(" "),s("td",[e._v("是否自动切换")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[e._v("false")])]),e._v(" "),s("tr",[s("td",[e._v("speed")]),e._v(" "),s("td",[e._v("自动切换的时间间隔，单位为毫秒")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[e._v("2000")])]),e._v(" "),s("tr",[s("td",[e._v("dots-type")]),e._v(" "),s("td",[e._v("指示器的类型，"),s("code",[e._v("rect")]),e._v(" 为方块，"),s("code",[e._v("radius")]),e._v("为圆点")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[e._v("2000")])])])])}];s.d(t,"a",function(){return a}),s.d(t,"b",function(){return o})},rXeU:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(s("C8VU")),o=l(s("0UDH"));function l(e){return e&&e.__esModule?e:{default:e}}t.default={components:{Demo:a.default},data:function(){return{code:o.default}}}},sOOp:function(e,t,s){"use strict";s.r(t);var a=s("ujjj"),o=s.n(a);for(var l in a)"default"!==l&&function(e){s.d(t,e,function(){return a[e]})}(l);t.default=o.a},ujjj:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(s("YEIV")),o=u(s("cF/K")),l=u(s("Ff65")),r=u(s("7+I9"));function u(e){return e&&e.__esModule?e:{default:e}}t.default={directives:{resize:r.default},components:{Code:o.default,Collapse:l.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"code-working":"code"},classes:function(){return["k-demo",(0,a.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var e=this.expand;this.expand=!e,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}},z7BB:function(e,t,s){"use strict";s.r(t);var a=s("BybE"),o=s("sOOp");for(var l in o)"default"!==l&&function(e){s.d(t,e,function(){return o[e]})}(l);var r=s("KHd+"),u=Object(r.a)(o.default,a.a,a.b,!1,null,null,null);t.default=u.exports}}]);