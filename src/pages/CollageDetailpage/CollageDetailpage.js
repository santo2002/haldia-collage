

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Awards from '../../components/Awards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Testimonial from '../../components/Testimonial';
import book1 from '../../images/shapes/section-title-shape-1.png';


const CollageDetailpage = () => {

    const { id } = useParams();

    const [mission, setmission] = useState([]);
    const [missionData, setmissionData] = useState({});

    const [innerBan, setInnerBan] = useState({});
    const [ibd, setibd] = useState([]);

    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/inner_banner_get')
            .then(res => res.json())
            .then(data => setibd(data))
    }, []);

    useEffect(() => {
        const fib = ibd.find(ib => ib.page == 'CollageDetail')

        setInnerBan(fib)
    }, [
        ibd
    ])

    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/collage_details_about_get')
            .then(res => res.json())
            .then(data => setmission(data))
    }, []);

    useEffect(() => {
        const data = mission.find(m => m.collage.split(' ').join('-') === id);
        console.log(data)
        setmissionData(data)
    }, [mission, id]);


    const [mission2, setmission2] = useState([]);
    const [missionData2, setmissionData2] = useState({});


    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/collage_details_more_get')
            .then(res => res.json())
            .then(data => setmission2(data))
    }, []);

    useEffect(() => {
        const data = mission2.find(m => m.collage.split(' ').join('-') === id);
        console.log(data)
        setmissionData2(data)
    }, [mission2, id]);


    const [collageCourse, setCollageCourse] = useState([]);
    const [collageCourse2, setCollageCourse2] = useState([]);
    // const [collageCourser, setCollageCourser] = useState([]);


    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/collage_course_get')
            .then(res => res.json())
            .then(data => setCollageCourse(data))
    }, []);

    useEffect(() => {
        const data = collageCourse.filter(m => (m.collage.split(' ').join('-') === id) && m.status == '1');
        console.log(data)
        setCollageCourse2(data)

    }, [collageCourse]);
    // console.log(collageCourse2, collageCourse)


    return (
        <>

            <Header />

            <section className="page-header">
                <div className="page-header-bg" style={{ backgroundImage: `url(https://whispering-woodland-88721.herokuapp.com/${innerBan?.image})` }}>
                </div>
                <div className="container">
                    <div className="page-header__inner">
                        <ul className="thm-breadcrumb list-unstyled">
                            <li><a href="index.html">Home</a></li>
                            <li><span>/</span></li>
                            <li>College</li>
                        </ul>
                        <h2>{missionData?.collage}</h2>
                    </div>
                </div>
            </section>

            <section className="about-three about-four">
                <div className={(missionData?.status == '1') ? 'container' : 'd-none'}>
                    <div className="row">
                        <div className="col-xl-6 mb-5">
                            <div className="about-three__left">
                                <div className="about-three__img-box wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                    <div className="about-three__img">
                                        <img src={`/collageDetailsAboutImgs/${missionData?.imageOne}`} alt='images' />
                                    </div>
                                    <div className="about-three__img-two">
                                        <img src={`/collageDetailsAboutImgs/${missionData?.imageTwo}`} alt />
                                        {/* <img src='/collageDetailsAboutImgs/hit-1656922442537.jpg' alt /> */}
                                    </div>
                                    <div className="about-three__border" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 h-100 ">
                            <div className="about-three__right">
                                <div className="section-title text-left">
                                    <div className="section-sub-title-box">
                                        <p className="section-sub-title">{missionData?.firstTitle}</p>
                                        <div className="section-title-shape-1">
                                            <img src={book1} alt />
                                        </div>
                                    </div>
                                </div>

                                <p className="icareinner_abouttext">
                                    {missionData?.subone}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 clgfuldetails">
                            <p className="icareinner_abouttext">
                                {missionData?.subTwo}
                            </p>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 clgaddress_outsection">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="clgdadres_dtoutsection">
                                            <div class="hex">
                                                <i class="fas fa-map-marker-alt"></i>
                                            </div>
                                            {(missionData2?.address) && <p class="allclgdadress">
                                                {missionData2?.address}
                                            </p>}
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="clgdadres_dtoutsection">
                                            <div class="hex">
                                                <i class="fas fa-phone-alt"></i>
                                            </div>
                                            {(missionData2?.phone) && <p class="allclgdadress1">
                                                {missionData2?.phone}
                                            </p>}
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="clgdadres_dtoutsection">
                                            <div class="hex">
                                                <i class="fas fa-globe"></i>
                                            </div>
                                            {(missionData2?.websiteLink) &&
                                                < a href={`${missionData2?.websiteLink}`}  > <p class="allclgdadress2">
                                                    {missionData2?.websiteLink}
                                                </p>
                                                </a>

                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 academicsiolist_outsection">
                                <div className="section-title text-left">
                                    <div className="section-sub-title-box  mt-5">
                                        <p className="section-sub-title">Course OFFER</p>
                                        <div className="section-title-shape-1">
                                            <img src={book1} alt />
                                        </div>
                                    </div>
                                </div>
                                <ul className="mvlstarea1">
                                    {collageCourse2.map(u =>
                                        <li>
                                            <span className="icon-confirmation urighticn" />
                                            {u?.course}

                                        </li>
                                    )}

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <Footer />

        </>
    );
};

export default CollageDetailpage;


/*  */
