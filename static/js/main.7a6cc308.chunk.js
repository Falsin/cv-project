(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(12),i=n.n(c),o=n(2),s=n(3),u=n(5),l=n(4),p=n.p+"static/media/\u0441onstructor.13325f3d.jpg",j=n(0),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsx)("header",{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("img",{src:p,alt:""}),Object(j.jsx)("h1",{children:"CV \u0421onstructor"})]})})}}]),n}(r.a.Component),b=(n(19),n(9));var d=n(6),f=n.n(d),v=n(13),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).uniqIndex=f()(),a.parentScope=e.scope,a.objName=e.array[0],a.state={isValidValue:!0,isFocus:!1,defaultValue:"",backgroundPosition:"200% 100%, 100% 100%"},a}return Object(s.a)(n,[{key:"afterBlur",value:function(e){e.target.value.length?this.setState({isValidValue:!0,isFocus:!1,defaultValue:e.target.value}):this.setState({isValidValue:!1,isFocus:!1,defaultValue:""})}},{key:"componentDidUpdate",value:function(e,t){var n=document.getElementById(this.uniqIndex),a=getComputedStyle(n);if(console.log(a.backgroundPosition),this.parentScope.readonly)this.setState({defaultValue:this.props.array[1].value});else{if(this.state.isFocus)document.getElementById(this.uniqIndex).focus();t!==this.state?(this.parentScope.props.subObj[this.objName].value=this.state.defaultValue,this.parentScope.scope.setState(this.parentScope.props.obj)):e.array[1].value!==this.props.array[1].value&&this.setState({defaultValue:this.props.array[1].value})}}},{key:"whileFocus",value:function(e){this.state.isValidValue||this.setState({isValidValue:!0,isFocus:!0})}},{key:"shouldComponentUpdate",value:function(e,t){return this.parentScope.readonly?this.state.defaultValue!==t.defaultValue||e.array[1].value!==this.state.defaultValue:this.state!==t||this.props.array[1].value!==e.array[1].value}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("li",{className:this.state.isValidValue?"":"error",onClick:function(t){e.setState({isFocus:!0})},children:[Object(j.jsx)("label",{htmlFor:this.uniqIndex,children:this.objName}),this.props.elem.call(this,this)]},f()())}}]),n}(r.a.Component);function m(e){var t=e;return function(){var e=this,n=this.parentScope,a=this.uniqIndex;return n.readonly?Object(j.jsx)("input",{type:t,value:this.state.defaultValue,readOnly:!0},f()()):Object(j.jsx)("input",{type:t,onBlur:function(t){return e.afterBlur(t)},onFocus:function(t){return e.whileFocus(t)},id:a,defaultValue:this.state.defaultValue},f()())}}function y(e){var t=e;return function(e){var n=this,a=this.parentScope,r=this.uniqIndex;return a.readonly?Object(j.jsx)("textarea",{type:t,value:this.state.defaultValue,readOnly:!0},f()()):Object(j.jsx)("textarea",{type:t,onBlur:function(e){return n.afterBlur(e)},onFocus:function(e){return n.whileFocus(e)},id:r,defaultValue:e.state.defaultValue},f()())}}function x(e){var t=e,n=[],a={value:"",id:f()()};function r(e){var t=this;a.value=e.target.value,a.id=f()(),new Promise((function(e){t.setState({defaultValue:a.value,isFocus:!0}),e(t)})).then((function(e){var t=c("cityName","li");(function(){var e,t=[],r=a.value,c=r.toLowerCase(),i=Object(v.a)(n);try{for(i.s();!(e=i.n()).done;){var o=e.value.name,s=o.toLowerCase();r.length>2&&s.includes(c)&&r!==o&&t.push({id:f()(),name:o})}}catch(u){i.e(u)}finally{i.f()}return t})().forEach((function(n){var a=document.createElement("li");a.textContent=n.name,a.key=n.id,t.append(a),a.addEventListener("mousedown",(function(t){new Promise((function(n){e.setState({defaultValue:t.target.textContent}),n(e)})).then((function(){return c("cityName","li")}))}))}))}))}function c(e,t){var n=document.getElementById(e);return n.querySelectorAll(t).forEach((function(e){return e.remove()})),n}return fetch("https://restcountries.eu/rest/v2/all",{mode:"cors"}).then((function(e){return e.json()})).then((function(e){return n=e})),function(){var e=this,n=this.parentScope,a=this.uniqIndex;return n.readonly?Object(j.jsx)("input",{type:t,value:this.state.defaultValue,readOnly:!0},f()()):Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:t,onBlur:function(t){return e.afterBlur(t)},onChange:r.bind(this),value:this.state.defaultValue,id:a,list:"cityName"},f()()),Object(j.jsx)("ul",{id:"cityName"})]})}}var S=function e(t){var n={},a=function(a){Array.isArray(t[a])?(n[a]=[],t[a].forEach((function(t){return n[a].push(e(t))}))):"object"!==typeof t[a]?n[a]=t[a]:n[a]=e(t[a])};for(var r in t)a(r);return n},k=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).scope=a.props.scope,a.state={idHtmlWithError:[],objKeys:{},collectionCompElem:[],countElemWithError:0},a}return Object(s.a)(n,[{key:"reduceArray",value:function(e){var t=Object(b.a)(this.state.idHtmlWithError);t.splice(e,1),this.setState({idHtmlWithError:t})}},{key:"componentDidUpdate",value:function(e,t){for(var n=[],a=0,r=Object.values(this.props.subObj);a<r.length;a++){var c=r[a];"object"===typeof c&&n.push(c)}var i=n.every((function(e){return""!==e.value}));this.props.subObj.isValid=!!i}},{key:"render",value:function(){var e=this;return Object(j.jsx)("ul",{children:Object.entries(this.props.subObj).map((function(t){return"object"===typeof t[1]?Object(j.jsx)(O,{scope:e,array:t,elem:t[1].inputElem}):null}))})}}]),n}(r.a.Component),E=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).parentScope=e.parentScope,a.personalInfo=a.parentScope.state.generalInfo,a}return Object(s.a)(n,[{key:"render",value:function(){var e=this.parentScope.state;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Personal information"}),Object(j.jsx)(k,{subObj:e.generalInfo,obj:e,scope:this.parentScope})]})}}]),n}(r.a.Component),C=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).parentScope=e.parentScope,a.url=void 0,a}return Object(s.a)(n,[{key:"onFileSelected",value:function(e){var t=this,n=e.target.files[0];if(void 0!==n){var a=new FileReader,r=document.querySelector(".photo");a.onload=function(e){t.url=e.target.result,r.style.backgroundImage="url(".concat(t.url,")"),t.addPropertyInState()},a.readAsDataURL(n)}}},{key:"componentDidMount",value:function(){this.addPropertyInState()}},{key:"addPropertyInState",value:function(){var e=this.parentScope.state.generalInfo;e.Avatar=this.url,this.parentScope.setState({generalInfo:e})}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"photo",children:Object(j.jsx)("label",{children:Object(j.jsx)("input",{type:"file",onChange:this.onFileSelected.bind(this)})})})}}]),n}(r.a.Component),V=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsx)("input",{type:"button",value:this.props.value,onClick:function(){e.props.func()}})}}]),n}(r.a.Component),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:this.props.btns.map((function(e,t){return Object(j.jsx)(V,{type:"button",value:e.value,func:e.func},t)}))})}}]),n}(r.a.Component),P=n(10);var I=function(e,t){t.setState(e)};function F(e){var t=Object.entries(e),n=t[0][1],a=t[1]?t[1][1]:null,r=[];for(var c in n)"object"===typeof n[c]&&r.push(n[c]);return{arrayOfKeysAndValues:t,objectWithProps:n,arrayWithObjects:a,check:r.every((function(e){return""!==e.value}))}}function N(e){var t=this,n=F(e),a=n.arrayOfKeysAndValues,r=n.objectWithProps,c=n.arrayWithObjects;if(n.check){c.push(r);var i=a[0][0],o=a[1][0];new Promise((function(e){var n;t.setState((n={},Object(P.a)(n,i,S(t.defaultState)),Object(P.a)(n,o,c),n)),e(t)}))}}function B(e,t){var n=F(e),a=n.objectWithProps,r=n.arrayWithObjects,c=n.check,i=r.find((function(e){return!1===e.isValid}));if(c&&!i){r.push(a);var o=Object(P.a)({},t,e);I(o,this.commonParentScope)}}function D(e){F(e).check&&I(e,this.commonParentScope)}var w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={generalInfo:{Name:{value:"",inputElem:m("text")},Email:{value:"",inputElem:m("text")},Phone:{value:"",inputElem:m("text")},Country:{value:"",inputElem:x("text")},isValid:!0}},a.parentScope=e.parentScope(),a.commonParentScope=a.parentScope.commonParentScope,a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.parentScope.setState(this.state)}},{key:"render",value:function(){return Object(j.jsx)("section",{children:Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"infoBlocks",children:[Object(j.jsx)(E,{parentScope:this}),Object(j.jsx)(C,{parentScope:this})]}),Object(j.jsx)(g,{btns:[{value:"Add information",func:D.bind(this,this.state,"generalInfo")}]})]})})}}]),n}(r.a.Component),A=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={educationalExperience:{"School name":{value:"",inputElem:m("text")},"Title of study":{value:"",inputElem:m("text")},"Date of study":{value:"",inputElem:m("date")},isValid:!0},educationalExperienceCollection:[]},a.parentScope=e.parentScope(),a.commonParentScope=a.parentScope.commonParentScope,a.defaultState=S(a.state.educationalExperience),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.parentScope.setState({educExp:S(this.state)})}},{key:"render",value:function(){var e=this,t=S(this.state);return Object(j.jsxs)("section",{className:"expBlock",children:[Object(j.jsx)("h2",{children:"Educational experience"}),Object(j.jsx)("ul",{className:"specialStyleKit",children:t.educationalExperienceCollection.map((function(n,a){return Object(j.jsx)("li",{children:Object(j.jsx)(k,{subObj:n,obj:t,scope:e})},a)}))}),Object(j.jsx)(k,{subObj:t.educationalExperience,obj:t,scope:this}),Object(j.jsx)(g,{btns:[{value:"Add information",func:B.bind(this,t,"educExp")},{value:"Plus",func:N.bind(this,t)}]})]})}}]),n}(r.a.Component),W=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={practicalExperience:{"Company name":{value:"",inputElem:m("text")},"Position title":{value:"",inputElem:m("text")},"Main tasks of your jobs":{value:"",inputElem:y("text")},From:{value:"",inputElem:m("date")},To:{value:"",inputElem:m("date")},isValid:!0},practicalExperienceCollection:[]},a.parentScope=e.parentScope(),a.commonParentScope=a.parentScope.commonParentScope,a.defaultState=S(a.state.practicalExperience),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.parentScope.setState({practicExp:S(this.state)})}},{key:"render",value:function(){var e=this,t=S(this.state);return Object(j.jsxs)("section",{className:"expBlock",children:[Object(j.jsx)("h2",{children:"Practical experience"}),Object(j.jsx)("ul",{className:"specialStyleKit",children:t.practicalExperienceCollection.map((function(n,a){return Object(j.jsx)("li",{children:Object(j.jsx)(k,{subObj:n,obj:t,scope:e})},a)}))}),Object(j.jsx)(k,{subObj:t.practicalExperience,obj:t,scope:this}),Object(j.jsx)(g,{btns:[{value:"Add information",func:B.bind(this,t,"practicExp")},{value:"Plus",func:N.bind(this,t)}]})]})}}]),n}(r.a.Component),q=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).commonParentScope=e.parentScope,a}return Object(s.a)(n,[{key:"returnParentScope",value:function(){return this}},{key:"componentDidUpdate",value:function(e,t){null===t&&this.commonParentScope.setState(S(this.state))}},{key:"render",value:function(){return Object(j.jsxs)("section",{id:"templateCV",children:[Object(j.jsx)(w,{parentScope:this.returnParentScope.bind(this)}),Object(j.jsx)(A,{parentScope:this.returnParentScope.bind(this)}),Object(j.jsx)(W,{parentScope:this.returnParentScope.bind(this)})]})}}]),n}(r.a.Component),U=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).readonly=!0,a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsx)("ul",{children:Object.entries(this.props.obj).map((function(t,n){return"object"===typeof t[1]?Object(j.jsx)(O,{scope:e,array:t,elem:t[1].inputElem},n):null}))})}}]),n}(r.a.Component),M=n.p+"static/media/emptyAvatar.5320030d.jpg",K=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={url:M},a}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e){e!==this.props&&void 0!==this.props.obj&&this.setState({url:this.props.obj})}},{key:"render",value:function(){return Object(j.jsx)("div",{id:"photoBlock",style:{backgroundImage:"url(".concat(this.state.url,")")}})}}]),n}(r.a.Component),L=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e){e!==this.props&&this.setState(S(this.props.parentState))}},{key:"render",value:function(){return Object(j.jsxs)("div",{id:"personalInformation",children:[Object(j.jsx)(K,{obj:this.props.parentState.generalInfo.Avatar}),Object(j.jsxs)("form",{children:[Object(j.jsx)("h2",{children:"Personal information"}),Object(j.jsx)(U,{obj:this.props.parentState.generalInfo})]})]})}}]),n}(r.a.Component),H=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsx)("ul",{children:this.props.array.map((function(e,t){return Object(j.jsx)("li",{className:"ExpBlock",children:Object(j.jsx)(U,{obj:e})},t)}))})}}]),n}(r.a.Component),J=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).readonly=!0,a}return Object(s.a)(n,[{key:"render",value:function(){var e=Object.entries(this.props.obj),t=e[1][1],n=e[0][1],a=t.length?Object(j.jsx)(H,{array:t}):Object(j.jsx)(U,{obj:n});return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:this.props.headline}),a]})}}]),n}(r.a.Component),R=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setState(this.props.obj)}},{key:"componentDidUpdate",value:function(e){e!==this.props&&this.setState(this.props.obj)}},{key:"render",value:function(){return Object(j.jsxs)("div",{id:"commonInformation",children:[Object(j.jsx)(J,{obj:this.props.obj.educExp,headline:"Educational experience"}),Object(j.jsx)(J,{obj:this.props.obj.practicExp,headline:"Educational experience"})]})}}]),n}(r.a.Component),T=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).CommonParentScope=e.parentScope,a}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t){t===this.state&&this.setState(S(this.CommonParentScope.state))}},{key:"render",value:function(){return Object(j.jsxs)("section",{id:"previewCV",children:[this.state&&Object(j.jsx)(R,{obj:this.state}),this.state&&Object(j.jsx)(L,{parentState:this.state})]})}}]),n}(r.a.Component),z=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(q,{parentScope:this}),Object(j.jsx)(T,{parentScope:this})]})}}]),n}(r.a.Component);i.a.render(Object(j.jsxs)(r.a.StrictMode,{children:[Object(j.jsx)(h,{}),Object(j.jsx)(z,{})]}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.7a6cc308.chunk.js.map