(window.webpackJsonp=window.webpackJsonp||[]).push([[11,5],{223:function(t,n,e){"use strict";e.r(n);e(45),e(27),e(44),e(15),e(70),e(36),e(71);var r=e(28),l=e(57);function o(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var c={props:["ruta"],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({},Object(l.b)(["menu"]))},d=c,h=e(43),component=Object(h.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{},[e("nav",{staticClass:"w-full z-40  top-0 py-1  fixed bg-gradient-to-r from-purple-400 via-green-600 to-blue-400 ",staticStyle:{"z-index":"120"},attrs:{id:""}},[e("div",{staticClass:" w-full text-white container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3"},[e("label",{staticClass:"cursor-pointer md:hidden block",attrs:{for:"menu-toggle"}},[e("svg",{staticClass:"fill-current ",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"}},[e("title",[t._v("menu")]),t._v(" "),e("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})])]),t._v(" "),e("input",{staticClass:"hidden",attrs:{type:"checkbox",id:"menu-toggle"}}),t._v(" "),e("div",{staticClass:"hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1",attrs:{id:"menu"}},[e("nav",[e("ul",{staticClass:"md:flex  justify-between text-base  pt-4 md:pt-0"},[e("li",{on:{click:function(n){t.menu.viewStore=!0}}},[e("a",{staticClass:"inline-block no-underline hover:text-gray-700  py-2 px-4",attrs:{href:"#"}},[t._v("tienda")])]),t._v(" "),e("li",{on:{click:function(n){t.menu.viewStore=!1}}},[e("a",{staticClass:"inline-block no-underline hover:text-gray-600 py-2 px-4",attrs:{href:"#"}},[t._v("sobre nosotros")])])])])]),t._v(" "),e("div",{staticClass:"items-left order-1 md:order-2 text-white"},[e("a",{staticClass:" md:-ml-40 flex items-center tracking-wide no-underline hover:no-underline font-bold  text-xl ",attrs:{href:"#"}},[e("svg",{staticClass:"fill-current  mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z"}})]),t._v("\n                    CELUARTE\n                ")])]),t._v(" "),e("div",{staticClass:"order-2 md:order-3 flex items-center",attrs:{id:"nav-content"}},[e("a",{staticClass:"hidden inline-block no-underline hover:text-black",attrs:{href:"#"}},[e("svg",{staticClass:"fill-current hover:text-black",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("circle",{attrs:{fill:"none",cx:"12",cy:"7",r:"3"}}),t._v(" "),e("path",{attrs:{d:"M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z"}})])]),t._v(" "),e("a",{staticClass:"inline-block no-underline hover:text-gray-700",attrs:{href:t.ruta.url}},[t._v("\n"+t._s(t.ruta.nombre)+"                    \n                ")])])])])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Nav:e(223).default})},230:function(t,n,e){var content=e(243);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(98).default)("31e226b8",content,!0,{sourceMap:!1})},242:function(t,n,e){"use strict";e(230)},243:function(t,n,e){var r=e(97)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\n.publicidad{\n  position:absolute;\n  border-radius:10px;\n  right:0;\n  left:0;\n  width:12.9rem;\n  height:5rem\n}\n.work-sans{\n  font-family:"Work Sans",sans-serif\n}\n#menu-toggle:checked+#menu{\n  display:block\n}\n.hover\\:grow{\n  transition:all .3s;\n  transform:scale(1)\n}\n.hover\\:grow:hover{\n  transform:scale(1.02)\n}\n.carousel-open:checked+.carousel-item{\n  position:static;\n  opacity:1\n}\n.carousel-item{\n  transition:opacity .6s ease-out\n}\n#carousel-1:checked~.control-1,#carousel-2:checked~.control-2,#carousel-3:checked~.control-3{\n  display:block\n}\n.carousel-indicators{\n  list-style:none;\n  margin:0;\n  padding:0;\n  position:absolute;\n  bottom:2%;\n  left:0;\n  right:0;\n  text-align:center;\n  z-index:10\n}\n#carousel-1:checked~.control-1~.carousel-indicators li:first-child .carousel-bullet,#carousel-2:checked~.control-2~.carousel-indicators li:nth-child(2) .carousel-bullet,#carousel-3:checked~.control-3~.carousel-indicators li:nth-child(3) .carousel-bullet{\n  color:#000\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},263:function(t,n,e){"use strict";e.r(n);var r={methods:{toWs:function(){window.open(this.ws,"_blanck")},toIg:function(){window.open(this.ig,"_blanck")},toFb:function(){window.open(this.fb,"_blanck")},bgImg:function(t){var n=this.imageUrl(t);return"background-image: url(´".concat(n,"´)")},imageUrl:function(img){return img}},data:function(){return{ruta:{url:"/",nombre:"tienda"},ws:"https://wa.me/message/QN44EMB2UVLKG1",ig:"https://www.instagram.com/celuarte/?hl=es-la",fb:"https://www.facebook.com/Celuarte-207328293281630/",content:[{unsplash:"/static/cambioV.jpg",category:"pantallas y visores",title:"Cambio de Visores",article:"aqui una breve descripcion de como se realiza un cambio de visores",min:2.2},{unsplash:"/static/cambioP.jpg",category:"pantallas y visores",title:"cambio de pantallas",article:"Aqui una descripcion de los cambios de pantalla",min:4.42},{unsplash:"/static/mtoM.jpg",category:"hardware",title:"mantenimiento a equipos mojados",article:"Aqui la descripcion del procedimiento de mantenimiento",min:4.42},{unsplash:"/static/cbp.jpg",category:"hardware",title:"cambio de pin de carga",article:"ingrese decripcion",min:4.34},{unsplash:"IsK3BeLHobg",category:"ipsum",title:"Caisia Echo",article:"Another world Vangelis network of wormholes laws of physics prime number descended from astronomers. Not a sunrise but a galaxyrise decipherment Drake Equation star stuff harvesting star light cosmic ocean ship of the imagination. Venture dream of the mind's eye inconspicuous motes of rock and gas great turbulent clouds cosmic ocean from which we spring? Dream of the mind's eye dream of the mind's eye gathered by gravity citizens of distant epochs as a patch of light are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions. ",min:4.47},{unsplash:"XA0v5hbb7HY",category:"laquo",title:"Quasia Echo",article:"Another world Vangelis network of wormholes laws of physics prime number descended from astronomers. Not a sunrise but a galaxyrise decipherment Drake Equation star stuff harvesting star light cosmic ocean ship of the imagination. Venture dream of the mind's eye inconspicuous motes of rock and gas great turbulent clouds cosmic ocean from which we spring? Dream of the mind's eye dream of the mind's eye gathered by gravity citizens of distant epochs as a patch of light are creatures of the cosmos and billions upon billions upon billions upon billions upon billions upon billions upon billions.\ufeff",min:4.42}]}}},l=(e(242),e(43)),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Nav",{attrs:{ruta:t.ruta}}),t._v(" "),e("div",{staticClass:"h-1 bg-white shadow",staticStyle:{background:"linear-gradient("},attrs:{id:"progress"}}),t._v(" "),e("div",{staticClass:"bg-white font-sans leading-normal tracking-normal"},[e("style",[t._v('\n        \x3c!--image--\n          > <div\n          class="container relative w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"\n          style=""\n          > </div\n          > <style\n          > .carousel-open:checked\n          + .carousel-item {\n          position: static;\n          opacity: 100;\n        }\n        .carousel-item {\n          -webkit-transition: opacity 0.6s ease-out;\n          transition: opacity 0.6s ease-out;\n        }\n        #carousel-1:checked ~ .control-1,\n        #carousel-2:checked ~ .control-2,\n        #carousel-3:checked ~ .control-3 {\n          display: block;\n        }\n        .carousel-indicators {\n          list-style: none;\n          margin: 0;\n          padding: 0;\n          position: absolute;\n          bottom: 2%;\n          left: 0;\n          right: 0;\n          text-align: center;\n          z-index: 10;\n        }\n        #carousel-1:checked\n          ~ .control-1\n          ~ .carousel-indicators\n          li:nth-child(1)\n          .carousel-bullet,\n        #carousel-2:checked\n          ~ .control-2\n          ~ .carousel-indicators\n          li:nth-child(2)\n          .carousel-bullet,\n        #carousel-3:checked\n          ~ .control-3\n          ~ .carousel-indicators\n          li:nth-child(3)\n          .carousel-bullet {\n          color: #2b6cb0; /*Set to match the Tailwind colour you want the active one to be */\n        }\n      ')]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"container absolute z-40 md:max-w-3xl xl:max-w-5xl sm:max-w-lg mx-auto -mt-32 ",staticStyle:{left:"0",right:"0"}},[e("div",{staticClass:"mx-0 sm:mx-6"},[e("div",{staticClass:"\n              bg-gray-50\n              \n              p-8\n              text-xl\n              md:text-2xl\n              text-gray-800\n              leading-normal\n              shadow-md\n              m-5\n            "},[e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container w-full max-w-6xl p-1 mx-auto"},[e("div",{staticClass:"flex flex-wrap -mx-2"},t._l(t.content,(function(n){return e("div",{key:n.unsplash,staticClass:"w-full md:w-1/2 xl:w-1/3  px-2 pb-2"},[e("div",{staticClass:"\n                        bg-white\n                        rounded\n                        shadow-md\n                        hover:shadow-lg\n                        relative\n                        smooth\n                      "},[e("span",{staticClass:"no-underline hover:no-underline"}),t._v(" "),[e("img",{staticClass:"h-48 w-full rounded-t shadow",attrs:{src:t.imageUrl(n.unsplash)}})],t._v(" "),e("div",{staticClass:"p-6 h-auto"},[e("p",{staticClass:"text-gray-600 text-xs md:text-sm"},[t._v("\n                          "+t._s(n.category)+"\n                        ")]),t._v(" "),e("div",{staticClass:"font-bold text-xl text-gray-900"},[t._v("\n                          "+t._s(n.title)+"\n                        ")]),t._v(" "),e("p",{staticClass:"text-gray-800 font-serif text-base mb-5"},[t._v("\n                          "+t._s(n.article)+"\n                        ")])]),t._v(" "),e("div",{staticClass:"\n                          flex\n                          items-center\n                          justify-between\n                          inset-x-0\n                          bottom-0\n                          p-6\n                        "})],2)])})),0)])])])]),t._v(" "),e("footer",{staticClass:"\n          container\n          mx-auto\n          \n          bg-white\n        \n          \n          bottom-0\n        ",staticStyle:{left:"0",right:"0","z-index":"120"}},[e("h5",{staticClass:"text-center"},[t._v("comunicate con nosotros")]),t._v(" "),e("div",{staticClass:"container flex px-3 py-2"},[e("div",{staticClass:"w-full mx-auto justify-center flex flex-wrap"},[e("a",{on:{click:t.toWs}},[e("img",{staticClass:"p-5",attrs:{src:"/static/ws.png",alt:""}})]),t._v(" "),e("a",{on:{click:t.toIg}},[e("img",{staticClass:"p-5",attrs:{src:"/static/ig.png",alt:""}})]),t._v(" "),e("a",{on:{click:t.toFb}},[e("img",{staticClass:"p-5",attrs:{src:"/static/fb.png",alt:""}})])])])])])])],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"carousel relative container mx-auto mt-16",staticStyle:{"max-width":"1600px"}},[e("div",{staticClass:"carousel-inner relative overflow-hidden w-full"},[e("input",{staticClass:"carousel-open",attrs:{type:"radio",id:"carousel-1",name:"carousel","aria-hidden":"true",hidden:"",checked:"checked"}}),t._v(" "),e("div",{staticClass:"carousel-item absolute opacity-0",staticStyle:{height:"50vh"}},[e("div",{staticClass:"\n              block\n              h-full\n              w-full\n              mx-auto\n              flex\n              pt-6\n              md:pt-0 md:items-center\n              bg-cover bg-right\n            ",staticStyle:{"background-image":"url('/static/image1.jpg')"}},[e("div",{staticClass:"container mx-auto"})])]),t._v(" "),e("label",{staticClass:"\n            prev\n            control-1\n            w-10\n            h-10\n            ml-2\n            md:ml-10\n            absolute\n            cursor-pointer\n            hidden\n            text-3xl\n            font-bold\n            text-black\n            hover:text-white\n            rounded-full\n            bg-white\n            hover:bg-gray-900\n            leading-tight\n            text-center\n            z-10\n            inset-y-0\n            left-0\n            my-auto\n          ",attrs:{for:"carousel-3"}},[t._v("‹")]),t._v(" "),e("label",{staticClass:"\n            next\n            control-1\n            w-10\n            h-10\n            mr-2\n            md:mr-10\n            absolute\n            cursor-pointer\n            hidden\n            text-3xl\n            font-bold\n            text-black\n            hover:text-white\n            rounded-full\n            bg-white\n            hover:bg-gray-900\n            leading-tight\n            text-center\n            z-10\n            inset-y-0\n            right-0\n            my-auto\n          ",attrs:{for:"carousel-2"}},[t._v("›")]),t._v(" "),e("input",{staticClass:"carousel-open",attrs:{type:"radio",id:"carousel-2",name:"carousel","aria-hidden":"true",hidden:""}}),t._v(" "),e("div",{staticClass:"carousel-item absolute opacity-0 bg-cover bg-right",staticStyle:{height:"50vh"}},[e("div",{staticClass:"\n              block\n              h-full\n              w-full\n              mx-auto\n              flex\n              pt-6\n              md:pt-0 md:items-center\n              bg-cover bg-right\n            ",staticStyle:{"background-image":"url('/static/taller.jpg')"}},[e("div",{staticClass:"container mx-auto"})])]),t._v(" "),e("label",{staticClass:"\n            prev\n            control-2\n            w-10\n            h-10\n            ml-2\n            md:ml-10\n            absolute\n            cursor-pointer\n            hidden\n            text-3xl\n            font-bold\n            text-black\n            hover:text-white\n            rounded-full\n            bg-white\n            hover:bg-gray-900\n            leading-tight\n            text-center\n            z-10\n            inset-y-0\n            left-0\n            my-auto\n          ",attrs:{for:"carousel-1"}},[t._v("‹")]),t._v(" "),e("label",{staticClass:"\n            next\n            control-2\n            w-10\n            h-10\n            mr-2\n            md:mr-10\n            absolute\n            cursor-pointer\n            hidden\n            text-3xl\n            font-bold\n            text-black\n            hover:text-white\n            rounded-full\n            bg-white\n            hover:bg-gray-900\n            leading-tight\n            text-center\n            z-10\n            inset-y-0\n            right-0\n            my-auto\n          ",attrs:{for:"carousel-3"}},[t._v("›")]),t._v(" "),e("input",{staticClass:"carousel-open",attrs:{type:"radio",id:"carousel-3",name:"carousel","aria-hidden":"true",hidden:""}}),t._v(" "),e("div",{staticClass:"carousel-item absolute opacity-0",staticStyle:{height:"50vh"}},[e("div",{staticClass:"\n              block\n              h-full\n              w-full\n              mx-auto\n              flex\n              pt-6\n              md:pt-0 md:items-center\n              bg-cover bg-bottom\n            ",staticStyle:{"background-image":"url('/static/image32.jpg')"}},[e("div",{staticClass:"container mx-auto"})])]),t._v(" "),e("label",{staticClass:"\n            prev\n            control-3\n            w-10\n            h-10\n            ml-2\n            md:ml-10\n            absolute\n            cursor-pointer\n            hidden\n            text-3xl\n            font-bold\n            text-black\n            hover:text-white\n            rounded-full\n            bg-white\n            hover:bg-gray-900\n            leading-tight\n            text-center\n            z-10\n            inset-y-0\n            left-0\n            my-auto\n          ",attrs:{for:"carousel-2"}},[t._v("‹")]),t._v(" "),e("label",{staticClass:"\n            next\n            control-3\n            w-10\n            h-10\n            mr-2\n            md:mr-10\n            absolute\n            cursor-pointer\n            hidden\n            text-3xl\n            font-bold\n            text-black\n            hover:text-white\n            rounded-full\n            bg-white\n            hover:bg-gray-900\n            leading-tight\n            text-center\n            z-10\n            inset-y-0\n            right-0\n            my-auto\n          ",attrs:{for:"carousel-1"}},[t._v("›")]),t._v(" "),e("ol",{staticClass:"carousel-indicators"},[e("li",{staticClass:"inline-block mr-3"},[e("label",{staticClass:"\n                carousel-bullet\n                cursor-pointer\n                block\n                text-4xl text-gray-400\n                hover:text-gray-900\n              ",attrs:{for:"carousel-1"}},[t._v("•")])]),t._v(" "),e("li",{staticClass:"inline-block mr-3"},[e("label",{staticClass:"\n                carousel-bullet\n                cursor-pointer\n                block\n                text-4xl text-gray-400\n                hover:text-gray-900\n              ",attrs:{for:"carousel-2"}},[t._v("•")])]),t._v(" "),e("li",{staticClass:"inline-block mr-3"},[e("label",{staticClass:"\n                carousel-bullet\n                cursor-pointer\n                block\n                text-4xl text-gray-400\n                hover:text-gray-900\n              ",attrs:{for:"carousel-3"}},[t._v("•")])])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"publicidad"},[e("img",{attrs:{src:"/publicidad.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/publicidad.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/publicidad.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/publicidad.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/publicidad.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/publicidad.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/publicidad.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/publicidad.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/publicidad.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/publicidad.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/publicidad.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/publicidad.jpg",alt:""}})])}],!1,null,null,null);n.default=component.exports;installComponents(component,{Nav:e(223).default})}}]);