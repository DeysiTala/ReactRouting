import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  NavNavLink,
  Redirect
} from 'react-router-dom'
"use strict";

const Htmlc = [{
  image: 'https://achievement-images.teamtreehouse.com/bagdes_html_howtobuildawebsite_stage02.png',
  name: "How to Make a Website",
  texto: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web.",
  id: 1
},
{
  image: 'https://achievement-images.teamtreehouse.com/badges_html_forms_stage1.png',
  name: "How to Make a Website",
  texto: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web.",
  id: 2
},
{
  image: 'https://achievement-images.teamtreehouse.com/badges-html-svg-stage1.png',
  name: "How to Make a Website",
  texto: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web.",
  id: 3
},
{
  image: 'https://achievement-images.teamtreehouse.com/badges_html_respimages_stage2.png',
  name: "How to Make a Website",
  texto: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web.",
  id: 4
},
{
  image: 'https://achievement-images.teamtreehouse.com/badges_intro_to_html_css_stage-01.png',
  name: "How to Make a Website",
  texto: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web.",
  id: 5
},
{
  image: 'https://achievement-images.teamtreehouse.com/badges-html-videoaudio-stage1.png',
  name: "How to Make a Website",
  texto: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web.",
  id: 6
}
];

const Ccss = [
  {
    image: 'https://achievement-images.teamtreehouse.com/bagdes_html_howtobuildawebsite_stage02.png',
    name: "How to Make a Website",
    texto: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web."

  },
  {
    image: 'https://achievement-images.teamtreehouse.com/badges_html_forms_stage1.png',
    name: "How to Make a Website",
    texto: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web."

  },
  {
    image: 'https://achievement-images.teamtreehouse.com/badges-html-videoaudio-stage1.png',
    name: "How to Make a Website",
    texto: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web."

  },
  {
    image: 'https://achievement-images.teamtreehouse.com/bagdes_html_howtobuildawebsite_stage02.png',
    name: "How to Make a Website",
    texto: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web."

  },
  {
    image: 'https://achievement-images.teamtreehouse.com/badges_html_forms_stage1.png',
    name: "How to Make a Website",
    texto: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web."

  },
  {
    image: 'https://achievement-images.teamtreehouse.com/badges-html-videoaudio-stage1.png',
    name: "How to Make a Website",
    texto: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web."
  }
];

const JavascriptC = [
  {
    image: 'https://achievement-images.teamtreehouse.com/bagdes_html_howtobuildawebsite_stage02.png',
    name: "How to Make a Website",
    texto: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web."

  },
  {
    image: 'https://achievement-images.teamtreehouse.com/badges_html_forms_stage1.png',
    name: "How to Make a Website",
    texto: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web."

  },
  {
    image: 'https://achievement-images.teamtreehouse.com/badges-html-videoaudio-stage1.png',
    name: "How to Make a Website",
    texto: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web."

  },
  {
    image: 'https://achievement-images.teamtreehouse.com/bagdes_html_howtobuildawebsite_stage02.png',
    name: "How to Make a Website",
    texto: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web."

  },
  {
    image: 'https://achievement-images.teamtreehouse.com/badges_html_forms_stage1.png',
    name: "How to Make a Website",
    texto: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web."

  },
  {
    image: 'https://achievement-images.teamtreehouse.com/badges-html-videoaudio-stage1.png',
    name: "How to Make a Website",
    texto: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web."
  }
];


const Home = (props) => {
  return (
    <div className="container">
      <h2><strong>Front End Course Directory</strong></h2>
      <p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
      <p>Learn front end web development and much more! This simple directory app offers a preview of our course
					library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the
					skills you need to launch a new career in front end web development.</p>
      <p>We have thousands of videos created by expert teachers on web design and front end development. Our
					library is continually refreshed with the latest on web technology so you will never fall behind.</p>
      <hr />

    </div>
  );
}
const About = (props) => {
  return (
    <div className="container">
      <h2><strong>About</strong></h2>
      <p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
					visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a
					topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
    </div>
  );
}

