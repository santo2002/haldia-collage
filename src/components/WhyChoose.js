import React, { useEffect, useState } from 'react';


const WhyChoose = () => {

    const [choose, setChoose] = useState([]);
    const [chooseData, setChooseData] = useState({})

    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/choose_home')
            .then(res => res.json())
            .then(data => setChoose(data))
    }, [])
    useEffect(() => {
        choose.map(a => setChooseData(a))
    }, [choose])


    console.log(chooseData)
    return (

        <div className={(chooseData.status == '0') && 'd-none'}>
            <section className="why-choose-two">
                <div className="why-choose-two-bg" style={{ backgroundImage: 'url(assets/images/backgrounds/why-choose-two-bg.jpg)' }} />
                <div className="container">
                    <div className="section-title text-center">
                        <div className="section-sub-title-box">
                            <p className="section-sub-title">why choose us</p>
                            <div className="section-title-shape-1">
                                <img src="assets/images/shapes/section-title-shape-1.png" alt />
                            </div>
                        </div>
                        <h2 className="section-title__title reshead">{chooseData.mainTitle}</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="why-choose-two__left">
                                <ul className="list-unstyled why-choose-two__list-one">
                                    <li>
                                        <div className="icon">
                                            <span className><i className="fas fa-chalkboard-teacher newdesignwcu" /></span>
                                        </div>
                                        <div className="content">
                                            <h4>{chooseData.subTitileOne}</h4>
                                            {/* <p>In a free hour when our power of choice is untrammelled and when nothing
                    prevents.</p>
                  <div class="why-choose-two__read-more">
                    <a href="about.html">Read More <i class="fa fa-arrow-right"></i> </a>
                  </div> */}
                                        </div>
                                    </li>
                                    <li className="qedusection">
                                        <div className="icon">
                                            <span className><i className="fas fa-book newdesignwcu" /></span>
                                        </div>
                                        <div className="content">
                                            <h4>{chooseData.subTitileTwo}</h4>

                                            {/* <p>In a free hour when our power of choice is untrammelled and when nothing
                    prevents.</p>
                  <div class="why-choose-two__read-more">
                    <a href="about.html">Read More <i class="fa fa-arrow-right"></i> </a>
                  </div> */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="why-choose-two__middle">
                                <div className="why-choose-two__img-box">
                                    <div className="why-choose-two__img-one">

                                        <img src={`https://whispering-woodland-88721.herokuapp.com/${chooseData.image}`} alt />

                                        {/* <div class="why-choose-two__img-two">
                    <img src="assets/images/resources/why-choose-haldiacollege.jpg" alt="">
                  </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="why-choose-two__right">
                                <ul className="list-unstyled why-choose-two__list-two clearfix">
                                    <li className="clearfix">
                                        <div className="content">
                                            <h4>{chooseData.subTitileFour}</h4>

                                            {/* <p>In a free hour when our power of choice is untrammelled and when nothing
                    prevents.</p>
                  <div class="why-choose-two__read-more">
                    <a href="about.html">Read More <i class="fa fa-arrow-right"></i> </a>
                  </div> */}
                                        </div>
                                        <div className="icon">
                                            <span className><i className="fas fa-university newdesignwcu" /></span>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <div className="content">
                                            <h4>{chooseData.subTitileThree}</h4>

                                            {/* <p>In a free hour when our power of choice is untrammelled and when nothing
                    prevents.</p>
                  <div class="why-choose-two__read-more">
                    <a href="about.html">Read More <i class="fa fa-arrow-right"></i> </a>
                  </div> */}
                                        </div>
                                        <div className="icon">
                                            <span className><i className="fas fa-briefcase newdesignwcu" /></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyChoose;