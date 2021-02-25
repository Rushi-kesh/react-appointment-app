(this["webpackJsonpreact-appointment-app"]=this["webpackJsonpreact-appointment-app"]||[]).push([[0],{36:function(e,t,n){"use strict";n.r(t);var a=n(13),o=n(8),l=n(27),c=n(1),i=n(11),s=n.n(i),d=(n(42),n(20)),r=n(54),m=n(28),j=n(55),p=n(15),b=n(29),h=n(30),u=n(12),O=n(35),x=n(31),g=n(32),M=n(33),f=n(16),k=n(17),y=n(34),T=(n(43),n(3));function v(){var e=Object(c.useReducer)((function(e,t){switch(t.type){case"inputChange":return Object(o.a)(Object(o.a)({},e),{},Object(a.a)({},t.fieldName,t.fieldValue));case"bookTimeSlot":return Object(o.a)(Object(o.a)({},e),{},{timeslots:e.timeslots.map((function(t){return t.id!==e.id?t:Object(o.a)(Object(o.a)({},t),{},{booked:""!==e.name||void 0!==e.phone,name:e.name,phone:e.phone})}))});case"closeModal":return Object(o.a)(Object(o.a)({},e),{},{bookingModalStatus:"closed",id:null,name:"",phone:""});case"openModal":return Object(o.a)(Object(o.a)({},e),{},{bookingModalStatus:"opened",id:t.id});case"closeUpdateModal":return Object(o.a)(Object(o.a)({},e),{},{reviewingModalStatus:"closed",id:null,name:"",phone:""});case"openUpdateModal":var n=e.timeslots.find((function(e){return e.id===t.id}))||{name:"y",phone:"u"},l=n.name,c=n.phone;return Object(o.a)(Object(o.a)({},e),{},{reviewingModalStatus:"opened",id:t.id,name:l,phone:c});default:return e}}),{timeslots:[{id:0,startTime:"9:00 A.M.",endTime:"10:00 A.M.",booked:!1,name:null,phone:null},{id:1,startTime:"10:00 A.M.",endTime:"11:00 A.M.",booked:!1,name:null,phone:null},{id:2,startTime:"11:00 A.M.",endTime:"10:00 A.M.",booked:!1,name:null,phone:null},{id:3,startTime:"12:00 P.M.",endTime:"1:00 P.M.",booked:!1,name:null,phone:null},{id:4,startTime:"1:00 P.M.",endTime:"2:00 P.M.",booked:!1,name:null,phone:null},{id:5,startTime:"2:00 P.M.",endTime:"3:00 P.M.",booked:!1,name:null,phone:null},{id:6,startTime:"3:00 P.M.",endTime:"4:00 P.M.",booked:!1,name:null,phone:null},{id:7,startTime:"4:00 P.M.",endTime:"5:00 P.M.",booked:!1,name:null,phone:null}],bookingModalStatus:"closed",reviewingModalStatus:"closed",name:"",phone:"",id:null}),t=Object(l.a)(e,2),n=t[0],i=t[1],s=n.timeslots,v=n.bookingModalStatus,N=n.reviewingModalStatus,C=n.name,S=n.phone;function P(e){i({type:"closeModal"})}function A(e){var t=parseInt(e.target.getAttribute("data-timeslot-id"),10);i({type:"openModal",id:t})}function w(e){var t=parseInt(e.target.getAttribute("data-timeslot-id"),10);i({type:"openUpdateModal",id:t})}function U(){i({type:"closeUpdateModal"})}function Y(e){i({type:"inputChange",fieldName:e.target.name,fieldValue:e.target.value})}function I(e){console.log("e",typeof e),i({type:"inputChange",fieldName:"phone",fieldValue:e})}function z(e){e.preventDefault(),""!==C&&""!==S&&(i({type:"bookTimeSlot"}),i({type:"closeModal"}))}function B(e){e.preventDefault(),i({type:"bookTimeSlot"}),i({type:"closeUpdateModal"})}return console.log("name",C),console.log("phone",S),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(r.a,{className:"text-sm-left text-md-center",children:Object(T.jsxs)(m.a,{children:[Object(T.jsx)("p",{className:"lead",children:"Appointment App"}),Object(T.jsxs)("p",{children:["Time slots marked in ",Object(T.jsx)("span",{style:{color:"red"},children:"red"})," are already booked."]})]})}),Object(T.jsxs)(m.a,{className:"App",children:[Object(T.jsx)(j.a,{children:s.map((function(e){var t=e.id,n=e.startTime,a=e.endTime;return e.booked?Object(T.jsx)(p.a,{sm:{size:12},children:Object(T.jsx)(b.a,{body:!0,color:"danger",outline:!0,children:Object(T.jsxs)("center",{children:[Object(T.jsx)(h.a,{tag:"h5",children:"".concat(n," - ").concat(a)}),Object(T.jsx)(p.a,{sm:{size:10},children:Object(T.jsx)(u.a,{color:"danger",onClick:w,"data-timeslot-id":t,children:"Update This Time Slot"})},t)]})},t)},t):Object(T.jsx)(p.a,{sm:{size:12,offsstateet:1},children:Object(T.jsx)(b.a,{body:!0,children:Object(T.jsxs)("center",{children:[Object(T.jsx)(h.a,{tag:"h5",children:"".concat(n," - ").concat(a)}),Object(T.jsx)(p.a,{sm:{size:10},children:Object(T.jsx)(u.a,{color:"secondary",onClick:A,"data-timeslot-id":t,children:"Book This Time Slot"})},t)]})},t)},t)}))}),Object(T.jsxs)(O.a,{isOpen:"opened"===v,toggle:P,className:"bookingModal",children:[Object(T.jsx)(x.a,{toggle:P,children:"Please Enter Your Contact Information."}),Object(T.jsx)(g.a,{children:Object(T.jsxs)(M.a,{onSubmit:z,children:[Object(T.jsxs)(f.a,{children:[Object(T.jsx)(k.a,{for:"name",children:"Your Name"}),Object(T.jsx)(y.a,{type:"text",name:"name",id:"name",placeholder:"First and Last Name",onChange:Y,value:C})]}),Object(T.jsxs)(f.a,{children:[Object(T.jsx)(k.a,{for:"phone",children:"Your Phone Number"}),Object(T.jsx)(d.a,{name:"phone",id:"phone",placeholder:"phone",onChange:I,value:S})]}),Object(T.jsx)(u.a,{type:"submit",color:"primary",className:"mx-1",onClick:z,children:"Book"}),Object(T.jsx)(u.a,{color:"secondary",className:"mx-1",onClick:P,children:"Cancel"})]})})]}),Object(T.jsxs)(O.a,{isOpen:"opened"===N,toggle:U,className:"reviewingModal",children:[Object(T.jsx)(x.a,{toggle:U,children:"Update Your Contact Information."}),Object(T.jsx)(g.a,{children:Object(T.jsxs)(M.a,{onSubmit:B,children:[Object(T.jsxs)(f.a,{children:[Object(T.jsx)(k.a,{for:"name2",children:"Your Name"}),Object(T.jsx)(y.a,{type:"text",name:"name",id:"name2",placeholder:"First and Last Name",onChange:Y,value:C})]}),Object(T.jsxs)(f.a,{children:[Object(T.jsx)(k.a,{for:"phone2",children:"Your Phone Number"}),Object(T.jsx)(d.a,{name:"phone",id:"phone",placeholder:"phone",onChange:I,value:S})]}),Object(T.jsx)(u.a,{type:"submit",color:"primary",className:"mx-1",onClick:B,children:"Save Updates"}),Object(T.jsx)(u.a,{color:"secondary",className:"mx-1",onClick:U,children:"Cancel"})]})})]})]})]})}s.a.render(Object(T.jsx)(v,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.63c0805d.chunk.js.map