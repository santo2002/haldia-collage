import React, { useEffect, useState } from 'react';

import Awards from '../../components/Awards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HomeCourse from '../../components/HomeCourse';
import Testimonial from '../../components/Testimonial';



import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/react';

const Coursepage = () => {

    const [courses, setCourses] = useState([]);
    const [remainings, setRemaining] = useState([]);

    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/detail_course_get')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    useEffect(() => {
        const remaining = courses.filter(b => b.status == "1")
        setRemaining(remaining)



    }, [courses])




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
        <div>
            <Header />

            {/*Page Header Start*/}
            <section className="page-header">
                <div className="page-header-bg" style={{ backgroundImage: `url(https://whispering-woodland-88721.herokuapp.com/${innerBan?.image})` }}>
                </div>
                <div className="container">
                    <div className="page-header__inner">
                        <ul className="thm-breadcrumb list-unstyled">
                            <li><a href="index.html">Home</a></li>
                            <li><span>/</span></li>
                            <li>Courses</li>
                        </ul>
                        <h2>{innerBan?.collageName}</h2>
                    </div>
                </div>
            </section>
            <section className="project-one">
                <div className="project-one__top">
                    <div className="container">
                        <div className="section-title text-center">
                            <div className="section-sub-title-box">
                                <p className="section-sub-title">Courses Offered</p>
                                <div className="section-title-shape-1">
                                    <img src="assets/images/shapes/section-title-shape-1.png" alt />
                                </div>
                            </div>
                            <h2 className="section-title__title">There are the following ten <br /> departments under faculties.</h2>
                        </div>
                    </div>
                </div>


                <div className="project-one__bottom">

                    <div className='container'>
                        <div className='row'>
                            {remainings.map(c =>
                                <div className='col-md-6 col-lg-4  course_page'>


                                    <div className="item">
                                        <div className="project-one__single">
                                            <a href={`course-details/${c?.title1.split(' ').join('-')}`}>
                                                <div className="project-one__img-box">
                                                    <div className="project-one__img">
                                                        <img src={`https://whispering-woodland-88721.herokuapp.com/${c?.image}`} className='img-fluid' />

                                                    </div>
                                                    <div className="project-one__content">
                                                        <h4 className="project-one__title">{c?.title1}
                                                        </h4>
                                                    </div>
                                                    <div className="project-one__link">
                                                        <a className="img-popup" data-fancybox="gallery2" href={`https://whispering-woodland-88721.herokuapp.com/${c.picture}`} ><i className="fa fa-link" /></a>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>

                    </div>






                </div>
            </section>


            <Testimonial />
            <Awards />
            <Footer />
        </div>
    );
};

export default Coursepage;