(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["proyecto-detalle"],{1217:function(e,o,a){e.exports=a.p+"img/webFundoMauco.13819c71.png"},"27d6":function(e,o,a){e.exports=a.p+"img/formularioVue.909c3e68.png"},"3f35":function(e,o,a){var t={"./calculadora_v02.png":"d044","./formularioVue.png":"27d6","./webFundoMauco.png":"1217"};function i(e){var o=n(e);return a(o)}function n(e){if(!a.o(t,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return t[e]}i.keys=function(){return Object.keys(t)},i.resolve=n,e.exports=i,i.id="3f35"},"7db0":function(e,o,a){"use strict";var t=a("23e7"),i=a("b727").find,n=a("44d2"),r=a("ae40"),s="find",c=!0,l=r(s);s in[]&&Array(1)[s]((function(){c=!1})),t({target:"Array",proto:!0,forced:c||!l},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n(s)},"95ca":function(e,o,a){"use strict";o["a"]={proyectos:[{id:"1",nombre:"Calculadora",slug:"calculadora",img1:"calculadora_v02.png",imgSize:"50",linkgit:"https://github.com/tomvalladares/calculadora_v02",link2:"https://tomvalladares.github.io/calculadora_v02/",descripcion:"Calculadora básica elaborada en VueJS, se utiliza Vuex para gestionar las operaciones y resultados ingresados."},{id:"2",nombre:"Fundo Mauco",slug:"fundo-mauco",img1:"webFundoMauco.png",imgSize:"100",linkgit:"",link2:"https://fundomauco.cl/",descripcion:"Primer encargo, SPA realizada con VueJS, responsiva con 4 tamaños de dispositivo, también se hace uso de imágenes responsivas de diferentes tamaños. Se integra el uso de la API mapbox para mostrar puntos de interés del proyecto. Se crea un formulario de contacto que se conecta a la API de staticforms.xyz, en donde el mensaje es enviado al email registrado del cliente. Todo serverless. Todas las imagenes stock son de Unsplash y diseño de UI y diseño gráfico asociado a la página son de elaboración propia hecho en figma y softwares de diseño. Adicionalmente se realiza toda la configuración y cargado de data al servidor del cliente. Próximamente se integrará una vista 360º desde dron."},{id:"3",nombre:"Formulario de Contacto",slug:"formulario-vue",img1:"formularioVue.png",imgSize:"50",linkgit:"https://github.com/tomvalladares/contact-form-vue",link2:"",descripcion:"Formulario de contacto que utiliza la API serverless de staticforms.xyz, para lograrlo se toma como referencia la guía para REACT entregada por el developer de la API desde ahí se adapta para el uso en VUEJS mediante AXIOS. El servicio permite elaborar un formulario con distintos inputs requeridos, además cuenta con un filtro simple de spam mediante un honeypot, un input con display: none, el cual si es llenado con cualquier valor, se asumirá que es un SPAM."}]}},cb3a:function(e,o,a){},d044:function(e,o,a){e.exports=a.p+"img/calculadora_v02.47c7e546.png"},e865:function(e,o,a){"use strict";a.r(o);var t=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"proyectos"},[t("section",{staticClass:"proyecto-textos"},[t("h1",[e._v(e._s(e.proyecto.nombre))]),t("p",{staticClass:"proyecto-descripcion"},[e._v(e._s(e.proyecto.descripcion))]),t("div",[t("a",{directives:[{name:"show",rawName:"v-show",value:e.showLink(e.proyecto.link2),expression:"showLink(proyecto.link2)"}],attrs:{href:e.proyecto.link2,target:"blank"}},[t("svg-icon",{staticClass:"icono",attrs:{type:"mdi",size:25,path:e.pathLink}})],1),t("a",{directives:[{name:"show",rawName:"v-show",value:e.showLink(e.proyecto.linkgit),expression:"showLink(proyecto.linkgit)"}],attrs:{href:e.proyecto.linkgit,target:"blank"}},[t("svg-icon",{staticClass:"icono",attrs:{type:"mdi",size:25,path:e.pathGit}})],1)])]),t("img",{staticClass:"imagen",style:{maxWidth:e.proyecto.imgSize+"%"},attrs:{src:a("3f35")("./"+e.proyecto.img1),alt:e.proyecto.nombre}})])},i=[],n=(a("7db0"),a("95ca")),r=a("1fee"),s=a("94ed"),c={data:function(){return{pathGit:s["b"],pathLink:s["d"]}},components:{SvgIcon:r["a"]},props:{proyectoSlug:{type:String,required:!0}},computed:{proyecto:function(){var e=this;return n["a"].proyectos.find((function(o){return o.slug===e.proyectoSlug}))}},methods:{showLink:function(e){return""!=e}}},l=c,d=(a("fd7b"),a("2877")),u=Object(d["a"])(l,t,i,!1,null,"7cc8cfda",null);o["default"]=u.exports},fd7b:function(e,o,a){"use strict";a("cb3a")}}]);
//# sourceMappingURL=proyecto-detalle.9c3dddc2.js.map