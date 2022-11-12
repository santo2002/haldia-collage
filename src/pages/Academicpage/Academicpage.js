
import Awards from '../../components/Awards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Testimonial from '../../components/Testimonial';
import React, { useEffect, useState } from 'react';


const Academicpage = () => {


    const [toggle, setToggle] = useState(false);


    const [pg, setpg] = useState([]);
    const [finan, setfinan] = useState([]);
    const [ug, setug] = useState([]);

    const [rempg, setrempg] = useState([]);
    const [remfinan, setremfinan] = useState([]);
    const [remug, setremug] = useState([]);

    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/pg')
            .then(res => res.json())
            .then(data => setpg(data));


    }, [])

    useEffect(() => {
        const rpg = pg.filter(r => r.status == '1')

        setrempg(rpg)
    }, [pg])


    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/ug')
            .then(res => res.json())
            .then(data => setug(data));


    }, [])

    useEffect(() => {
        const rug = ug.filter(r => r.status == '1')

        setremug(rug)
    }, [ug])



    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/finan')
            .then(res => res.json())
            .then(data => setfinan(data));


    }, [])

    useEffect(() => {
        const rpg = pg.filter(r => r.status == '1')

        setremfinan(rpg)
    }, [finan])
    const [innerBan, setInnerBan] = useState({});
    const [ibd, setibd] = useState([]);

    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/inner_banner_get')
            .then(res => res.json())
            .then(data => setibd(data))
    }, []);


    useEffect(() => {
        const fib = ibd.find(ib => ib.page == 'Academics')

        setInnerBan(fib)
    }, [
        ibd
    ])


    return (
        <>

            <Header />

            <div className="stricky-header stricked-menu main-menu main-menu-two">
                <div className="sticky-header__content" />{/* /.sticky-header__content */}
            </div>{/* /.stricky-header */}
            {/*Page Header Start*/}
            <section className="page-header">
                <div className="page-header-bg" style={{ backgroundImage: `url(https://whispering-woodland-88721.herokuapp.com/${innerBan?.image})` }}>
                </div>
                <div className="container">
                    <div className="page-header__inner">
                        <ul className="thm-breadcrumb list-unstyled">
                            <li><a href="index.html">Home</a></li>
                            <li><span>/</span></li>
                            <li>Academics</li>
                        </ul>
                        <h2>Our Academics</h2>
                    </div>
                </div>
            </section>
            {/*Page Header End*/}
            {/* ==================================academics start==================================== */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 iacdemics_outsection">
                        <div className="section-title text-left">
                            <div className="section-sub-title-box">
                                <p className="section-sub-title">Academics</p>
                                <div className="section-title-shape-1">
                                    <img src="assets/images/shapes/section-title-shape-1.png" alt />
                                </div>
                            </div>
                        </div>
                        <p className="icareinner_abouttext">
                            <b>
                                Studying at Indian Center For Advancement of Research And Education
                            </b>
                        </p>
                        <p className="icareinner_abouttext">
                            Indian Center For Advancement of Research And Education offers students the benefit of a thriving educational environment set in the heart of the most happening Industrial Area of West Bengal.
                        </p>
                        <div className="row">
                            <div className="col-lg-12 academicsiolist_outsection">
                                <div className="section-title text-left">
                                    <div className="section-sub-title-box">
                                        <p className="section-sub-title">UG PROGRAMMES</p>
                                        <div className="section-title-shape-1">
                                            <img src="assets/images/shapes/section-title-shape-1.png" alt />
                                        </div>
                                    </div>
                                </div>
                                <ul className="mvlstarea1">
                                    {rempg.map(u =>
                                        <li>
                                            <span className="icon-confirmation urighticn" />
                                            {u.title}
                                            <span className="bsdiconx">
                                                <i className="fa fa-arrow-right icvnxc" />60
                                            </span>
                                        </li>
                                    )}

                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 academicsiolist_outsection">
                                <div className="section-title text-left">
                                    <div className="section-sub-title-box">
                                        <p className="section-sub-title">PG PROGRAMMES</p>
                                        <div className="section-title-shape-1">
                                            <img src="assets/images/shapes/section-title-shape-1.png" alt />
                                        </div>
                                    </div>
                                </div>
                                <ul className="mvlstarea1">
                                    {
                                        rempg.map(p =>
                                            <li>
                                                <span className="icon-confirmation urighticn" />
                                                {p.title}
                                                <span className="bsdiconx">
                                                    <i className="fa fa-arrow-right icvnxc" />{p.sits}
                                                </span>
                                            </li>)
                                    }

                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 academicsiolist_outsection">
                                <div className="section-title text-left">
                                    <div className="section-sub-title-box">
                                        <p className="section-sub-title">FINANCIAL AIDS </p>
                                        <div className="section-title-shape-1">
                                            <img src="assets/images/shapes/section-title-shape-1.png" alt />
                                        </div>
                                    </div>
                                </div>
                                <ul className="mvlstarea1">
                                    {
                                        remfinan.map(f => <li>
                                            <span className="icon-confirmation urighticn" />
                                            {f.title}
                                        </li>)
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ==================================academics end====================================== */}


            <Testimonial />
            <Awards />

            <Footer />
        </>
    );
};

export default Academicpage;