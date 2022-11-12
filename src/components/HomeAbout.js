import React, { useEffect, useState } from 'react';


const

    HomeAbout = () => {
        const [about, setAbout] = useState([]);
        const [aboutFull, setAboutFull] = useState({})

        useEffect(() => {
            fetch('https://whispering-woodland-88721.herokuapp.com/about_home')
                .then(res => res.json())
                .then(data => setAbout(data));

        }, [])
        useEffect(() => {
            about.map(a => setAboutFull(a))
        }, [about])
        return (
            <div className={(aboutFull.status == '0') && 'd-none'}>
                <section className="home-about">
                    <section className='about-one'>
                        <div className="about-one__shape float-bob-x">
                            <img src="assets/images/shapes/about-one-shape.png" alt />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="about-one__left">
                                        <div className="about-one__img-box wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                            <div className="about-one__img">
                                                <img src={`https://whispering-woodland-88721.herokuapp.com/${aboutFull.image}`} alt />

                                            </div>
                                            <div className="about-one__line">
                                                <img src="assets/images/shapes/about-one-line.png" alt />
                                            </div>
                                            <div className="about-one__satisfied">
                                                <div className="about-one__satisfied-inner">
                                                    <div className="about-one__satisfied-shape">
                                                        <img src="assets/images/shapes/about-one-satisfied-shape-1.png" alt />
                                                    </div>
                                                    <div className="about-one__satisfied-content">
                                                        <div className="about-one__satisfied-count-box">
                                                            <h3 className="odometer" data-count={98}>{aboutFull.percentage}</h3>
                                                            <span className="about-one__satisfied-percent">+

                                                            </span>
                                                        </div>
                                                        <p className="about-one__satisfied-text">Collages with us</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="about-one__big-text">icare</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="about-one__right">
                                        <div className="section-title text-left">
                                            <div className="section-sub-title-box">
                                                <p className="section-sub-title">About US</p>
                                                <div className="section-title-shape-1">
                                                    <img src="assets/images/shapes/section-title-shape-1.png" alt />
                                                </div>
                                            </div>
                                            <h2 className="section-title__title">{aboutFull.aboutTitle}</h2>
                                        </div>
                                        <p className="about-one__text">{aboutFull.aboutDesc}</p>
                                        <div className="yl-about-qoute">
                                            <span>"To groom students to become enlightened citizens sensitive to the needs of the society and good human being with leadership quality."</span>
                                            <div className="yl-quote-author yl-headline">
                                                <h4>ICARE-</h4>
                                                <span> The Ultimate Educational Destination</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </section>


            </div>
        );
    };

export default HomeAbout;