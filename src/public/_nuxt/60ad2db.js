(window.webpackJsonp=window.webpackJsonp||[]).push([[3,5,7],{223:function(t,e,n){"use strict";n.r(e);n(45),n(27),n(44),n(15),n(70),n(36),n(71);var r=n(28),l=n(57);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={props:["ruta"],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)(["menu"]))},d=c,v=n(43),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("nav",{staticClass:"w-full z-40  top-0 py-1  fixed bg-gradient-to-r from-purple-400 via-green-600 to-blue-400 ",staticStyle:{"z-index":"120"},attrs:{id:""}},[n("div",{staticClass:" w-full text-white container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3"},[n("label",{staticClass:"cursor-pointer md:hidden block",attrs:{for:"menu-toggle"}},[n("svg",{staticClass:"fill-current ",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"}},[n("title",[t._v("menu")]),t._v(" "),n("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})])]),t._v(" "),n("input",{staticClass:"hidden",attrs:{type:"checkbox",id:"menu-toggle"}}),t._v(" "),n("div",{staticClass:"hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1",attrs:{id:"menu"}},[n("nav",[n("ul",{staticClass:"md:flex  justify-between text-base  pt-4 md:pt-0"},[n("li",{on:{click:function(e){t.menu.viewStore=!0}}},[n("a",{staticClass:"inline-block no-underline hover:text-gray-700  py-2 px-4",attrs:{href:"#"}},[t._v("tienda")])]),t._v(" "),n("li",{on:{click:function(e){t.menu.viewStore=!1}}},[n("a",{staticClass:"inline-block no-underline hover:text-gray-600 py-2 px-4",attrs:{href:"#"}},[t._v("sobre nosotros")])])])])]),t._v(" "),n("div",{staticClass:"items-left order-1 md:order-2 text-white"},[n("a",{staticClass:" md:-ml-40 flex items-center tracking-wide no-underline hover:no-underline font-bold  text-xl ",attrs:{href:"#"}},[n("svg",{staticClass:"fill-current  mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z"}})]),t._v("\n                    CELUARTE\n                ")])]),t._v(" "),n("div",{staticClass:"order-2 md:order-3 flex items-center",attrs:{id:"nav-content"}},[n("a",{staticClass:"hidden inline-block no-underline hover:text-black",attrs:{href:"#"}},[n("svg",{staticClass:"fill-current hover:text-black",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("circle",{attrs:{fill:"none",cx:"12",cy:"7",r:"3"}}),t._v(" "),n("path",{attrs:{d:"M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z"}})])]),t._v(" "),n("a",{staticClass:"inline-block no-underline hover:text-gray-700",attrs:{href:t.ruta.url}},[t._v("\n"+t._s(t.ruta.nombre)+"                    \n                ")])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:n(223).default})},224:function(t,e,n){var content=n(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(98).default)("7f53a422",content,!0,{sourceMap:!1})},227:function(t,e,n){"use strict";n.r(e);var r={props:["producto"]},l=n(43),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gray-100 w-100  p-6 flex flex-col "},[n("a",[n("img",{staticClass:"hover:grow hover:shadow-lg ",attrs:{src:t.producto.path,alt:"image x"}}),t._v(" "),n("div",{staticClass:"pt-3 flex items-center justify-between"},[n("p",{},[t._v(t._s(t.producto.title))])]),t._v(" "),n("p",{staticClass:"pt-1 text-gray-900"},[t._v("$"+t._s(t.producto._id))])])])}),[],!1,null,null,null);e.default=component.exports},228:function(t,e,n){"use strict";n(224)},229:function(t,e,n){var r=n(97)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\n.work-sans{\n  font-family:"Work Sans",sans-serif\n}\n#menu-toggle:checked+#menu{\n  display:block\n}\n.hover\\:grow{\n  transition:all .3s;\n  transform:scale(1)\n}\n.hover\\:grow:hover{\n  transform:scale(1.02)\n}\n.carousel-open:checked+.carousel-item{\n  position:static;\n  opacity:1\n}\n.carousel-item{\n  transition:opacity .6s ease-out\n}\n#carousel-1:checked~.control-1,#carousel-2:checked~.control-2,#carousel-3:checked~.control-3{\n  display:block\n}\n.carousel-indicators{\n  list-style:none;\n  margin:0;\n  padding:0;\n  position:absolute;\n  bottom:2%;\n  left:0;\n  right:0;\n  text-align:center;\n  z-index:10\n}\n#carousel-1:checked~.control-1~.carousel-indicators li:first-child .carousel-bullet,#carousel-2:checked~.control-2~.carousel-indicators li:nth-child(2) .carousel-bullet,#carousel-3:checked~.control-3~.carousel-indicators li:nth-child(3) .carousel-bullet{\n  color:#000\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},241:function(t,e,n){"use strict";n.r(e);n(45),n(27),n(44),n(15),n(70),n(36),n(71);var r=n(28),l=n(10),o=(n(58),n(57)),c=n(231),d=n.n(c);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m={data:function(){return{ruta:{url:"/servicioTecnico",nombre:"Servicio Técnico"},productos:[],store:!1,ws:"https://wa.me/message/QN44EMB2UVLKG1",ig:"https://www.instagram.com/celuarte/?hl=es-la",fb:"https://www.facebook.com/Celuarte-207328293281630/"}},created:function(){this.getProducts()},methods:{getProducts:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/image");case 2:n=e.sent,data=n.data,t.productos=data;case 5:case"end":return e.stop()}}),e)})))()},toWs:function(){window.open(this.ws,"_blanck")},toIg:function(){window.open(this.ig,"_blanck")},toFb:function(){window.open(this.fb,"_blanck")}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["menu"]))},h=m,f=(n(228),n(43)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    bg-white\n    text-gray-600\n    work-sans\n    leading-normal\n    text-base\n    tracking-normal\n  "},[n("Nav",{attrs:{ruta:t.ruta}}),t._v(" "),t._m(0),t._v(" "),n("section",{staticClass:"bg-white py-8"},[n("div",{staticClass:"container mx-auto flex items-center flex-wrap pt-4 pb-12"},[t._m(1),t._v(" "),n("div",{staticClass:"grid gap-x-8 gap-y-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 xl:grid-cols-4 auto-cols-max "},t._l(t.productos,(function(t){return n("Producto",{key:t._id,attrs:{producto:t}})})),1)])]),t._v(" "),t._m(2),t._v(" "),n("footer",{staticClass:"container mx-auto bg-white py-8 border-t border-gray-400"},[n("h5",{staticClass:"text-center"},[t._v("comunicate con nosotros")]),t._v(" "),n("div",{staticClass:"container flex px-3 py-8"},[n("div",{staticClass:"w-full mx-auto justify-center flex flex-wrap"},[n("a",{on:{click:t.toWs}},[n("img",{staticClass:"p-5",attrs:{src:"/static/ws.png",alt:""}})]),t._v(" "),n("a",{on:{click:t.toIg}},[n("img",{staticClass:"p-5",attrs:{src:"/static/ig.png",alt:""}})]),t._v(" "),n("a",{on:{click:t.toFb}},[n("img",{staticClass:"p-5",attrs:{src:"/static/fb.png",alt:""}})])])])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carousel relative container mx-auto mt-16",staticStyle:{"max-width":"1600px"}},[n("div",{staticClass:"carousel-inner relative overflow-hidden w-full"},[n("input",{staticClass:"carousel-open",attrs:{type:"radio",id:"carousel-1",name:"carousel","aria-hidden":"true",hidden:"",checked:"checked"}}),t._v(" "),n("div",{staticClass:"carousel-item absolute opacity-0",staticStyle:{height:"50vh"}},[n("div",{staticClass:"\n            block\n            h-full\n            w-full\n            mx-auto\n            flex\n            pt-6\n            md:pt-0 md:items-center\n            bg-cover bg-right\n          ",staticStyle:{"background-image":"url('/static/silicon3.jpg')"}},[n("div",{staticClass:"container mx-auto"},[n("div",{staticClass:"\n                flex flex-col\n                w-full\n                lg:w-1/2\n                md:ml-16\n                items-center\n                md:items-start\n                px-6\n                tracking-wide\n              "},[n("p",{staticClass:"text-white text-2xl my-4"},[t._v("\n                Silicon case, la mejor proteccion para tu celular\n              ")]),t._v(" "),n("a",{staticClass:"\n                  text-xl\n                  inline-block\n                  no-underline\n                  text-white\n                  border-b border-white\n                  leading-relaxed\n                  hover:text-gray-400 hover:border-gray-400\n                ",attrs:{href:"#"}},[t._v("ver producto")])])])])]),t._v(" "),n("label",{staticClass:"\n          prev\n          control-1\n          w-10\n          h-10\n          ml-2\n          md:ml-10\n          absolute\n          cursor-pointer\n          hidden\n          text-3xl\n          font-bold\n          text-black\n          hover:text-white\n          rounded-full\n          bg-white\n          hover:bg-gray-900\n          leading-tight\n          text-center\n          z-10\n          inset-y-0\n          left-0\n          my-auto\n        ",attrs:{for:"carousel-3"}},[t._v("‹")]),t._v(" "),n("label",{staticClass:"\n          next\n          control-1\n          w-10\n          h-10\n          mr-2\n          md:mr-10\n          absolute\n          cursor-pointer\n          hidden\n          text-3xl\n          font-bold\n          text-black\n          hover:text-white\n          rounded-full\n          bg-white\n          hover:bg-gray-900\n          leading-tight\n          text-center\n          z-10\n          inset-y-0\n          right-0\n          my-auto\n        ",attrs:{for:"carousel-2"}},[t._v("›")]),t._v(" "),n("input",{staticClass:"carousel-open",attrs:{type:"radio",id:"carousel-2",name:"carousel","aria-hidden":"true",hidden:""}}),t._v(" "),n("div",{staticClass:"carousel-item absolute opacity-0 bg-cover bg-right",staticStyle:{height:"50vh"}},[n("div",{staticClass:"\n            block\n            h-full\n            w-full\n            mx-auto\n            flex\n            pt-6\n            md:pt-0 md:items-center\n            bg-cover bg-right\n          ",staticStyle:{"background-image":"url('/static/image2.jpg')"}},[n("div",{staticClass:"container mx-auto"},[n("div",{staticClass:"\n                flex flex-col\n                w-full\n                lg:w-1/2\n                md:ml-16\n                items-center\n                md:items-start\n                px-6\n                tracking-wide\n              "},[n("p",{staticClass:"text-black text-2xl my-4"},[t._v("Real Bamboo Wall Clock")]),t._v(" "),n("a",{staticClass:"\n                  text-xl\n                  inline-block\n                  no-underline\n                  border-b border-gray-600\n                  leading-relaxed\n                  hover:text-black hover:border-black\n                ",attrs:{href:"#"}},[t._v("view product")])])])])]),t._v(" "),n("label",{staticClass:"\n          prev\n          control-2\n          w-10\n          h-10\n          ml-2\n          md:ml-10\n          absolute\n          cursor-pointer\n          hidden\n          text-3xl\n          font-bold\n          text-black\n          hover:text-white\n          rounded-full\n          bg-white\n          hover:bg-gray-900\n          leading-tight\n          text-center\n          z-10\n          inset-y-0\n          left-0\n          my-auto\n        ",attrs:{for:"carousel-1"}},[t._v("‹")]),t._v(" "),n("label",{staticClass:"\n          next\n          control-2\n          w-10\n          h-10\n          mr-2\n          md:mr-10\n          absolute\n          cursor-pointer\n          hidden\n          text-3xl\n          font-bold\n          text-black\n          hover:text-white\n          rounded-full\n          bg-white\n          hover:bg-gray-900\n          leading-tight\n          text-center\n          z-10\n          inset-y-0\n          right-0\n          my-auto\n        ",attrs:{for:"carousel-3"}},[t._v("›")]),t._v(" "),n("input",{staticClass:"carousel-open",attrs:{type:"radio",id:"carousel-3",name:"carousel","aria-hidden":"true",hidden:""}}),t._v(" "),n("div",{staticClass:"carousel-item absolute opacity-0",staticStyle:{height:"50vh"}},[n("div",{staticClass:"\n            block\n            h-full\n            w-full\n            mx-auto\n            flex\n            pt-6\n            md:pt-0 md:items-center\n            bg-cover bg-bottom\n          ",staticStyle:{"background-image":"url('/static/image3.jpg')"}},[n("div",{staticClass:"container mx-auto"},[n("div",{staticClass:"\n                flex flex-col\n                w-full\n                lg:w-1/2\n                md:ml-16\n                items-center\n                md:items-start\n                px-6\n                tracking-wide\n              "},[n("p",{staticClass:"text-black text-2xl my-4"},[t._v("\n                Brown and blue hardbound book\n              ")]),t._v(" "),n("a",{staticClass:"\n                  text-xl\n                  inline-block\n                  no-underline\n                  border-b border-gray-600\n                  leading-relaxed\n                  hover:text-black hover:border-black\n                ",attrs:{href:"#"}},[t._v("view product")])])])])]),t._v(" "),n("label",{staticClass:"\n          prev\n          control-3\n          w-10\n          h-10\n          ml-2\n          md:ml-10\n          absolute\n          cursor-pointer\n          hidden\n          text-3xl\n          font-bold\n          text-black\n          hover:text-white\n          rounded-full\n          bg-white\n          hover:bg-gray-900\n          leading-tight\n          text-center\n          z-10\n          inset-y-0\n          left-0\n          my-auto\n        ",attrs:{for:"carousel-2"}},[t._v("‹")]),t._v(" "),n("label",{staticClass:"\n          next\n          control-3\n          w-10\n          h-10\n          mr-2\n          md:mr-10\n          absolute\n          cursor-pointer\n          hidden\n          text-3xl\n          font-bold\n          text-black\n          hover:text-white\n          rounded-full\n          bg-white\n          hover:bg-gray-900\n          leading-tight\n          text-center\n          z-10\n          inset-y-0\n          right-0\n          my-auto\n        ",attrs:{for:"carousel-1"}},[t._v("›")]),t._v(" "),n("ol",{staticClass:"carousel-indicators"},[n("li",{staticClass:"inline-block mr-3"},[n("label",{staticClass:"\n              carousel-bullet\n              cursor-pointer\n              block\n              text-4xl text-gray-400\n              hover:text-gray-900\n            ",attrs:{for:"carousel-1"}},[t._v("•")])]),t._v(" "),n("li",{staticClass:"inline-block mr-3"},[n("label",{staticClass:"\n              carousel-bullet\n              cursor-pointer\n              block\n              text-4xl text-gray-400\n              hover:text-gray-900\n            ",attrs:{for:"carousel-2"}},[t._v("•")])]),t._v(" "),n("li",{staticClass:"inline-block mr-3"},[n("label",{staticClass:"\n              carousel-bullet\n              cursor-pointer\n              block\n              text-4xl text-gray-400\n              hover:text-gray-900\n            ",attrs:{for:"carousel-3"}},[t._v("•")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"w-full z-30 top-0 px-6 py-1",attrs:{id:"store"}},[n("div",{staticClass:"\n            w-full\n            container\n            mx-auto\n            flex flex-wrap\n            items-center\n            justify-between\n            mt-0\n            px-2\n            py-3\n          "},[n("a",{staticClass:"\n              uppercase\n              tracking-wide\n              no-underline\n              hover:no-underline\n              font-bold\n              text-gray-800 text-xl\n            "},[t._v("\n            nuestros productos\n          ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"bg-white py-8 hiddem"},[n("div",{staticClass:"container py-8 px-6 mx-auto"},[n("a",{staticClass:"\n          uppercase\n          tracking-wide\n          no-underline\n          hover:no-underline\n          font-bold\n          text-gray-800 text-xl\n          mb-8\n        ",attrs:{href:"#"}},[t._v("\n        acerca de nosotros\n      ")]),t._v(" "),n("p",{staticClass:"mt-8 mb-8"},[t._v("\n        This template is inspired by the stunning nordic minamalist design -\n        in particular:\n        "),n("br"),t._v(" "),n("a",{staticClass:"text-gray-800 underline hover:text-gray-900",attrs:{href:"http://savoy.nordicmade.com/",target:"_blank"}},[t._v("Savoy Theme")]),t._v("\n        created by\n        "),n("a",{staticClass:"text-gray-800 underline hover:text-gray-900",attrs:{href:"https://nordicmade.com/"}},[t._v("https://nordicmade.com/")]),t._v("\n        and\n        "),n("a",{staticClass:"text-gray-800 underline hover:text-gray-900",attrs:{href:"https://www.metricdesign.no/",target:"_blank"}},[t._v("https://www.metricdesign.no/")])]),t._v(" "),n("p",{staticClass:"mb-8"},[t._v("\n        Lorem ipsum dolor sit amet, consectetur\n        "),n("a",{attrs:{href:"#"}},[t._v("random link")]),t._v(" adipiscing elit, sed do eiusmod tempor\n        incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra\n        maecenas accumsan lacus vel facilisis volutpat. Vitae aliquet nec\n        ullamcorper sit. Nullam eget felis eget nunc lobortis mattis aliquam.\n        In est ante in nibh mauris. Egestas congue quisque egestas diam in.\n        Facilisi nullam vehicula ipsum a arcu. Nec nam aliquam sem et tortor\n        consequat. Eget mi proin sed libero enim sed faucibus turpis in. Hac\n        habitasse platea dictumst quisque. In aliquam sem fringilla ut.\n        Gravida rutrum quisque non tellus orci ac auctor augue mauris.\n        Accumsan lacus vel facilisis volutpat est velit egestas dui id. At\n        tempor commodo ullamcorper a. Volutpat commodo sed egestas egestas\n        fringilla. Vitae congue eu consequat ac.\n      ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:n(223).default,Nav:n(223).default,Producto:n(227).default})}}]);