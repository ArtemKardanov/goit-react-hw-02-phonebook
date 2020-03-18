(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(e,t,a){e.exports={group:"Form_group__mVMis",input:"Form_input__Vfo9P",label:"Form_label__1ILmH",bar:"Form_bar__13qkc",buttonSubmit:"Form_buttonSubmit__20Ir9"}},13:function(e,t,a){e.exports={buttonDelete:"Contact_buttonDelete__1GCm7"}},15:function(e,t,a){e.exports=a(28)},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=a(14),u=a(4),m=a(5),i=a(6),s=a(8),b=a(7),h=a(9),p=a(12),f=a.n(p),d=a(2),E=a(1),g=a.n(E),v=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",number:""},a.handleNameChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(d.a)({},n,r))},a.handleNumberChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(d.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault(),a.state.name&&a.state.number&&(a.props.onAddContact(Object(u.a)({},a.state)),a.setState({name:"",number:""}))},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.number;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:g.a.group},r.a.createElement("input",{autoComplete:"off",className:g.a.input,type:"text",value:t,name:"name",onChange:this.handleNameChange,required:!0}),r.a.createElement("span",{className:g.a.bar}),r.a.createElement("label",{className:g.a.label},"Name")),r.a.createElement("div",{className:g.a.group},r.a.createElement("input",{autoComplete:"off",className:g.a.input,type:"tel",value:a,name:"number",onChange:this.handleNumberChange,pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",required:!0}),r.a.createElement("span",{className:g.a.bar}),r.a.createElement("label",{className:g.a.label},"Number: (xxx-xxx-xxxx)")),r.a.createElement("hr",null),r.a.createElement("button",{className:g.a.buttonSubmit,type:"submit"},"Add contact"))}}]),t}(n.Component),N=function(e){var t=e.value,a=e.onChangeFilter;return r.a.createElement("div",{className:g.a.group},r.a.createElement("input",{autoComplete:"off",className:g.a.input,type:"text",value:t,name:"name",onChange:a,required:!0}),r.a.createElement("span",{className:g.a.bar}),r.a.createElement("label",{className:g.a.label},"Filter"))},C=a(13),_=a.n(C),j=function(e){var t=e.name,a=e.number,n=e.onDeleteNumber;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,t,": ",a),r.a.createElement("button",{className:_.a.buttonDelete,type:"button",onClick:n},"DELETE"))},x=function(e){var t=e.items,a=e.onDeleteNumber;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(j,Object.assign({},e,{onDeleteNumber:function(){return a(e.id)}})))})))},O=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],filter:""},a.addContact=function(e){var t=e.name;if(a.state.contacts.find((function(e){return e.name===t})))alert("".concat(t," is already exist"));else{var n=Object(u.a)({},e,{id:f.a.generate()});a.setState((function(e){return{contacts:[].concat(Object(o.a)(e.contacts),[n])}}))}},a.deleteNumber=function(e){a.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},a.changeFilter=function(e){a.setState({filter:e.target.value})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.contacts,a=e.filter,n=function(e,t){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(a,t);return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(v,{onAddContact:this.addContact}),r.a.createElement("h2",null,"Contacts"),t.length>=2&&r.a.createElement(N,{value:a,onChangeFilter:this.changeFilter}),t.length>0&&r.a.createElement(x,{items:n,onDeleteNumber:this.deleteNumber}))}}]),t}(n.Component);c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.085be8b5.chunk.js.map