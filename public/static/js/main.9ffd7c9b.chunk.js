(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{11:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),c=a.n(r),i=(a(5),a(10)),u=a(1),s=o.a.createContext(),l=a(7),m=a(8),p=new(function(){function e(t){Object(l.a)(this,e),this._url=t.baseUrl,this._headers=t.headers}return Object(m.a)(e,[{key:"_sendRequest",value:function(e,t){return fetch("".concat(this._url).concat(e),t).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"getUserInfo",value:function(){return this._sendRequest("users/me",{headers:this._headers})}},{key:"getInitialCards",value:function(){return this._sendRequest("cards",{headers:this._headers})}},{key:"updateUserInfo",value:function(e){return this._sendRequest("users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})})}},{key:"addNewCard",value:function(e){return this._sendRequest("cards",{method:"POST",body:JSON.stringify({name:e.name,link:e.link}),headers:this._headers})}},{key:"changeLikeCardStatus",value:function(e,t){return this._sendRequest("cards/likes/".concat(e),{method:"".concat(t?"PUT":"DELETE"),headers:this._headers})}},{key:"deleteCard",value:function(e){return this._sendRequest("cards/".concat(e),{method:"DELETE",headers:this._headers})}},{key:"updateUserAvatar",value:function(e){return this._sendRequest("users/me/avatar",{method:"PATCH",body:JSON.stringify({avatar:e.url}),headers:this._headers})}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-12/",headers:{authorization:"b40f325a-73c8-493d-8833-d885268eb953","Content-Type":"application/json"}}),d=a(9),_=a.n(d);var f=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{src:_.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430",className:"logo"}),o.a.createElement("h1",{className:"visually-hidden"},"\u041c\u0435\u0441\u0442\u043e: \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0438\u0441 \u0434\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439"))};var b=function(e){var t=o.a.useContext(s),a=e.card,n=e.onCardClick,r=e.onCardLike,c=e.onCardDelete,i=a.owner._id===t._id,u="button ".concat(i?"card__delete ":"card__delete_hidden"),l=a.likes.some((function(e){return e._id===t._id})),m="card__like button ".concat(l&&"card__like_active");return o.a.createElement("li",{className:"card"},o.a.createElement("button",{type:"button",className:u,onClick:function(){c(a)}}),o.a.createElement("div",{className:"card__container"},o.a.createElement("img",{src:a.link,alt:a.name,className:"card__photo",onClick:function(){n(a)}})),o.a.createElement("h2",{className:"card__caption"},a.name),o.a.createElement("div",{className:"card__like-block"},o.a.createElement("button",{type:"button",className:m,onClick:function(){r(a)}}),o.a.createElement("span",{className:"card__counter"},a.likes.length)))};var h=function(e){var t=o.a.useContext(s),a=e.onEditAvatar,n=e.onEditProfile,r=e.onAddPlace,c=e.onCardClick,i=e.cards,u=e.onCardLike,l=e.onCardDelete;return o.a.createElement("div",{className:"main"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__avatar-overlay"},o.a.createElement("img",{src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"profile__avatar"}),o.a.createElement("button",{className:"profile__button_action_avatar-change",onClick:a})),o.a.createElement("div",{className:"profile__info"},o.a.createElement("button",{type:"button",className:"button profile__button profile__button_action_edit",onClick:n}),o.a.createElement("p",{className:"profile__name"},t.name),o.a.createElement("p",{className:"profile__about"},t.about)),o.a.createElement("button",{type:"button",className:"button profile__button profile__button_action_add",onClick:r})),o.a.createElement("ul",{className:"elements"},i.map((function(e){return o.a.createElement(b,{key:e._id,card:e,onCardClick:c,onCardLike:u,onCardDelete:l})}))))};var v=function(e){var t=e.isOpen,a=e.onSubmit,n=e.onClose,r=e.formName,c=e.title,i=e.children,u=e.submitButtonText,s=e.disabled,l=e.isLoading;return o.a.createElement("div",{className:"popup popup_type_".concat(r," ").concat(t&&"popup_opened")},o.a.createElement("form",{className:"popup__container popup__container_type_".concat(r),name:r,onSubmit:a},o.a.createElement("button",{type:"reset",className:"button button_close popup__button popup__button_close",onClick:n}),o.a.createElement("fieldset",{className:"popup__input-container"},o.a.createElement("legend",{className:"popup__heading"},c),i),o.a.createElement("button",{type:"submit",className:"button popup__button popup__button_submit ".concat(l&&"popup__button_submit_loading"),disabled:s},l?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":u)))};var E=function(e){var t=e.isOpen,a=e.onClose,r=e.onUpdateUser,c=e.isLoading,i=o.a.useContext(s),l=Object(n.useRef)(),m=Object(n.useRef)(),p=Object(n.useState)(""),d=Object(u.a)(p,2),_=d[0],f=d[1],b=Object(n.useState)(""),h=Object(u.a)(b,2),E=h[0],O=h[1],g=Object(n.useState)(""),j=Object(u.a)(g,2),C=j[0],N=j[1],k=Object(n.useState)(""),y=Object(u.a)(k,2),S=y[0],L=y[1],x=Object(n.useState)(!1),U=Object(u.a)(x,2),R=U[0],q=U[1],A=Object(n.useState)(!1),w=Object(u.a)(A,2),D=w[0],P=w[1],T=Object(n.useState)(!0),I=Object(u.a)(T,2),B=I[0],M=I[1];function F(e){"name"===e.target.name?f(e.target.value):O(e.target.value),N(l.current.validationMessage),L(m.current.validationMessage),l.current.validity.valid?q(!0):q(!1),m.current.validity.valid?P(!0):P(!1)}return o.a.useEffect((function(){f(i.name),O(i.about)}),[i,t]),o.a.useEffect((function(){M(!0),N(""),L("")}),[t]),o.a.useEffect((function(){M(!R||!D)}),[R,D,_,E]),o.a.createElement(v,{formName:"user",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submitButtonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),r({name:_,about:E})},disabled:B,isLoading:c},o.a.createElement("label",{htmlFor:"name",className:"popup__field"},o.a.createElement("input",{ref:l,type:"text",className:"popup__input",id:"name",name:"name",value:_||"",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",pattern:"[\u0410-\u042f\u0430-\u044fA-Za-z -]{1,}",required:!0,onChange:F}),o.a.createElement("span",{className:"popup__input-error ".concat(!R&&"popup__input-error_active"),id:"name-error"},C)),o.a.createElement("label",{htmlFor:"about",className:"popup__field"},o.a.createElement("input",{ref:m,type:"text",className:"popup__input",id:"about",name:"about",value:E||"",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",required:!0,onChange:F}),o.a.createElement("span",{className:"popup__input-error ".concat(!D&&"popup__input-error_active"),id:"about-error"},S)))};var O=function(e){var t=e.isOpen,a=e.onClose,r=e.onUpdateAvatar,c=e.isLoading,i=Object(n.useRef)(""),s=Object(n.useState)(""),l=Object(u.a)(s,2),m=l[0],p=l[1],d=Object(n.useState)(!0),_=Object(u.a)(d,2),f=_[0],b=_[1],h=Object(n.useState)(!1),E=Object(u.a)(h,2),O=E[0],g=E[1];return o.a.useEffect((function(){b(!0),p(""),i.current.value=""}),[t]),o.a.useEffect((function(){b(!O)}),[O,i.current.value]),o.a.createElement(v,{formName:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submitButtonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),r({url:i.current.value})},disabled:f,isLoading:c},o.a.createElement("label",{htmlFor:"url",className:"popup__field"},o.a.createElement("input",{ref:i,type:"url",className:"popup__input",id:"url",name:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0,onChange:function(){p(i.current.validationMessage),i.current.validity.valid?g(!0):g(!1)}}),o.a.createElement("span",{className:"popup__input-error ".concat(!O&&"popup__input-error_active"),id:"url-error"},m)))};var g=function(e){var t=e.isOpen,a=e.onClose,r=e.onAddPlace,c=e.isLoading,i=Object(n.useRef)(),s=Object(n.useRef)(),l=Object(n.useState)(""),m=Object(u.a)(l,2),p=m[0],d=m[1],_=Object(n.useState)(""),f=Object(u.a)(_,2),b=f[0],h=f[1],E=Object(n.useState)(""),O=Object(u.a)(E,2),g=O[0],j=O[1],C=Object(n.useState)(""),N=Object(u.a)(C,2),k=N[0],y=N[1],S=Object(n.useState)(!1),L=Object(u.a)(S,2),x=L[0],U=L[1],R=Object(n.useState)(!1),q=Object(u.a)(R,2),A=q[0],w=q[1],D=Object(n.useState)(!0),P=Object(u.a)(D,2),T=P[0],I=P[1];function B(e){"name"===e.target.name?d(e.target.value):h(e.target.value),j(i.current.validationMessage),y(s.current.validationMessage),i.current.validity.valid?U(!0):U(!1),s.current.validity.valid?w(!0):w(!1)}return o.a.useEffect((function(){I(!0),j(""),y(""),d(""),h("")}),[t]),o.a.useEffect((function(){I(!x||!A)}),[x,A,p,b]),o.a.createElement(v,{formName:"photo",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitButtonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),r({name:p,link:b})},disabled:T,isLoading:c},o.a.createElement("label",{htmlFor:"name",className:"popup__field"},o.a.createElement("input",{ref:i,className:"popup__input",id:"name",name:"name",value:p||"",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",required:!0,onChange:B}),o.a.createElement("span",{className:"popup__input-error ".concat(!x&&"popup__input-error_active"),id:"name-error"},g)),o.a.createElement("label",{htmlFor:"link",className:"popup__field"},o.a.createElement("input",{ref:s,type:"url",className:"popup__input",id:"link",name:"link",value:b||"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,onChange:B}),o.a.createElement("span",{className:"popup__input-error ".concat(!A&&"popup__input-error_active"),id:"link-error"},k)))};var j=function(e){var t=e.isOpen,a=e.onClose,n=e.onConfirmDelete,r=e.isLoading;return o.a.createElement(v,{formName:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submitButtonText:"\u0414\u0430",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n()},isLoading:r})};var C=function(e){var t=e.isOpen,a=e.onClose,n=e.link,r=e.name;return o.a.createElement("div",{className:"popup photo ".concat(t&&"popup_opened")},o.a.createElement("figure",{className:"photo__figure"},o.a.createElement("button",{type:"reset",className:"photo__close button button_close",onClick:a}),o.a.createElement("img",{className:"photo__img",src:n,alt:r}),o.a.createElement("figcaption",{className:"photo__caption"},r)))};var N=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var k=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),l=Object(u.a)(c,2),m=l[0],d=l[1],_=Object(n.useState)(!1),b=Object(u.a)(_,2),v=b[0],k=b[1],y=Object(n.useState)({isImageOpen:!1,link:"",name:""}),S=Object(u.a)(y,2),L=S[0],x=S[1],U=Object(n.useState)([]),R=Object(u.a)(U,2),q=R[0],A=R[1],w=Object(n.useState)({}),D=Object(u.a)(w,2),P=D[0],T=D[1],I=Object(n.useState)(!1),B=Object(u.a)(I,2),M=B[0],F=B[1],J=Object(n.useState)({}),z=Object(u.a)(J,2),H=z[0],W=z[1],Z=Object(n.useState)(),$=Object(u.a)(Z,2),G=$[0],K=$[1];function Q(){r(!1),k(!1),d(!1),x({isImageOpen:!1,link:"",name:""}),F(!1)}return o.a.useEffect((function(){p.getUserInfo().then((function(e){T(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435: ".concat(e))}))}),[]),o.a.useEffect((function(){p.getInitialCards().then((function(e){A(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a: ".concat(e))}))}),[]),o.a.createElement(s.Provider,{value:P},o.a.createElement("div",{className:"page"},o.a.createElement(f,null),o.a.createElement(h,{cards:q,onCardClick:function(e){var t=e.link,a=e.name;x({isImageOpen:!0,link:t,name:a})},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===P._id}));p.changeLikeCardStatus(e._id,!t).then((function(t){var a=q.map((function(a){return a._id===e._id?t:a}));A(a)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c/\u0441\u043d\u044f\u0442\u044c \u043b\u0430\u0439\u043a: ".concat(e))}))},onCardDelete:function(e){F(!0),W(e)},onEditProfile:function(){r(!0)},onAddPlace:function(){d(!0)},onEditAvatar:function(){k(!0)}}),o.a.createElement(N,null),o.a.createElement(E,{isOpen:a,onClose:Q,onUpdateUser:function(e){K(!0),p.updateUserInfo(e).then((function(e){return T(e)})).catch((function(e){return"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435: ".concat(e)})).finally((function(){return K(!1)})),Q()},isLoading:G}),o.a.createElement(O,{isOpen:v,onClose:Q,onUpdateAvatar:function(e){K(!0),p.updateUserAvatar(e).then((function(e){T(e),Q()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430: ".concat(e))})).finally((function(){return K(!1)}))},isLoading:G}),o.a.createElement(g,{isOpen:m,onClose:Q,onAddPlace:function(e){K(!0),p.addNewCard(e).then((function(e){return A([e].concat(Object(i.a)(q)))})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))})).finally((function(){return K(!1)})),Q()}}),o.a.createElement(j,{isOpen:M,onClose:Q,onConfirmDelete:function(){p.deleteCard(H._id).then((function(){return A(q.filter((function(e){return e!==H})))})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))})),Q()}}),o.a.createElement(C,{name:L.name,link:L.link,onClose:Q,isOpen:L.isImageOpen})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){},9:function(e,t,a){e.exports=a.p+"static/media/logo.855a8c98.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.9ffd7c9b.chunk.js.map