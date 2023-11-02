
import { YMaps, Map } from 'react-yandex-maps';
// import logo from './logo.png';
import './App.css';
import Overlayer from './components/overlayer';
import topBar from './components/topBar';
import headerNav from './components/header';
import React, { Component } from "react";
import { useState } from 'react';
import ReactDOM from "react-dom";
import { useTranslation, Trans } from "react-i18next";
import hero3 from './images/hero_3.jpg'
import hero2 from './images/hero_2.jpg'
import hero_1 from './images/hero_1.jpg'
import land1 from './images/land1.jpg'
import land2 from './images/land2.jpg'
import land3 from './images/land3.jpg'
import land4 from './images/land4.jpg'
import land5 from './images/land5.jpg'
import land6 from './images/land6.jpg'
import img_1 from './images/img_1.jpg'
import img_2 from './images/img_2.jpg'
import logo from './images/logo3.png'
import oilman from './images/oilman.jpg'
import oilman2 from './images/oilman2.jpg'
import pdf from './images/pdf2.png'
import proj1 from './images/proj1.jpg'
import proj2 from './images/proj2.jpg'
import proj3 from './images/proj3.gif'
// import cert from './images/certs.png'
import { Container, Header, List } from "semantic-ui-react";
import pkg from "semantic-ui-react/package.json";
import FlagExampleFlag from './components/flags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import mobilemenu from './components/mobilem'
// import './owl.carousel.min.css';
// import './owl.theme.default.min.css';
import project1Image from './images/1.png'
import project2Image from './images/2.png'
import project3Image from './images/3.png'
import project4Image from './images/44.jpg'
import project5Image from './images/5.jpg'
import project6Image from './images/6.jpg'
import project7Image from './images/10.jpg'
import project8Image from './images/8.png'
import project9Image from './images/9.jpg'
import {Navbar, Nav, NavItem,NavDropdown,Form,FormControl,Button,Row,Col,Card} from 'react-bootstrap';
import cert from './images/cert.jpg'
import certs from './images/certs.png'
import pres from './images/pres.jpg'
import presPdf from './images/pres.pdf'

