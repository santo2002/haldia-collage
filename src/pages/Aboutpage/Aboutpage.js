import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import book1 from '../../images/shapes/section-title-shape-1.png'
import Awards from '../../components/Awards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HomeAbout from '../../components/HomeAbout';
import Testimonial from '../../components/Testimonial';

const Aboutpage = () => {
    const [toggle, setToggle] = useState(false);
    const [mission, setmission] = useState([]);
    const [missionData, setmissionData] = useState({});
    const [filterteam, setFilterTeam] = useState([])
    const [team, setTeam] = useState([]);




    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/team_member_get')
            .then(res => res.json())
            .then(data => setTeam(data))
    }, []);

    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/vission_home')
            .then(res => res.json())
            .then(data => setmission(data))
    }, [toggle]);

    useEffect(() => {
        const remain = team.filter(t => t.status == '1')

        setFilterTeam(remain)
    }, [team]);

    useEffect(() => {
        mission.map(a => setmissionData(a))
    }, [mission])



    const [innerBan, setInnerBan] = useState({});
    const [ibd, setibd] = useState([]);







    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/inner_banner_get')
            .then(res => res.json())
            .then(data => setibd(data))
    }, []);


    useEffect(() => {
        const fib = ibd.find(ib => ib.page == 'About')

        setInnerBan(fib)
    }, [
        ibd
    ])


    return (
        <>
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
                                <li>About</li>
                            </ul>
                            <h2>{innerBan?.collageName}</h2>
                        </div>
                    </div>
                </section>
                <div className="pt-120">

                    <HomeAbout />
                </div>
                <div className={(missionData.status == '0') ? 'd-none' : 'container'}>

                    <div className="row">
                        <div className="col-lg-12 vismison_outsection">
                            <div className="section-title text-left">
                                <div className="section-sub-title-box">
                                    <p className="section-sub-title">{missionData.firstTitle}</p>
                                    <div className="section-title-shape-1">
                                        <img src={book1} alt />
                                    </div>
                                </div>
                            </div>
                            <p className="icareinner_abouttext">
                                {missionData.collageDesc}
                            </p>
                            <ul className="mvlstarea">
                                <li>
                                    <span className="icon-confirmation" />
                                    {missionData.subone}
                                </li>
                                <li>
                                    <span className="icon-confirmation" />
                                    {missionData.subTwo}
                                </li>
                                <li>
                                    <span className="icon-confirmation" />
                                    {missionData.subThree}
                                </li>
                                <li>
                                    <span className="icon-confirmation" />
                                    {missionData.subFour}
                                </li>
                                <li>
                                    <span className="icon-confirmation" />
                                    {missionData.subFive}
                                </li>
                                <li>
                                    <span className="icon-confirmation" />
                                    {missionData.subSix}
                                </li>
                            </ul>
                            <div className="section-title text-left">
                                <div className="section-sub-title-box">
                                    <p className="section-sub-title">{missionData.secondTitle}</p>
                                    <div className="section-title-shape-1">
                                        <img src={book1} alt />

                                    </div>
                                </div>
                            </div>
                            <p className="icareinner_abouttext">
                                {missionData.secondDesc}
                            </p>
                        </div>
                    </div>
                </div>

                <section className="team-page">
                    <div className="container">


                        <div className="section-title text-left">
                            <div className="section-sub-title-box">
                                <p className="section-sub-title"> Meet Our Team</p>
                                <div className="section-title-shape-1">
                                    <img src={book1} alt />

                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {
                                filterteam.map(t =>

                                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                        <div className="team-one__single">
                                            <div className="team-one__img-box">
                                                <div className="team-one__img">
                                                    <img src={`https://whispering-woodland-88721.herokuapp.com/${t.image}`} alt />
                                                </div>
                                                <ul className="list-unstyled team-one__social">
                                                    <li><a href={t.social1} ><i className="fab fa-facebook-square" /></a></li>
                                                    <li><a href="#"><i className="fab fa-twitter" /></a></li>

                                                    <li><a href="#"><i className="fab fa-instagram" /></a></li>
                                                </ul>
                                            </div>
                                            <div className="team-one__content-box">
                                                <div className="team-one__content">
                                                    <h3 className="team-one__name"><a href="team-details.html">{t.membername}</a></h3>
                                                    <p className="team-one__sub-title">{t.designation}</p>
                                                    <ul className="list-unstyled team-one__social-two">
                                                        <li><a href="#"><i className="fas fa-share-alt" /></a></li>
                                                    </ul>
                                                    <div className="team-one__shape">
                                                        <img src="assets/images/shapes/team-one-shape.png" alt />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </section>



                <Testimonial />
                <Awards />
                <Footer />
            </div>

        </>
    );
};

export default Aboutpage;