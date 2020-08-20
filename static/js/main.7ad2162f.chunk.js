(this.webpackJsonpsiteweb=this.webpackJsonpsiteweb||[]).push([[0],{286:function(e,a,n){},287:function(e,a,n){},295:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(16),o=n.n(r),i=(n(68),n(43)),c=n.n(i),s=(n(69),n(311)),m=n(302),u=n(309),d=n(44);function p(){return l.a.createElement(m.a,{className:"cardlist"},l.a.createElement(u.a,{defaultActiveKey:"1"},l.a.createElement(s.a,null,l.a.createElement(s.a.Header,null,l.a.createElement(u.a.Toggle,{as:d.a,variant:"link",eventKey:"0"},"Summary")),l.a.createElement(u.a.Collapse,{eventKey:"0"},l.a.createElement(s.a.Body,null,"Currently listening to the market following a 12 month VIE in New York City at\nSociete Generale Americas.\nI graduated from an engineering school in digital professions with a\nemphasis on financial engineering in financial market\n"))),l.a.createElement(s.a,null,l.a.createElement(s.a.Header,null,l.a.createElement(u.a.Toggle,{as:d.a,variant:"link",eventKey:"1"},"Education")),l.a.createElement(u.a.Collapse,{eventKey:"1"},l.a.createElement(s.a.Body,null,"ECOLE SUPERIEURE D\u2019INGENIEURS LEONARD DE VINCI (ESILV)\nMSc in Financial Engineering \u2013 specialized in financial market\nRelevant coursework: Advanced Fixed Income with Bloomberg, Liquidity Risk, Stochastic calculus, Local\nvolatility and Dupire formula, machine learning (linear regression, principal components analysis, \u2026), data\nstructure management (SQL) and data structure algorithms.\nProject:Creation of a trading platform using VBA,Calibration of the SABR model with C# and WPF, options\npricing (B&S, binomial model)\n"))),l.a.createElement(s.a,null,l.a.createElement(s.a.Header,null,l.a.createElement(u.a.Toggle,{as:d.a,variant:"link",eventKey:"2"},"Experience")),l.a.createElement(u.a.Collapse,{eventKey:"2"},l.a.createElement(s.a.Body,null,l.a.createElement("p",null,"Sept 18-Present Market Risk and Trading Analyst \u2013 SG Americas New York, New York\nProduction and certification of consolidated metrics on FIC perimeter - Full time position\n\u2022 Production/Validation of daily STT, SVAR, VAR and Pnl on FICC\n\u2022 Maintenance/automating of existing VBA macro for Pnl/Risk purposes\n\u2022 Use of API with Python to automate and display report on new tools (Power BI/web application)\n\u2022 Management and automation of API query on Power BI through power query and M langague\n\u2022 Creation of new tools and new processes using python\n\u2022 Contact point between front office and other departments"),l.a.createElement("p",null,"STARTUP CREATION - FAS TEACH Paris, France\n(6 months) Fasteach is mobile application serving as a support for communication and organization between\nTeachers and students\n\u2022 Method of design thinking\n\u2022 Business model Canvas\n\u2022 Interacting with potential clients, understanding their needs and receiving feedbacks\n"),l.a.createElement("p",null,"VEOLIARESEARCH AND INOVATION (VERI) Courbevoie, France\n(7 months) Veolia has developed a treadmill to sort incoming waste streams.\nOur goal was to evaluate the feasibility of waste sorting by image processing\n\u2022 Project manager of a team of 4 people, managed meeting, assigned missions\n\u2022 Implemented a pre-trained convolutional neural network for image processing\nUsing C++ and python (libraryCaffe, implement convolutional neural network on C++)\n\u2022 Analyzed the algorithm\u2019s performance on confidential data provided by Veolia (~100 images)")))),l.a.createElement(s.a,null,l.a.createElement(s.a.Header,null,l.a.createElement(u.a.Toggle,{as:d.a,variant:"link",eventKey:"3"},"Technical Skills")),l.a.createElement(u.a.Collapse,{eventKey:"3"},l.a.createElement(s.a.Body,null," ","English TOEIC 805, French (Mother tong)\n\u2022 C++, C#, VBA Excel, Python\n\u2022 Bloomberg BMC certification (Bloomberg Market Concept), Reuters\n"," ")))))}n(72);var h=n(45),E=n.n(h),g=n(308),f=n(303);function y(){return l.a.createElement(m.a,{className:"body"},l.a.createElement("h1",null,"Black and Scholes Pricer"),l.a.createElement("p",null,l.a.createElement("br",null),"The purpose of this project is to implement a python based option Pricer using the Black and Scholes Model"),l.a.createElement("h4",null,"Reminder, What are the Black and Scholes assumptions"),l.a.createElement("p",null,"In order to use the Black and Scholes model to price a european option, we will need to make some assumptions first to make sure the market is complete"),l.a.createElement("li",null,"There is no transactions cost"),l.a.createElement("li",null,"The risk-free rate is constant"),l.a.createElement("li",null,"Our underlying is not paying dividend"),l.a.createElement("li",null,"The volatility of our underlying asset is constant"),l.a.createElement("li",null,"The Black and Scholes model assumes that the asset's return are log-normal"),l.a.createElement("img",{src:E.a,width:"fit-content%"}),l.a.createElement("p",null,"The Black and Scholes model provides an explicit formula for the price of a European option",l.a.createElement("br",null)),l.a.createElement(g.a,{className:"code1",language:"python",style:f.a},"def BlackScholes(S,K,r,T,sigma):\n    d1 = (np.log(S/K) + (r + 0.5 * sigma**2)*T)/ sigma * np.sqrt(T)\n    d2 = d1 - sigma * np.sqrt(T)\n    call = S * si.norm.cdf(d1,0,1) - K * np.exp(-r * T) * si.norm.cdf(d2,0,1)\nreturn call "))}var b=n(49),v=n.n(b),k=n(50),w=n.n(k),I=n(304),S=n(305),A=n(306);function C(){return l.a.createElement(I.a,null,l.a.createElement(m.a,{className:"justify-content-md-center"},l.a.createElement(S.a,null,l.a.createElement(A.a,{sm:8},l.a.createElement("h1",null,"Welcome to my Web Page !"),l.a.createElement("p",null,"I am Dorian Labry and I hold an Engineer Degree with a specialisation in Financial Markets"),l.a.createElement("a",null,"This website aim is to"),l.a.createElement("li",null,"Provides more details about my background and my experiences"),l.a.createElement("li",null,"Present my skillss set throughout Projects "),l.a.createElement("li",null,"For more, check out my ",l.a.createElement("a",{href:w.a},"resume"))),l.a.createElement(A.a,{className:"HomeImage",sm:4},l.a.createElement("img",{src:v.a,width:"100%"})))))}n(286);var P=n(51),T=n.n(P),B=n(52),N=n.n(B),x=n(53),R=n.n(x);function H(){return l.a.createElement(m.a,{className:"body"},l.a.createElement("p",null,"Throughout my few travels, I have found myself an interest in photography. Here, you will find a few photography of mine taken with my phone \\n"),l.a.createElement(S.a,null,l.a.createElement(A.a,null,l.a.createElement("img",{src:T.a,height:"100%",width:"100%"})),l.a.createElement(A.a,null,l.a.createElement("p",null,"Dolor sint magna magna nostrud id fugiat enim amet exercitation amet."))),l.a.createElement(S.a,null,l.a.createElement(A.a,null,l.a.createElement("p",null,"Dolore velit veniam laborum nisi est adipisicing eu id et aute laboris est do duis.")),l.a.createElement(A.a,null,l.a.createElement("img",{src:N.a,height:"100%",width:"100%"}))),l.a.createElement(S.a,null,l.a.createElement(A.a,null,l.a.createElement("img",{src:R.a,height:"100%",width:"100%"})),l.a.createElement(A.a,null,l.a.createElement("p",null,"Non in labore eiusmod qui."))))}n(287),n(288);var j=n(310),L=n(312),V=n(307),F=n(54),M=n(6);var K=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"})),l.a.createElement("body",null,l.a.createElement(F.a,{basename:"/SitePortfolio"},l.a.createElement(j.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",fluid:!0},l.a.createElement(j.a.Brand,{href:"/Home"},l.a.createElement("img",{alt:"",src:c.a,width:"30",height:"30",className:"d-inline-block align-top"})," ","Dorian L"),l.a.createElement(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(j.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(L.a,{className:"mr-auto"},l.a.createElement(L.a.Link,{href:"#Home"},"Home"),l.a.createElement(L.a.Link,{href:"#About"},"About"),l.a.createElement(V.a,{title:"Projects",id:"nav-dropdown"},l.a.createElement(V.a.Item,{href:"#Project1"},"Black and Scholes Pricer"),l.a.createElement(V.a.Item,null,"Host a website on github"),l.a.createElement(V.a.Item,{href:"#Projects"},"Python: the commercial traveler"),l.a.createElement(V.a.Item,null,"Machine Learning: Logistic regression")),l.a.createElement(L.a.Link,{href:"#Hobbies"},"Hobbies")))),l.a.createElement(M.c,null,l.a.createElement(M.a,{path:"/About",exact:!0,component:p}),l.a.createElement(M.a,{path:"/Hobbies",exact:!0,component:H}),l.a.createElement(M.a,{path:"/Project1",exact:!0,component:y}),l.a.createElement(M.a,{path:"/Home",exact:!0,component:C}),l.a.createElement(M.a,{path:"/",exact:!0,component:C})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e,a,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},45:function(e,a,n){e.exports=n.p+"static/media/Share100.731d6606.jpg"},49:function(e,a,n){e.exports=n.p+"static/media/mini2.ddf8aa20.jpg"},50:function(e,a,n){e.exports=n.p+"static/media/Resume-LABRY.129f8caf.pdf"},51:function(e,a,n){e.exports=n.p+"static/media/Atlantic_Caraibes.e840a5a6.jpg"},52:function(e,a,n){e.exports=n.p+"static/media/liberty_statue.4bfabe57.jpg"},53:function(e,a,n){e.exports=n.p+"static/media/times_squares.693485b4.jpg"},63:function(e,a,n){e.exports=n(295)},68:function(e,a,n){},69:function(e,a,n){},72:function(e,a,n){}},[[63,1,2]]]);
//# sourceMappingURL=main.7ad2162f.chunk.js.map