function App({ children }) {

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => 
  {
  i18n.changeLanguage(lng);
  };

const [expanded, setExpanded] = useState(false);
const [isShow, setisShow] = useState(true);
const [CurrentIndex, setCurrentIndex] = useState(0);

const myFunction=()=> {
  let x = document.getElementById("main-nav");
if (x.style.display === "grid") {
  x.style.display = "none";} 
  else {
  x.style.display = "grid";
  }
}

const toggleShow = () => {
this.setState(state => ({ isShow: !state.isShow }));
};
const handleClick=()=> {
this.setState({menuVisible: !this.state.menuVisible});
}



return (<>
<div   >
   <div className="site-wrap"  id='start'>
      {/* 
      <div className="site-mobile-menu site-navbar-target">
         <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3" >
               <span className="icon-close2 js-menu-toggle"></span>
            </div>
         </div>
         <div className="site-mobile-menu-body">
         </div>
      </div>
      */}
      {/* 
      <mobilemenu/>
      */}
      {/* 
      <div className="site-mobile-menu site-navbar-target whiteFont ">
         <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
               <span className="icon-close2 js-menu-toggle">
               </span>
            </div>
         </div>
         <div className="site-mobile-menu-body">
            */}
            {/* 
            <div className="wrapper">
               <div className="header">
                  <div className="topbar">
                     <a className={"menu"+" "+this.state.menuVisible} onClick={this.handleClick}>
                     <i className="zmdi zmdi-menu"></i></a>
                     <a className="logo">Dummy SPA</a>
                  </div>
                  <div className={"menubar"+" "+this.state.menuVisible}>
                  <ul>
                     <li>Home</li>
                     <li>Deals</li>
                     <li>Orders</li>
                     <li>Support</li>
                  </ul>
               </div>
            </div>
         </div>
         */}
         {/* 
      </div>
      */}
      {/* 
   </div>
   */}
   <div className="top-bar">
      <div className="container">
         <div className="row">
            <div className="col-12">
               <a href="#" className="text-white">
                 <span className="mr-2 text-white icon-envelope-open-o"></span> 
                 <span className="d-none d-md-inline-block">info@mgeng.kz</span></a>
               <span className="mx-md-2 d-inline-block"></span>
               <a href="#" className="text-white">
               <a href="tel:+77272391233"><span className="mr-2 text-white icon-phone"></span></a> <span className="d-none d-md-inline-block"><a className="whiteFont" href="tel:+77272391233">+7 (727) 239 12 33</a></span></a>
               <div className="float-right">
                  <a href="#" className="text-white">
                  <span className="mr-2 text-white">
                  <a href={presPdf} > 
                  <img src={pres} width='30'/></a>
                  </span> 
                  <span className="mx-md-2 d-inline-block"></span>
                  </a>
                  <a href="#" className="text-white">
                  <span className="mr-2 text-white ">|</span> 
                  </a>
                  <a onClick={() => changeLanguage("ru")} className="mr-3 mx-3 whiteFont" type='button'>RU</a>
                  <a onClick={(e) => changeLanguage("kz")} className="mr-3 whiteFont"  type='button'>KZ</a>
                  <a onClick={(e) => changeLanguage("en")} className="mr-3 whiteFont"  type='button'>ENG</a>
                <Navbar.Collapse id="basic-navbar-nav" >
                     <Nav className="" style={{backgroundColor:'#282f5e!important'}}>
                        <Nav.Link href="#"  className="whiteText" >
                           <Trans i18nKey="menuItem1">trans</Trans>
                        </Nav.Link>
                        <Nav.Link href="#" className="whiteText" >
                           <Trans i18nKey="menuItem2">trans</Trans>
                        </Nav.Link>
                        <Nav.Link href="#" className="whiteText" >
                           <Trans i18nKey="menuItem3">trans</Trans>
                        </Nav.Link>
                        <Nav.Link href="#" className="whiteText" >
                           <Trans i18nKey="menuItem4">trans</Trans>
                        </Nav.Link>
                        <Nav.Link href="#" className="whiteText" >
                           <Trans i18nKey="menuItem5">trans</Trans>
                        </Nav.Link>
                        <Nav.Link href="#" className="whiteText" >
                           <Trans i18nKey="menuItem6">trans</Trans>
                        </Nav.Link>
                        <Nav.Link href="#" className="whiteText" >
                           <Trans i18nKey="menuItem7">trans</Trans>
                        </Nav.Link>
                        {console.log('curr index',CurrentIndex)}
                     </Nav>
                  </Navbar.Collapse>
               </div>
            </div>
         </div>
      </div>
   </div>
   <header className="container-fluid site-navbar js-sticky-header site-navbar-target shrink" 
   style={{backgroundColor:'white'}}   >
      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}

      
      <Navbar collapseOnSelect expand="lg" className="site-navigation text-center container-fluid main-nav">
         <div className='container'>
            <Navbar.Brand href="#start"><img src={logo} width='60%' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"  className='' style={{'color':'white'}}/>
            <Navbar.Collapse id="basic-navbar-nav" >
               <Nav className="mr-auto site-navigation site-menu ">
                  <hr/>
                  <Nav.Link href="#start" className='nav-link active'>
                     <Trans i18nKey="menuItem1" className='App-link'>
                        <p className=''>trans</p>
                     </Trans>
                  </Nav.Link>
                  <Nav.Link href="#services-section"  className='nav-link active'>
                     <Trans i18nKey="menuItem2" className=''>
                        <p className=''>trans</p>
                     </Trans>
                  </Nav.Link>
                  <Nav.Link href="#team-section" className='nav-link active'>
                     <Trans i18nKey="menuItem3" className=''>
                        <p className=''>trans</p>
                     </Trans>
                  </Nav.Link>
                  <Nav.Link href="#press-section"className='nav-link active'>
                     <Trans i18nKey="menuItem4" className=''>
                        <p className=''>trans</p>
                     </Trans>
                  </Nav.Link>
                  <Nav.Link href="#testimonials-section" className='nav-link active'>
                     <Trans i18nKey="menuItem5" className=''>
                        <p className=''>trans</p>
                     </Trans>
                  </Nav.Link>
                  <Nav.Link href="#blog-section" className='nav-link active'>
                     <Trans i18nKey="menuItem6" className=''>
                        <p className=''>trans</p>
                     </Trans>
                  </Nav.Link>
                  <Nav.Link href="#contact-section" className='nav-link active'>
                     <Trans i18nKey="menuItem7" className=''>
                        <p className=''>trans</p>
                     </Trans>
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </div>
      </Navbar>
   </header>
</div>

   </div>
   <div className="owl-carousel slide-one-item" id="home-section">
      <div className="site-section-cover overlay img-bg-section" style={{ backgroundImage: `url(${hero2})` }} >
      <div className="container">
         <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-12 col-lg-7">
               <h1 data-aos="fade-up" data-aos-delay=""><Trans i18nKey="block0">trans</Trans></h1>
              
               
            </div>
         </div>
      </div>
   </div>
   <div className="site-section-cover overlay img-bg-section" style={{ backgroundImage: `url(${land1})` }}  >
   <div className="container">
      <div className="row align-items-center justify-content-center text-center">
         <div className="col-md-12 col-lg-8">
            <h1 data-aos="fade-up" data-aos-delay=""><Trans i18nKey="block0_1">trans</Trans></h1>
           
            
         </div>
      </div>
   </div>
</div>
<div className="site-section-cover overlay img-bg-section" style={{ backgroundImage: `url(${land2})` }}  >
<div className="container">
   <div className="row align-items-center justify-content-center text-center">
      <div className="col-md-12 col-lg-8">
         <h1 data-aos="fade-up" data-aos-delay=""> <Trans i18nKey="block0_2">trans</Trans></h1>
         
         
      </div>
   </div>
</div>
</div>

<div className="site-section-cover overlay img-bg-section" style={{ backgroundImage: `url(${land3})` }}  >
<div className="container">
   <div className="row align-items-center justify-content-center text-center">
      <div className="col-md-12 col-lg-8">
         <h1 data-aos="fade-up" data-aos-delay=""> </h1>
         
         
      </div>
   </div>
</div>
</div>

<div className="site-section-cover overlay img-bg-section" style={{ backgroundImage: `url(${land4})` }}  >
<div className="container">
   <div className="row align-items-center justify-content-center text-center">
      <div className="col-md-12 col-lg-8">
         <h1 data-aos="fade-up" data-aos-delay=""> </h1>
         
         
      </div>
   </div>
</div>
</div>

<div className="site-section-cover overlay img-bg-section" style={{ backgroundImage: `url(${land5})` }}  >
<div className="container">
   <div className="row align-items-center justify-content-center text-center">
      <div className="col-md-12 col-lg-8">
         <h1 data-aos="fade-up" data-aos-delay=""> </h1>
         
         
      </div>
   </div>
</div>
</div>


</div>
{/* <div className="site-section">
   <div className="block__73694 mb-2" id="services-section">
      <div className="container"> */}


  <div className="site-section mb-3" id="services-section" >
   
   <div className="container" >
   <div className="row  justify-content-center">
         <div className="col-md-7 text-center">
            <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
               <h2><Trans i18nKey="block4">trans</Trans></h2>
               {/* <img src={cert} width='100%' /> */}
               {/* 
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere at delectus laudantium, deserunt, atque eveniet. Voluptatem, fuga quos rerum inventore.</p>
               */}
            </div>
         </div>
      </div>
      <br/>
     <div className="row  justify-content-center">

      
         <h6 className="mb-3 text-black">
            <p>
               <Trans i18nKey="block1">trans</Trans>
            </p>
            <p>
               <Trans i18nKey="block1_1">trans</Trans>
            </p>
            <p>
               <Trans i18nKey="block1_2">trans</Trans>
            </p>

            <p>
            <Trans i18nKey="block2">trans</Trans>
            </p>

            <ul className="ul-check primary  mt-2 ">
              <li>
                <Trans i18nKey="block2_1">trans</Trans>
              </li>
              <li>
                <Trans i18nKey="block2_2">trans</Trans>
              </li>
              <li>
                <Trans i18nKey="block2_3">trans</Trans>
              </li>
              <li>
                <Trans i18nKey="block2_4">trans</Trans>
              </li>
              <li>
                <Trans i18nKey="block2_5">trans</Trans>
              </li>
              <li>
                <Trans i18nKey="block2_6">trans</Trans>
              </li>
            </ul>

          <p>
            <Trans i18nKey="block3">trans</Trans>
         </p>
         <p>
            <Trans i18nKey="block3_1">trans</Trans>
         </p>
         <p>
            <Trans i18nKey="block3_2">trans</Trans>
         </p>

         <ul className="ul-check primary  mt-2 ">
            <li>
               <Trans i18nKey="block3_3">trans</Trans>
            </li>
            <li>
               <Trans i18nKey="block3_4">trans</Trans>
            </li>
            <li>
               <Trans i18nKey="block3_5">trans</Trans>
            </li>
            <li>
               <Trans i18nKey="block3_6">trans</Trans>
            </li>
            <li>
               <Trans i18nKey="block3_7">trans</Trans>
            </li>
            <li>
               <Trans i18nKey="block3_8">trans</Trans>
            </li>
            <li>
               <Trans i18nKey="block3_9">trans</Trans>
            </li>
            <li>
               <Trans i18nKey="block3_10">trans</Trans>
            </li>
            <li>
               <Trans i18nKey="block3_11">trans</Trans>
            </li>
         </ul>
          </h6>
         
        
      
    </div>
</div>
</div>


{/* Сертификаты и лицензии*/}
<div className="site-section bg-light" id="blog-section" >
   <div className="container">
      <div className="row  justify-content-center">
         <div className="col-md-7 text-center">
            <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
               <h2><Trans i18nKey="cert">trans</Trans></h2>
               {/* <img src={cert} width='100%' /> */}
               {/* 
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere at delectus laudantium, deserunt, atque eveniet. Voluptatem, fuga quos rerum inventore.</p>
               */}
            </div>
         </div>
      </div>
      <br/>
      <div className="row">
      <div className="container">
      <div className="row">
         {/* <div className="col-12 text-center mb-5" data-aos="fade-up" data-aos-delay="">
            <div className="block-heading-1">
               <span>Get In Touch</span>
               <h2>Контакты</h2>
            </div>
         </div> */}
      </div>
      <div className="row">
         <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="100">
         <h6 className="mb-3 text-black">
          <ul className="ul-check primary  mt-3 ">
          <p><Trans i18nKey="cert0">trans</Trans>:</p>
            <li><Trans i18nKey="cert1">trans</Trans></li>
            <li><Trans i18nKey="cert2">trans</Trans></li>
            <li><Trans i18nKey="cert3">trans</Trans></li>
          </ul>
          
          <ul className="ul-check primary   ">
          <p><Trans i18nKey="lic0">trans</Trans>:</p>
            <li><Trans i18nKey="lic1">trans</Trans></li>
            <li><Trans i18nKey="lic2">trans</Trans></li>
            <li><Trans i18nKey="lic3">trans</Trans></li>
           
            <li><Trans i18nKey="lic4">trans</Trans>
              <ul className="ul-check primary  ">
                <li><Trans i18nKey="lic4_1">trans</Trans></li>
                <li><Trans i18nKey="lic4_2">trans</Trans></li>
              </ul>
            </li>
           
            <li><Trans i18nKey="lic4_3">trans</Trans>
              <ul className="ul-check primary  ">
                  <li><Trans i18nKey="lic4_4">trans</Trans></li>
                  <li><Trans i18nKey="lic4_5">trans</Trans></li>
                  <li><Trans i18nKey="lic4_6">trans</Trans></li>
                  <li><Trans i18nKey="lic4_7">trans</Trans></li>
                  <li><Trans i18nKey="lic4_8">trans</Trans></li>
              </ul>
            </li>
              
              
           

          </ul>
         
          </h6>
         </div>
         <div className="col-lg-4 ml-auto" data-aos="fade-up" data-aos-delay="200">
         <img src={certs}  style={{width: '100%'}} />
            {/* <h6 className="text-black">
               <i class="fa fa-phone" >Адрес</i>
            </h6>
            <p>
               Республика Казахстан г.Алматы, 050052, мкр. Таугуль-3, ул. Жантурина 23
            </p>
            <p>
            <h6 className="text-black">
               <i class="fa fa-phone" >Телефон</i>
            </h6>
            +7 (727) 239 12 33, +7 (727) 239 77 21, +7 (727) 239 77 24
            </p>
            <p>
            <h6 className="text-black">
               Email
            </h6>
            isecretary@mg-eng.kz
            </p> */}
         </div>

</div>
</div>



         {/* <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="">
            <div className="block__35630"  >
               <div className="icon mb-3">
                  <img src={pdf} width='50' />
               </div>
               <h3 className="mb-3">Государственная лицензия 14016989 Ⅰ-й (первой) категории от 10.11.2014 г.</h3>
               "Государственная лицензия 14016989 Ⅰ-й (первой) категории (генеральная) от 10.11.2014 г. на проектирование, выданная Комитетом по делам строительства и жилищно-коммунального хозяйства и управления земельными ресурсами. Министерство национальной экономики Республики Казахстан."
            </div>
         </div>
         <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="block__35630">
               <div className="icon mb-3">
                  <img src={pdf} width='50' />
               </div>
               <h3 className="mb-3">"Государственная лицензия 21018179 от 19.05.2021 г.</h3>
               "Государственная лицензия 21018179 от 19.05.2021 г. на занятие изыскательной деятельностью, инженерно-геологические и инженерно-гидрогеологические работы, инженерно-геодезические работы."
            </div>
         </div>
         <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="block__35630">
               <div className="icon mb-3">
                  <img src={pdf} width='50' />           
               </div>
               <h3 className="mb-3">Soil Carrier</h3>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.
            </div>
         </div>
         <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="">
            <div className="block__35630">
               <div className="icon mb-3">
                  <img src={pdf} width='50' />
               </div>
               <h3 className="mb-3">Gold Refinery</h3>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.
            </div>
         </div>
         <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="block__35630">
               <div className="icon mb-3">
                  <img src={pdf} width='50' />
               </div>
               <h3 className="mb-3">Anvil Blacksmith</h3>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.
            </div>
         </div>
         <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="block__35630">
               <div className="icon mb-3">
                  <img src={pdf} width='50' />
               </div>
               <h3 className="mb-3">Gold Melt Crucible</h3>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.
            </div>
         </div> */}
      </div>
   </div>
</div>
{/* <div className="site-section bg-dark" id="about-section" >
   <div className="container">
      <div className="row justify-content-center mb-4 block-img-video-1-wrap">
         <div className="col-md-12 mb-5">
            <figure className="block-img-video-1" data-aos="fade">
               <a href="https://vimeo.com/45830194" data-fancybox data-ratio="2">
               <span className="icon"><span className="icon-play"></span></span>
               <img src={hero_1} alt="Image" className="img-fluid" width='800'/>
               </a>
            </figure>
         </div>
      </div>
      <div className="row">
         <div className="col-12">
            <div className="row">
               <div className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3" data-aos="fade-up" data-aos-delay="">
                  <div className="block-counter-1">
                     <span className="number"><span data-number="30">0</span>+</span>
                     <span className="caption">Year of Experience</span>
                  </div>
               </div>
               <div className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                  <div className="block-counter-1">
                     <span className="number"><span data-number="300">0</span>+</span>
                     <span className="caption">Expert Engineers</span>
                  </div>
               </div>
               <div className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                  <div className="block-counter-1">
                     <span className="number"><span data-number="2000">0</span>+</span>
                     <span className="caption">Number of Employees</span>
                  </div>
               </div>
               <div className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                  <div className="block-counter-1">
                     <span className="number"><span data-number="1500">0</span>+</span>
                     <span className="caption">Number of Golds</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div> */}
<div className="site-section" id="team-section">
   <div className="container">
      <div className="row mb-5 justify-content-center">
         <div className="col-md-7 text-center">
            <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
               <h2><Trans i18nKey="menuItem3">trans</Trans></h2>
               {/* 
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere at delectus laudantium, deserunt, atque eveniet. Voluptatem, fuga quos rerum inventore.</p>
               */}
            </div>
         </div>
      </div>
      <div className="row">
         <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
            <div className="block-team-member-1 text-center rounded">
               <figure>
                  <img src="./images/person_1.jpg" alt="Image" className="img-fluid rounded-circle"/>
               </figure>
               <h3 className="font-size-20 text-black">Миндеев Андрей Ноэльевич</h3>
               <span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Председатель Наблюдательного Совета ТОО «MG Engineering»</span>
               <div className="block-social-1">
                  {/* <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover" ><span className="icon-facebook"></span></a>
                  <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-twitter"></span></a>
                  <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-instagram"></span></a> */}
               </div>
            </div>
         </div>
         <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="block-team-member-1 text-center rounded">
               <figure>
                  <img src="./images/person_2.jpg" alt="Image" className="img-fluid rounded-circle"/>
               </figure>
               <h3 className="font-size-20 text-black">Сабыркулова Юлия Каировна</h3>
               <span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Председатель Наблюдательного Совета, управляющий партнер ТОО «MG Engineering»</span>
               <div className="block-social-1">
                  {/* <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-facebook"></span></a>
                  <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-twitter"></span></a>
                  <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-instagram"></span></a> */}
               </div>
            </div>
         </div>
         <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="block-team-member-1 text-center rounded">
               <figure>
                  <img src="./images/person_1.jpg" alt="Image" className="img-fluid rounded-circle"/>
               </figure>
               <h3 className="font-size-20 text-black">Тример Карстен Франк</h3>
               <span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Председатель Наблюдательного Совета, управляющий партнер ТОО «MG Engineering»</span>
               <div className="block-social-1">
                  {/* <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-facebook"></span></a>
                  <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-twitter"></span></a>
                  <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-instagram"></span></a> */}
               </div>
            </div>
         </div>
         <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
            <div className="block-team-member-1 text-center rounded">
               <figure>
                  <img src="./images/person_2.jpg" alt="Image" className="img-fluid rounded-circle"/>
               </figure>
               <h3 className="font-size-20 text-black">Жук Иван Витальевич</h3>
               <span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Генеральный деректор</span>
               <div className="block-social-1">
                  {/* <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-facebook"></span></a>
                  <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-twitter"></span></a>
                  <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-instagram"></span></a> */}
               </div>
            </div>
         </div>
         <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="block-team-member-1 text-center rounded">
               <figure>
                  <img src="./images/person_1.jpg" alt="Image" className="img-fluid rounded-circle"/>
               </figure>
               <h3 className="font-size-20 text-black">Bob Carry</h3>
               <span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Project Manager</span>
               <div className="block-social-1">
                  {/* <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-facebook"></span></a>
                  <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-twitter"></span></a>
                  <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-instagram"></span></a> */}
               </div>
            </div>
         </div>
         <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="block-team-member-1 text-center rounded">
               <figure>
                  <img src="./images/person_2.jpg" alt="Image" className="img-fluid rounded-circle"/>
               </figure>
               <h3 className="font-size-20 text-black">Ricky Fisher</h3>
               <span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Engineer</span>
               <div className="block-social-1">
                  {/* <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-facebook"></span></a>
                  <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-twitter"></span></a>
                  <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-instagram"></span></a> */}
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
{/* 
<section className="site-section bg-light" id="pricing-section">
   <div className="container">
      <div className="row mb-5 justify-content-center text-center">
         <div className="col-md-7">
            <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
               <h2>Pricing</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quae temporibus tenetur vitae iusto suscipit alias, laudantium, porro unde tempora.</p>
            </div>
         </div>
      </div>
      <div className="row mb-5">
         <div className="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="">
            <div className="pricing">
               <h3 className="text-center text-black">Basic</h3>
               <div className="price text-center mb-4 ">
                  <span><span>$47</span> / year</span>
               </div>
               <ul className="list-unstyled ul-check success mb-5">
                  <li>Officia quaerat eaque neque</li>
                  <li>Possimus aut consequuntur incidunt</li>
                  <li className="remove">Lorem ipsum dolor sit amet</li>
                  <li className="remove">Consectetur adipisicing elit</li>
                  <li className="remove">Dolorum esse odio quas architecto sint</li>
               </ul>
               <p className="text-center">
                  <a href="#" className="btn btn-secondary btn-md">Buy Now</a>
               </p>
            </div>
         </div>
         <div className="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="pricing">
               <h3 className="text-center text-black">Premium</h3>
               <div className="price text-center mb-4 ">
                  <span><span>$200</span> / year</span>
               </div>
               <ul className="list-unstyled ul-check success mb-5">
                  <li>Officia quaerat eaque neque</li>
                  <li>Possimus aut consequuntur incidunt</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipisicing elit</li>
                  <li className="remove">Dolorum esse odio quas architecto sint</li>
               </ul>
               <p className="text-center">
                  <a href="#" className="btn btn-primary btn-md text-white">Buy Now</a>
               </p>
            </div>
         </div>
         <div className="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="pricing">
               <h3 className="text-center text-black">Professional</h3>
               <div className="price text-center mb-4 ">
                  <span><span>$750</span> / year</span>
               </div>
               <ul className="list-unstyled ul-check success mb-5">
                  <li>Officia quaerat eaque neque</li>
                  <li>Possimus aut consequuntur incidunt</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipisicing elit</li>
                  <li>Dolorum esse odio quas architecto sint</li>
               </ul>
               <p className="text-center">
                  <a href="#" className="btn btn-secondary btn-md">Buy Now</a>
               </p>
            </div>
         </div>
      </div>
      <div className="row site-section" id="faq-section">
         <div className="col-12 text-center" data-aos="fade">
            <h2 className="section-title text-primary">Frequently Ask Questions</h2>
         </div>
      </div>
      <div className="row">
         <div className="col-lg-6">
            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
               <h3 className="text-black h4 mb-4">Can I accept both Paypal and Stripe?</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</p>
            </div>
            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
               <h3 className="text-black h4 mb-4">What available is refund period?</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</p>
            </div>
            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
               <h3 className="text-black h4 mb-4">Can I accept both Paypal and Stripe?</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</p>
            </div>
            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
               <h3 className="text-black h4 mb-4">What available is refund period?</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</p>
            </div>
         </div>
         <div className="col-lg-6">
            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
               <h3 className="text-black h4 mb-4">Where are you from?</h3>
               <p>Voluptatum nobis obcaecati perferendis dolor totam unde dolores quod maxime corporis officia et. Distinctio assumenda minima maiores.</p>
            </div>
            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
               <h3 className="text-black h4 mb-4">What is your opening time?</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</p>
            </div>
            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
               <h3 className="text-black h4 mb-4">Can I accept both Paypal and Stripe?</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</p>
            </div>
            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
               <h3 className="text-black h4 mb-4">What available is refund period?</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</p>
            </div>
         </div>
      </div>
   </div>
</section>
*/}
{/* <div className="site-section" id="press-section">
   <div className="container">
      <div className="row">
         <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="block-heading-1" data-aos="fade-right" data-aos-delay="">
               <h2>Наши проекты</h2>
            </div>
         </div>
         <div className="col-lg-6">
            <ul className="list-unstyled">
               <li className="mb-0" data-aos="fade-right" data-aos-delay="">
                  <img src={proj1} alt="Image" className="img-fluid rounded-circle mx-auto"/>
                  <span className="d-block text-muted mb-3">Apr 19, 2019</span>
                  <h2 className="h4"><a href="press-single.html" className="text-black">Заказчик ТОО «КазГерм-Сервис»</a></h2>
                  <p>Строительство АГНКС по адресу: город Шымкент, ул. Кайкельды батыра, здание 19/1</p>
               </li>
               <hr/>
               <li className="mb-2" data-aos="fade-right" data-aos-delay="100">
                  <img src={proj2} alt="Image" className="img-fluid rounded-circle mx-auto"/>
                  <span className="d-block text-muted mb-3">Apr 19, 2019</span>
                  <h2 className="h4"><a href="press-single.html" className="text-black">Заказчик ТОО «Сагиз Петролиум»</a></h2>
                  <p>Строительство приемо-сдаточного пункта Копа с магистральным нефтепроводом от ЦППН до ПСП «Копа» и вахтовым поселком на 20 человек в Байганинском районе, Актюбинской обл.</p>
               </li>
               <hr/>
               <li className="mb-2" data-aos="fade-right" data-aos-delay="200">
                  <img src={proj3} alt="Image" className="img-fluid rounded-circle mx-auto"/>
                  <span className="d-block text-muted mb-3">Apr 19, 2019</span>
                  <h2 className="h4"><a href="press-single.html" className="text-black">Заказчик ТОО «ПетроКазахстанойл Продактс»</a></h2>
                  <p>Проведение авторского надзора в период строительно-монтажных работ по проекту: «Строительство установки точечного налива нефтепродуктов с рекуперацией паров на Шымкенском НПЗ.»</p>
               </li>
            </ul>
         </div>
      </div>
   </div>
</div> */}

<div className="site-section bg-light block-13" id="testimonials-section" data-aos="fade-up" data-aos-delay="100">
   <div className="container">
      <div className="text-center mb-5" >
         <div className="block-heading-1">
            <h2><Trans i18nKey="act0">trans</Trans></h2>
         </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="100" >
      <h6 className="mb-3 text-black">
      <p><Trans i18nKey="act">trans</Trans></p>
      <Trans i18nKey="act1">trans</Trans>
        <ul className="ul-check primary  mt-2 ">
          <li>
            <Trans i18nKey="act1_1">trans</Trans>
            <ul>
            <li><Trans i18nKey="act1_2">trans</Trans></li>
            <li><Trans i18nKey="act1_3">trans</Trans></li>
            <li><Trans i18nKey="act1_4">trans</Trans></li>
            <li><Trans i18nKey="act1_5">trans</Trans></li>
            <li><Trans i18nKey="act1_6">trans</Trans></li>
            <li><Trans i18nKey="act1_7">trans</Trans></li>
            </ul>
          </li>


          <li>
            <Trans i18nKey="act1_8">trans</Trans>
          <ul>
            <li><Trans i18nKey="act1_9">trans</Trans></li>
            <li><Trans i18nKey="act1_10">trans</Trans></li>
            <li><Trans i18nKey="act1_11">trans</Trans></li>
            <li><Trans i18nKey="act1_12">trans</Trans></li>
            <li><Trans i18nKey="act1_16">trans</Trans></li>
            <li><Trans i18nKey="act1_17">trans</Trans></li>
            <li><Trans i18nKey="act1_18">trans</Trans></li>
            <li><Trans i18nKey="act1_19">trans</Trans></li>
            <li><Trans i18nKey="act1_20">trans</Trans></li>
            
          </ul>
          </li>

          <li>
          <Trans i18nKey="act1_21">trans</Trans>
          <ul>
            <li>  <Trans i18nKey="act1_22">trans</Trans></li>
            <li>  <Trans i18nKey="act1_23">trans</Trans></li>
          </ul>
          </li>
          
          <li>  <Trans i18nKey="act1_24">trans</Trans></li>
          <li>  <Trans i18nKey="act1_25">trans</Trans></li>
          <li>  <Trans i18nKey="act1_26">trans</Trans></li>
          <li>  <Trans i18nKey="act1_27">trans</Trans></li>
          <li>  <Trans i18nKey="act1_28">trans</Trans></li>
         
        </ul>  
       
        <Trans i18nKey="act1_29">trans</Trans>
        <ul className="ul-check primary  mt-2 ">
          <li><Trans i18nKey="act1_30">trans</Trans></li>
          <li><Trans i18nKey="act1_31">trans</Trans></li>

        </ul>
        
       
        <Trans i18nKey="act1_32">trans</Trans>
        <ul className="ul-check primary  mt-2 ">
          <li><Trans i18nKey="act1_33">trans</Trans></li>
          <li><Trans i18nKey="act1_34">trans</Trans></li>

        </ul>
        
        <p><Trans i18nKey="act1_35">trans</Trans></p>
        <p><Trans i18nKey="act1_36">trans</Trans></p>
        <p><Trans i18nKey="act1_37">trans</Trans></p>
       
       
        <ul className="ul-check primary  mt-2 ">
          <li><Trans i18nKey="act1_38">trans</Trans></li>
          <li><Trans i18nKey="act1_39">trans</Trans></li>
          <li><Trans i18nKey="act1_40">trans</Trans></li>
          <li><Trans i18nKey="act1_41">trans</Trans></li>
          <li><Trans i18nKey="act1_42">trans</Trans></li>
          <li><Trans i18nKey="act1_43">trans</Trans></li>
        </ul>
      
        
        
      </h6>
      </div>
      </div>
</div>
      

<div className='site-section bg-light block-13 aos-init aos-animate' id="press-section">
      <div className="text-center mb-5" >
         <div className="block-heading-1">
            <h2><Trans i18nKey="block5">trans</Trans></h2>
         </div>
      </div>
     
      <div className="owl-carousel nonloop-block-13 owl-loaded owl-drag" >
     
         <div className='owl-stage-outer container'> 
         <figure>
                  <img src={project1Image} alt="Image" className="img-fluid mx-auto" style={{width:'200px',alignItems:'left'}} />
         </figure>
              
            <div className="block-testimony-1 text-left">
              <h3 className="font-size-20 text-black">
                 <Trans i18nKey="block5_1">trans</Trans>
              </h3>
              <h6 className="mb-3 text-black">
                   <ul>
                   <li><Trans i18nKey="block5_2">trans</Trans></li>
                   <li><Trans i18nKey="block5_3">trans</Trans></li>
                   <li><Trans i18nKey="block5_4">trans</Trans></li>
                  </ul>
              </h6>
            </div>
         </div>


         <div className='owl-stage-outer container'> 
         <figure>
                  <img src={project2Image} alt="Image" className="img-fluid mx-auto" style={{width:'200px'}}/>
          </figure>
              
            <div className="block-testimony-1 text-left">
              <h3 className="font-size-20 text-black">
                 <Trans i18nKey="block5_5">trans</Trans>
              </h3>
              <h6 className="mb-3 text-black">
                   <ul>
                      <li><Trans i18nKey="block5_6">trans</Trans></li>
                      <li><Trans i18nKey="block5_7">trans</Trans></li>
                      <li><Trans i18nKey="block5_8">trans</Trans></li>
                  </ul>
              </h6>
            </div>
         </div>
        
        
         <div className='owl-stage-outer container'> 
         <figure>
                  <img src={project3Image}  alt="Image" className="img-fluid  mx-auto" style={{width:'200px'}}/>
          </figure>
              
            <div className="block-testimony-1 text-left">
              <h3 className="font-size-20 text-black">
                 <Trans i18nKey="block5_9">trans</Trans>
              </h3>
              <h6 className="mb-3 text-black">
                   <ul>
                   <li><Trans i18nKey="block5_9_1">trans</Trans></li>
                   <li><Trans i18nKey="block5_9_2">trans</Trans></li>
                  </ul>
              </h6>
            </div>
         </div>

         <div className='owl-stage-outer container'> 
         <figure>
                  <img src={project5Image}  alt="Image" className="img-fluid  mx-auto" style={{width:'200px'}}/>
          </figure>
              
            <div className="block-testimony-1 text-left">
              <h3 className="font-size-20 text-black">
                 <Trans i18nKey="block5_10_3">trans</Trans>
              </h3>
              <h6 className="mb-3 text-black">
                   <ul>
                   <li><Trans i18nKey="block5_10_4">trans</Trans></li>
               
                  </ul>
                </h6>
            </div>
         </div>

         <div className='owl-stage-outer container'> 
         <figure>
                  <img src={project9Image}  alt="Image" className="img-fluid  mx-auto" style={{width:'200px'}}/>
          </figure>
              
            <div className="block-testimony-1 text-left">
              <h3 className="font-size-20 text-black">
                 <Trans i18nKey="block5_10_5">trans</Trans>
              </h3>
              <h6 className="mb-3 text-black">
                   <ul>
                   <li><Trans i18nKey="block5_10_6">trans</Trans></li>
               
                  </ul>
              </h6>
            </div>
         </div>

        <div className='owl-stage-outer container'> 
         <figure>
                  <img src={project6Image}  alt="Image" className="img-fluid  mx-auto" style={{width:'200px'}}/>
          </figure>
              
        <div className="block-testimony-1 text-left">
              <h3 className="font-size-20 text-black">
                 <Trans i18nKey="block5_10_7">trans</Trans>
              </h3>
              <h6 className="mb-3 text-black">
                   <ul>
                   <li><Trans i18nKey="block5_10_8">trans</Trans></li>
               
                  </ul>
                </h6>
            </div>
         </div>

         <div className='owl-stage-outer container'> 
         <figure>
                  <img src={project7Image}  alt="Image" className="img-fluid  mx-auto" style={{width:'200px'}}/>
          </figure>
              
          <div className="block-testimony-1 text-left">
              <h3 className="font-size-20 text-black">
                 <Trans i18nKey="block_5_10_85">trans</Trans>
              </h3>
              <h6 className="mb-3 text-black">
                   <ul> 
                   <li><Trans i18nKey="block_5_10_86">trans</Trans></li>
                   <li><Trans i18nKey="block_5_10_87">trans</Trans></li>
                   <li><Trans i18nKey="block_5_10_88">trans</Trans></li>
                   <li><Trans i18nKey="block_5_10_89">trans</Trans></li>
                   <li><Trans i18nKey="block_5_10_90">trans</Trans></li>
                   <li><Trans i18nKey="block_5_10_91">trans</Trans></li>
                   <li><Trans i18nKey="block_5_10_92">trans</Trans></li>
              
              </ul>
              </h6>
            </div>
         </div>

             
         <div className='owl-stage-outer container'> 
         <figure>
                 
          </figure>
              
         <div className="block-testimony-1 text-left">
              <h3 className="font-size-20 text-black">
                 <Trans i18nKey="block_5_10_94">trans</Trans>
              </h3>
              <h6 className="mb-3 text-black">
                   <ul> 
                   <li><Trans i18nKey="block_5_10_95">trans</Trans></li>
                   <li><Trans i18nKey="block_5_10_96">trans</Trans></li>
                   <li><Trans i18nKey="block_5_10_97">trans</Trans></li>
                  
                </ul>
                </h6>
          </div>
          </div>

        <div className='owl-stage-outer container'> 
         <figure>
                 
          </figure>
              
         <div className="block-testimony-1 text-left">
              <h3 className="font-size-20 text-black">
                 <Trans i18nKey="block_5_10_98">trans</Trans>
              </h3>
              <h6 className="mb-3 text-black">
                   <ul> 
                   <li><Trans i18nKey="block_5_10_99">trans</Trans></li>
                  
                  
                </ul>
                </h6>
          </div>
          </div>

          <div className='owl-stage-outer container'> 
         <figure>
                 
          </figure>
              
         <div className="block-testimony-1 text-left">
              <h3 className="font-size-20 text-black">
                 <Trans i18nKey="block_5_10_100">trans</Trans>
              </h3>
              <h6 className="mb-3 text-black">
                   <ul> 
                   <li><Trans i18nKey="block_5_10_101">trans</Trans></li>
                   <li><Trans i18nKey="block_5_10_102">trans</Trans></li>
                   <li><Trans i18nKey="block_5_10_103">trans</Trans></li>
                  
                </ul>
                </h6>
          </div>
          </div>

        <div className='owl-stage-outer container'> 
         <figure>
                 
          </figure>
              
         <div className="block-testimony-1 text-left">
              <h3 className="font-size-20 text-black">
                 <Trans i18nKey="block_5_10_104">trans</Trans>
              </h3>
              <h6 className="mb-3 text-black">
                   <ul> 
                   <li><Trans i18nKey="block_5_10_105">trans</Trans></li>
                  
                  
                </ul>
                </h6>
          </div>
          </div>



          <div className='owl-stage-outer container'> 
         <figure>
                 
          </figure>
              
         <div className="block-testimony-1 text-left">
              <h3 className="font-size-20 text-black">
                 <Trans i18nKey="block_5_10_106">trans</Trans>
              </h3>
              <h6 className="mb-3 text-black">
                   <ul> 
                   <li><Trans i18nKey="block_5_10_107">trans</Trans></li>
                 
                  
                </ul>
                </h6>
          </div>
          </div>



          <div className='owl-stage-outer container'> 
         <figure>
                 
          </figure>
              
         <div className="block-testimony-1 text-left">
              <h3 className="font-size-20 text-black">
                 <Trans i18nKey="block_5_10_108">trans</Trans>
              </h3>
              <h6 className="mb-3 text-black">
                   <ul> 
                   <li><Trans i18nKey="block_5_10_109">trans</Trans></li>
                  
                  
                </ul>
                </h6>
          </div>
          </div>


        <div className='owl-stage-outer container'> 
         <figure>
                 
          </figure>
              
         <div className="block-testimony-1 text-left">
              <h3 className="font-size-20 text-black">
                 <Trans i18nKey="block_5_10_110">trans</Trans>
              </h3>
              <h6 className="mb-3 text-black">
                   <ul> 
                   <li><Trans i18nKey="block_5_10_112">trans</Trans></li>
                   
                  
                </ul>
                </h6>
          </div>
          </div>

          <div className='owl-stage-outer container'> 
         <figure>
                 
          </figure>
              
         <div className="block-testimony-1 text-left">
              <h3 className="font-size-20 text-black">
                 <Trans i18nKey="block_5_10_113">trans</Trans>
              </h3>
              <h6 className="mb-3 text-black">
                   <ul> 
                   <li><Trans i18nKey="block_5_10_114">trans</Trans></li>
                   <li><Trans i18nKey="block_5_10_115">trans</Trans></li>
                   <li><Trans i18nKey="block_5_10_116">trans</Trans></li>
                   <li><Trans i18nKey="block_5_10_117">trans</Trans></li>
                  
                </ul>
                </h6>
          </div>
          </div>


      </div>
     </div>

      {/* <div className="site-section"   id='block4'>
        <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                  <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
                    <span>Latest Blog Posts</span>
                    <h2>Our Blog</h2>
                  </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="">
                  <div>
                    <a href="single.html" className="mb-4 d-block">
                    <img src="./images/hero_2.jpg" alt="Image" className="img-fluid rounded"/></a>
                    <h2><a href="single.html">How To Find Gold In Mining</a></h2>
                    <p className="text-muted mb-3 text-uppercase small"><span className="mr-2">January 18, 2019</span> By <a href="single.html" className="by">James Cooper</a></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et suscipit iste libero neque. Vitae quidem ducimus voluptatibus nemo cum odio ab enim nisi, itaque, libero fuga veritatis culpa quis!</p>
                    <p><a href="single.html">Read More</a></p>
                  </div>
              </div>
              <div className="col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="100">
                  <div>
                    <a href="single.html" className="mb-4 d-block">
                    <img src="./images/hero_3.jpg" alt="Image" className="img-fluid rounded"/></a>
                    <h2><a href="single.html">How To Find Gold In Mining</a></h2>
                    <p className="text-muted mb-3 text-uppercase small"><span className="mr-2">January 18, 2019</span> By <a href="single.html" className="by">James Cooper</a></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et suscipit iste libero neque. Vitae quidem ducimus voluptatibus nemo cum odio ab enim nisi, itaque, libero fuga veritatis culpa quis!</p>
                    <p><a href="single.html">Read More</a></p>
                  </div>
              </div>
            </div>
        </div>
      </div> */}


<div className="site-section bg-light" id="contact-section">
   <div className="container">
      <div className="row">
         <div className="col-12 text-center mb-5" >
            <div className="block-heading-1">
               {/* <span>Get In Touch</span> */}
               <h2> <Trans i18nKey="cont">trans</Trans></h2>
            </div>
         </div>
      </div>
      <div className="row">
         <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="100">
            <form action="#" method="post">
               <div className="form-group row">
                  <div className="col-md-6 mb-4 mb-lg-0">
                     <input type="text" className="form-control" placeholder="Имя"/>
                  </div>
                  <div className="col-md-6">
                     <input type="text" className="form-control" placeholder="Фамилия"/>
                  </div>
               </div>
               <div className="form-group row">
                  <div className="col-md-12">
                     <input type="text" className="form-control" placeholder="Почтовый адрес"/>
                  </div>
               </div>
               <div className="form-group row">
                  <div className="col-md-12">
                     <textarea name="" id="" className="form-control" placeholder="Текст сообщения." cols="30" rows="10"></textarea>
                  </div>
               </div>
               <div className="form-group row">
                  <div className="col-md-6 ml-auto">
                     <input type="submit" className="btn primary 
                      " value="Отправить" style={{backgroundColor: '#282F5e',color: '#fafcff'}}/>
                  </div>
               </div>
            </form>
         </div>
         
         <div className="col-lg ml-auto" >
         
            <div className='map' style={{maxWidth:'600px'}}>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A75d7804b6c93bf8611d6ac4fd3a9b18d377f523a11c4e6519b4f3e5fbefa88b4&amp;source=constructor&width=100%&height=450"  frameborder="0"></iframe>
           </div>

          <h6 className="text-black">
                <p class="fa fa-phone"> <Trans i18nKey="cont">trans</Trans></p>
              </h6>
              <h6 className="mb-3 text-black">
                <p>
                <Trans i18nKey="cont2">trans</Trans>
                </p>
                <p>
                <h6 className="text-black">
                  <p class="fa fa-phone" > <Trans i18nKey="cont3">trans</Trans></p>
                </h6>
                <Trans i18nKey="cont4">trans</Trans>
                </p>
                <p>
                <h6 className="text-black">
                <Trans i18nKey="cont5">trans</Trans>
                </h6>
                <Trans i18nKey="cont6">trans</Trans>
                </p>
              </h6>
         </div>
      </div>
   </div>
</div>
<footer className="site-footer">
   <div className="container">
      <div className="row">
         <div className="col-md-6">
            <div className="row">
               <div className="col-md-8">
                  {/* 
                  <h2 className="footer-heading mb-4">About Us</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
                  */}
               </div>
               <div className="col-md-4 ml-auto">
                  <h2 className="footer-heading mb-4"></h2>
                  <ul className="list-unstyled">
                     <li>
                        <Trans i18nKey="menuItem1">trans</Trans>
                     </li>
                     <li>
                        <Trans i18nKey="menuItem2">trans</Trans>
                     </li>
                     <li>
                        <Trans i18nKey="menuItem3">trans</Trans>
                     </li>
                     <li>
                        <Trans i18nKey="menuItem4">trans</Trans>
                     </li>
                     <li>
                        <Trans i18nKey="menuItem5">trans</Trans>
                     </li>
                     <li>
                        <Trans i18nKey="menuItem6">trans</Trans>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="col-md-4 ml-auto">
            <div className="mb-5">
               <h2 className="footer-heading mb-4">ИП A3 ©</h2>
               {/* 
               <form action="#" method="post" className="footer-suscribe-form">
                  <div className="input-group mb-3">
                     <input type="text" className="form-control border-secondary text-white bg-transparent" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2"/>
                     <div className="input-group-append">
                        <button className="btn btn-primary text-white" type="button" id="button-addon2">
                        Subscribe
                        </button>
                     </div>
                  </div>
            </div>
            <h2 className="footer-heading mb-4">Follow Us</h2>
            <a href="#about-section" className="smoothscroll pl-0 pr-3"><span className="icon-facebook"></span></a>
            <a href="#" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
            <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
            <a href="#" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>
            </form> */}
         </div>
      </div>
      <div className="row pt-5 mt-5 text-center">
         <div className="col-md-12">
            <div className="border-top pt-5">
               <p className="copyright"><small>
                  </small>
               </p>
            </div>
         </div>
      </div>
   </div>
   </div>
</footer>
</>
);
}
export default App;