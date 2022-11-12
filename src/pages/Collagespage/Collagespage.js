import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Awards from '../../components/Awards';
import Collage from '../../components/Collage';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Testimonial from '../../components/Testimonial';

const Collagespage = () => {

    const [collages, setCollages] = useState([]);
    const [remaining, setRemaining] = useState([])

    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/collage_home')
            .then(res => res.json())
            .then(data => setCollages(data))
    }, []);

    useEffect(() => {
        const rem = collages.filter(c => c.status == '1');
        setRemaining(rem)
    }, [collages])


    const [innerBan, setInnerBan] = useState({});
    const [ibd, setibd] = useState([]);

    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/inner_banner_get')
            .then(res => res.json())
            .then(data => setibd(data))
    }, []);


    useEffect(() => {
        const fib = ibd.find(ib => ib.page == 'Colleges')

        setInnerBan(fib)
    }, [
        ibd
    ])

    return (
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
                            <li>Colleges</li>
                        </ul>
                        <h2>{innerBan?.collageName}</h2>
                    </div>
                </div>
            </section>

            <section className='ptb-120'>
                <div className='container'>
                    <div className='row'>

                        {
                            remaining.map(c =>
                                <div className='col-lg-4' >
                                    <div className="services-one__single">
                                        <div className="services-one__img">
                                        <img src={`ourCollageImages/${c?.image}`} alt="image" />

                                        </div>
                                        <div style={{height:'220px'}} className="services-one__content">
                                            <div className="services-one__icon">
                                                <span><i className="fas fa-university" /></span>
                                            </div>
                                            <h3 className="services-one__title">
                                                <Link to={`/collages/${c.collageName.split(' ').join('-')}`}>{c.collageName}</Link></h3>
                                            <p className="services-one__text clgdescription">{c.collageDesc.slice(0, 50) + '......'}</p>
                                            <div className="services-one__read-more">
                                                <Link to={`/collages/${c.collageName.split(' ').join('-')}`}>Read More <i className="fa fa-arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        }

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Collagespage;