const Teachers = (props) => {
  return (
    <div className="container">
      <h2><strong>Teachers</strong></h2>
      <div className="row">
        <div className="col-sm-6">
          <img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/angie.png" />
          <h3><strong>Angie McAngular</strong></h3>
          <p>Angie is a web developer and teacher who is passionate
          about building scalable, data driven web apps, especially
          ones that address old problems with new tech!</p>
        </div>
        <div className="col-sm-6">
          <img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/nodestradamus.png" />
          <h3><strong>NodeStradamus</strong></h3>
          <p>'NodeStra' is a software engineer and philosopher trying to leave
     the world better than he found it. He codes for non-profits, eCommerce,
     and large-scale web apps.</p>
        </div>
        <div className="col-sm-6">
          <img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/geo.png" />
          <h3><strong>Geo 'Lo' Cation</strong></h3>
          <p>Geo is a JavaScript developer working on large-scale
    applications. He's also a teacher who strives to support
    students in removing all barriers to learning code.</p>
        </div>
        <div className="col-sm-6">
          <img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/ecma.png" />
          <h3><strong>Ecma Scriptnstuff</strong></h3>
          <p>Ecma found her passion for computers and programming over 15 years ago. She
    is excited to introduce people to the wonderful world of JavaScript..</p>
        </div>
        <div className="col-sm-6 col-m-6">
          <img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/jay.png" />
          <h3><strong>Jay Query</strong></h3>
          <p>Jay is a developer, author of CSS: The Missing Manual,
     JavaScript & jQuery: The Missing Manual, and web development teacher.</p>
        </div>
        <div className="col-sm-6 col-md-6">
          <img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/json.png" />
          <h3><strong>Jason Babel</strong></h3>
          <p className="text-justify">All of his professional life, Json has worked with
    computers online; he is a polyglot programmer and likes
     using the right tools for the job.</p>
        </div>
      </div>
    </div>
  );
};
const HTML = () => {

  return Htmlc.map(item => {
    return (
      <div> <h2> HTML </h2> </div>
      <li key={item.id}>
        <img src={item.image} />
        <div>
          <h3> {item.name}</h3>
          <p>{item.texto}</p>
        </div>
      </li>
     
  )
  }

  )
};


const CSS = () => {
 return Ccss.map( item =>{
   return (
     <div><h2>CSS</h2></div>
     <li key={item.id}>
     <img src={item.image}/>
     <div>
       <h3>{item.name}</h3>
       <p>{item.texto}</p>
       </div>
       </li>

   )
 })
}
const JavaScript = () => {
  return JavascriptC.map( item =>{
    return(
      <div> <h2> JavaScript </h2> </div>
      <li key={item.id}>
      <img src={item.image}/>
      <div>
        <h3>{item.name}</h3>
        <p>{item.texto}</p>
        </div>
        </li>
    )
  }
   
  );
}

const Courses = () => {
  return (
    <div>
      <h2> Courses </h2>
      <ul>
        <li>  <NavLink exact to="/courses/html"> HTML </NavLink> </li>
        <li>  <NavLink to="/courses/css"> CSS </NavLink> </li>
        <li>  <NavLink to="/courses/javascript"> JavaScript </NavLink> </li>
      </ul>

      <Switch>
        <Route exact path="/courses"
          render={() => <Redirect to="/courses/html" />} />

        <Route path="/courses/html" component={HTML} />
        <Route path="/courses/css" component={CSS} />
        <Route path="/courses/javascript" component={JavaScript} />
      </Switch>
    </div>
  );
}

const NotFoundPage = (props) => {
  return (
    <div> <h2> Error 404! </h2> </div>
  );
}

const App = () => (
  <BrowserRouter>
    <nav className="navbar navbar-default ">
      <div className="container">
        <div className="navbar-header">

          <ul className="nav navbar-nav navbar-right">
            <li className="active"><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/teachers">Teachers</NavLink></li>
            <li><NavLink to="/courses">Courses</NavLink></li>

          </ul>


          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/teachers" component={Teachers} />
            <Route path="/courses" component={Courses} />

            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </nav>
  </BrowserRouter>
)



export default App;
