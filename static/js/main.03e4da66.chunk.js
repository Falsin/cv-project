(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{20:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),c=n(13),i=n.n(c),o=n(2),s=n(3),u=n(5),p=n(4),l=n.p+"static/media/\u0441onstructor.13325f3d.jpg",j=n(0),b=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsx)("header",{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("img",{src:l,alt:""}),Object(j.jsx)("h1",{children:"CV \u0421onstructor"})]})})}}]),n}(a.a.Component),h=(n(20),n(9)),d=n(8);var O=function(t,e){return e.value=t.target.value,this};var f=function(t,e){return t.target.value.length>0&&!Object(d.a)(t.target.classList).includes("active")?t.target.classList.add("active"):t.target.value.length||t.target.classList.remove("active"),O.call(this,t,e)},v=n(6),m=n.n(v),x=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).scope=r.props.scope,r.state={idHtmlWithError:[]},r}return Object(s.a)(n,[{key:"click",value:function(t,e){"li"===t.target.localName&&this.state.idHtmlWithError.includes(e)&&(t.target.classList.remove("error"),t.target.lastChild.focus())}},{key:"blur",value:function(t){var e=this,n=t.obj,r=t.e,a=t.childObj,c=t.id,i=t.subObj;f.call(n,r,a),r.target.value?new Promise((function(t){var n=e.state.idHtmlWithError.indexOf(c);-1!==n&&e.reduceArray(n),t(e)})).then((function(t){0===t.state.idHtmlWithError.length&&(i.isValid=!0,t.scope.setState(n))})):(r.target.parentNode.classList.add("error"),new Promise((function(t){e.setState({idHtmlWithError:[].concat(Object(d.a)(e.state.idHtmlWithError),[c])}),t(e)})).then((function(t){i.isValid=!1,t.scope.setState(n)})))}},{key:"reduceArray",value:function(t){var e=Object(d.a)(this.state.idHtmlWithError);e.splice(t,1),this.setState({idHtmlWithError:e})}},{key:"render",value:function(){var t=this,e=this.props.subObj;return Object(j.jsx)("ul",{children:Object.entries(e).map((function(e,n){var r=t.state.idHtmlWithError.includes(n)?"error":"";return"object"===typeof e[1]?Object(j.jsxs)("li",{className:r,onClick:function(e){t.click(e,n)},children:[Object(j.jsx)("label",{children:e[0]}),e[1].returnInputElem.call(t,e,n)]},m()()):null}))})}}]),n}(a.a.Component),y=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).parentScope=t.parentScope,r.personalInfo=r.parentScope.state.generalInfo,r}return Object(s.a)(n,[{key:"render",value:function(){var t=this.parentScope.state;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Personal information"}),Object(j.jsx)(x,{subObj:t.generalInfo,obj:t,scope:this.parentScope})]})}}]),n}(a.a.Component);var S=function t(e){var n=Object.create(Object.getPrototypeOf(e)),r=function(r){Array.isArray(e[r])?(n[r]=[],e[r].forEach((function(e){n[r].push(t(e))}))):"object"!==typeof e[r]?n[r]=e[r]:n[r]=t(e[r])};for(var a in e)r(a);return n},k=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).parentScope=t.parentScope,r.url=void 0,r}return Object(s.a)(n,[{key:"onFileSelected",value:function(t){var e=this,n=t.target.files[0];if(void 0!==n){var r=new FileReader,a=document.querySelector(".photo");r.onload=function(t){e.url=t.target.result,a.style.backgroundImage="url(".concat(e.url,")"),e.addPropertyInState()},r.readAsDataURL(n)}}},{key:"componentDidMount",value:function(){this.addPropertyInState()}},{key:"addPropertyInState",value:function(){var t=S(this.parentScope.state);t.generalInfo.Avatar=this.url,this.parentScope.setState(t)}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"photo",children:Object(j.jsx)("label",{children:Object(j.jsx)("input",{type:"file",onChange:this.onFileSelected.bind(this)})})})}}]),n}(a.a.Component);var C=function(t,e){e.setState(t)},E=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsx)("input",{type:"button",value:this.props.value,onClick:function(){t.props.func()}})}}]),n}(a.a.Component),P=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:this.props.btns.map((function(t,e){return Object(j.jsx)(E,{type:"button",value:t.value,func:t.func},e)}))})}}]),n}(a.a.Component);var g=function(t){var e={obj:this.parentScope.props.obj,e:t,childObj:this.props.obj[1],id:this.props.id,subObj:this.parentScope.props.subObj};this.parentScope.blur(e)},I=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).parentScope=t.parentScope,r}return Object(s.a)(n,[{key:"render",value:function(){return this.parentScope.readonly?Object(j.jsx)("input",{type:this.props.type,value:this.props.obj[1].value,readOnly:!0}):Object(j.jsx)("input",{type:this.props.type,onBlur:g.bind(this),defaultValue:this.props.obj[1].value})}}]),n}(a.a.Component),V=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).parentScope=t.parentScope,r}return Object(s.a)(n,[{key:"render",value:function(){return this.parentScope.readonly?Object(j.jsx)("textarea",{value:this.props.obj[1].value,readOnly:!0}):Object(j.jsx)("textarea",{onBlur:g.bind(this),defaultValue:this.props.obj[1].value})}}]),n}(a.a.Component),A=n(14),N=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).parentScope=t.parentScope,r.countryNamesArr=[],r.state={enteredVal:{value:"",id:m()()}},r}return Object(s.a)(n,[{key:"getCountryList",value:function(){var t=this;return fetch("https://restcountries.eu/rest/v2/all",{mode:"cors"}).then((function(t){return t.json()})).then((function(e){return t.countryNamesArr=e}))}},{key:"createListElements",value:function(){var t,e=[],n=this.state.enteredVal.value,r=n.toLowerCase(),a=Object(A.a)(this.countryNamesArr);try{for(a.s();!(t=a.n()).done;){var c=t.value.name,i=c.toLowerCase();n.length>2&&i.includes(r)&&n!==c&&e.push({id:m()(),name:c})}}catch(o){a.e(o)}finally{a.f()}return e}},{key:"enteredValHandler",value:function(t){this.setState({enteredVal:{value:t.target.value,id:m()()}})}},{key:"componentDidMount",value:function(){this.getCountryList()}},{key:"render",value:function(){var t=this;return this.parentScope.readonly?Object(j.jsx)("input",{type:this.props.type,value:this.props.obj[1].value,readOnly:!0}):Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:this.props.type,list:"cityName",onChange:function(e){return t.enteredValHandler(e)},onBlur:g.bind(this),defaultValue:this.props.obj[1].value}),Object(j.jsx)("datalist",{id:"cityName",children:this.createListElements().map((function(t){return Object(j.jsx)("option",{children:t.name},t.id)}))})]})}}]),n}(a.a.Component),W=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).state={generalInfo:{Name:{value:"",returnInputElem:function(t,e){return Object(j.jsx)(I,{type:"text",obj:t,id:e,parentScope:this})}},Email:{value:"",returnInputElem:function(t,e){return Object(j.jsx)(I,{type:"text",obj:t,id:e,parentScope:this})}},Phone:{value:"",returnInputElem:function(t,e){return Object(j.jsx)(I,{type:"text",obj:t,id:e,parentScope:this})}},Country:{value:"",returnInputElem:function(t,e){return Object(j.jsx)(N,{type:"text",obj:t,id:e,parentScope:this})}}}},r.parentScope=t.parentScope(),r.commonParentScope=r.parentScope.commonParentScope,r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.parentScope.setState(S(this.state))}},{key:"render",value:function(){return Object(j.jsx)("section",{children:Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"infoBlocks",children:[Object(j.jsx)(y,{parentScope:this}),Object(j.jsx)(k,{parentScope:this})]}),Object(j.jsx)(P,{btns:[{value:"Add information",func:C.bind(null,this.state,this.commonParentScope)}]})]})})}}]),n}(a.a.Component),D=n(11);function L(t){var e=Object.entries(t),n=e[0][1];return{arrayOfKeysAndValues:e,objectWithProps:n,arrayWithObjects:e[1][1],check:Object.values(n).every((function(t){return""!==t.value}))}}function H(t){var e=this,n=L(t),r=n.arrayOfKeysAndValues,a=n.objectWithProps,c=n.arrayWithObjects;if(n.check){c.push(a);var i=r[0][0],o=r[1][0];new Promise((function(t){var n;e.setState((n={},Object(D.a)(n,i,S(e.defaultState)),Object(D.a)(n,o,c),n)),t(e)}))}}function w(t,e){var n=L(t),r=n.objectWithProps,a=n.arrayWithObjects,c=n.check,i=a.find((function(t){return!1===t.isValid}));if(c&&!i){a.push(r);var o=Object(D.a)({},e,t);C(o,this.commonParentScope)}}var B=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).state={educationalExperience:{"School name":{value:"",returnInputElem:function(t,e){return Object(j.jsx)(I,{type:"text",obj:t,id:e,parentScope:this})}},"Title of study":{value:"",returnInputElem:function(t,e){return Object(j.jsx)(I,{type:"text",obj:t,id:e,parentScope:this})}},"Date of study":{value:"",returnInputElem:function(t,e){return Object(j.jsx)(I,{type:"date",obj:t,id:e,parentScope:this})}},isValid:!0},educationalExperienceCollection:[]},r.parentScope=t.parentScope(),r.commonParentScope=r.parentScope.commonParentScope,r.defaultState=S(r.state.educationalExperience),r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.parentScope.setState({educExp:S(this.state)})}},{key:"render",value:function(){var t=this,e=S(this.state);return Object(j.jsxs)("section",{className:"EducExpBlock",children:[Object(j.jsx)("h2",{children:"Educational experience"}),Object(j.jsx)("ul",{className:"specialStyleKit",children:e.educationalExperienceCollection.map((function(n,r){return Object(j.jsx)("li",{children:Object(j.jsx)(x,{subObj:n,obj:e,scope:t})},r)}))}),Object(j.jsx)(x,{subObj:e.educationalExperience,obj:e,scope:this}),Object(j.jsx)(P,{btns:[{value:"Add information",func:w.bind(this,e,"educExp")},{value:"Plus",func:H.bind(this,e)}]})]})}}]),n}(a.a.Component),M=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).state={practicalExperience:{"Company name":{value:"",returnInputElem:function(t,e){return Object(j.jsx)(I,{type:"text",obj:t,id:e,parentScope:this})}},"Position title":{value:"",returnInputElem:function(t,e){return Object(j.jsx)(I,{type:"text",obj:t,id:e,parentScope:this})}},"Main tasks of your jobs":{value:"",returnInputElem:function(t,e){return Object(j.jsx)(V,{obj:t,id:e,parentScope:this})}},From:{value:"",returnInputElem:function(t,e){return Object(j.jsx)(I,{type:"date",obj:t,id:e,parentScope:this})}},To:{value:"",returnInputElem:function(t,e){return Object(j.jsx)(I,{type:"date",obj:t,id:e,parentScope:this})}},isValid:!0},practicalExperienceCollection:[]},r.parentScope=t.parentScope(),r.commonParentScope=r.parentScope.commonParentScope,r.defaultState=S(r.state.practicalExperience),r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.parentScope.setState({practicExp:S(this.state)})}},{key:"render",value:function(){var t=this,e=S(this.state);return Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{children:"Practical experience"}),Object(j.jsx)("ul",{className:"specialStyleKit",children:e.practicalExperienceCollection.map((function(n,r){return Object(j.jsx)("li",{children:Object(j.jsx)(x,{subObj:n,obj:e,scope:t})},r)}))}),Object(j.jsx)(x,{subObj:e.practicalExperience,obj:e,scope:this}),Object(j.jsx)(P,{btns:[{value:"Add information",func:w.bind(this,e,"practicExp")},{value:"Plus",func:H.bind(this,e)}]})]})}}]),n}(a.a.Component),U=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).commonParentScope=t.parentScope(),r}return Object(s.a)(n,[{key:"returnParentScope",value:function(){return this}},{key:"componentDidUpdate",value:function(t,e){null===e&&this.commonParentScope.setState(S(this.state))}},{key:"render",value:function(){return Object(j.jsxs)("section",{id:"templateCV",children:[Object(j.jsx)(W,{parentScope:this.returnParentScope.bind(this)}),Object(j.jsx)(B,{parentScope:this.returnParentScope.bind(this)}),Object(j.jsx)(M,{parentScope:this.returnParentScope.bind(this)})]})}}]),n}(a.a.Component),F=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).readonly=!0,r}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsx)("ul",{children:Object.entries(this.props.obj).map((function(e,n){return"object"===typeof e[1]?Object(j.jsxs)("li",{children:[Object(j.jsx)("label",{children:e[0]}),e[1].returnInputElem.call(t,e,n)]},n):null}))})}}]),n}(a.a.Component),K=n.p+"static/media/emptyAvatar.5320030d.jpg",J=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).state={url:K},r}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(t){t!==this.props&&void 0!==this.props.obj&&this.setState({url:this.props.obj})}},{key:"render",value:function(){return Object(j.jsx)("div",{id:"photoBlock",style:{backgroundImage:"url(".concat(this.state.url,")")}})}}]),n}(a.a.Component),R=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(t){t!==this.props&&this.setState(S(this.props.parentState))}},{key:"render",value:function(){return Object(j.jsxs)("div",{id:"personalInformation",children:[Object(j.jsx)(J,{obj:this.props.parentState.generalInfo.Avatar}),Object(j.jsxs)("form",{children:[Object(j.jsx)("h2",{children:"Personal information"}),Object(j.jsx)(F,{obj:this.props.parentState.generalInfo})]})]})}}]),n}(a.a.Component),T=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsx)("ul",{children:this.props.array.map((function(t,e){return Object(j.jsx)("li",{className:"ExpBlock",children:Object(j.jsx)(F,{obj:t})},e)}))})}}]),n}(a.a.Component),q=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).readonly=!0,r}return Object(s.a)(n,[{key:"render",value:function(){var t=Object.entries(this.props.obj),e=t[1][1],n=t[0][1],r=e.length?Object(j.jsx)(T,{array:e}):Object(j.jsx)(F,{obj:n});return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:this.props.headline}),r]})}}]),n}(a.a.Component),z=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setState(this.props.obj)}},{key:"componentDidUpdate",value:function(t){t!==this.props&&this.setState(this.props.obj)}},{key:"render",value:function(){return Object(j.jsxs)("div",{id:"commonInformation",children:[this.state&&Object(j.jsx)(q,{obj:this.state.educExp,headline:"Educational experience"}),this.state&&Object(j.jsx)(q,{obj:this.state.practicExp,headline:"Practical experience"})]})}}]),n}(a.a.Component),G=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).CommonParentScope=t.parentScope(),r}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(t,e){e===this.state&&this.setState(S(this.CommonParentScope.state))}},{key:"render",value:function(){return Object(j.jsxs)("section",{id:"previewCV",children:[this.state&&Object(j.jsx)(z,{obj:this.state}),this.state&&Object(j.jsx)(R,{parentState:this.state})]})}}]),n}(a.a.Component),Q=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).returnCommonParentComponent=r.returnCommonParentComponent.bind(Object(h.a)(r)),r}return Object(s.a)(n,[{key:"returnCommonParentComponent",value:function(){return this}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(U,{parentScope:this.returnCommonParentComponent}),Object(j.jsx)(G,{parentScope:this.returnCommonParentComponent})]})}}]),n}(a.a.Component);i.a.render(Object(j.jsxs)(a.a.StrictMode,{children:[Object(j.jsx)(b,{}),Object(j.jsx)(Q,{})]}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.03e4da66.chunk.js.map