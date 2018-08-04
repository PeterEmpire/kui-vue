/*! kui-vue v1.8.8 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+W7v":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=d(o("mTNo")),a=d(o("ZNdt"));function d(t){return t&&t.__esModule?t:{default:t}}e.default={components:{Demo:a.default},data:function(){return{code:n.default,data:{a:1,b:2,c:3}}},methods:{upload:function(){this.$refs.upload.submit()},change:function(t){this.$Message.info("选择了文件："+t)},complite:function(t){console.log(t)}}}},"0J1x":function(t,e,o){"use strict";o.r(e);var n=o("+W7v"),a=o.n(n);for(var d in n)"default"!==d&&function(t){o.d(e,t,function(){return n[t]})}(d);e.default=a.a},"2RRQ":function(t,e,o){"use strict";o.r(e);var n=o("yapp"),a=o.n(n);for(var d in n)"default"!==d&&function(t){o.d(e,t,function(){return n[t]})}(d);e.default=a.a},AGwT:function(t,e,o){"use strict";o.r(e);var n=o("QKlc"),a=o("2RRQ");for(var d in a)"default"!==d&&function(t){o.d(e,t,function(){return a[t]})}(d);var s=o("KHd+"),i=Object(s.a)(a.default,n.a,n.b,!1,null,null,null);e.default=i.exports},QKlc:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[o("div",{ref:"demo",staticClass:"k-demo-main"},[o("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),o("div",{staticClass:"k-desc"},[o("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),o("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[o("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),o("div",{staticClass:"k-demo-line"}),t._v(" "),o("Collapse",[o("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},a=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return a})},ZNdt:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=o("AGwT"),d=(n=a)&&n.__esModule?n:{default:n};e.default=d.default},fbIr:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",[t._v("Upload 上传")]),t._v(" "),o("Alert",[t._v("为了兼容低版本（ie9）浏览器，上传采用模拟表单上传")]),t._v(" "),o("h3",[t._v("代码示例")]),t._v(" "),o("Row",{attrs:{gutter:"8"}},[o("Col",{attrs:{span:"12"}},[o("Demo",{attrs:{title:"基础用法",layout:"vertical"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Upload",{attrs:{action:"/rest/uploadFile"}},[o("Button",[t._v("上传文件")])],1)],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[o("code",[t._v("action")]),t._v("配置上传接口路径")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),o("Demo",{attrs:{title:"禁用",layout:"vertical"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Upload",{attrs:{action:"/rest/uploadFile",disabled:""}},[o("Button",{attrs:{type:"success"}},[t._v("上传文件")])],1)],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("设置\n          "),o("code",[t._v("disabled")]),t._v("属性来控制组件是否可用")])]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.disabled))])])],1),t._v(" "),o("Col",{attrs:{span:"12"}},[o("Demo",{attrs:{title:"附带数据上传",layout:"vertical"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Upload",{attrs:{action:"/rest/uploadFile",data:t.data},on:{change:t.change,complite:t.complite}},[o("Button",[t._v("上传文件")])],1)],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("此操作非多此一举，在ajax上传模式中，除了上传文件外，可能会有其他附加参数一起附带表单提交，传参\n        "),o("code",[t._v("data")]),t._v("为json")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.withData))])]),t._v(" "),o("Demo",{attrs:{title:"非自动上传模式",layout:"vertical"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Upload",{ref:"upload",attrs:{action:"/rest/uploadFile",data:t.data,type:"wait"},on:{change:t.change,complite:t.complite}},[o("Button",[t._v("上传文件")])],1),t._v(" "),o("Button",{on:{click:t.upload}},[t._v("点我开始上传")])],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n        "),o("code",[t._v("type")]),t._v("来控制是否选择文件就提交上传，\n        "),o("code",[t._v("complite")]),t._v("方法为上传完成成功或失败回调，返回数据取决于接口\n        "),o("code",[t._v("change")]),t._v("选择文件触发事件，返回选择的文件名\n      ")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.mode))])])],1)],1),t._v(" "),o("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"table-border"},[o("table",[o("tr",[o("th",[t._v("属性")]),t._v(" "),o("th",[t._v("说明")]),t._v(" "),o("th",[t._v("类型")]),t._v(" "),o("th",[t._v("默认值")])]),t._v(" "),o("tr",[o("td",[t._v("action")]),t._v(" "),o("td",[t._v("上传API地址")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("data")]),t._v(" "),o("td",[t._v("上传附带参数")]),t._v(" "),o("td",[t._v("Oject")]),t._v(" "),o("td",[t._v("{ }")])]),t._v(" "),o("tr",[o("td",[t._v("type")]),t._v(" "),o("td",[t._v("上传类型，可选值为change（选择文件触发上传），wait（选择文件之后，其他事件触发上传）或者不设置")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("change")])]),t._v(" "),o("tr",[o("td",[t._v("change")]),t._v(" "),o("td",[t._v("选择文件之后的回调，返回选中的文件名")]),t._v(" "),o("td",[t._v("Function")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("complite")]),t._v(" "),o("td",[t._v("上传完成之后的回调，返回值取决于api上传接口返回的值 ")]),t._v(" "),o("td",[t._v("Function")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("upload")]),t._v(" "),o("td",[t._v("触发上传事件，此方法配合type=wait，选中文件后 手动提交上传")]),t._v(" "),o("td",[t._v("Function")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("beforUpload")]),t._v(" "),o("td",[t._v("开始执行上传之前触发事件")]),t._v(" "),o("td",[t._v("Function")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("afterUpload")]),t._v(" "),o("td",[t._v("上传完成之后触发事件")]),t._v(" "),o("td",[t._v("Function")]),t._v(" "),o("td",[t._v("-")])])])])}];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return a})},jek6:function(t,e,o){"use strict";o.r(e);var n=o("fbIr"),a=o("0J1x");for(var d in a)"default"!==d&&function(t){o.d(e,t,function(){return a[t]})}(d);var s=o("KHd+"),i=Object(s.a)(a.default,n.a,n.b,!1,null,null,null);e.default=i.exports},mTNo:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={base:'<Upload action="/rest/uploadFile">\n  <Button>上传文件</Button>\n</Upload>',disabled:'<Upload action="/rest/uploadFile" disabled>\n  <Button type="success">上传文件</Button>\n</Upload>',withData:'<Upload action="/rest/uploadFile" @change="change" @complite="complite" :data="data">\n  <Button>上传文件</Button>\n</Upload>\ndata() {\n  return {\n    data: { a: 1, b: 2, c: 3 },\n  };\n},',mode:'<Upload action="/rest/uploadFile" @change="change" @complite="complite" ref="upload" :data="data" type="wait">\n  <Button>上传文件</Button>\n</Upload>\n<Button @click="upload">点我开始上传</Button>\n<script>\n  export default {\n    data() {\n      return {\n        data: { a: 1, b: 2, c: 3 },\n      };\n    },\n    methods: {\n      upload() {\n        this.$refs.upload.submit();\n      },\n      change(file) {\n        this.$Message.info(\'选择了文件：\' + file);\n      },\n      complite(res) {\n        console.log(res);\n      }\n    }\n  };\n  <\/script>'};e.default=n},yapp:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(o("YEIV")),a=i(o("w3Nn")),d=i(o("Ff65")),s=i(o("7+I9"));function i(t){return t&&t.__esModule?t:{default:t}}e.default={directives:{resize:s.default},components:{Code:a.default,Collapse:d.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"code-working":"code"},classes:function(){return["k-demo",(0,n.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}}}]);