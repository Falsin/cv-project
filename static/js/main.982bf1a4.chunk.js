(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(8),r=n.n(i),s=n(2),l=n(3),o=n(5),h=n(4),j=n.p+"static/media/\u0441onstructor.13325f3d.jpg",u=n(0);var d=function(t){Object(o.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsx)("header",{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("img",{src:j,alt:""}),Object(u.jsx)("h1",{children:"CV \u0421onstructor"})]})})}}]),n}(a.a.Component),b=function(){return Object(u.jsx)("div",{className:"app",children:Object(u.jsx)(d,{})})},O=(n(14),n(7)),m=function(t){Object(o.a)(n,t);var e=Object(h.a)(n);function n(t){var c;return Object(s.a)(this,n),(c=e.call(this,t)).state={activeElemArr:[]},c}return Object(l.a)(n,[{key:"getCountryList",value:function(){var t=this;return fetch("https://restcountries.eu/rest/v2/all",{mode:"cors"}).then((function(t){return t.json()})).then((function(e){t.setState({cityArray:e})}))}},{key:"componentDidMount",value:function(t,e){e!==this.state&&this.getCountryList()}},{key:"changeHandler",value:function(t){t.target.value.length>=0&&!Object(O.a)(t.target.classList).includes("active")&&(t.target.classList.add("active"),console.log(this.state.activeElemArr),this.setState({activeElemArr:[].concat(Object(O.a)(this.state.activeElemArr),[t.target])}))}},{key:"render",value:function(){return Object(u.jsx)("section",{children:Object(u.jsxs)("div",{id:"generalInfo",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"name",children:"Name"}),Object(u.jsx)("input",{id:"name",onChange:this.changeHandler.bind(this),className:"classEX DCCWF"}),Object(u.jsx)("label",{htmlFor:"email",children:"Email"}),Object(u.jsx)("input",{id:"email",type:"email",onChange:this.changeHandler.bind(this)}),Object(u.jsx)("label",{htmlFor:"phone",type:"tel",children:"Phone"}),Object(u.jsx)("input",{id:"phone",onChange:this.changeHandler.bind(this)}),Object(u.jsx)("label",{htmlFor:"country",children:"Country"}),Object(u.jsx)("input",{id:"country",type:"country",onChange:this.changeHandler.bind(this),list:"cityName"})]}),Object(u.jsx)("div",{className:"photo",children:"Hello!"})]})})}}]),n}(a.a.Component);r.a.render(Object(u.jsxs)(a.a.StrictMode,{children:[Object(u.jsx)(b,{}),Object(u.jsx)(m,{})]}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.982bf1a4.chunk.js.map