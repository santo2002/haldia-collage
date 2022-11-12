import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/resources/icare.png'
import { useForm } from "react-hook-form";
import fetcher from "../api";
import { useRef } from 'react';

const Header = () => {

    const [navModel, setNavModel] = useState(false)
    useEffect(() => {
        console.log(navModel)
    }, [navModel])

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        const res = await fetcher.post(`donate_post`, data);
        console.log(res);



    };

    let activeStyle = {

        color: "#0a58ca"
    };

    const activeNav = useRef();
    return (
        <>
            <header className="main-header-two clearfix">
                <div className="main-header-two__top">
                    <div className="container">
                        <div className="main-header-two__top-inner">
                            <div className="main-header-two__top-left">
                                {/*  <p class="main-header-two__top-left-text">We provide complete home renovation services.</p> */}
                            </div>
                            <div className="main-header-two__top-right">
                                <div className="main-header-two__top-social">
                                    <a target='_blank' href="https://www.facebook.com/iimsar.drbcrhh/"><i className="fab fa-facebook-square" /></a>
                                    <a href="#"><i className="fab fa-twitter" /></a>
                                    <a target='_blank' href="https://in.linkedin.com/company/indian-centre-for-advancement-of-research-&-education"><i className="fab fa-linkedin" /></a>
                                    <a href="#"><i className="fab fa-youtube" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-header-two__middle">
                    <div className="container">
                        <div className="main-header-two__middle-inner clearfix">
                            <div className="main-header-two__shape-1" />
                            <div className="main-header-two__shape-2" />
                            <div className="main-header-two__shape-3" />
                            <div className="main-header-two__shape-4" />
                            <div className="main-header-two__shape-5" />
                            <div className="main-header-two__shape-6" />
                            <div className="main-header-two__shape-7" />
                            <div className="main-header-two__logo">
                                <Link to="/"><img src={logo} alt className="mainlogoheader" /></Link>
                            </div>
                            <div className="main-header-two__address">
                                <ul className="list-unstyled main-header-two__address-list">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-phone-call" />
                                        </div>
                                        <div className="content">
                                            <p>Call Anytime</p>
                                            <h5><a target="_blank" href="tel:91(03224) 255275">+91(03224) 255275</a></h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-message" />
                                        </div>
                                        <div className="content">
                                            <p>Send Email</p>
                                            <h5><a target="_blank" href="mailto:icare_haldia@rediffmail.com">icare_haldia@rediffmail.com</a></h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-location" />
                                        </div>
                                        <div className="content">
                                            <p>Address</p>
                                            <a target="_blank" href="https://g.page/haldia-institute-of-technology?share">  <h5>ICARE Complex, HIT Campus, Haldia</h5>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="main-menu main-menu-two clearfix">
                    <div className="main-menu-two__wrapper clearfix">
                        <div className="container">
                            <div className="main-menu-two__wrapper-inner clearfix">
                                <div className="main-menu-two__wrapper-inner-bg" />
                                <div className="main-menu-two__left">
                                    <div className="main-menu-two__main-menu-box">

                                        <a onClick={() => setNavModel(!navModel)} className="mobile-nav__toggler" ><i className="fa fa-bars" /></a>

                                        <ul className="main-menu__list">
                                            <li >
                                                <NavLink style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                } to="/">Home </NavLink>
                                            </li>
                                            <li>
                                                <NavLink style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                } to="/about">About </NavLink>
                                            </li>
                                            <li>
                                                <NavLink style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                } to="/collages">Colleges</NavLink>
                                            </li>
                                            <li>
                                                <NavLink style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                } to="/courses">Courses</NavLink>
                                            </li>
                                            <li>
                                                <NavLink style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                } to="/academics">Academics</NavLink>
                                            </li>
                                            <li>
                                                <NavLink style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                } to="/admission">Admission</NavLink>
                                            </li>
                                            <li>
                                                <NavLink style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                } to="/contact">Contact</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="main-menu-two__right">
                                    <div className="main-menu-two__search-box">
                                        <a href="#" className="main-menu-two__search search-toggler icon-magnifying-glass" />
                                    </div>
                                    <div className="main-menu-two__btn-box">
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="thm-btn main-menu-two__btn border-0"> <i className="fa fa-arrow-right" /> Donate</button>






                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>






                {navModel &&

                    <div className='header__nav__fix'>


                        <div class="offcanvas offcanvas-start " tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

                            <div class="offcanvas-header">
                                <div class="logo-box">
                                    <a href="index.html" aria-label="logo image"><img src="assets/images/resources/icare-white.png" width="143" alt="" /></a>
                                </div>

                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => setNavModel(!navModel)}></button>
                            </div>
                            <div class="offcanvas-body">


                                <div class="mobile-nav__container"><ul class="main-menu__list">
                                    <li >
                                        <NavLink style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        } to="/">Home </NavLink>
                                    </li>
                                    <li>
                                        <NavLink style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        } to="/about">About </NavLink>
                                    </li>
                                    <li>
                                        <NavLink style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        } to="/collages">Colleges</NavLink>
                                    </li>
                                    <li>
                                        <NavLink style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        } to="/courses">Courses</NavLink>
                                    </li>
                                    <li>
                                        <NavLink style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        } to="/academics">Academics</NavLink>
                                    </li>
                                    <li>
                                        <NavLink style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        } to="/admission">Admission</NavLink>
                                    </li>
                                    <li>
                                        <NavLink style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        } to="/contact">Contact</NavLink>
                                    </li>
                                </ul>
                                </div>

                                <ul class="mobile-nav__contact list-unstyled">
                                    <li>
                                        <i class="fa fa-envelope"></i>
                                        <a href="mailto:needhelp@packageName__.com">
                                            contactus@icare-haldia.org
                                        </a>
                                    </li>
                                    <li>
                                        <i class="fa fa-phone-alt"></i>
                                        <a href="tel:666-888-0000">+91(03224) 255275, 255662,
                                            255843, 255895</a>
                                    </li>
                                </ul>

                                <div class="mobile-nav__top">
                                    <div class="mobile-nav__social">
                                        <a href="#" class="fab fa-twitter"></a>
                                        <a href="#" class="fab fa-facebook-square"></a>
                                        <a href="#" class="fab fa-pinterest-p"></a>
                                        <a href="#" class="fab fa-instagram"></a>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>}


            </header>
            <div className="stricky-header stricked-menu main-menu main-menu-two">
                <div className="sticky-header__content" />{/* /.sticky-header__content */}
            </div>{/* /.stricky-header */}






            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Icare</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <section className="contact-page">
                                <div className="contact-page-shape-1">
                                    {/* <img src="assets/images/shapes/contact-page-shape-1.png" alt /> */}
                                </div>
                                <div className="container">
                                    <div className="section-title text-center">
                                        <div className="section-sub-title-box">
                                            <p className="section-sub-title">Donate us</p>
                                            <div className="section-title-shape-1">
                                                <img src="assets/images/shapes/section-title-shape-1.png" alt />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="contact-page__form">



                                                {/* <input {...register("firstName", { required: true })} />
                                {errors.firstName?.type === 'required' && "First name is required"}

                                <input {...register("lastName", { required: true })} />
                                {errors.lastName && <p>Last name is required</p>}

                                <input {...register("mail", { required: "Email Address is required" })} />
                                <p>{errors.mail?.message}</p>

                                <input type="submit" />
                            </form> */}


                                                <form className="comment-one__form contact-form-validated" onSubmit={handleSubmit(onSubmit)}>
                                                    <div className="row">
                                                        <div className="col-xl-6">
                                                            <div className="comment-form__input-box">
                                                                <input type="text" placeholder="Name" name="name" {...register("name", { required: true })} />
                                                                {errors.name?.type === 'required' && "First name is required"}
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="comment-form__input-box">
                                                                <input type="email" placeholder="Email" name="email"
                                                                    {...register("email", { required: true })}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="row">
                                                        <div className="col-xl-6">
                                                            <div className="comment-form__input-box">
                                                                <input type="text" placeholder="Phone" name="phone"
                                                                    {...register("phone")}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="comment-form__input-box">
                                                                <input type="text" placeholder="Subject" name="subject"
                                                                    {...register("subject", { required: true })}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-xl-6">
                                                            <div className="comment-form__input-box">
                                                                <input type="text" placeholder="City" name="City"
                                                                    {...register("City")}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="comment-form__input-box">
                                                                <input type="text" placeholder="Organization" name="Organization"
                                                                    {...register("Organization", { required: true })}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-xl-6">
                                                            <div className="comment-form__input-box">
                                                                <input type="text" placeholder="Zip/Pin code" name="Zip/Pin code"
                                                                    {...register("code")}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="comment-form__input-box">
                                                                <input type="text" placeholder="State" name="State"
                                                                    {...register("State", { required: true })}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="row">
                                                        <div className="col-xl-12">
                                                            <div className="comment-form__input-box text-message-box">
                                                                <textarea name="message"
                                                                    {...register("message", { required: true })}
                                                                    placeholder="Special Instruction" />
                                                            </div>
                                                            <div className="comment-form__btn-box">
                                                                <button type="submit" className="thm-btn comment-form__btn"> <i className="fa fa-arrow-right" /> Submit</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>





                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section >


                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;