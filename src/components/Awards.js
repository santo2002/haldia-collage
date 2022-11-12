import React, { useEffect, useState } from 'react';

import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

const Awards = () => {
    const [certi, setCeti] = useState([])

    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/home-certificate')
            .then(res => res.json())
            .then(data => setCeti(data));
    }, [])

    return (
        <section className="awards hiawardarea">
            <div className="container ">
                <h4 className="awards__title">We’re certified and award winning college</h4>
                <div className='banner_nav_fix'>
                    <Swiper
                        className="awards__carousel owl-carousel owl-theme thm-owl__carousel"
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



                        {certi.map(c => <SwiperSlide className="item">
                            <div className="awards__single">
                                <div className="awards__img">
                                    <img src={`https://whispering-woodland-88721.herokuapp.com/${c.picture}`} className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>

                        )}


                    </Swiper>
                </div>

            </div>
        </section>
    );
};

export default Awards;