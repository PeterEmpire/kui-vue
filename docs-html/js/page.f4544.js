/*! kui-vue v1.8.8 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2RRQ":function(t,e,n){"use strict";n.r(e);var s=n("yapp"),a=n.n(s);for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);e.default=a.a},AGwT:function(t,e,n){"use strict";n.r(e);var s=n("QKlc"),a=n("2RRQ");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);var o=n("KHd+"),r=Object(o.a)(a.default,s.a,s.b,!1,null,null,null);e.default=r.exports},Cx2h:function(t,e,n){"use strict";n.r(e);var s=n("dFET"),a=n("Mbf5");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);var o=n("KHd+"),r=Object(o.a)(a.default,s.a,s.b,!1,null,null,null);e.default=r.exports},Mbf5:function(t,e,n){"use strict";n.r(e);var s=n("cUm0"),a=n.n(s);for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);e.default=a.a},QKlc:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[n("div",{ref:"demo",staticClass:"k-demo-main"},[n("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),n("div",{staticClass:"k-desc"},[n("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),n("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[n("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),n("div",{staticClass:"k-demo-line"}),t._v(" "),n("Collapse",[n("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},a=[];n.d(e,"a",function(){return s}),n.d(e,"b",function(){return a})},ULru:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={base:'<Page :total="100" :curent="1" :pagesize="10"></Page>',size:'<Page :total="60" :curent="1" :pagesize="10" mini></Page>',sizer:'<Page :total="60" :current="1" sizer :pagesize="10" mini @change="test"></Page>'};e.default=s},ZNdt:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,a=n("AGwT"),i=(s=a)&&s.__esModule?s:{default:s};e.default=i.default},cUm0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(n("ZNdt")),a=i(n("ULru"));function i(t){return t&&t.__esModule?t:{default:t}}e.default={components:{Demo:s.default},data:function(){return{code:a.default}},methods:{test:function(t){console.log(t)}}}},dFET:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Page 分页")]),t._v(" "),n("h3",[t._v("代码示例")]),t._v(" "),n("Demo",{attrs:{title:"基础",layout:"vertical"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Page",{attrs:{total:1e3,current:1,pagesize:10}})],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("基本分页，\n      "),n("code",[t._v("total")]),t._v("为总页数，\n      "),n("code",[t._v("current")]),t._v("为当前页码，\n      "),n("code",[t._v("pagesize")]),t._v("为页码分组")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),n("Demo",{attrs:{title:"尺寸",layout:"vertical"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Page",{attrs:{total:60,current:1,pagesize:10,mini:""},on:{change:t.test}})],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("设置\n      "),n("code",[t._v("mini")]),t._v("可设置组件小尺寸展示，\n      "),n("code",[t._v("change")]),t._v("为页码改变触发事件")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.size))])]),t._v(" "),n("Demo",{attrs:{title:"每页数量",layout:"vertical"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Page",{attrs:{total:60,current:1,sizer:"",pagesize:10,mini:""},on:{change:t.test}})],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("可以切换每页显示的数量。")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.sizer))])]),t._v(" "),n("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])]),t._v(" "),n("tr",[n("td",[t._v("current")]),t._v(" "),n("td",[t._v("当前页码")]),t._v(" "),n("td",[t._v("Number,String")]),t._v(" "),n("td",[t._v("1")])]),t._v(" "),n("tr",[n("td",[t._v("total")]),t._v(" "),n("td",[t._v("数据总数")]),t._v(" "),n("td",[t._v("Number,String")]),t._v(" "),n("td",[t._v("0")])]),t._v(" "),n("tr",[n("td",[t._v("pagesize")]),t._v(" "),n("td",[t._v("每页条数")]),t._v(" "),n("td",[t._v("Number,String ")]),t._v(" "),n("td",[t._v("10")])]),t._v(" "),n("tr",[n("td",[t._v("sizer")]),t._v(" "),n("td",[t._v("是否显示页码组")]),t._v(" "),n("td",[t._v("Boolean ")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("size-data")]),t._v(" "),n("td",[t._v("自定义页码组数据")]),t._v(" "),n("td",[t._v("Array ")]),t._v(" "),n("td",[t._v("[10,15,20,30,40]")])]),t._v(" "),n("tr",[n("td",[t._v("mini")]),t._v(" "),n("td",[t._v("是否为迷你版")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("change")]),t._v(" "),n("td",[t._v("页码改变的回调，返回改变后的页码")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("page-size-change")]),t._v(" "),n("td",[t._v("切换页码组改变的回调，返回改变后的page-size")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("-")])])])])}];n.d(e,"a",function(){return s}),n.d(e,"b",function(){return a})},yapp:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(n("YEIV")),a=r(n("w3Nn")),i=r(n("Ff65")),o=r(n("7+I9"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={directives:{resize:o.default},components:{Code:a.default,Collapse:i.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"code-working":"code"},classes:function(){return["k-demo",(0,s.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}}}]);