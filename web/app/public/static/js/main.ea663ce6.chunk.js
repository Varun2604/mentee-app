(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),r=s(21),i=s.n(r),c=(s(27),s(7)),o=s(8),l=s(10),u=s(9),j=(s(28),s(11)),d=s(41),b=s(22),m=s(42),h=s(43),O=(s(29),s(1)),p=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a.state={username:null},a}return Object(o.a)(s,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData(e.target).get("username");this.setState({username:t}),this.props.renderChatView(t,"some-session")}},{key:"render",value:function(){return Object(O.jsxs)(d.a,{children:[Object(O.jsx)(b.a,{md:2}),Object(O.jsx)(b.a,{md:8,children:Object(O.jsxs)(m.a,{className:"user-login",onSubmit:this.handleSubmit,children:[Object(O.jsxs)(m.a.Group,{children:[Object(O.jsx)(d.a,{children:Object(O.jsx)(b.a,{children:Object(O.jsx)(m.a.Label,{children:"What do people call you ?"})})}),Object(O.jsxs)(d.a,{children:[Object(O.jsx)(b.a,{}),Object(O.jsx)(b.a,{md:10,children:Object(O.jsx)(m.a.Control,{type:"text",placeholder:"",name:"username"})}),Object(O.jsx)(b.a,{})]})]}),Object(O.jsx)(h.a,{variant:"primary",type:"submit",children:"Start Chatting"})]})}),Object(O.jsx)(b.a,{md:2})]})}}]),s}(a.Component),x=s(16),g=s(18),f=s(17),v=s.n(f),y=(s(37),s(38),function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).state={user:a.props.username?a.props.username:"Unknown",time:a.props.time,message:a.props.message,usertype:a.props.usertype?a.props.usertype:"bot"},"bot"===a.state.usertype&&a.setState({user:"MenteeBot"}),a}return Object(o.a)(s,[{key:"render",value:function(){var e="justify-content-start";return"user"==this.state.usertype&&(e="justify-content-end"),Object(O.jsx)(d.a,{children:Object(O.jsx)(d.a,{className:e,children:Object(O.jsxs)(b.a,{className:"message-row",md:8,children:[Object(O.jsxs)(d.a,{className:"message-meta-row justify-content-between",children:[Object(O.jsx)(b.a,{md:4,className:"message-name",children:this.state.user}),Object(O.jsx)(b.a,{md:4,className:"message-date",children:this.state.time})]}),Object(O.jsx)(d.a,{className:"message-data-row",children:Object(O.jsx)(b.a,{className:"message",children:this.state.message})})]})})})}}]),s}(a.Component)),w=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).render=a.render.bind(Object(j.a)(a)),a.submitMessage=a.submitMessage.bind(Object(j.a)(a)),a.state={messages:[],questions:["What's the most recent concern that has been in your mind? Elaborate."],original_questions:["Whats your mood been like this past month? Sad? Worthless? Hopeless?","How do you picture yourself right now? Elaborate.","What is your sleep pattern? Do you find troubles falling asleep? ","How has your appetite been in the past month? Are you eating normally?","How would you describe your level of interest or motivation while completing daily activities? Elaborate.","How is your physical health according to you? Elaborate.","Have you easily felt rejected or criticized by others? How do you respond when that happens? Elaborate."],question_idx:0,username:e.username,usersession:e.usersession},a}return Object(o.a)(s,[{key:"submitMessage",value:function(e){var t=v()(".message-text-area")[0].value;console.log(t);var s=this.state.messages;s.push(t);var a=this.state.questions;a.push(this.state.original_questions[this.state.question_idx]),this.setState({messages:s,questions:a,question_idx:++this.state.question_idx}),v()(".message-text-area")[0].value=""}},{key:"submitParsingFeedback",value:function(e){fetch("/compute_feedback",{method:"POST",body:{feedback:"some feedback"},redirect:"follow"}).then((function(e){return e.text()})).then((function(e){e=JSON.parse(e),alert(e.message)})).catch((function(e){console.log("error",e),alert("Error while submitting feedback, please try again later.")}))}},{key:"submitComputationFeedback",value:function(e){fetch("/parse_feedback",{method:"POST",body:{feedback:"some feedback"},redirect:"follow"}).then((function(e){return e.text()})).then((function(e){e=JSON.parse(e),alert(e.message)})).catch((function(e){console.log("error",e),alert("Error while submitting feedback, please try again later.")}))}},{key:"renderabc",value:function(){var e=this;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-md-2",children:Object(O.jsx)(h.a,{variant:"outline-primary",onClick:function(){e.props.renderFirstView()},children:"Back"})}),Object(O.jsx)("div",{className:"col-md-10 justify-content-center",children:Object(O.jsx)("h2",{children:"RESULT"})})]}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-md-6 justify-content-center image-container",children:Object(O.jsx)(k,{image:this.props.image})}),Object(O.jsxs)("div",{className:"col-md-6",children:[Object(O.jsx)("div",{className:"row justify-content-center",children:Object(O.jsx)(m.a,{children:Object(O.jsxs)(m.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(O.jsx)(m.a.Label,{children:"Parsed Value from Image"}),Object(O.jsx)(m.a.Control,{as:"textarea",rows:6,children:this.props.parsed_response}),Object(O.jsx)(h.a,{variant:"outline-danger",onClick:function(t){e.submitParsingFeedback(t)},children:"Submit Parsing feedback"})]})})}),Object(O.jsx)("div",{className:"row justify-content-center",children:Object(O.jsx)(m.a,{children:Object(O.jsxs)(m.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(O.jsx)(m.a.Label,{children:"Result for Image"}),Object(O.jsx)(m.a.Control,{as:"textarea",rows:6,children:this.props.compute_response}),Object(O.jsx)(h.a,{variant:"outline-danger",onClick:function(t){e.submitComputationFeedback(t)},children:"Submit Computation feedback"})]})})})]})]})]})}},{key:"render",value:function(){var e=[];console.log("messages from state",this.state.messages);for(var t=this.state.messages.length>0||this.state.questions.length>0,s=!0,a=0;t;)s?e.push(Object(O.jsx)(y,{username:"MenteeBot",message:this.state.questions[a],time:"10:26:45",usertype:"bot"})):(this.state.messages.length>a&&e.push(Object(O.jsx)(y,{username:this.state.username,message:this.state.messages[a],time:"10:26:45",usertype:"user"})),a++),s=!s,t=this.state.questions.length>a||this.state.messages.length>a;return Object(O.jsxs)("div",{children:[Object(O.jsxs)(d.a,{className:"banner-row align-top",children:[Object(O.jsx)(b.a,{md:10}),Object(O.jsx)(b.a,{md:2,children:Object(O.jsx)(h.a,{variant:"outline-danger",children:"Logout"})})]}),Object(O.jsx)(d.a,{className:"message-log-row",children:Object(O.jsx)("ul",{className:"container",children:e})}),Object(O.jsxs)(d.a,{className:"message-send align-bottom",children:[Object(O.jsx)(b.a,{md:10,children:Object(O.jsx)(m.a.Control,{className:"message-text-area",as:"textarea",rows:5})}),Object(O.jsx)(b.a,{md:1,children:Object(O.jsx)("span",{className:"send-button",onClick:this.submitMessage,children:Object(O.jsx)(x.a,{icon:g.b,size:"2x"})})}),Object(O.jsx)(b.a,{md:1,children:Object(O.jsx)("span",{className:"voice-button",children:Object(O.jsx)(x.a,{icon:g.a,size:"2x"})})})]})]})}}]),s}(a.Component),k=function(e){var t=e.image;return Object(O.jsx)("img",{className:"render-file",src:URL.createObjectURL(t),alt:t.name})},N=w,C=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).state={username:null,usersession:null},a}return Object(o.a)(s,[{key:"renderChatView",value:function(e,t){this.setState({username:e,usersession:t})}},{key:"renderLoginView",value:function(){this.setState({username:null})}},{key:"render",value:function(){var e=this,t=this.state.username;return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)("div",{className:"App-header container",children:null===t?Object(O.jsx)(p,{renderChatView:function(t,s){e.renderChatView(t,s)}}):Object(O.jsx)(N,{username:e.state.username,usersession:e.state.usersession,renderLoginView:function(){e.renderLoginView()}})})})}}]),s}(a.Component),S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,44)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),r(e),i(e)}))};s(39);i.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root")),S()}},[[40,1,2]]]);
//# sourceMappingURL=main.ea663ce6.chunk.js.map