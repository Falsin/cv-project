(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(7),a=n.n(i),o=n(2),s=n(3),j=n(5),l=n(4),u=n.p+"static/media/\u0441onstructor.13325f3d.jpg",h=n(0);var b,d=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("header",{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("img",{src:u,alt:""}),Object(h.jsx)("h1",{children:"CV \u0421onstructor"})]})})}}]),n}(r.a.Component),O=function(){return Object(h.jsx)("div",{className:"app",children:Object(h.jsx)(d,{})})};n(13);fetch("https://restcountries.eu/rest/v2/all",{mode:"cors"}).then((function(e){return e.json()})).then((function(e){return b=e}));var p=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"changeHandler",value:function(e){console.log(e.target.value),console.log(b)}},{key:"render",value:function(){var e=this;return Object(h.jsx)("section",{children:Object(h.jsxs)("div",{id:"generalInfo",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"name",children:"Name"}),Object(h.jsx)("input",{id:"name"}),Object(h.jsx)("label",{htmlFor:"email",children:"Email"}),Object(h.jsx)("input",{id:"email",type:"email"}),Object(h.jsx)("label",{htmlFor:"phone",type:"tel",children:"Phone"}),Object(h.jsx)("input",{id:"phone"}),Object(h.jsx)("label",{htmlFor:"country",children:"Country"}),Object(h.jsx)("input",{id:"country",type:"country",onChange:function(t){return e.changeHandler(t)}})]}),Object(h.jsx)("div",{className:"photo",children:"Hello!"})]})})}}]),n}(r.a.Component);a.a.render(Object(h.jsxs)(r.a.StrictMode,{children:[Object(h.jsx)(O,{}),Object(h.jsx)(p,{})]}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.77307bec.chunk.js.map