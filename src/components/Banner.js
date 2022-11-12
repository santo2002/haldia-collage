import React, { useEffect, useState } from 'react';
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
 import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


import { Link } from 'react-router-dom';

const Banner = () => {

    const [banners, setbanners] = useState([]);
    const [remainings, setRemaining] = useState([]);

    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/banner')
            .then(res => res.json())
            .then(data => setbanners(data));

    }, [])

    useEffect(() => {
        const remaining = banners.filter(b => b.status === "1")
        setRemaining(remaining)



    }, [banners])

    // banners.map(b => console.log(b.picture))


    return (

        <section className="main-slider clearfix">


            <Swiper
                className="swiper-container thm-swiper__slider"
                // install Swiper modules
                modules={[Autoplay, Navigation, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                loop={true}

                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}

            >
                <div className="swiper-wrapper">



                    {
                        remainings.map(b =>
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{ backgroundImage: `url(https://whispering-woodland-88721.herokuapp.com/${b.picture})` }} />
                                {/* /.image-layer */}
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-9 col-lg-9">
                                            <div className="main-slider__content">
                                                <p className="main-slider__sub-title">{b.subtitle}</p>
                                                <h2 className="main-slider__title">{b.title}</h2>
                                                <p className="main-slider__text">{b.desc}</p>
                                                <div className="main-slider__btn-box">
                                                    <Link to="/collages" className="thm-btn main-slider__btn"> <i className="fa fa-arrow-right" /> Discover more</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                        )
                    }



                </div>
            </Swiper>
        </section>


    );
};

export default Banner;
