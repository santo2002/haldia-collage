import { async } from '@firebase/util';
import React from 'react';
import { useForm } from "react-hook-form";
import { NavLink, useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

import fetcher from '../api';
import { ToastContainer, toast } from 'react-toastify';
import wlogo from '../images/resources/icare-white.png'

const Footers = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = async data => {
        console.log(data.email)
        const res = await fetcher.post('news_post', data);

        if (res.data.insertedId) {
            toast.success('Data sent  Successfully')


        }
        else {
            toast.error('Fail to update data')

        }


    };
    let activeStyle = {

        color: "#0a58ca"
    };

    const location = useLocation();
    const path = location?.pathname.split("/")[1];
    const navigate = useNavigate();
    const navigateToTop = (link) => {
        navigate(`/${link}`)
    }

    return (
        <footer className="site-footer">
            {/* <div class="site-footer-img-1">
      <img src="assets/images/resources/site-footer-img-1.png" alt="">
    </div> */}
            <div className="site-footer-shape-1">
                <img src="assets/images/shapes/site-footer-shape-1.png" alt />
            </div>
            <div className="container">
                <div className="site-footer__top">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="footer-widget__column footer-widget__about">

                                <img src={wlogo} className='img-fluid' />
                                <div className="footer-widget__about-text-box">
                                    <p className="footer-widget__about-text">Indian Center for Advance - ment of Research and Education, Haldia (ICARE) set up in 1995, is a non-profit making voluntary organization</p>
                                </div>
                                <div className="site-footer__social">
                                    <a href="#"><i className="fab fa-facebook" />Facebook</a>
                                    <a href="#"><i className="fab fa-twitter" /></a>
                                    <a href="#"><i className="fab fa-linkedin" /></a>
                                    <a href="#"><i className="fab fa-youtube" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="footer-widget__column footer-widget__explore clearfix">
                                <h3 className="footer-widget__title">Useful Links</h3>
                                <ul className="footer-widget__explore-list list-unstyled clearfix">
                                    <li >


                                        <a href="#" className={path == "home" && "active"}

                                            onClick={() => navigateToTop('home')}




                                        >Home </a>
                                    </li>
                                    <li>

                                        <a href="#" className={path == "about" && "active"}

                                            onClick={() => navigateToTop('about')}




                                        >About</a>
                                    </li>
                                    <li>

                                        <a href="#" className={path == "collages" && "active"}

                                            onClick={() => navigateToTop('collages')}




                                        >Collages</a>
                                    </li>
                                    <li>

                                        <a href="#" className={path == "courses" && "active"}

                                            onClick={() => navigateToTop('courses')}




                                        >Courses</a>
                                    </li>
                                    <li>


                                        <a href="#" className={path == "academics" && "active"}

                                            onClick={() => navigateToTop('academics')}




                                        >Academics</a>
                                    </li>
                                    <li>
                                        <a href="#" className={path == "admission" && "active"}

                                            onClick={() => navigateToTop('admission')}




                                        >Admission</a>
                                    </li>
                                    <li>
                                        <a href="#" className={path == "contact" && "active"}

                                            onClick={() => navigateToTop('contact')}




                                        >Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="footer-widget__column footer-widget__newsletter clearfix">
                                <h3 className="footer-widget__title">Newsletter</h3>
                                <p className="footer-widget__newsletter-text">Subscribe to our newsletter and get update in your inbox.</p>




                                <form className="footer-widget__newsletter-form"
                                    onSubmit={handleSubmit(onSubmit)}>
                                    <div className="footer-widget__newsletter-input-box">
                                        <input type="email" placeholder="Enter Email Address" name="email"

                                            {...register("email", { required: true })}
                                        />
                                        <button type="submit" className="footer-widget__newsletter-btn thm-btn"><i className="fa fa-arrow-right" />Subscribe</button>
                                    </div>
                                </form>





                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="footer-widget__column footer-widget__contact">
                                <h3 className="footer-widget__title">Contact</h3>
                                <p className="footer-widget__contact-text">ICARE Complex, HIT Campus, P.O.-Hatiberia, Haldia</p>
                                <ul className="list-unstyled footer-widget__contact-list">
                                    {/* <li>
                  <div class="icon">
                    <i class="fa fa-envelope"></i>
                  </div>
                  <div class="text">
                    <p><a href="mailto:icare@gmail.com ">icare@gmail.com</a></p>
                  </div>
                </li> */}
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-phone-alt" />
                                        </div>
                                        <div className="text">
                                            <p><a href="tel:+91(03224) 255275">+91(03224) 255275</a></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="site-footer__bottom-inner">
                                <p className="site-footer__bottom-text">© 2022 Copyright ICARE. All Rights Reserved || design &amp; developed by <a href="https://devantitsolutions.com/">DITS</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            < ToastContainer />
        </footer >
    );
};

export default Footers;