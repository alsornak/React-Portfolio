(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{28:function(e){e.exports=JSON.parse('[{"id":1,"name":"Travel Application","image":"Travel-App-demo.png","github":"https://github.com/alsornak/Travel-Application","deploy":"https://eugene32.github.io/Travel-Application/","topics":"HTML, CSS, JavaScript, momentjs, Bulma, server APIs"},{"id":2,"name":"Note Taker","image":"Note-Taker.png","github":"https://github.com/alsornak/Note-Taker","deploy":"https://pure-anchorage-33232.herokuapp.com/","topics":"node, inquirer, express, bootstrap, googlefonts"},{"id":3,"name":"Tech Blog","image":"Tech-Blog.png","github":"https://github.com/alsornak/MVC-Tech-Blog","deploy":"https://week14techblog.herokuapp.com/","topics":"node, sequelize, handlebars, express-session, jawsdb, mysql, model-view-controller, dotenv"},{"id":4,"name":"Weather Dashboard","image":"Weather-Dashboard.png","github":"https://github.com/alsornak/Weather-Dashboard","deploy":"https://alsornak.github.io/Weather-Dashboard/","topics":"moment.js, javascript, jQuery, localStorage, API"},{"id":5,"name":"Work Day Scheduler","image":"work-day-scheduler.gif","github":"https://github.com/alsornak/Work-Day-Scheduler-Week5","deploy":"https://alsornak.github.io/Work-Day-Scheduler-Week5/","topics":"HTML5, CSS, Javascript, MomentJS, Bootstrap"},{"id":6,"name":"Coding quiz","image":"coding-quiz.gif","github":"https://github.com/alsornak/Homework-Week4-SK","deploy":"https://alsornak.github.io/Homework-Week4-SK/","topics":"HTML5, CSS, Javascript"}]')},36:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);c(31);var s=c(1),n=c.n(s),a=c(11),i=c.n(a),o=(c(36),c(21)),r=c(22),l=c(23),j=c(29),d=c(9),h=c(4),b=c(50),m=c(0);var p=function(e){return Object(m.jsx)("div",{children:Object(m.jsxs)(b.a,{expand:"lg",bg:"dark",sticky:"top",children:[Object(m.jsx)(d.b,{className:"nav-link",to:"/",children:Object(m.jsx)("div",{class:"text-light",children:Object(m.jsx)("h4",{class:"nav-title-font",children:"Sorna Kesavan"})})}),Object(m.jsxs)("ul",{class:"navbar-nav ml-auto navitem-indent",children:[Object(m.jsx)("li",{class:"nav-item",children:Object(m.jsx)(d.b,{to:"/about",children:Object(m.jsx)("div",{class:"nav-font text-light",children:"About Me"})})}),Object(m.jsx)("li",{class:"nav-item",children:Object(m.jsx)(d.b,{to:"/portfolio",children:Object(m.jsx)("div",{class:"nav-font text-light",children:"Portfolio"})})}),Object(m.jsx)("li",{class:"nav-item",children:Object(m.jsx)(d.b,{to:"/contact",children:Object(m.jsx)("div",{class:"nav-font text-light",children:"Contact"})})}),Object(m.jsx)("li",{class:"nav-item",children:Object(m.jsx)(d.b,{to:"/resume",children:Object(m.jsx)("div",{class:"nav-font text-light",children:"Resume"})})})]})]})})};var u=function(){return Object(m.jsxs)("section",{className:"container",children:[Object(m.jsx)("h2",{class:"top-title",children:"Sorna Kesavan"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{class:"mb-5",id:"avatar",src:"".concat("/React-Portfolio","/images/avatar.png"),alt:"Sorna Kesavan"}),Object(m.jsx)("p",{children:"Dedicated and focused customer-oriented professional excels at prioritizing, completing multiple tasks simultaneously and following through to achieve project goals. Also adapt at developing and maintaining database."}),Object(m.jsx)("p",{children:"Able to handle confidential information and identify areas for system improvement with ease."}),Object(m.jsx)("p",{children:"Successfully established effective systems for record retention by creating database for daily correspondence tracking."}),Object(m.jsx)("p",{children:"Excellent ability to troubleshoot and work with clients to solve problems or find solutions to requests. Solid background in managing interactive elements of websites to create a fulfilling user experience based upon client guidelines."}),Object(m.jsx)("p",{children:"Ability to work well under pressure to meet hard deadlines and stay within budget while still being able to provide clients with exactly what they want."})]})]})};c(16);var g=function(e){return Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"img-container",children:Object(m.jsx)("img",{alt:e.name,src:"".concat("/React-Portfolio","/images/").concat(e.image)})}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("p",{className:"card-title",children:e.name}),Object(m.jsxs)("p",{class:"proj-icons-container",children:[Object(m.jsx)("a",{href:e.github,children:Object(m.jsx)("img",{class:"project-icon",src:"https://img.icons8.com/fluent/48/000000/github.png",alt:"GitHub Repo"})}),Object(m.jsx)("a",{href:e.deploy,children:Object(m.jsx)("img",{class:"project-icon",src:"https://img.icons8.com/fluent/48/000000/domain.png",alt:"Live Application"})})]}),Object(m.jsxs)("p",{class:"topics",children:["(",e.topics,")"]})]})]})},x=c(28);function O(e){return Object(m.jsx)("div",{className:"wrapper",children:e.children})}var v=function(){return Object(m.jsxs)("section",{className:"container",children:[Object(m.jsxs)("div",{className:"project",children:[Object(m.jsx)("h2",{className:"top-title",children:"Portfolio"}),Object(m.jsx)("hr",{})]}),Object(m.jsx)(O,{id:"card-data",children:x.map((function(e){return Object(m.jsx)(g,{image:e.image,name:e.name,github:e.github,deploy:e.deploy,topics:e.topics},e.id)}))})]})},f=c(13),k=c(19),y=c(20);var w=function(){var e=Object(s.useState)({name:"",email:"",message:""}),t=Object(y.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),i=Object(y.a)(a,2),o=i[0],r=i[1],l=c.name,j=c.email,d=c.message;function h(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);r(t?"":"please enter a valid email")}else e.target.value.length?r(""):r("".concat(e.target.name," is required."));o||n(Object(k.a)(Object(k.a)({},c),{},Object(f.a)({},e.target.name,e.target.value)))}return Object(m.jsxs)("section",{className:"container",children:[Object(m.jsx)("h2",{"data-testid":"h1tag",className:"top-title",children:"Contact Form"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("form",{class:"justify-content-center",id:"contact-form",children:[Object(m.jsxs)("div",{class:"mt-5",children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(m.jsx)("input",{class:"form-control",type:"text",name:"name",defaultValue:l,onBlur:h})]}),Object(m.jsxs)("div",{class:"mt-5",children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email Address:"}),Object(m.jsx)("input",{class:"form-control",type:"email",name:"email",defaultValue:j,onBlur:h})]}),Object(m.jsxs)("div",{class:"mt-5",children:[Object(m.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(m.jsx)("textarea",{class:"form-control",name:"message",defaultValue:d,onBlur:h,rows:"7"})]}),o&&Object(m.jsx)("div",{children:Object(m.jsx)("p",{className:"error-text",children:o})}),Object(m.jsx)("div",{class:"mt-5 mb-5",children:Object(m.jsx)("button",{"data-testid":"button",class:"btn btn-outline-dark ",type:"submit",onSubmit:function(e){e.preventDefault()},children:"Submit"})})]})]})},S=c.p+"static/media/resume.a70fc9fb.pdf";var N=function(){return Object(m.jsxs)("section",{class:"container",children:[Object(m.jsx)("h2",{className:"top-title",children:"Resume"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"contenttext",children:[Object(m.jsx)("div",{children:Object(m.jsxs)("div",{class:"mt-5",children:[Object(m.jsx)("h2",{className:"top-title",children:"Sorna Kesavan"}),Object(m.jsx)("ul",{children:Object(m.jsx)("li",{children:"Core competencies in full-stack web development and managing integrations."})}),Object(m.jsx)("p",{class:"mt-5",children:Object(m.jsx)("a",{href:"https://www.linkedin.com/in/sorna-alagappan/",children:Object(m.jsx)("img",{src:"https://img.icons8.com/fluent/48/000000/linkedin.png",alt:"inkedIn"})})}),Object(m.jsx)("a",{href:S,class:"link",children:"Download Resume"})]})}),Object(m.jsx)("div",{class:"justify-content-center mt-5",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:"top-title",children:"Proficiencies"}),Object(m.jsxs)("div",{id:"front-back",class:"mt-3",children:[Object(m.jsx)("h5",{children:Object(m.jsx)("b",{children:"Front End Experience"})}),Object(m.jsx)("p",{children:"HTML, CSS (Bootstrap, Foundation, Bulma), JavaScript, jQuery, React.js, Angular.js, IndexedDB"})]}),Object(m.jsxs)("div",{id:"front-back",class:"mt-5",children:[Object(m.jsx)("h5",{children:Object(m.jsx)("b",{children:"Back End Experience"})}),Object(m.jsx)("p",{children:"Node.js, Express.js, SQL (sqlite, mySQL, postgreSQL), Sequelize, NoSQL (MongoDB, Mongoose), Python, Django, API's (third-party, RESTful, server-side), Templating (Handlebars)"})]})]})})]})]})},T=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(m.jsxs)(d.a,{children:[Object(m.jsx)("header",{children:Object(m.jsx)(p,{})}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(m.jsx)(h.a,{to:"/about"})}}),Object(m.jsx)(h.b,{path:"/about",component:u}),Object(m.jsx)(h.b,{path:"/portfolio",component:v}),Object(m.jsx)(h.b,{path:"/contact",component:w}),Object(m.jsx)(h.b,{path:"/resume",component:N})]})]})}}]),c}(s.Component),A=T;var B=function(){return Object(m.jsxs)("footer",{className:"footer bg-dark",children:[Object(m.jsx)("a",{href:"https://github.com/alsornak",children:Object(m.jsx)("img",{src:"https://img.icons8.com/color/48/000000/github--v1.png",alt:"Github",className:"icon"})}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/sorna-alagappan/",children:Object(m.jsx)("img",{src:"https://img.icons8.com/fluent/48/000000/linkedin.png",alt:"LinkedIn",className:"icon"})}),Object(m.jsx)("a",{href:"https://stackoverflow.com/",children:Object(m.jsx)("img",{src:"https://img.icons8.com/color/48/000000/stackoverflow.png",alt:"Stack Overflow",class:"icon"})})]})};c(46);var C=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(A,{}),Object(m.jsx)(B,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),D()}},[[47,1,2]]]);
//# sourceMappingURL=main.ea719d68.chunk.js.map