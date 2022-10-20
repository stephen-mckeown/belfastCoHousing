// import React from 'react';
// import '../css/style.css'

// const Nav = () => {
//     return (
//         <header id="header" className="wpo-site-header">
//         <nav className="navigation navbar navbar-expand-lg navbar-light">
//           <div className="container-fluid">
//             <div className="row align-items-center">
//               <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
//                 <div className="mobail-menu">
//                   <button type="button" className="navbar-toggler open-btn">
//                     <span className="sr-only">Toggle navigation</span>
//                     <span className="icon-bar first-angle" />
//                     <span className="icon-bar middle-angle" />
//                     <span className="icon-bar last-angle" />
//                   </button>
//                 </div>
//               </div>
//               <div className="col-lg-6 col-md-1 col-1">
//                 <div
//                   id="navbar"
//                   className="collapse navbar-collapse navigation-holder"
//                 >
//                   <button className="menu-close">
//                     <i className="ti-close" />
//                   </button>
//                   <ul className="nav navbar-nav mb-2 mb-lg-0">
//                     <li className="menu-item-has-children">
//                       <a className="active" href="#">
//                         Home
//                       </a>
//                       <ul className="sub-menu">
//                         <li>
//                           <a className="active" href="index.html">
//                             Home Charity
//                           </a>
//                         </li>
//                         <li>
//                           <a href="index-2.html">Home Education</a>
//                         </li>
//                         <li>
//                           <a href="index-3.html">Home Wildlife</a>
//                         </li>
//                         <li>
//                           <a href="index-4.html">Home Ocean Polution</a>
//                         </li>
//                         <li>
//                           <a href="index-5.html">Home World Pandemic</a>
//                         </li>
//                         <li>
//                           <a href="index-6.html">Home Nature</a>
//                         </li>
//                         <li>
//                           <a href="index-7.html">Home Nature S2</a>
//                         </li>
//                       </ul>
//                     </li>
//                     <li className="menu-item-has-children">
//                       <a href="#">Causes</a>
//                       <ul className="sub-menu">
//                         <li>
//                           <a href="cause.html">Causes</a>
//                         </li>
//                         <li>
//                           <a href="cause-single.html">Causes Single</a>
//                         </li>
//                       </ul>
//                     </li>
//                     <li className="menu-item-has-children">
//                       <a href="#">Events</a>
//                       <ul className="sub-menu">
//                         <li>
//                           <a href="event.html">Events</a>
//                         </li>
//                         <li>
//                           <a href="event-s2.html">Events S2</a>
//                         </li>
//                         <li>
//                           <a href="event-single.html">Events Single</a>
//                         </li>
//                       </ul>
//                     </li>
//                     <li className="menu-item-has-children">
//                       <a href="#">Pages</a>
//                       <ul className="sub-menu">
//                         <li>
//                           <a href="about.html">About</a>
//                         </li>
//                         <li>
//                           <a href="service.html">Service</a>
//                         </li>
//                         <li>
//                           <a href="service-single.html">Service Single</a>
//                         </li>
//                         <li>
//                           <a href="project.html">Project</a>
//                         </li>
//                         <li>
//                           <a href="project-single.html">Project Single</a>
//                         </li>
//                         <li>
//                           <a href="donate.html">Donate</a>
//                         </li>
//                         <li>
//                           <a href="team-single.html">Volunteer</a>
//                         </li>
//                         <li>
//                           <a href="testimonial.html">Testimonial</a>
//                         </li>
//                         <li>
//                           <a href="404.html">Error 404</a>
//                         </li>
//                         <li>
//                           <a href="login.html">Login</a>
//                         </li>
//                         <li>
//                           <a href="register.html">Sign Up</a>
//                         </li>
//                       </ul>
//                     </li>
//                     <li className="menu-item-has-children">
//                       <a href="blog.html">Blog</a>
//                       <ul className="sub-menu">
//                         <li>
//                           <a href="blog.html">Blog right sidebar</a>
//                         </li>
//                         <li>
//                           <a href="blog-left-sidebar.html">Blog left sidebar</a>
//                         </li>
//                         <li>
//                           <a href="blog-fullwidth.html">Blog fullwidth</a>
//                         </li>
//                         <li className="menu-item-has-children">
//                           <a href="#">Blog details</a>
//                           <ul className="sub-menu">
//                             <li>
//                               <a href="blog-single.html">
//                                 Blog details right sidebar
//                               </a>
//                             </li>
//                             <li>
//                               <a href="blog-single-left-sidebar.html">
//                                 Blog details left sidebar
//                               </a>
//                             </li>
//                             <li>
//                               <a href="blog-single-fullwidth.html">
//                                 Blog details fullwidth
//                               </a>
//                             </li>
//                           </ul>
//                         </li>
//                       </ul>
//                     </li>
//                     <li>
//                       <a href="contact.html">Contact</a>
//                     </li>
//                   </ul>
//                 </div>
//                 {/* end of nav-collapse */}
//               </div>
//               <div className="col-lg-3 col-md-2 col-2">
//                 {/* <div className="header-right">
//                   <div className="close-form">
//                     <a className="theme-btn" href="donate.html">
//                       Donate Now
//                     </a>
//                   </div>
//                   <div className="header-search-form-wrapper">
//                     <div className="cart-search-contact">
//                       <button className="search-toggle-btn">
//                         <i className="fi flaticon-search" />
//                       </button>
//                       <div className="header-search-form">
//                         <form>
//                           <div>
//                             <input
//                               type="text"
//                               className="form-control"
//                               placeholder="Search here..."
//                             />
//                             <button type="submit">
//                               <i className="fi flaticon-search" />
//                             </button>
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//           {/* end of container */}
//         </nav>
//       </header>

//       );
//       }

// export default Nav

