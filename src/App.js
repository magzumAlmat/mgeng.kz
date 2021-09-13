// import logo from './logo.png';
import './App.css';
import Overlayer from './components/overlayer';

import topBar from './components/topBar';
import headerNav from './components/header';
import mob from './components/mobilem'

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { useTranslation, Trans } from "react-i18next";


import hero3 from './images/hero_3.jpg'
import hero2 from './images/hero_2.jpg'
import hero_1 from './images/hero_1.jpg'
import img_1 from './images/img_1.jpg'
import img_2 from './images/img_2.jpg'
import logo from './logo.png'


function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const index = 11;
  
  return (
    <>
     <div  data-spy="scroll" data-target=".site-navbar-target" data-offset="300" >
  
  
  {/* <div id="overlayer"></div> */}
 {/* <div className="loader">
   <div className="spinner-border text-primary" role="status">
     <span className="sr-only">Loading...</span>
   </div>
 </div> */}
 
 
 <div className="site-wrap"  id="home-section">

   <div className="site-mobile-menu site-navbar-target">
     <div className="site-mobile-menu-header">
       <div className="site-mobile-menu-close mt-3" >
        
      
       </div>
     </div>
     <div className="site-mobile-menu-body">

     {/*  */}
     </div>
   </div>
  

   <div className="top-bar">
     <div className="container">
       <div className="row">
         <div className="col-12">
           <a href="#" className="text-white"><span className="mr-2 text-white icon-envelope-open-o"></span> <span className="d-none d-md-inline-block">secretary@mg-eng.kz</span></a>
           <span className="mx-md-2 d-inline-block"></span>
           <a href="#" className="text-white"><span className="mr-2 text-white icon-phone"></span> <span className="d-none d-md-inline-block">+7 (727) 239 12 33</span></a>
           

           <div className="float-right">

           <a href="#" className="text-white"><span className="mr-2 text-white icon-twitter"></span> <span className="d-none d-md-inline-block">Twitter</span></a>
           <span className="mx-md-2 d-inline-block"></span>
           <a href="#" className="text-white"><span className="mr-2 text-white icon-instagram"></span> <span className="d-none d-md-inline-block">Instagram</span></a>
           
           <div className="App-header">
              <h2>{t("Welcome to React")}</h2>
              <button onClick={() => changeLanguage("de")}>de</button>
              <button onClick={() => changeLanguage("en")}>en</button>
            </div>
           </div>
           

         </div>
         
       </div>
       
     </div>
   </div>
     
   <header className="site-navbar js-sticky-header site-navbar-target" role="banner">

     <div className="container">
       <div className="row align-items-center position-relative">
         
           
           <div className="site-logo">
             <a href="index.html" className="text-black"/>
               <img src={logo} width='100' />
      
           </div>
           
           <div className="col-12">
             <nav className="site-navigation text-right ml-auto " role="navigation">

               <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
               <li><a href="#home-section" className="nav-link">Home</a></li>
               <li><a href="#services-section" className="nav-link">Services</a></li>
             

               <li className="has-children">
                 <a href="#about-section" className="nav-link">About Us</a>
                 <ul className="dropdown arrow-top">
                   <li><a href="#team-section" className="nav-link">Team</a></li>
                   <li><a href="#pricing-section" className="nav-link">Pricing</a></li>
                   <li><a href="#faq-section" className="nav-link">FAQ</a></li>
                   <li className="has-children">
                     <a href="#">More Links</a>
                     <ul className="dropdown">
                       <li><a href="#">Menu One</a></li>
                       <li><a href="#">Menu Two</a></li>
                       <li><a href="#">Menu Three</a></li>
                     </ul>
                   </li>
                 </ul>
               </li>

               <li><a href="#press-section" className="nav-link">Press</a></li>
               
               <li><a href="#testimonials-section" className="nav-link">Testimonials</a></li>
               <li><a href="#blog-section" className="nav-link">Blog</a></li>
               <li><a href="#contact-section" className="nav-link">Contact</a></li>
             </ul>
             </nav>
         
           </div>

         <div className="toggle-button d-inline-block d-lg-none"><a href="#" className="site-menu-toggle py-5 js-menu-toggle text-black"><span className="icon-menu h3"></span></a></div>

       </div>
     </div>
     
   </header>
   
   <div className="owl-carousel slide-one-item">
     

     

     <div className="site-section-cover overlay img-bg-section" style={{ backgroundImage: `url(${hero3})` }} >
       <div className="container">
         <div className="row align-items-center justify-content-center text-center">
           <div className="col-md-12 col-lg-7">
             <h1 data-aos="fade-up" data-aos-delay="">Welcome to UnEarth</h1>  
             <p className="mb-5" data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, cumque vitae animi.</p>
             <p data-aos="fade-up" data-aos-delay="200"><a href="#" className="btn btn-outline-white border-w-2 btn-md">Get in touch</a></p>
           </div>
         </div>
       </div>

     </div>

     <div className="site-section-cover overlay img-bg-section" style={{ backgroundImage: `url(${hero2})` }}  >
       <div className="container">
         <div className="row align-items-center justify-content-center text-center">
           <div className="col-md-12 col-lg-8">
             <h1 data-aos="fade-up" data-aos-delay="">New Generation of Mining</h1>      
             <p className="mb-5" data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est odit dolorum voluptates!</p>
             <p data-aos="fade-up" data-aos-delay="200"><a href="#" className="btn btn-outline-white border-w-2 btn-md">Get in touch</a></p>
           </div>
         </div>
       </div>

     </div>
     

   </div>
   
   <div className="site-section">
     <div className="block__73694 mb-2" id="services-section">
       <div className="container">
         
         
        

         <div className="row d-flex no-gutters align-items-stretch">

           <div className="col-12 col-lg-6 block__73422" style={{ backgroundImage: `url(${img_2})` }}  data-aos="fade-right" data-aos-delay="">
           </div>

           

           <div className="col-lg-5 ml-auto p-lg-5 mt-4 mt-lg-0" data-aos="fade-left" data-aos-delay="">
             <h2 className="mb-3 text-black">Land &amp; Property</h2>
             <Trans>
                To get started, edit <code>src/App.js</code> and save to reload.
              </Trans>
              <Trans i18nKey="welcome">trans</Trans>
              <Trans>
                {index + 1} <a>xxx</a>
              </Trans>
              <Trans i18nKey="a">trans</Trans>
           
             {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus id dignissimos nemo minus perspiciatis ullam itaque voluptas iure vero, nesciunt unde odit aspernatur distinctio, maiores facere officiis. Cum, esse, iusto?</p>

             <p>Minus perspiciatis ullam itaque voluptas iure vero, nesciunt unde odit aspernatur distinctio, maiores facere officiis. Cum, esse, iusto?</p>

             <ul className="ul-check primary list-unstyled mt-5">
               <li>Lorem ipsum dolor.</li>
               <li>Quod, amet. Provident.</li>
               <li>Quo, adipisci, quis.</li>
               <li>Cumque perspiciatis, blanditiis?</li>
             </ul> */}

             
           </div>

         </div>
       </div>      
     </div>


     <div className="block__73694">
       <div className="container">
         <div className="row d-flex no-gutters align-items-stretch">

           <div className="col-12 col-lg-6 block__73422 order-lg-2" style={{ backgroundImage: `url(${img_1})` }}  data-aos="fade-left" data-aos-delay="">
           </div>

           

           <div className="col-lg-5 mr-auto p-lg-5 mt-4 mt-lg-0 order-lg-1" data-aos="fade-right" data-aos-delay="">
             <h2 className="mb-3 text-black">Surface Mining</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus id dignissimos nemo minus perspiciatis ullam itaque voluptas iure vero, nesciunt unde odit aspernatur distinctio, maiores facere officiis. Cum, esse, iusto?</p>

             <p>Minus perspiciatis ullam itaque voluptas iure vero, nesciunt unde odit aspernatur distinctio, maiores facere officiis. Cum, esse, iusto?</p>

             <ul className="ul-check primary list-unstyled mt-5">
               <li>Lorem ipsum dolor.</li>
               <li>Quod, amet. Provident.</li>
               <li>Quo, adipisci, quis.</li>
               <li>Cumque perspiciatis, blanditiis?</li>
             </ul>

           </div>

         </div>
       </div>      
     </div>
   </div>

   <div className="site-section bg-light">
     <div className="container">
       <div className="row">
         <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="">
           <div className="block__35630">
             <div className="icon mb-3">
               <span className="flaticon-mining"></span>
             </div>
             <h3 className="mb-3">Surface Mining</h3>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.
           </div>
         </div>
         <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
           <div className="block__35630">
             <div className="icon mb-3">
               <span className="flaticon-gold-ingots"></span>
             </div>
             <h3 className="mb-3">Gold Nuggets</h3>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.
           </div>
         </div>
         <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
           <div className="block__35630">
             <div className="icon mb-3">
               <span className="flaticon-wagon"></span>
             </div>
             <h3 className="mb-3">Soil Carrier</h3>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.
           </div>
         </div>

         <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="">
           <div className="block__35630">
             <div className="icon mb-3">
               <span className="flaticon-refinery"></span>
             </div>
             <h3 className="mb-3">Gold Refinery</h3>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.
           </div>
         </div>
         <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
           <div className="block__35630">
             <div className="icon mb-3">
               <span className="flaticon-blacksmith"></span>
             </div>
             <h3 className="mb-3">Anvil Blacksmith</h3>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.
           </div>
         </div>
         <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
           <div className="block__35630">
             <div className="icon mb-3">
               <span className="flaticon-crucible"></span>
             </div>
             <h3 className="mb-3">Gold Melt Crucible</h3>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.
           </div>
         </div>
       </div>
     </div>
   </div>


   <div className="site-section bg-dark" id="about-section">
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
   </div>

   <div className="site-section" id="team-section">
     <div className="container">
       <div className="row mb-5 justify-content-center">
         <div className="col-md-7 text-center">
           <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
             <h2>Our Team</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere at delectus laudantium, deserunt, atque eveniet. Voluptatem, fuga quos rerum inventore.</p>
           </div>
         </div>
       </div>
       <div className="row">
         <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
           <div className="block-team-member-1 text-center rounded">
             <figure>
               <img src="./images/person_1.jpg" alt="Image" className="img-fluid rounded-circle"/>
             </figure>
             <h3 className="font-size-20 text-black">Jean Smith</h3>
             <span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Mining Expert</span>
             <div className="block-social-1">
               <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-facebook"></span></a>
               <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-twitter"></span></a>
               <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-instagram"></span></a>
             </div>
           </div>
         </div>

         <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
           <div className="block-team-member-1 text-center rounded">
             <figure>
               <img src="./images/person_2.jpg" alt="Image" className="img-fluid rounded-circle"/>
             </figure>
             <h3 className="font-size-20 text-black">Bob Carry</h3>
             <span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Project Manager</span>
             <div className="block-social-1">
               <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-facebook"></span></a>
               <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-twitter"></span></a>
               <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-instagram"></span></a>
             </div>
           </div>
         </div>

         <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
           <div className="block-team-member-1 text-center rounded">
             <figure>
               <img src="./images/person_1.jpg" alt="Image" className="img-fluid rounded-circle"/>
             </figure>
             <h3 className="font-size-20 text-black">Ricky Fisher</h3>
             <span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Engineer</span>
             <div className="block-social-1">
               <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-facebook"></span></a>
               <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-twitter"></span></a>
               <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-instagram"></span></a>
             </div>
           </div>
         </div>

         <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
           <div className="block-team-member-1 text-center rounded">
             <figure>
               <img src="./images/person_2.jpg" alt="Image" className="img-fluid rounded-circle"/>
             </figure>
             <h3 className="font-size-20 text-black">Jean Smith</h3>
             <span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Mining Expert</span>
             <div className="block-social-1">
               <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-facebook"></span></a>
               <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-twitter"></span></a>
               <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-instagram"></span></a>
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
               <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-facebook"></span></a>
               <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-twitter"></span></a>
               <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-instagram"></span></a>
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
               <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-facebook"></span></a>
               <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-twitter"></span></a>
               <a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span className="icon-instagram"></span></a>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>


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

   
   <div className="site-section" id="press-section">
     <div className="container">
       <div className="row">
         <div className="col-lg-4 mb-5 mb-lg-0">
           <div className="block-heading-1" data-aos="fade-right" data-aos-delay="">
             <h2>Press</h2>
           </div>
         </div>
         <div className="col-lg-6">
           <ul className="list-unstyled">
             <li className="mb-5" data-aos="fade-right" data-aos-delay="">
               <span className="d-block text-muted mb-3">Apr 19, 2019</span>
               <h2 className="h4"><a href="press-single.html" className="text-black">How To Find Gold In Mining</a></h2>
               
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis, perferendis molestias commodi adipisci.</p>
             </li>
             <li className="mb-5" data-aos="fade-right" data-aos-delay="100">
               <span className="d-block text-muted mb-3">Apr 19, 2019</span>
               <h2 className="h4"><a href="press-single.html" className="text-black">How To Find Gold In Mining</a></h2>
               
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis, perferendis molestias commodi adipisci.</p>
             </li>
             <li className="mb-5" data-aos="fade-right" data-aos-delay="200">
               <span className="d-block text-muted mb-3">Apr 19, 2019</span>
               <h2 className="h4"><a href="press-single.html" className="text-black">How To Find Gold In Mining</a></h2>
               
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis, perferendis molestias commodi adipisci.</p>
             </li>
           </ul>
         </div>
       </div>
     </div>
   </div>

   <div className="site-section bg-light block-13" id="testimonials-section" data-aos="fade">
     <div className="container">
       
       <div className="text-center mb-5">
         <div className="block-heading-1">
           <h2>Testimonial</h2>
         </div>
       </div>

       <div className="owl-carousel nonloop-block-13">
         <div>
           <div className="block-testimony-1 text-center">
             
             <blockquote className="mb-4">
               <p>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, fugit excepturi sapiente voluptatum nulla odio quaerat quibusdam tempore similique doloremque veritatis et cupiditate, maiores cumque repudiandae explicabo tempora deserunt consequuntur?&rdquo;</p>
             </blockquote>

             <figure>
               <img src="./images/person_4.jpg" alt="Image" className="img-fluid rounded-circle mx-auto"/>
             </figure>
             <h3 className="font-size-20 text-black">Ricky Fisher</h3>
           </div>
         </div>

         <div>
           <div className="block-testimony-1 text-center">

             <figure>
               <img src="./images/person_2.jpg" alt="Image" className="img-fluid rounded-circle mx-auto"/>
             </figure>
             <h3 className="font-size-20 mb-4 text-black">Ken Davis</h3>

             <blockquote className="mb-4">
               <p>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, fugit excepturi sapiente voluptatum nulla odio quaerat quibusdam tempore similique doloremque veritatis et cupiditate, maiores cumque repudiandae explicabo tempora deserunt consequuntur?&rdquo;</p>
             </blockquote>

             
           </div>
         </div>

         <div>
           <div className="block-testimony-1 text-center">
             

             <blockquote className="mb-4">
               <p>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, fugit excepturi sapiente voluptatum nulla odio quaerat quibusdam tempore similique doloremque veritatis et cupiditate, maiores cumque repudiandae explicabo tempora deserunt consequuntur?&rdquo;</p>
             </blockquote>

             <figure>
               <img src="./images/person_1.jpg" alt="Image" className="img-fluid rounded-circle mx-auto"/>
             </figure>
             <h3 className="font-size-20 text-black">Mellisa Griffin</h3>

             
           </div>
         </div>

         <div>
           <div className="block-testimony-1 text-center">

             <figure>
               <img src="./images/person_3.jpg" alt="Image" className="img-fluid rounded-circle mx-auto"/>
             </figure>
             <h3 className="font-size-20 mb-4 text-black">Robert Steward</h3>

             <blockquote className="mb-4">
               <p>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, fugit excepturi sapiente voluptatum nulla odio quaerat quibusdam tempore similique doloremque veritatis et cupiditate, maiores cumque repudiandae explicabo tempora deserunt consequuntur?&rdquo;</p>
             </blockquote>

             
           </div>
         </div>


       </div>

     </div>
   </div>

   <div className="site-section" id="blog-section">
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
   </div>


   <div className="site-section bg-light" id="contact-section">
     <div className="container">
       <div className="row">
         <div className="col-12 text-center mb-5" data-aos="fade-up" data-aos-delay="">
           <div className="block-heading-1">
             <span>Get In Touch</span>
             <h2>Contact Us</h2>
           </div>
         </div>
       </div>
       <div className="row">
         <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="100">
           <form action="#" method="post">
             <div className="form-group row">
               <div className="col-md-6 mb-4 mb-lg-0">
                 <input type="text" className="form-control" placeholder="First name"/>
               </div>
               <div className="col-md-6">
                 <input type="text" className="form-control" placeholder="First name"/>
               </div>
             </div>

             <div className="form-group row">
               <div className="col-md-12">
                 <input type="text" className="form-control" placeholder="Email address"/>
               </div>
             </div>

             <div className="form-group row">
               <div className="col-md-12">
                 <textarea name="" id="" className="form-control" placeholder="Write your message." cols="30" rows="10"></textarea>
               </div>
             </div>
             <div className="form-group row">
               <div className="col-md-6 ml-auto">
                 <input type="submit" className="btn btn-block btn-primary text-white py-3 px-5" value="Send Message"/>
               </div>
             </div>
           </form>
         </div>
         <div className="col-lg-4 ml-auto" data-aos="fade-up" data-aos-delay="200">
           <h2 className="text-black">Need to know more on details. Get In Touch</h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, distinctio! Harum quibusdam nisi, illum nulla aspernatur aut quidem aperiam, quae non tempora recusandae voluptatibus fugit impedit.</p>
           <p><a href="#" className="btn btn-primary text-white">Get Started</a></p>
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
               <h2 className="footer-heading mb-4">About Us</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
             </div>
             <div className="col-md-4 ml-auto">
               <h2 className="footer-heading mb-4">Features</h2>
               <ul className="list-unstyled">
                 <li><a href="#">About Us</a></li>
                 <li><a href="#">Press Releases</a></li>
                 <li><a href="#">Testimonials</a></li>
                 <li><a href="#">Terms of Service</a></li>
                 <li><a href="#">Privacy</a></li>
                 <li><a href="#">Contact Us</a></li>
               </ul>
             </div>
             
           </div>
         </div>
         <div className="col-md-4 ml-auto">

           <div className="mb-5">
             <h2 className="footer-heading mb-4">Subscribe to Newsletter</h2>
             {/* <form action="#" method="post" className="footer-suscribe-form">
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
         
           </small></p>
           </div>
         </div>
         
       </div>
     </div>
     </div>
   </footer>

 </div>
 </div>



    </>
  );
}

export default App;
