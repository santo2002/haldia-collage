import React, { useEffect, useState } from 'react';

import Awards from '../../components/Awards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Testimonial from '../../components/Testimonial';
import { useForm } from "react-hook-form";
import fetcher from "../../api";
const Admissionpage = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        const res = await fetcher.post(`c_form_post`, data);
        console.log(res);



    };

    const [toggle, setToggle] = useState(false);
    const [mission, setmission] = useState([]);
    const [missionData, setmissionData] = useState({});


    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/mission_page')
            .then(res => res.json())
            .then(data => setmission(data))
    }, [toggle]);

    useEffect(() => {
        mission.map(a => setmissionData(a))
    }, [mission]);






    const [innerBan, setInnerBan] = useState({});
    const [ibd, setibd] = useState([]);

    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/inner_banner_get')
            .then(res => res.json())
            .then(data => setibd(data))
    }, []);


    useEffect(() => {
        const fib = ibd.find(ib => ib.page == 'Admission')

        setInnerBan(fib)
    }, [
        ibd
    ])


    return (
        <>

            <Header />
            <div>
                {/*Page Header Start*/}
                <section className="page-header">
                    <div className="page-header-bg" style={{ backgroundImage: `url(https://whispering-woodland-88721.herokuapp.com/${innerBan?.image})` }}>
                    </div>
                    <div className="container">
                        <div className="page-header__inner">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li><a href="index.html">Home</a></li>
                                <li><span>/</span></li>
                                <li>Admission</li>
                            </ul>
                            <h2>{innerBan?.collageName}</h2>
                        </div>
                    </div>
                </section>
                {/*Page Header End*/}
                <section className={(missionData.status == '0') ? 'd-none' : 'about-two'}>

                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="about-two__left">
                                    <div className="section-title text-left">
                                        <div className="section-sub-title-box">
                                            <p className="section-sub-title">{missionData.subone}</p>
                                            <div className="section-title-shape-1">
                                                <img src="assets/images/shapes/section-title-shape-1.png" alt />
                                            </div>
                                        </div>
                                        <h2 className="section-title__title">{missionData.firstTitle}</h2>
                                    </div>
                                    <ul className="list-unstyled about-three__point">
                                        <li>
                                            <div className="icon">
                                                <i className="fa fa-check" />
                                            </div>
                                            <div className="text">
                                                <p>{missionData.subTwo}.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fa fa-check" />
                                            </div>
                                            <div className="text">
                                                <p>{missionData.subThree}</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about-two__right">
                                    <div className="about-two__img-box wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                                        <div className="about-two__img">
                                            <img src="assets/images/resources/admision.jpg" alt />
                                        </div>
                                        <div className="about-two__img-two">
                                            <img src="assets/images/resources/admision1.jpg" alt />
                                        </div>
                                        <div className="about-two__line">
                                            <img src="assets/images/shapes/about-two-line.png" alt />
                                        </div>
                                        <div className="about-two__shape-1" />
                                        <div className="about-two__practice-year">
                                            <div className="about-two__practice-year-inner">
                                                <div className="about-two__practice-year-shape">
                                                    <img src="assets/images/shapes/about-two-practice-year-shape.png" alt />
                                                </div>
                                                <div className="about-two__practice-year-content">
                                                    <h3>{missionData.percentage}</h3>
                                                    <p>Years of <br /> experience</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <Testimonial />
            <Awards />

            <section className="contact-page">
                <div className="contact-page-shape-1">
                    <img src="assets/images/shapes/contact-page-shape-1.png" alt />
                </div>
                <div className="container">
                    <div className="section-title text-center">
                        <div className="section-sub-title-box">
                            <p className="section-sub-title">Contact with us</p>
                            <div className="section-title-shape-1">
                                <img src="assets/images/shapes/section-title-shape-1.png" alt />
                            </div>
                        </div>
                        <h2 className="section-title__title">Feel free to write our <br /> experts</h2>
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
                                        <div className="col-xl-12">
                                            <div className="comment-form__input-box text-message-box">
                                                <textarea name="message"
                                                    {...register("message", { required: true })}
                                                    placeholder="Comments" />
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
            <Footer />
        </>
    );
};

export default Admissionpage;