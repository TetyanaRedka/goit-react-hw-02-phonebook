(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={findtext:"Filter_findtext__3kq6q"}},11:function(t,e,n){t.exports={deletebtn:"ContactList_deletebtn__37VWp"}},12:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),o=n.n(r),i=n(13),s=n(3),u=n(4),l=n(6),b=n(5),d=n(9),m=n(21),h=n(2),j=n.n(h),f=n(0),p=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.changeData=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.submitContact=function(e){var n=t.state,a=n.name,c=n.number;if(e.preventDefault(),t.props.checkContact(a))alert("".concat(a," is already in contact"));else{var r={id:Object(m.a)(),name:a,number:c};t.props.onSubmit(r),t.reset()}},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(f.jsxs)("form",{onSubmit:this.submitContact,className:j.a.formStyle,children:[Object(f.jsxs)("label",{className:j.a.pointStyle,children:["Name",Object(f.jsx)("input",{className:j.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.changeData})]}),Object(f.jsxs)("label",{className:j.a.pointStyle,children:["Number",Object(f.jsx)("input",{className:j.a.input,type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.changeData})]}),Object(f.jsx)("button",{type:"submit",className:j.a.btn,children:"Add contact"})]})}}]),n}(a.Component),C=n(10),O=n.n(C),x=function(t){var e=t.value,n=t.onChange;return Object(f.jsxs)("label",{className:O.a.findtext,children:["Find contact by name",Object(f.jsx)("input",{type:"text",value:e,onChange:n})]})},v=n(11),g=n.n(v),y=function(t){var e=t.contacts,n=t.deleteContact;return Object(f.jsx)("ul",{children:e.map((function(t){return Object(f.jsxs)("li",{children:[t.name,": ",t.number,Object(f.jsx)("button",{className:g.a.deletebtn,onClick:function(){return n(t.id)},children:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c"})]},t.id)}))})},S=n(12),_=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:S,filter:""},t.addContact=function(e){t.setState((function(t){return{contacts:[e].concat(Object(i.a)(t.contacts))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLocaleLowerCase().includes(a)}))},t.checkContact=function(e){var n=t.state.contacts,a=e.toLowerCase();return Boolean(n.find((function(t){return t.name.toLowerCase()===a})))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(p,{onSubmit:this.addContact,checkContact:this.checkContact}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(x,{value:t,onChange:this.changeFilter}),Object(f.jsx)(y,{contacts:e,deleteContact:this.deleteContact})]})}}]),n}(a.Component);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(_,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={formStyle:"ContactForm_formStyle__Cho__",pointStyle:"ContactForm_pointStyle__VJGCj",btn:"ContactForm_btn__3a7ZP"}}},[[19,1,2]]]);
//# sourceMappingURL=main.5db4ed3d.chunk.js.map