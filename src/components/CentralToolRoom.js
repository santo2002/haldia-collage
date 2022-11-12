import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import book1 from '../images/shapes/section-title-shape-1.png'
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeAbout from '../components/HomeAbout';
import aboutimg from '../images/resources/iabout1.jpg'


const CentralToolRoom = () => {
    const [toggle, setToggle] = useState(false);
    const [mission, setmission] = useState([]);
    const [missionData, setmissionData] = useState({});
    const [filterteam, setFilterTeam] = useState([])
    const [team, setTeam] = useState([]);






    const [about, setAbout] = useState([]);
    const [aboutFull, setAboutFull] = useState({})

    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/toolroom_get')
            .then(res => res.json())
            .then(data => setAbout(data));

    }, [toggle])
    useEffect(() => {
        about.map(a => setAboutFull(a))
    }, [about])
    console.log(aboutFull)




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
        const fib = ibd.find(ib => ib.page == 'Career')

        setInnerBan(fib)
    }, [
        ibd
    ])


    return (
        <>
            <div>

                <Header />
                {/*Page Header Start*/}
                <section className="page-header" id='toolroom'>
                    <div className="page-header-bg" style={{ backgroundImage: `url(https://whispering-woodland-88721.herokuapp.com/${innerBan?.image})` }}>
                    </div>
                    <div className="container">
                        <div className="page-header__inner">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li><a href="index.html">Home</a></li>
                                <li><span>/</span></li>
                                <li>Career</li>
                            </ul>
                            <h2>{innerBan?.collageName}</h2>
                        </div>
                    </div>
                </section>
                <div className="pt-120">

                    {(aboutFull.status == '1') &&
                        <div className={``}>
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
                                                            <img src={`https://whispering-woodland-88721.herokuapp.com/${aboutFull?.image}`} alt />

                                                        </div>
                                                        <div className="about-one__line">
                                                            <img src="assets/images/shapes/about-one-line.png" alt />
                                                        </div>

                                                        <div className="about-one__big-text">icare</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="about-one__right">
                                                    <div className="section-title text-left">
                                                        <div className="section-sub-title-box">
                                                            <p className="section-sub-title">Career at Icare</p>
                                                            <div className="section-title-shape-1">
                                                                <img src="assets/images/shapes/section-title-shape-1.png" alt />
                                                            </div>
                                                        </div>
                                                        <h2 className="section-title__title"> {aboutFull.titlte2}</h2>


                                                        {/* setValue('titlte2', `${aboutFull.titlte2}`)
                                                        setValue('title1', `${aboutFull.title1}`)
                                                        setValue('descOne', `${aboutFull.descOne}`)
                                                        setValue('descTwo', `${aboutFull.descTwo}`) */}

                                                    </div>
                                                    <p className="about-one__text">{aboutFull.descOne}

                                                    </p>

                                                    <h2 className="section-title__title"> {aboutFull.title1}</h2>
                                                    <p className="about-one__text">{aboutFull.descTwo}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </section>


                        </div>

                    }
                </div>


                <Footer />
            </div>

        </>
    );
};

export default CentralToolRoom;