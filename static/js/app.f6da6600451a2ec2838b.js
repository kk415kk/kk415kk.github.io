webpackJsonp([1],{"2WFT":function(a,t){},"F8+k":function(a,t,e){a.exports=e.p+"static/img/profile.d20b9c6.jpg"},NHnr:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("/5sW"),i={data:function(){return{title:"My Portfolio",name:"Kevin",surname:"[Kao]",address:"San Francisco Bay Area ·",copyEmail:"kkao@berkeley.edu",email:"kkao@berkeley/edu",aboutMe:"UC Berkeley '16 EECS graduate + Staff SWE @LinkedIn, tackling applied machine learning and scalable infrastructure problems. Got a challenging ML or algorithms problem? I'd be happy to chat about it over some coffee.",miscBlurb:"Apart from being a software engineer, I enjoy spending time outdoors and staying active, whether it be hiking the nearby trails or jumping into volleyball open gym. I'm an avid photographer, a huge dog lover, and a coffee enthusiast. You can catch me volunteering at our local animal shelter (Humane Society Silicon Valley) on the weekends!",experience:[{position:"Staff Software Engineer",company:"LinkedIn",description:"Tech lead of the Data track in the Careers Foundations team. I was previously a Senior SWE and SWE at LinkedIn working on the Careers Search Experience team. I started full-time here in July 2016. Tackling relevance infrastructure and applied machine learning problems on the Careers team. Multiple patents filed.",startDate:"June 2018",endDate:"Present"},{position:"Undergraduate Researcher",company:"UC Berkeley School of Information",description:"Developer of the research platform moocRP, under the guidance of Professor Zachary Pardos. Published research at the Learning@Scale conference in 2015.",startDate:"February 2014",endDate:"May 2016"},{position:"Software Engineer Intern",company:"LinkedIn",description:"Developed LinkedIn's first search snippets model and infrastructure for Careers Search. Stayed on for the duration of my senior year of college as a SWE contractor to work on snippets infrastructure. Filed two patents for search snippets generation!",startDate:"June 2015",endDate:"April 2016"},{position:"Software Engineer Intern, Systems",company:"LogicBlox",description:"Solving graph algorithms problems, working directly on the LogicBlox database engine. Worked with Python, C++, and Datalog.",startDate:"August 2014",endDate:"January 2015"},{position:"Software Engineer Intern, Platform",company:"AutoGrid",description:"A little bit of everything for the foundational infra and services of the Demand Response Optimization and Management System product, helping architect a data ETL pipeline and solution. Required some Java chops with some dabbling in Ruby on Rails, Hadoop, MySQL, Redis, RabbitMQ, and Python.",startDate:"June 2014",endDate:"August 2014"}]}},mounted:function(){var a=this.jquery;this.$nextTick(function(){a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var t=a(this.hash);if((t=t.length?t:a("[name="+this.hash.slice(1)+"]")).length)return a("html, body").animate({scrollTop:t.offset().top},1e3,"easeInOutExpo"),!1}}),a(".js-scroll-trigger").click(function(){a(".navbar-collapse").collapse("hide")}),a("body").scrollspy({target:"#sideNav"}),a("#copy-email").click(function(){a("#hidden-clipboard").html('<i class="fas fa-envelope"></i> <b>Copied</b> (click to copy again)')}),a("#google-form").submit(function(t){if(!1!==a("#google-form")[0].checkValidity()){var e=a("#name-input").val(),s=a("#company-input").val(),i=a("#email-message-input").val(),n=a("#email-address-input").val();return a("#google-form").addClass("was-validated"),a.ajax({url:"https://docs.google.com/forms/d/e/1FAIpQLSeOr545Ao4QxIdcaF3JyBEavb6ycGEdUNHF8Yu5_7uNRUeZoQ/formResponse",data:{"entry.869902036":e,"entry.552149804":n,"entry.754332831":s,"entry.1043041612":i},type:"POST",dataType:"xml",statusCode:{0:function(){console.log("0")},200:function(){console.log("200")}}}),a("#google-form").html('<div class="message-box">Thanks for dropping a message! I will respond if needed. <br>If it is urgent and I do not respond, drop me an email (see <b><a class="js-scroll-trigger" href="#about">About</a></b>).</div>'),!1}t.preventDefault(),t.stopPropagation(),a("#google-form").addClass("was-validated")})})}},n={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"main-wrapper"},[a._m(0),a._v(" "),e("div",{staticClass:"container-fluid p-0"},[e("section",{staticClass:"resume-section p-3 p-lg-5 d-flex d-column",attrs:{id:"about"}},[e("div",{staticClass:"my-auto"},[e("h1",{staticClass:"mb-0"},[a._v("\n          "+a._s(a.name)+"\n          "),e("span",{staticClass:"text-primary",staticStyle:{color:"#2471A3"}},[a._v(a._s(a.surname))])]),a._v(" "),e("div",{staticClass:"subheading mb-5",staticStyle:{"margin-top":"5px"}},[a._v(a._s(a.address)+"\n          "),e("a",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.copyEmail,expression:"copyEmail",arg:"copy"}],attrs:{href:"#","data-toggle":"tooltip","data-placement":"right",title:"Copy to clipboard",id:"copy-email"}},[a._v(a._s(a.email))]),a._v(" "),e("sub",{attrs:{id:"hidden-clipboard"}},[a._v("Copy Email to Clipboard")])]),a._v(" "),e("p",[a._v(a._s(a.aboutMe))]),a._v(" "),e("p",{staticClass:"mb-5"},[a._v(a._s(a.miscBlurb))]),a._v(" "),a._m(1)])]),a._v(" "),e("section",{staticClass:"resume-section p-3 p-lg-5 d-flex flex-column",attrs:{id:"experience"}},[e("div",{staticClass:"my-auto"},[e("h2",{staticClass:"mb-5"},[a._v("Resume")]),a._v(" "),e("hr"),a._v(" "),a._m(2),a._v(" "),e("hr"),a._v(" "),a._l(a.experience,function(t){return e("div",{key:t.description,staticClass:"resume-item d-flex flex-column flex-md-row mb-5"},[e("div",{staticClass:"resume-content mr-auto"},[e("h3",{staticClass:"gold-hover mb-0"},[a._v(a._s(t.position))]),a._v(" "),e("div",{staticClass:"subheading mb-3"},[a._v(a._s(t.company))]),a._v(" "),e("p",[a._v(a._s(t.description))])]),a._v(" "),e("div",{staticClass:"resume-date text-md-right"},[e("span",{staticClass:"text-primary"},[a._v(a._s(t.startDate)+" - "+a._s(t.endDate))])])])})],2)]),a._v(" "),a._m(3),a._v(" "),a._m(4)])])},staticRenderFns:[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",attrs:{id:"sideNav"}},[s("a",{staticClass:"navbar-brand js-scroll-trigger",attrs:{href:"#about"}},[s("span",{staticClass:"d-block d-lg-none"},[s("img",{staticClass:"img-fluid img-profile rounded-circle mx-auto",staticStyle:{"max-height":"1.5em"},attrs:{src:e("F8+k")}})]),a._v(" "),s("span",{staticClass:"d-none d-lg-block"},[s("img",{staticClass:"img-fluid img-profile rounded-circle mx-auto mb-2",attrs:{src:e("F8+k"),alt:""}})])]),a._v(" "),s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})]),a._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#about"}},[a._v("About")])]),a._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#experience"}},[a._v("Experience")])]),a._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#photography"}},[a._v("Photography")])]),a._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#contact"}},[a._v("Say Hello!")])]),a._v(" "),s("li",{staticClass:"nav-item"},[s("br"),a._v(" "),s("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"https://cal.berkeley.edu/kevinkao",target:"_blank"}},[s("img",{staticStyle:{"max-width":"25%","max-height":"25%"},attrs:{src:"/static/calbear.png"}})])])])])])},function(){var a=this.$createElement,t=this._self._c||a;return t("ul",{staticClass:"list-inline list-social-icons mb-0"},[t("li",{staticClass:"list-inline-item"},[t("a",{attrs:{href:"https://www.linkedin.com/in/kevin-kao/",target:"_blank"}},[t("span",{staticClass:"fa-stack fa-lg"},[t("i",{staticClass:"fa fa-circle fa-stack-2x"}),this._v(" "),t("i",{staticClass:"fab fa-linkedin fa-stack-1x fa-inverse"})])])]),this._v(" "),t("li",{staticClass:"list-inline-item"},[t("a",{attrs:{href:"https://github.com/kk415kk",target:"_blank"}},[t("span",{staticClass:"fa-stack fa-lg"},[t("i",{staticClass:"fa fa-circle fa-stack-2x"}),this._v(" "),t("i",{staticClass:"fab fa-github fa-stack-1x fa-inverse"})])])]),this._v(" "),t("li",{staticClass:"list-inline-item"},[t("a",{attrs:{href:"https://www.medium.com/@kevinkao",target:"_blank"}},[t("span",{staticClass:"fa-stack fa-lg"},[t("i",{staticClass:"fa fa-circle fa-stack-2x"}),this._v(" "),t("i",{staticClass:"fab fa-medium fa-stack-1x fa-inverse"})])])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"resume-item d-flex flex-column flex-md-row mb-5 side-deco"},[e("div",{staticClass:"resume-content mr-auto"},[e("h3",{staticClass:"mb-0"},[a._v("University of California, Berkeley")]),a._v(" "),e("div",{staticClass:"subheading mb-3"},[a._v("Bachelor of Science, EECS")]),a._v(" "),e("div",[a._v("\n              Regents and Chancellor's Award"),e("br"),a._v("\n              Dean's Honor"),e("br"),a._v("\n              Engineering Honor Roll"),e("br")])]),a._v(" "),e("div",{staticClass:"resume-date text-md-right"},[e("span",{staticClass:"text-primary"},[a._v("August 2012 - May 2016")])])])},function(){var a=this.$createElement,t=this._self._c||a;return t("section",{staticClass:"resume-section p-3 p-lg-5 d-flex flex-column",attrs:{id:"photography"}},[t("div",{staticClass:"my-auto"},[t("h2",{staticClass:"mb-5"},[this._v("Photography")]),this._v(" "),t("p",[this._v("A sample of my photography is shared below.")]),this._v(" "),t("div",{staticClass:"slider"},[t("img",{staticClass:"sample-photo",attrs:{src:"/static/photography/banff1.jpg"}}),this._v(" "),t("img",{staticClass:"sample-photo",attrs:{src:"/static/photography/banff2.jpg"}})])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("section",{staticClass:"resume-section p-3 p-lg-5 d-flex flex-column",attrs:{id:"contact"}},[e("div",{staticClass:"my-auto"},[e("h2",{staticClass:"mb-5"},[a._v("Contact Me")]),a._v(" "),e("div",{staticClass:"resume-item d-flex flex-column flex-md-row mb-5"},[e("div",{staticClass:"resume-content mr-auto"},[e("div",{staticClass:"subheading mb-3"},[a._v("Reach out to me on "),e("a",{attrs:{href:"https://www.linkedin.com/in/kevin-kao/",target:"_blank"}},[a._v("LinkedIn")]),a._v(", or fill out the form below to say hello!\n            ")]),a._v(" "),e("div",[e("form",{staticClass:"needs-validation",attrs:{id:"google-form",novalidate:""}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name-input"}},[a._v("Full name")]),a._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"name-input",required:""}}),a._v(" "),e("div",{staticClass:"invalid-feedback"},[a._v("\n                    Please provide your full name.\n                  ")]),a._v(" "),e("div",{staticClass:"valid-feedback"},[a._v("\n                    Looks good!\n                  ")])]),a._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email-address-input"}},[a._v("Email")]),a._v(" "),e("input",{staticClass:"form-control",attrs:{type:"email",id:"email-address-input",required:""}}),a._v(" "),e("div",{staticClass:"invalid-feedback"},[a._v("\n                    Please provide a valid email address.\n                  ")]),a._v(" "),e("div",{staticClass:"valid-feedback"},[a._v("\n                    Looks good!\n                  ")])]),a._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"company-input"}},[a._v("Company")]),a._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"company-input"}}),a._v(" "),e("div",{staticClass:"valid-feedback"},[a._v("\n                    Looks good!\n                  ")])]),a._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email-message-input"}},[a._v("Message")]),a._v(" "),e("textarea",{staticClass:"form-control",attrs:{id:"email-message-input",rows:"5",required:""}}),a._v(" "),e("div",{staticClass:"invalid-feedback"},[a._v("\n                    Please provide a message.\n                  ")]),a._v(" "),e("div",{staticClass:"valid-feedback"},[a._v("\n                    Looks good!\n                  ")])]),a._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit",id:"submit-form"}},[a._v("Submit")])])]),a._v(" "),e("br")])])])])}]};var r=e("VU/8")(i,n,!1,function(a){e("2WFT")},null,null).exports,o=(e("K3J8"),e("wvfG")),l=e.n(o);e("Eg1c"),e("qQ9k"),e("ao2D"),s.a.prototype.jquery=e("7t+N"),s.a.config.productionTip=!1,s.a.use(l.a),new s.a({el:"#app",render:function(a){return a(r)}})},ao2D:function(a,t){},qQ9k:function(a,t){}},["NHnr"]);
//# sourceMappingURL=app.f6da6600451a2ec2838b.js.map