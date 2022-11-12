import React, { useEffect, useState } from 'react';

import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';
import './OurCollage.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

const Collage = () => {
    const [collages, setCollages] = useState([]);
    const [remaining, setRemaining] = useState([])

    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/collage_home')
            .then(res => res.json())
            .then(data => setCollages(data))
    }, []);

    useEffect(() => {
        const rem = collages.filter(c => c.status === '1');
        setRemaining(rem)
    }, [collages])


    return (
        <section className="services-carousel-page">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-sub-title-box">
                        <p className="section-sub-title">Our Colleges</p>
                        <div className="section-title-shape-1">
                            <img src="assets/images/shapes/section-title-shape-1.png" alt="" />
                        </div>
                    </div>
                </div>



                <div className=' banner_nav_fix px-4' >

                    <Swiper
                        // install Swiper modules
                        modules={[Autoplay, Pagination, A11y]}
                        spaceBetween={50}

                        

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
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}

                    >
                        {
                            remaining.map(c =>
                                <SwiperSlide className='item'>
                                    <div className="services-one__single">
                                        <div className="services-one__img">
                                            <img src={`ourCollageImages/${c?.image}`} alt="image" />
                                        </div>
                                        <div  style={{height:'260px'}} className="services-one__content">
                                            <div className="services-one__icon">
                                                <span><i className="fas fa-university" /></span>
                                            </div>
                                            <h3 className="services-one__title"><a href="#">{c.collageName}</a></h3>
                                            <p className="services-one__text clgdescription">{c.collageDesc.slice(0,100) + '...'}</p>
                                            <div className="services-one__read-more">
                                                <Link to={`/collages/${c.collageName.split(' ').join('-')}`}>Read More <i className="fa fa-arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            )
                        }


                    </Swiper>

                </div>


            </div>
        </section>
    );
};

export default Collage;
