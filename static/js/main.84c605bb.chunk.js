(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(13),c=n.n(i),o=n(2),s=n(3),u=n(5),l=n(4),p=n.p+"static/media/\u0441onstructor.1cdd9342.png",b=n(0),h=(r.a.Component,function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsx)("footer",{children:Object(b.jsx)("a",{href:"https://github.com/Falsin",children:"Made by Falsin"})})}}]),n}(r.a.Component)),j=n(6),d=n(9),f=n(14),v=n(7),m=n.n(v),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).uniqIndex=m()(),a.parentScope=e.scope,a.objName=e.array[0],a.state={isValidValue:!0,defaultValue:e.array[1].value,isActive:!!e.array[1].value,backgroundPosition:"200% 100%, 100% 100%",queue:[]},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){if(!this.parentScope.readonly){var e=document.getElementById(this.uniqIndex);this.discoverAnimation(e)}}},{key:"afterBlur",value:function(e){var t=this;e.blur(),e.value.length?this.setState({isValidValue:!0,isActive:!0}):(e.offsetParent.className="error",e.blur(),this.setState({isValidValue:!1,isActive:!1})),this.discoverAnimation(e).then((function(){return t.setState((function(e){return{queue:e.queue.slice(0,-1)}}))})).then((function(){return t.state.queue[t.state.queue.length-1]&&t.state.queue[t.state.queue.length-1].func(),t})).then((function(){return t.setState({defaultValue:e.value})}))}},{key:"afterFocus",value:function(e){var t=this;e.focus();var n=this.state.isValidValue?"active":"afterError";e.offsetParent.className=n,this.discoverAnimation(e).then((function(){return e.offsetParent.className="active"})).then((function(){return t.setState((function(e){return{queue:e.queue.slice(0,-1)}}))})).then((function(){t.state.queue[t.state.queue.length-1]&&t.state.queue[t.state.queue.length-1].func()}))}},{key:"discoverAnimation",value:function(e){var t=this;return Promise.all(e.getAnimations().map((function(e){return e.finished}))).then((function(){var n=getComputedStyle(e).backgroundPosition;e.style.backgroundPosition=n,t.state.backgroundPosition!==n&&t.setState({backgroundPosition:n})})).catch((function(){return null}))}},{key:"componentDidUpdate",value:function(e,t){var n=this;if(e.array[1].value!==this.props.array[1].value&&this.parentScope.readonly)this.setState({defaultValue:this.props.array[1].value});else if(!this.parentScope.readonly)if(t.defaultValue!==this.state.defaultValue)this.parentScope.props.subObj[this.objName].value=this.state.defaultValue,this.parentScope.props.scope.setState(this.parentScope.props.obj);else if(e.array[1].value!==this.props.array[1].value)new Promise((function(e){e(n.setState({defaultValue:n.props.array[1].value}))})).then((function(){return n.setState({isActive:!!n.props.array[1].value})})).then((function(){var e=document.getElementById(n.uniqIndex);e.offsetParent.className="afterActive",n.discoverAnimation(e)}));else if(void 0!==this.parentScope.props.isRemoved){var a=this.parentScope.props.scope.state.removedElements.findIndex((function(e){return e.objName===n.objName}));if(-1!==a){var r=Object(d.a)(this.parentScope.props.scope.state.removedElements),i=r.splice(a,1)[0];new Promise((function(e){n.parentScope.props.scope.setState({removedElements:r}),e(n.parentScope.props.scope)})).then((function(){return n.setState(i.state)}))}}}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.defaultValue!==t.defaultValue||e.array[1].value!==this.state.defaultValue||void 0!==this.parentScope.props.isRemoved}},{key:"workWithQueue",value:function(e){var t=this;this.state.queue.find((function(t){return t.name===e.name}))||new Promise((function(n){n(t.setState((function(t){return{queue:[e].concat(t.queue)}})))})).then((function(){1===t.state.queue.length&&t.state.queue[t.state.queue.length-1].func()}))}},{key:"componentWillUnmount",value:function(){var e={objName:this.objName,state:this.state};this.parentScope.readonly||this.parentScope.props.scope.setState((function(t){return{removedElements:[].concat(Object(d.a)(t.removedElements),[e])}}))}},{key:"render",value:function(){var e=this.parentScope.readonly?"":this.state.isActive?"active":this.state.isValidValue?"":"error";return Object(b.jsxs)("li",{className:e,children:[Object(b.jsx)("label",{htmlFor:this.uniqIndex,children:this.objName}),this.props.elem.call(this,this)]},m()())}}]),n}(r.a.Component);function y(e){var t=e;return function(){var e=this,n=this.parentScope,a=this.uniqIndex;return n.readonly?Object(b.jsx)("input",{type:t,value:this.state.defaultValue,readOnly:!0,style:{backgroundPosition:this.state.backgroundPosition}},m()()):Object(b.jsx)("input",{type:t,defaultValue:this.state.defaultValue,id:a,style:{backgroundPosition:this.state.backgroundPosition},onFocus:function(t){var n={name:"afterFocus",func:e.afterFocus.bind(e,t.target)};e.workWithQueue(n)},onBlur:function(t){var n={name:"afterBlur",func:e.afterBlur.bind(e,t.target)};e.workWithQueue(n)}},m()())}}function x(e){var t=e;return function(){var e=this;return this.parentScope.readonly?Object(b.jsx)("textarea",{type:t,value:this.state.defaultValue,readOnly:!0,style:{backgroundPosition:this.state.backgroundPosition}},m()()):Object(b.jsx)("textarea",{type:t,defaultValue:this.state.defaultValue,style:{backgroundPosition:this.state.backgroundPosition},id:this.uniqIndex,onFocus:function(t){var n={name:"afterFocus",func:e.afterFocus.bind(e,t.target)};e.workWithQueue(n)},onBlur:function(t){var n={name:"afterBlur",func:e.afterBlur.bind(e,t.target)};e.workWithQueue(n)}},m()())}}function S(e){var t=e,n=[],a="";function r(){var e,t=[],r=a,i=r.toLowerCase(),c=Object(f.a)(n);try{for(c.s();!(e=c.n()).done;){var o=e.value.name,s=o.toLowerCase();r.length>2&&s.includes(i)&&r!==o&&t.push({name:o})}}catch(u){c.e(u)}finally{c.f()}return t}function i(e){var t=this;a=e.target.value;var n=c("cityName","li");r().forEach((function(e,r){var i=document.createElement("li");i.textContent=e.name,i.key=r,n.append(i),i.addEventListener("mousedown",(function(e){a=e.target.textContent,new Promise((function(n){t.setState({defaultValue:e.target.textContent,isValidValue:!0}),n(t)})).then((function(){return c("cityName","li")}))}))}))}function c(e,t){var n=document.getElementById(e);return n.querySelectorAll(t).forEach((function(e){return e.remove()})),n}function o(e){a=e.target.textContent,this.setState({defaultValue:e.target.textContent})}return fetch("https://restcountries.eu/rest/v2/all",{mode:"cors"}).then((function(e){return e.json()})).then((function(e){return n=e})),function(){var e=this,n=this.parentScope,c=this.uniqIndex;return n.readonly?Object(b.jsx)("input",{type:t,value:this.state.defaultValue,readOnly:!0,style:{backgroundPosition:this.state.backgroundPosition}},m()()):Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:t,style:{backgroundPosition:this.state.backgroundPosition},onChange:i.bind(this),onFocus:function(t){var n={name:"afterFocus",func:e.afterFocus.bind(e,t.target)};e.workWithQueue(n)},onBlur:function(t){var n={name:"afterBlur",func:e.afterBlur.bind(e,t.target)};e.workWithQueue(n)},defaultValue:a,id:c,list:"cityName"},m()()),Object(b.jsx)("ul",{id:"cityName",children:r().map((function(t,n){return Object(b.jsx)("li",{onMouseDown:o.bind(e),children:t.name},n)}))})]})}}var k=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).scope=a.props.scope,a.collectionInputElements=Object.values(e.subObj).map((function(e){return"object"===typeof e?e.inputElem():null})),a}return Object(s.a)(n,[{key:"reduceArray",value:function(e){var t=Object(d.a)(this.state.idHtmlWithError);t.splice(e,1),this.setState({idHtmlWithError:t})}},{key:"componentDidUpdate",value:function(){for(var e=[],t=0,n=Object.values(this.props.subObj);t<n.length;t++){var a=n[t];"object"===typeof a&&e.push(a)}var r=e.every((function(e){return""!==e.value}));this.props.subObj.isValid=!!r}},{key:"render",value:function(){var e=this;return Object(b.jsx)("ul",{children:Object.entries(this.props.subObj).map((function(t,n){return"object"===typeof t[1]?Object(b.jsx)(O,{scope:e,array:t,elem:e.collectionInputElements[n]},n):null}))})}}]),n}(r.a.Component),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).parentScope=e.parentScope,a.personalInfo=a.parentScope.state.generalInfo,a}return Object(s.a)(n,[{key:"render",value:function(){var e=this.parentScope.state;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Personal information"}),Object(b.jsx)(k,{subObj:e.generalInfo,obj:e,scope:this.parentScope})]})}}]),n}(r.a.Component),E=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).parentScope=e.parentScope,a.url=void 0,a}return Object(s.a)(n,[{key:"onFileSelected",value:function(e){var t=this,n=e.target.files[0];if(void 0!==n){var a=new FileReader,r=document.querySelector(".photo");a.onload=function(e){t.url=e.target.result,r.style.backgroundImage="url(".concat(t.url,")"),t.addPropertyInState()},a.readAsDataURL(n)}}},{key:"componentDidMount",value:function(){this.addPropertyInState()}},{key:"addPropertyInState",value:function(){var e=this.parentScope.state.generalInfo;e.Avatar=this.url,this.parentScope.setState({generalInfo:e})}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"photo",children:Object(b.jsx)("label",{children:Object(b.jsx)("input",{type:"file",onChange:this.onFileSelected.bind(this)})})})}}]),n}(r.a.Component),P=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsx)("input",{type:"button",value:this.props.value,onClick:function(){return e.props.func()}})}}]),n}(r.a.Component),C=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"buttons",children:this.props.btns.map((function(e,t){return Object(b.jsx)(P,{type:"button",value:e.value,func:e.func},t)}))})}}]),n}(r.a.Component),V=n(11);var I=function e(t){var n={},a=function(a){Array.isArray(t[a])?(n[a]=[],t[a].forEach((function(t){return n[a].push(e(t))}))):"object"!==typeof t[a]?n[a]=t[a]:n[a]=e(t[a])};for(var r in t)a(r);return n};var q=function(e,t){t.setState(e)};function A(e){var t=Object.entries(e),n=t[0][1],a=t[1]?t[1][1]:null,r=[];for(var i in n)"object"===typeof n[i]&&r.push(n[i]);return{arrayOfKeysAndValues:t,objectWithProps:n,arrayWithObjects:a,check:r.every((function(e){return""!==e.value}))}}function N(e){var t=this,n=A(e),a=n.arrayOfKeysAndValues,r=n.objectWithProps,i=n.arrayWithObjects;if(n.check){i.push(r);var c=a[0][0],o=a[1][0];new Promise((function(e){var n;t.setState((n={},Object(V.a)(n,c,I(t.defaultState)),Object(V.a)(n,o,i),n)),e(t)}))}}function w(e,t){var n=A(e),a=n.objectWithProps,r=n.arrayWithObjects,i=n.check,c=r.find((function(e){return!1===e.isValid}));if(i&&!c){r.push(a);var o=Object(V.a)({},t,e);q(o,this.commonParentScope)}}function B(){A(this.state).check&&q(this.state,this.commonParentScope)}function F(e){Object.values(e)[1].splice(-1,1),this.setState(e),this.setState(e)}var D=function(e,t){return Object.values(this.state)[1]?Object.values(this.state)[1].length?[{value:"Add information",func:w.bind(this,e,t)},{value:" + ",func:N.bind(this,e)},{value:" \u2212 ",func:F.bind(this,e)}]:[{value:"Add information",func:w.bind(this,e,t)},{value:" + ",func:N.bind(this,e)}]:[{value:"Add information",func:B.bind(this)}]},W=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={generalInfo:{Name:{value:"",inputElem:y.bind(Object(j.a)(a),"text")},Email:{value:"",inputElem:y.bind(Object(j.a)(a),"text")},Phone:{value:"",inputElem:y.bind(Object(j.a)(a),"text")},Country:{value:"",inputElem:S.bind(Object(j.a)(a),"text")},isValid:!0}},a.parentScope=e.parentScope(),a.commonParentScope=a.parentScope.commonParentScope,a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.parentScope.setState(this.state)}},{key:"render",value:function(){var e=D.call(this,"generalInfo");return Object(b.jsx)("section",{children:Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"infoBlocks",children:[Object(b.jsx)(g,{parentScope:this}),Object(b.jsx)(E,{parentScope:this})]}),Object(b.jsx)(C,{btns:e})]})})}}]),n}(r.a.Component),U=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={educationalExperience:{"School name":{value:"",inputElem:y.bind(Object(j.a)(a),"text")},"Title of study":{value:"",inputElem:y.bind(Object(j.a)(a),"text")},"Date of study":{value:"",inputElem:y.bind(Object(j.a)(a),"date")},isValid:!0},educationalExperienceCollection:[],removedElements:[]},a.parentScope=e.parentScope(),a.commonParentScope=a.parentScope.commonParentScope,a.defaultState=I(a.state.educationalExperience),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.parentScope.setState({educExp:I(this.state)})}},{key:"render",value:function(){var e=this,t=I(this.state),n=D.call(this,t,"educExp"),a=this.state.removedElements.length?Object(b.jsx)(k,{subObj:t.educationalExperience,obj:t,scope:this,isRemoved:!0}):Object(b.jsx)(k,{subObj:t.educationalExperience,obj:t,scope:this});return Object(b.jsxs)("section",{className:"expBlock",children:[Object(b.jsx)("h2",{children:"Educational experience"}),Object(b.jsx)("ul",{className:"specialStyleKit",children:t.educationalExperienceCollection.map((function(n,a){return Object(b.jsx)("li",{children:Object(b.jsx)(k,{subObj:n,obj:t,scope:e})},a)}))}),a,Object(b.jsx)(C,{btns:n})]})}}]),n}(r.a.Component),M=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={practicalExperience:{"Company name":{value:"",inputElem:y.bind(Object(j.a)(a),"text")},"Position title":{value:"",inputElem:y.bind(Object(j.a)(a),"text")},"Main tasks of your jobs":{value:"",inputElem:x.bind(Object(j.a)(a),"text")},From:{value:"",inputElem:y.bind(Object(j.a)(a),"date")},To:{value:"",inputElem:y.bind(Object(j.a)(a),"date")},isValid:!0},practicalExperienceCollection:[],removedElements:[]},a.parentScope=e.parentScope(),a.commonParentScope=a.parentScope.commonParentScope,a.defaultState=I(a.state.practicalExperience),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.parentScope.setState({practicExp:I(this.state)})}},{key:"render",value:function(){var e=this,t=I(this.state),n=D.call(this,t,"practicExp"),a=this.state.removedElements.length?Object(b.jsx)(k,{subObj:t.practicalExperience,obj:t,scope:this,isRemoved:!0}):Object(b.jsx)(k,{subObj:t.practicalExperience,obj:t,scope:this});return Object(b.jsxs)("section",{className:"expBlock",children:[Object(b.jsx)("h2",{children:"Practical experience"}),Object(b.jsx)("ul",{className:"specialStyleKit",children:t.practicalExperienceCollection.map((function(n,a){return Object(b.jsx)("li",{children:Object(b.jsx)(k,{subObj:n,obj:t,scope:e})},a)}))}),a,Object(b.jsx)(C,{btns:n})]})}}]),n}(r.a.Component),Q=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).commonParentScope=e.parentScope,a}return Object(s.a)(n,[{key:"returnParentScope",value:function(){return this}},{key:"componentDidUpdate",value:function(e,t){null===t&&this.commonParentScope.setState(I(this.state))}},{key:"render",value:function(){return Object(b.jsxs)("section",{id:"templateCV",children:[Object(b.jsx)(W,{parentScope:this.returnParentScope.bind(this)}),Object(b.jsx)(U,{parentScope:this.returnParentScope.bind(this)}),Object(b.jsx)(M,{parentScope:this.returnParentScope.bind(this)})]})}}]),n}(r.a.Component),R=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).readonly=!0,a.collectionInputElements=Object.values(e.subObj).map((function(e){return"object"===typeof e?e.inputElem():null})),a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsx)("ul",{children:Object.entries(this.props.subObj).map((function(t,n){return"object"===typeof t[1]?Object(b.jsx)(O,{scope:e,array:t,elem:e.collectionInputElements[n]},n):null}))})}}]),n}(r.a.Component),K=n.p+"static/media/emptyAvatar.5320030d.jpg",L=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={url:K},a}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e){e!==this.props&&void 0!==this.props.obj&&this.setState({url:this.props.obj})}},{key:"render",value:function(){return Object(b.jsx)("div",{id:"photoBlock",style:{backgroundImage:"linear-gradient(rgba(68, 68, 68, 0.2), rgba(68, 68, 68, 0.2)), url(".concat(this.state.url,")")}})}}]),n}(r.a.Component),H=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e){e!==this.props&&this.setState(I(this.props.parentState))}},{key:"render",value:function(){return Object(b.jsxs)("section",{id:"personalInformation",children:[Object(b.jsx)(L,{obj:this.props.parentState.generalInfo.Avatar}),Object(b.jsxs)("form",{children:[Object(b.jsx)("h2",{children:"Personal information"}),Object(b.jsx)(R,{subObj:this.props.parentState.generalInfo})]})]})}}]),n}(r.a.Component),J=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsx)("ul",{children:this.props.array.map((function(e,t){return Object(b.jsx)("li",{className:"expBlock",children:Object(b.jsx)(R,{subObj:e})},t)}))})}}]),n}(r.a.Component),T=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).readonly=!0,a}return Object(s.a)(n,[{key:"render",value:function(){var e=Object.entries(this.props.obj),t=e[1][1],n=e[0][1],a=t.length?Object(b.jsx)(J,{array:t}):Object(b.jsx)(R,{subObj:n});return Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:this.props.headline}),a]})}}]),n}(r.a.Component),z=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setState(this.props.obj)}},{key:"componentDidUpdate",value:function(e){e!==this.props&&this.setState(this.props.obj)}},{key:"render",value:function(){return Object(b.jsxs)("section",{id:"commonInformation",children:[Object(b.jsx)(T,{obj:this.props.obj.educExp,headline:"Educational experience"}),Object(b.jsx)(T,{obj:this.props.obj.practicExp,headline:"Practical experience"})]})}}]),n}(r.a.Component),G=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).CommonParentScope=e.parentScope,a}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t){t===this.state&&this.setState(I(this.CommonParentScope.state))}},{key:"render",value:function(){return Object(b.jsxs)("section",{id:"previewCV",children:[Object(b.jsxs)("div",{children:[this.state&&Object(b.jsx)(z,{obj:this.state}),this.state&&Object(b.jsx)(H,{parentState:this.state})]}),Object(b.jsx)("input",{type:"button",value:"Print",onClick:function(){return window.print()}})]})}}]),n}(r.a.Component);r.a.Component,n(21);c.a.render(Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.84c605bb.chunk.js.map