import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './DashboardSidebar.css'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../../firebase/firebase';
import userEvent from '@testing-library/user-event';
import logo from '../../images/favicons/icare.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import avater from '../../images/avatar-2.png'


const DashboardSidebar = ({ children }) => {

    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };
    return (
        <div className='sidebar__my'>
            {/*wrapper*/}
            <div className="wrapper">
                {/*sidebar wrapper */}
                <div className="sidebar-wrapper" data-simplebar="true">
                    <div className="sidebar-header">
                        <div>
                            <img src={logo} className="logo-icon w-100" alt="logo icon" />
                        </div>
                        <div>

                        </div>

                        <div className="toggle-icon ms-auto"><i className="bx bx-first-page" />
                        </div>

                    </div>


                    <ul className="metismenu" id="menu">

                        <li className="menu-label">Main</li>

                        <li>








                            <button class="menu-title btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
                                <i className="bx bx-atom" />Homepage


                            </button>

                            <ul class="collapse" id="collapseExample4">
                                <div class="card card-body">
                                    <li> <Link to="/dashboard/add-banner"><i className="bx bx-right-arrow-alt" />Add Banner</Link>
                                    </li>
                                    <li> <Link to="/dashboard/add-feature"><i className="bx bx-right-arrow-alt" />Add Top Feature</Link>
                                    </li>
                                    <li> <Link to="/dashboard/add-testimonial"><i className="bx bx-right-arrow-alt" />Add Testimonial</Link>
                                    </li>
                                    <li> <Link to="/dashboard/add-certificate"><i className="bx bx-right-arrow-alt" />Add Certificate</Link>
                                    </li>


                                    <li> <Link to="/dashboard/add-about"><i className="bx bx-right-arrow-alt" />Add About</Link>
                                    </li>
                                    <li> <Link to="/dashboard/add-overview"><i className="bx bx-right-arrow-alt" />Add Overview</Link>
                                    </li>
                                    <li> <Link to="/dashboard/add-chooseus "><i className="bx bx-right-arrow-alt" />Add Why choose Us</Link>
                                    </li>
                                    <li> <Link to="/dashboard/add-collage"><i className="bx bx-right-arrow-alt" />Add Collage</Link>
                                    </li>
                                    <li> <Link to="/dashboard/add-course"><i className="bx bx-right-arrow-alt" />Add Courses</Link>
                                    </li>
                                </div>
                            </ul>

                        </li>
                        <li>

                            <button class="menu-title btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                                <i className="bx bx-atom" />About Icare


                            </button>

                            <ul class="collapse" id="collapseExample3">
                                <div class="card card-body">
                                    <li> <Link to="/dashboard/add-vision-mision"><i className="bx bx-right-arrow-alt" />Add Mission & Vision</Link>
                                    </li>
                                    <li> <Link to="/dashboard/add-team"><i className="bx bx-right-arrow-alt" />Add Team</Link>
                                    </li>
                                </div>
                            </ul>

                        </li>

                        <li>

                            <button class="menu-title btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample9" aria-expanded="false" aria-controls="collapseExample9">
                                <i className="bx bx-atom" />Collage Detail


                            </button>

                            <ul class="collapse" id="collapseExample9">
                                <div class="card card-body">
                                    <li> <Link to="/dashboard/collage-detail-about"><i className="bx bx-right-arrow-alt" />Collage Detail About</Link>
                                    </li>
                                    <li> <Link to="/dashboard/read-more"><i className="bx bx-right-arrow-alt" />Collage contact </Link>
                                    </li>
                                    <li> <Link to="/dashboard/add-collage-course"><i className="bx bx-right-arrow-alt" />Collage Course Add </Link>
                                    </li>
                                </div>
                            </ul>

                        </li>



                        <li>



                            <button class="menu-title btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                <i className="bx bx-atom" />Academics


                            </button>

                            <ul class="collapse" id="collapseExample2">
                                <div class="card card-body">
                                    <li> <Link to="/dashboard/add-pg-programes"><i className="bx bx-right-arrow-alt" />Add  PG Program</Link>
                                    </li>
                                    <li> <Link to="/dashboard/add-financial-programes"><i className="bx bx-right-arrow-alt" />Add  Financial Section</Link>
                                    </li>
                                    <li> <Link to="/dashboard/add-ug-programes"><i className="bx bx-right-arrow-alt" />Add  UG Section</Link>
                                    </li>
                                </div>
                            </ul>


                        </li>





                        <li>



                            <button class="menu-title btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                                <i className="bx bx-atom" />Admission


                            </button>

                            <ul class="collapse" id="collapseExample1">
                                <div class="card card-body">
                                    <li>
                                        <Link to="/dashboard/add-vision-page"><i className="bx bx-right-arrow-alt" />Add  Vision About Section</Link>
                                    </li>
                                </div>
                            </ul>
                        </li>

                        <li>
                            <Link class="menu-title btn " type="button" to='/dashboard/contact-form'>
                                <i className="bx bx-atom" />Contact Form


                            </Link>
                        </li>
                        <li>
                            <Link class="menu-title btn " type="button" to='/dashboard/news-letter'>
                                <i className="bx bx-atom" />News Letter


                            </Link>

                            <Link class="menu-title btn " type="button" to='/dashboard/add-inner-banner'>
                                <i className="bx bx-atom" />Add inner Banner


                            </Link>
                            <Link class="menu-title btn " type="button" to='/dashboard/donate'>
                                <i className="bx bx-atom" />Donate


                            </Link>
                            <Link class="menu-title btn " type="button" to='/dashboard/resume'>
                                <i className="bx bx-atom" />Resume


                            </Link>

                            <Link class="menu-title btn " type="button" to='/dashboard/tender'>
                                <i className="bx bx-atom" />Add Tenders


                            </Link>

                            <Link class="menu-title btn " type="button" to='/dashboard/toolRoom'>
                                <i className="bx bx-atom" />Add Tool Room Section


                            </Link>
                            <Link class="menu-title btn " type="button" to='/dashboard/details-course'>
                                <i className="bx bx-atom" />Add Course Detail


                            </Link>



                        </li>


                    </ul>
                    {/*navigation*/}




                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header">
                            <div className="sidebar-header">
                                <div>
                                    <img src={logo} className="logo-icon w-100" alt="logo icon" />
                                </div>
                                <div>

                                </div>
                                <a class="" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                    <div className="toggle-icon ms-auto"><i className="bx bx-first-page" />
                                    </div>
                                </a>
                            </div>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul className="metismenu" id="menu">

                                <li className="menu-label">Main</li>

                                <li>








                                    <button class="menu-title btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
                                        <i className="bx bx-atom" />Homepage


                                    </button>

                                    <ul class="collapse" id="collapseExample4">
                                        <div class="card card-body">
                                            <li> <Link to="/dashboard/add-banner"><i className="bx bx-right-arrow-alt" />Add Banner</Link>
                                            </li>
                                            <li> <Link to="/dashboard/add-feature"><i className="bx bx-right-arrow-alt" />Add Top Feature</Link>
                                            </li>
                                            <li> <Link to="/dashboard/add-testimonial"><i className="bx bx-right-arrow-alt" />Add Testimonial</Link>
                                            </li>
                                            <li> <Link to="/dashboard/add-certificate"><i className="bx bx-right-arrow-alt" />Add Certificate</Link>
                                            </li>


                                            <li> <Link to="/dashboard/add-about"><i className="bx bx-right-arrow-alt" />Add About</Link>
                                            </li>
                                            <li> <Link to="/dashboard/add-overview"><i className="bx bx-right-arrow-alt" />Add Overview</Link>
                                            </li>
                                            <li> <Link to="/dashboard/add-chooseus "><i className="bx bx-right-arrow-alt" />Add Why choose Us</Link>
                                            </li>
                                            <li> <Link to="/dashboard/add-collage"><i className="bx bx-right-arrow-alt" />Add Collage</Link>
                                            </li>
                                            <li> <Link to="/dashboard/add-course"><i className="bx bx-right-arrow-alt" />Add Courses</Link>
                                            </li>
                                        </div>
                                    </ul>

                                </li>
                                <li>






                                    <button class="menu-title btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                                        <i className="bx bx-atom" />About Icare


                                    </button>

                                    <ul class="collapse" id="collapseExample3">
                                        <div class="card card-body">
                                            <li> <Link to="/dashboard/add-vision-mision"><i className="bx bx-right-arrow-alt" />Add Mission & Vision</Link>
                                            </li>
                                            <li> <Link to="/dashboard/add-team"><i className="bx bx-right-arrow-alt" />Add Team</Link>
                                            </li>
                                        </div>
                                    </ul>




                                </li>


                                <li>



                                    <button class="menu-title btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                        <i className="bx bx-atom" />Academics


                                    </button>

                                    <ul class="collapse" id="collapseExample2">
                                        <div class="card card-body">
                                            <li> <Link to="/dashboard/add-pg-programes"><i className="bx bx-right-arrow-alt" />Add  PG Program</Link>
                                            </li>
                                            <li> <Link to="/dashboard/add-financial-programes"><i className="bx bx-right-arrow-alt" />Add  Financial Section</Link>
                                            </li>
                                            <li> <Link to="/dashboard/add-ug-programes"><i className="bx bx-right-arrow-alt" />Add  UG Section</Link>
                                            </li>
                                        </div>
                                    </ul>


                                </li>





                                <li>



                                    <button class="menu-title btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                                        <i className="bx bx-atom" />Admission


                                    </button>

                                    <ul class="collapse" id="collapseExample1">
                                        <div class="card card-body">
                                            <li>
                                                <Link to="/dashboard/add-vision-page"><i className="bx bx-right-arrow-alt" />Add  Vision About Section</Link>
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                                <Link class="menu-title btn " type="button" to='/dashboard/contact-form'>
                                    <i className="bx bx-atom" />Contact Form


                                </Link>
                                <Link class="menu-title btn " type="button" to='/dashboard/news-letter'>
                                    <i className="bx bx-atom" />News Letter


                                </Link>
                                <Link class="menu-title btn " type="button" to='/dashboard/add-inner-banner'>
                                    <i className="bx bx-atom" />Add inner Banner


                                </Link>
                                <Link class="menu-title btn " type="button" to='/dashboard/donate'>
                                    <i className="bx bx-atom" />Donate


                                </Link>
                                <Link class="menu-title btn " type="button" to='/dashboard/resume'>
                                    <i className="bx bx-atom" />Resume


                                </Link>
                                <Link class="menu-title btn " type="button" to='/dashboard/tender'>
                                    <i className="bx bx-atom" />Add Tenders


                                </Link>

                                <Link class="menu-title btn " type="button" to='/dashboard/toolRoom'>
                                    <i className="bx bx-atom" />Add Tool Room Section


                                </Link>

                                <Link class="menu-title btn " type="button" to='/dashboard/details-course'>
                                    <i className="bx bx-atom" />Add Course Detail


                                </Link>
                            </ul>
                        </div>
                    </div>





                    {/*end navigation*/}
                </div>
                {/*end sidebar wrapper */}
                {/*start header */}
                <header>
                    <div className="topbar d-flex align-items-center bg-dark shadow-none border-light-2 border-bottom">
                        <nav className="navbar navbar-expand">


                            <a class="" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                <div className="mobile-toggle-menu text-white me-3"><i className="bx bx-menu" />
                                </div>

                            </a>

                            {/* <div className="top-menu-left d-none d-lg-block">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="app-emailbox.html"><i className="bx bx-envelope" /></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="app-chat-box.html"><i className="bx bx-message" /></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="app-fullcalender.html"><i className="bx bx-calendar" /></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="app-to-do.html"><i className="bx bx-check-square" /></a>
                                    </li>
                                </ul>
                            </div> */}
                            <div className="search-bar flex-grow-1">
                                <div className="position-relative search-bar-box">
                                    {/* <form>
                                        <input type="text" className="form-control search-control" autofocus placeholder="Type to search..." /> <span className="position-absolute top-50 search-show translate-middle-y"><i className="bx bx-search" /></span>
                                        <span className="position-absolute top-50 search-close translate-middle-y"><i className="bx bx-x" /></span>
                                    </form> */}
                                </div>
                            </div>
                            <div className="top-menu ms-auto">
                                <ul className="navbar-nav align-items-center">
                                    <li className="nav-item mobile-search-icon">
                                        {/* <a className="nav-link text-white" href="javascript:;">	<i className="bx bx-search" />
                                        </a> */}
                                    </li>
                                    <li className="nav-item dropdown dropdown-large">
                                        {/* <a className="nav-link dropdown-toggle dropdown-toggle-nocaret text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">	<i className="bx bx-category" />
                                        </a> */}
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <div className="row row-cols-3 g-3 p-3">
                                                <div className="col text-center">
                                                    <div className="app-box mx-auto bg-gradient-cosmic text-white"><i className="bx bx-group" />
                                                    </div>
                                                    <div className="app-title">Teams</div>
                                                </div>
                                                <div className="col text-center">
                                                    <div className="app-box mx-auto bg-gradient-burning text-white"><i className="bx bx-atom" />
                                                    </div>
                                                    <div className="app-title">Projects</div>
                                                </div>
                                                <div className="col text-center">
                                                    <div className="app-box mx-auto bg-gradient-lush text-white"><i className="bx bx-shield" />
                                                    </div>
                                                    <div className="app-title">Tasks</div>
                                                </div>
                                                <div className="col text-center">
                                                    <div className="app-box mx-auto bg-gradient-kyoto text-dark"><i className="bx bx-notification" />
                                                    </div>
                                                    <div className="app-title">Feeds</div>
                                                </div>
                                                <div className="col text-center">
                                                    <div className="app-box mx-auto bg-gradient-blues text-dark"><i className="bx bx-file" />
                                                    </div>
                                                    <div className="app-title">Files</div>
                                                </div>
                                                <div className="col text-center">
                                                    <div className="app-box mx-auto bg-gradient-moonlit text-white"><i className="bx bx-filter-alt" />
                                                    </div>
                                                    <div className="app-title">Alerts</div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown dropdown-large">
                                        {/* <a className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <span className="alert-count">7</span>
                                            <i className="bx bx-bell" />
                                        </a> */}
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a href="javascript:;">
                                                <div className="msg-header">
                                                    <p className="msg-header-title">Notifications</p>
                                                    <p className="msg-header-clear ms-auto">Marks all as read</p>
                                                </div>
                                            </a>
                                            <div className="header-notifications-list">
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="notify bg-light-primary text-primary"><i className="bx bx-group" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">New Customers<span className="msg-time float-end">14 Sec
                                                                ago</span></h6>
                                                            <p className="msg-info">5 new user registered</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="notify bg-light-danger text-danger"><i className="bx bx-cart-alt" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">New Orders <span className="msg-time float-end">2 min
                                                                ago</span></h6>
                                                            <p className="msg-info">You have recived new orders</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="notify bg-light-success text-success"><i className="bx bx-file" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">24 PDF File<span className="msg-time float-end">19 min
                                                                ago</span></h6>
                                                            <p className="msg-info">The pdf files generated</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="notify bg-light-warning text-warning"><i className="bx bx-send" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">Time Response <span className="msg-time float-end">28 min
                                                                ago</span></h6>
                                                            <p className="msg-info">5.1 min avarage time response</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="notify bg-light-info text-info"><i className="bx bx-home-circle" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">New Product Approved <span className="msg-time float-end">2 hrs ago</span></h6>
                                                            <p className="msg-info">Your new product has approved</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="notify bg-light-danger text-danger"><i className="bx bx-message-detail" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">New Comments <span className="msg-time float-end">4 hrs
                                                                ago</span></h6>
                                                            <p className="msg-info">New customer comments recived</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="notify bg-light-success text-success"><i className="bx bx-check-square" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">Your item is shipped <span className="msg-time float-end">5 hrs
                                                                ago</span></h6>
                                                            <p className="msg-info">Successfully shipped your item</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="notify bg-light-primary text-primary"><i className="bx bx-user-pin" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">New 24 authors<span className="msg-time float-end">1 day
                                                                ago</span></h6>
                                                            <p className="msg-info">24 new authors joined last week</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="notify bg-light-warning text-warning"><i className="bx bx-door-open" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">Defense Alerts <span className="msg-time float-end">2 weeks
                                                                ago</span></h6>
                                                            <p className="msg-info">45% less alerts last 4 weeks</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <a href="javascript:;">
                                                <div className="text-center msg-footer">View All Notifications</div>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown dropdown-large">
                                        {/* <a className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <span className="alert-count">8</span>
                                            <i className="bx bx-comment" />
                                        </a> */}
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a href="javascript:;">
                                                <div className="msg-header">
                                                    <p className="msg-header-title">Messages</p>
                                                    <p className="msg-header-clear ms-auto">Marks all as read</p>
                                                </div>
                                            </a>
                                            <div className="header-message-list">
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img src="assets/images/avatars/avatar-1.png" className="msg-avatar" alt="user avatar" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">Daisy Anderson <span className="msg-time float-end">5 sec
                                                                ago</span></h6>
                                                            <p className="msg-info">The standard chunk of lorem</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img src="assets/images/avatars/avatar-2.png" className="msg-avatar" alt="user avatar" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">Althea Cabardo <span className="msg-time float-end">14
                                                                sec ago</span></h6>
                                                            <p className="msg-info">Many desktop publishing packages</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img src="assets/images/avatars/avatar-3.png" className="msg-avatar" alt="user avatar" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">Oscar Garner <span className="msg-time float-end">8 min
                                                                ago</span></h6>
                                                            <p className="msg-info">Various versions have evolved over</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img src="assets/images/avatars/avatar-4.png" className="msg-avatar" alt="user avatar" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">Katherine Pechon <span className="msg-time float-end">15
                                                                min ago</span></h6>
                                                            <p className="msg-info">Making this the first true generator</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img src="assets/images/avatars/avatar-5.png" className="msg-avatar" alt="user avatar" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">Amelia Doe <span className="msg-time float-end">22 min
                                                                ago</span></h6>
                                                            <p className="msg-info">Duis aute irure dolor in reprehenderit</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img src="assets/images/avatars/avatar-6.png" className="msg-avatar" alt="user avatar" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">Cristina Jhons <span className="msg-time float-end">2 hrs
                                                                ago</span></h6>
                                                            <p className="msg-info">The passage is attributed to an unknown</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img src="assets/images/avatars/avatar-7.png" className="msg-avatar" alt="user avatar" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">James Caviness <span className="msg-time float-end">4 hrs
                                                                ago</span></h6>
                                                            <p className="msg-info">The point of using Lorem</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img src="assets/images/avatars/avatar-8.png" className="msg-avatar" alt="user avatar" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">Peter Costanzo <span className="msg-time float-end">6 hrs
                                                                ago</span></h6>
                                                            <p className="msg-info">It was popularised in the 1960s</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img src="assets/images/avatars/avatar-9.png" className="msg-avatar" alt="user avatar" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">David Buckley <span className="msg-time float-end">2 hrs
                                                                ago</span></h6>
                                                            <p className="msg-info">Various versions have evolved over</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img src="assets/images/avatars/avatar-10.png" className="msg-avatar" alt="user avatar" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">Thomas Wheeler <span className="msg-time float-end">2 days
                                                                ago</span></h6>
                                                            <p className="msg-info">If you are going to use a passage</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img src="assets/images/avatars/avatar-11.png" className="msg-avatar" alt="user avatar" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">Johnny Seitz <span className="msg-time float-end">5 days
                                                                ago</span></h6>
                                                            <p className="msg-info">All the Lorem Ipsum generators</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <a href="javascript:;">
                                                <div className="text-center msg-footer">View All Messages</div>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="user-box dropdown border-light-2">
                                <a className="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={avater} className="user-img" alt="user avatar" />
                                    <div className="user-info ps-3">
                                        <p className="user-name mb-0 text-white">Admin</p>
                                        <p className="designattion mb-0">{user.email}</p>
                                    </div>
                                </a>


                                <ul className="dropdown-menu dropdown-menu-end">
                                    {/* <li><a className="dropdown-item" href="javascript:;"><i className="bx bx-user" /><span>Profile</span></a>
                                    </li> */}
                                    {/* <li><a className="dropdown-item" href="javascript:;"><i className="bx bx-cog" /><span>Settings</span></a>
                                    </li>
                                    <li><a className="dropdown-item" href="javascript:;"><i className="bx bx-home-circle" /><span>Dashboard</span></a>
                                    </li>
                                    <li><a className="dropdown-item" href="javascript:;"><i className="bx bx-dollar-circle" /><span>Earnings</span></a>
                                    </li>
                                    <li><a className="dropdown-item" href="javascript:;"><i className="bx bx-download" /><span>Downloads</span></a>
                                    </li> */}
                                    <li>
                                        <div className="dropdown-divider mb-0" />
                                    </li>
                                    <li><button onClick={logout} className="dropdown-item" ><i className="bx bx-log-out-circle" /><span>Logout</span></button>
                                    </li>
                                </ul>














                            </div>
                        </nav>
                    </div>
                </header>
                {/*end header */}
                {/*start page wrapper */}
                <div className="page__wrapper__dashboard">
                    {children}
                </div>
                {/*end page wrapper */}
                {/*start overlay*/}
                <div className="search-overlay" />
                <div className="overlay toggle-icon" />
                {/*end overlay*/}
                {/*Start Back To Top Button*/} <a href="javaScript:;" className="back-to-top"><i className="bx bxs-up-arrow-alt" /></a>
                {/*End Back To Top Button*/}
                <footer className="page-footer">
                    <p className="mb-0">Copyright © 2022. All right reserved.Develop by DITS</p>
                </footer>
            </div>
            {/*end wrapper*/}
            {/*start switcher*/}

        </div>
    );
};

export default DashboardSidebar;