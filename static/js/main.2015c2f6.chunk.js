(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(13),c=n.n(i),o=n(2),s=n(3),u=n(5),l=n(4),p=n.p+"static/media/\u0441onstructor.1cdd9342.png",j=n(0),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsx)("header",{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("img",{src:p,alt:""}),Object(j.jsx)("h1",{children:"CV \u0421onstructor"})]})})}}]),n}(r.a.Component),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsx)("footer",{children:Object(j.jsx)("a",{href:"https://github.com/Falsin",children:"Made by Falsin"})})}}]),n}(r.a.Component),d=n(6),f=n(9),v=n(14),O=n(7),m=n.n(O),y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).uniqIndex=m()(),a.parentScope=e.scope,a.objName=e.array[0],a.state={isValidValue:!0,defaultValue:e.array[1].value,isActive:!!e.array[1].value,backgroundPosition:"200% 100%, 100% 100%",queue:[]},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){if(!this.parentScope.readonly){var e=document.getElementById(this.uniqIndex);this.discoverAnimation(e)}}},{key:"afterBlur",value:function(e){var t=this;e.blur(),e.value.length?this.setState({isValidValue:!0,isActive:!0}):(e.offsetParent.className="error",e.blur(),this.setState({isValidValue:!1,isActive:!1})),this.discoverAnimation(e).then((function(){return t.setState((function(e){return{queue:e.queue.slice(0,-1)}}))})).then((function(){return t.state.queue[t.state.queue.length-1]&&t.state.queue[t.state.queue.length-1].func(),t})).then((function(){return t.setState({defaultValue:e.value})}))}},{key:"afterFocus",value:function(e){var t=this;e.focus();var n=this.state.isValidValue?"active":"afterError";e.offsetParent.className=n,this.discoverAnimation(e).then((function(){return e.offsetParent.className="active"})).then((function(){return t.setState((function(e){return{queue:e.queue.slice(0,-1)}}))})).then((function(){t.state.queue[t.state.queue.length-1]&&t.state.queue[t.state.queue.length-1].func()}))}},{key:"discoverAnimation",value:function(e){var t=this;return Promise.all(e.getAnimations().map((function(e){return e.finished}))).then((function(){var n=getComputedStyle(e).backgroundPosition;e.style.backgroundPosition=n,t.state.backgroundPosition!==n&&t.setState({backgroundPosition:n})})).catch((function(){return null}))}},{key:"componentDidUpdate",value:function(e,t){var n=this;if(e.array[1].value!==this.props.array[1].value&&this.parentScope.readonly)this.setState({defaultValue:this.props.array[1].value});else if(!this.parentScope.readonly)if(t.defaultValue!==this.state.defaultValue)this.parentScope.props.subObj[this.objName].value=this.state.defaultValue,this.parentScope.props.scope.setState(this.parentScope.props.obj);else if(e.array[1].value!==this.props.array[1].value)new Promise((function(e){e(n.setState({defaultValue:n.props.array[1].value}))})).then((function(){return n.setState({isActive:!!n.props.array[1].value})})).then((function(){var e=document.getElementById(n.uniqIndex);e.offsetParent.className="afterActive",n.discoverAnimation(e)}));else if(void 0!==this.parentScope.props.isRemoved){var a=this.parentScope.props.scope.state.removedElements.findIndex((function(e){return e.objName===n.objName}));if(-1!==a){var r=Object(f.a)(this.parentScope.props.scope.state.removedElements),i=r.splice(a,1)[0];new Promise((function(e){n.parentScope.props.scope.setState({removedElements:r}),e(n.parentScope.props.scope)})).then((function(){return n.setState(i.state)}))}}}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.defaultValue!==t.defaultValue||e.array[1].value!==this.state.defaultValue||void 0!==this.parentScope.props.isRemoved}},{key:"workWithQueue",value:function(e){var t=this;this.state.queue.find((function(t){return t.name===e.name}))||new Promise((function(n){n(t.setState((function(t){return{queue:[e].concat(t.queue)}})))})).then((function(){1===t.state.queue.length&&t.state.queue[t.state.queue.length-1].func()}))}},{key:"componentWillUnmount",value:function(){var e={objName:this.objName,state:this.state};this.parentScope.readonly||this.parentScope.props.scope.setState((function(t){return{removedElements:[].concat(Object(f.a)(t.removedElements),[e])}}))}},{key:"render",value:function(){var e=this.parentScope.readonly?"":this.state.isActive?"active":this.state.isValidValue?"":"error";return Object(j.jsxs)("li",{className:e,children:[Object(j.jsx)("label",{htmlFor:this.uniqIndex,children:this.objName}),this.props.elem.call(this,this)]},m()())}}]),n}(r.a.Component);function x(e){var t=e;return function(){var e=this,n=this.parentScope,a=this.uniqIndex;return n.readonly?Object(j.jsx)("input",{type:t,value:this.state.defaultValue,readOnly:!0,style:{backgroundPosition:this.state.backgroundPosition}},m()()):Object(j.jsx)("input",{type:t,defaultValue:this.state.defaultValue,id:a,style:{backgroundPosition:this.state.backgroundPosition},onFocus:function(t){var n={name:"afterFocus",func:e.afterFocus.bind(e,t.target)};e.workWithQueue(n)},onBlur:function(t){var n={name:"afterBlur",func:e.afterBlur.bind(e,t.target)};e.workWithQueue(n)}},m()())}}function S(e){var t=e;return function(){var e=this;return this.parentScope.readonly?Object(j.jsx)("textarea",{type:t,value:this.state.defaultValue,readOnly:!0,style:{backgroundPosition:this.state.backgroundPosition}},m()()):Object(j.jsx)("textarea",{type:t,defaultValue:this.state.defaultValue,style:{backgroundPosition:this.state.backgroundPosition},id:this.uniqIndex,onFocus:function(t){var n={name:"afterFocus",func:e.afterFocus.bind(e,t.target)};e.workWithQueue(n)},onBlur:function(t){var n={name:"afterBlur",func:e.afterBlur.bind(e,t.target)};e.workWithQueue(n)}},m()())}}function k(e){var t=e,n=[],a="";function r(){var e,t=[],r=a,i=r.toLowerCase(),c=Object(v.a)(n);try{for(c.s();!(e=c.n()).done;){var o=e.value.name,s=o.toLowerCase();r.length>2&&s.includes(i)&&r!==o&&t.push({name:o})}}catch(u){c.e(u)}finally{c.f()}return t}function i(e){var t=this;a=e.target.value;var n=c("cityName","li");r().forEach((function(e,r){var i=document.createElement("li");i.textContent=e.name,i.key=r,n.append(i),i.addEventListener("mousedown",(function(e){a=e.target.textContent,new Promise((function(n){t.setState({defaultValue:e.target.textContent,isValidValue:!0}),n(t)})).then((function(){return c("cityName","li")}))}))}))}function c(e,t){var n=document.getElementById(e);return n.querySelectorAll(t).forEach((function(e){return e.remove()})),n}function o(e){a=e.target.textContent,this.setState({defaultValue:e.target.textContent})}return fetch("https://restcountries.eu/rest/v2/all",{mode:"cors"}).then((function(e){return e.json()})).then((function(e){return n=e})),function(){var e=this,n=this.parentScope,c=this.uniqIndex;return n.readonly?Object(j.jsx)("input",{type:t,value:this.state.defaultValue,readOnly:!0,style:{backgroundPosition:this.state.backgroundPosition}},m()()):Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:t,style:{backgroundPosition:this.state.backgroundPosition},onChange:i.bind(this),onFocus:function(t){var n={name:"afterFocus",func:e.afterFocus.bind(e,t.target)};e.workWithQueue(n)},onBlur:function(t){var n={name:"afterBlur",func:e.afterBlur.bind(e,t.target)};e.workWithQueue(n)},defaultValue:a,id:c,list:"cityName"},m()()),Object(j.jsx)("ul",{id:"cityName",children:r().map((function(t,n){return Object(j.jsx)("li",{onMouseDown:o.bind(e),children:t.name},n)}))})]})}}var g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).scope=a.props.scope,a.collectionInputElements=Object.values(e.subObj).map((function(e){return"object"===typeof e?e.inputElem():null})),a}return Object(s.a)(n,[{key:"reduceArray",value:function(e){var t=Object(f.a)(this.state.idHtmlWithError);t.splice(e,1),this.setState({idHtmlWithError:t})}},{key:"componentDidUpdate",value:function(){for(var e=[],t=0,n=Object.values(this.props.subObj);t<n.length;t++){var a=n[t];"object"===typeof a&&e.push(a)}var r=e.every((function(e){return""!==e.value}));this.props.subObj.isValid=!!r}},{key:"render",value:function(){var e=this;return Object(j.jsx)("ul",{children:Object.entries(this.props.subObj).map((function(t,n){return"object"===typeof t[1]?Object(j.jsx)(y,{scope:e,array:t,elem:e.collectionInputElements[n]},n):null}))})}}]),n}(r.a.Component),E=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).parentScope=e.parentScope,a.personalInfo=a.parentScope.state.generalInfo,a}return Object(s.a)(n,[{key:"render",value:function(){var e=this.parentScope.state;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Personal information"}),Object(j.jsx)(g,{subObj:e.generalInfo,obj:e,scope:this.parentScope})]})}}]),n}(r.a.Component),P=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).parentScope=e.parentScope,a.url=void 0,a}return Object(s.a)(n,[{key:"onFileSelected",value:function(e){var t=this,n=e.target.files[0];if(void 0!==n){var a=new FileReader,r=document.querySelector(".photo");a.onload=function(e){t.url=e.target.result,r.style.backgroundImage="url(".concat(t.url,")"),t.addPropertyInState()},a.readAsDataURL(n)}}},{key:"componentDidMount",value:function(){this.addPropertyInState()}},{key:"addPropertyInState",value:function(){var e=this.parentScope.state.generalInfo;e.Avatar=this.url,this.parentScope.setState({generalInfo:e})}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"photo",children:Object(j.jsx)("label",{children:Object(j.jsx)("input",{type:"file",onChange:this.onFileSelected.bind(this)})})})}}]),n}(r.a.Component),C=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsx)("input",{type:"button",value:this.props.value,onClick:function(){return e.props.func()}})}}]),n}(r.a.Component),V=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"buttons",children:this.props.btns.map((function(e,t){return Object(j.jsx)(C,{type:"button",value:e.value,func:e.func},t)}))})}}]),n}(r.a.Component),I=n(11);var q=function e(t){var n={},a=function(a){Array.isArray(t[a])?(n[a]=[],t[a].forEach((function(t){return n[a].push(e(t))}))):"object"!==typeof t[a]?n[a]=t[a]:n[a]=e(t[a])};for(var r in t)a(r);return n};var N=function(e,t){t.setState(e)};function A(e){var t=Object.entries(e),n=t[0][1],a=t[1]?t[1][1]:null,r=[];for(var i in n)"object"===typeof n[i]&&r.push(n[i]);return{arrayOfKeysAndValues:t,objectWithProps:n,arrayWithObjects:a,check:r.every((function(e){return""!==e.value}))}}function w(e){var t=this,n=A(e),a=n.arrayOfKeysAndValues,r=n.objectWithProps,i=n.arrayWithObjects;if(n.check){i.push(r);var c=a[0][0],o=a[1][0];new Promise((function(e){var n;t.setState((n={},Object(I.a)(n,c,q(t.defaultState)),Object(I.a)(n,o,i),n)),e(t)}))}}function B(e,t){var n=A(e),a=n.objectWithProps,r=n.arrayWithObjects,i=n.check,c=r.find((function(e){return!1===e.isValid}));if(i&&!c){r.push(a);var o=Object(I.a)({},t,e);N(o,this.commonParentScope)}}function F(){A(this.state).check&&N(this.state,this.commonParentScope)}function D(e){Object.values(e)[1].splice(-1,1),this.setState(e),this.setState(e)}var W=function(e,t){return Object.values(this.state)[1]?Object.values(this.state)[1].length?[{value:"Add information",func:B.bind(this,e,t)},{value:" + ",func:w.bind(this,e)},{value:" \u2212 ",func:D.bind(this,e)}]:[{value:"Add information",func:B.bind(this,e,t)},{value:" + ",func:w.bind(this,e)}]:[{value:"Add information",func:F.bind(this)}]},U=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={generalInfo:{Name:{value:"",inputElem:x.bind(Object(d.a)(a),"text")},Email:{value:"",inputElem:x.bind(Object(d.a)(a),"text")},Phone:{value:"",inputElem:x.bind(Object(d.a)(a),"text")},Country:{value:"",inputElem:k.bind(Object(d.a)(a),"text")},isValid:!0}},a.parentScope=e.parentScope(),a.commonParentScope=a.parentScope.commonParentScope,a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.parentScope.setState(this.state)}},{key:"render",value:function(){var e=W.call(this,"generalInfo");return Object(j.jsx)("section",{children:Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"infoBlocks",children:[Object(j.jsx)(E,{parentScope:this}),Object(j.jsx)(P,{parentScope:this})]}),Object(j.jsx)(V,{btns:e})]})})}}]),n}(r.a.Component),M=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={educationalExperience:{"School name":{value:"",inputElem:x.bind(Object(d.a)(a),"text")},"Title of study":{value:"",inputElem:x.bind(Object(d.a)(a),"text")},"Date of study":{value:"",inputElem:x.bind(Object(d.a)(a),"date")},isValid:!0},educationalExperienceCollection:[],removedElements:[]},a.parentScope=e.parentScope(),a.commonParentScope=a.parentScope.commonParentScope,a.defaultState=q(a.state.educationalExperience),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.parentScope.setState({educExp:q(this.state)})}},{key:"render",value:function(){var e=this,t=q(this.state),n=W.call(this,t,"educExp"),a=this.state.removedElements.length?Object(j.jsx)(g,{subObj:t.educationalExperience,obj:t,scope:this,isRemoved:!0}):Object(j.jsx)(g,{subObj:t.educationalExperience,obj:t,scope:this});return Object(j.jsxs)("section",{className:"expBlock",children:[Object(j.jsx)("h2",{children:"Educational experience"}),Object(j.jsx)("ul",{className:"specialStyleKit",children:t.educationalExperienceCollection.map((function(n,a){return Object(j.jsx)("li",{children:Object(j.jsx)(g,{subObj:n,obj:t,scope:e})},a)}))}),a,Object(j.jsx)(V,{btns:n})]})}}]),n}(r.a.Component),Q=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={practicalExperience:{"Company name":{value:"",inputElem:x.bind(Object(d.a)(a),"text")},"Position title":{value:"",inputElem:x.bind(Object(d.a)(a),"text")},"Main tasks of your jobs":{value:"",inputElem:S.bind(Object(d.a)(a),"text")},From:{value:"",inputElem:x.bind(Object(d.a)(a),"date")},To:{value:"",inputElem:x.bind(Object(d.a)(a),"date")},isValid:!0},practicalExperienceCollection:[],removedElements:[]},a.parentScope=e.parentScope(),a.commonParentScope=a.parentScope.commonParentScope,a.defaultState=q(a.state.practicalExperience),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.parentScope.setState({practicExp:q(this.state)})}},{key:"render",value:function(){var e=this,t=q(this.state),n=W.call(this,t,"practicExp"),a=this.state.removedElements.length?Object(j.jsx)(g,{subObj:t.practicalExperience,obj:t,scope:this,isRemoved:!0}):Object(j.jsx)(g,{subObj:t.practicalExperience,obj:t,scope:this});return Object(j.jsxs)("section",{className:"expBlock",children:[Object(j.jsx)("h2",{children:"Practical experience"}),Object(j.jsx)("ul",{className:"specialStyleKit",children:t.practicalExperienceCollection.map((function(n,a){return Object(j.jsx)("li",{children:Object(j.jsx)(g,{subObj:n,obj:t,scope:e})},a)}))}),a,Object(j.jsx)(V,{btns:n})]})}}]),n}(r.a.Component),R=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).commonParentScope=e.parentScope,a}return Object(s.a)(n,[{key:"returnParentScope",value:function(){return this}},{key:"componentDidUpdate",value:function(e,t){null===t&&this.commonParentScope.setState(q(this.state))}},{key:"render",value:function(){return Object(j.jsxs)("section",{id:"templateCV",children:[Object(j.jsx)(U,{parentScope:this.returnParentScope.bind(this)}),Object(j.jsx)(M,{parentScope:this.returnParentScope.bind(this)}),Object(j.jsx)(Q,{parentScope:this.returnParentScope.bind(this)})]})}}]),n}(r.a.Component),K=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).readonly=!0,a.collectionInputElements=Object.values(e.subObj).map((function(e){return"object"===typeof e?e.inputElem():null})),a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsx)("ul",{children:Object.entries(this.props.subObj).map((function(t,n){return"object"===typeof t[1]?Object(j.jsx)(y,{scope:e,array:t,elem:e.collectionInputElements[n]},n):null}))})}}]),n}(r.a.Component),L=n.p+"static/media/emptyAvatar.5320030d.jpg",H=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={url:L},a}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e){e!==this.props&&void 0!==this.props.obj&&this.setState({url:this.props.obj})}},{key:"render",value:function(){return Object(j.jsx)("div",{id:"photoBlock",style:{backgroundImage:"linear-gradient(rgba(68, 68, 68, 0.2), rgba(68, 68, 68, 0.2)), url(".concat(this.state.url,")")}})}}]),n}(r.a.Component),J=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e){e!==this.props&&this.setState(q(this.props.parentState))}},{key:"render",value:function(){return Object(j.jsxs)("section",{id:"personalInformation",children:[Object(j.jsx)(H,{obj:this.props.parentState.generalInfo.Avatar}),Object(j.jsxs)("form",{children:[Object(j.jsx)("h2",{children:"Personal information"}),Object(j.jsx)(K,{subObj:this.props.parentState.generalInfo})]})]})}}]),n}(r.a.Component),T=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsx)("ul",{children:this.props.array.map((function(e,t){return Object(j.jsx)("li",{className:"expBlock",children:Object(j.jsx)(K,{subObj:e})},t)}))})}}]),n}(r.a.Component),z=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).readonly=!0,a}return Object(s.a)(n,[{key:"render",value:function(){var e=Object.entries(this.props.obj),t=e[1][1],n=e[0][1],a=t.length?Object(j.jsx)(T,{array:t}):Object(j.jsx)(K,{subObj:n});return Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{children:this.props.headline}),a]})}}]),n}(r.a.Component),G=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setState(this.props.obj)}},{key:"componentDidUpdate",value:function(e){e!==this.props&&this.setState(this.props.obj)}},{key:"render",value:function(){return Object(j.jsxs)("section",{id:"commonInformation",children:[Object(j.jsx)(z,{obj:this.props.obj.educExp,headline:"Educational experience"}),Object(j.jsx)(z,{obj:this.props.obj.practicExp,headline:"Practical experience"})]})}}]),n}(r.a.Component),X=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).CommonParentScope=e.parentScope,a}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t){t===this.state&&this.setState(q(this.CommonParentScope.state))}},{key:"render",value:function(){return Object(j.jsxs)("section",{id:"previewCV",children:[Object(j.jsxs)("div",{children:[this.state&&Object(j.jsx)(G,{obj:this.state}),this.state&&Object(j.jsx)(J,{parentState:this.state})]}),Object(j.jsx)("input",{type:"button",value:"Print",onClick:function(){return window.print()}})]})}}]),n}(r.a.Component),Y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(R,{parentScope:this}),Object(j.jsx)(X,{parentScope:this})]})}}]),n}(r.a.Component);n(21);c.a.render(Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsx)(Y,{}),Object(j.jsx)(h,{})]}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.2015c2f6.chunk.js.map