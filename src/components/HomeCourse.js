import React, { useEffect, useState } from 'react';


import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';
import './OurCollage.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';


const HomeCourse = () => {
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

    return (
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


            <div className="project-one__bottom homepage_course">

                <Swiper
                    className="project-one__carousel owl-carousel owl-theme thm-owl__carousel"
                    // install Swiper modules
                    modules={[Autoplay, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}


                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}

                >
                    {
                        remainings.map(c =>

                            <SwiperSlide className="item">
                                <div className="project-one__single">
                                    <Link to={`course-details/${c?.title1.split(" ").join("-")}`}>
                                        <div className="project-one__img-box">
                                            <div className="project-one__img">








                                                <img src={`https://whispering-woodland-88721.herokuapp.com/${c?.image}`} className='img-fluid' />





                                            </div>
                                            <div className="project-one__content">
                                                <h4 className="project-one__title">{c?.title1}
                                                </h4>
                                            </div>
                                            <div className="project-one__link">
                                                <a className="img-popup" data-fancybox="gallery2" href={`https://whispering-woodland-88721.herokuapp.com/${c?.image}`} ><i className="fa fa-link" /></a>
                                            </div>
                                        </div>
                                    </Link>
                                </div>



                            </SwiperSlide>)
                    }



                </Swiper>


            </div>
        </section>

    );
};

export default HomeCourse;