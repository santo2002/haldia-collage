import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';

const Tenders = () => {

    const [certi, setCeti] = useState([])
    const [toggle, setToggle] = useState(false);


    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/tender_get')
            .then(res => res.json())
            .then(data => setCeti(data));
    }, [toggle])

    const [innerBan, setInnerBan] = useState({});
    const [ibd, setibd] = useState([]);

    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/inner_banner_get')
            .then(res => res.json())
            .then(data => setibd(data))
    }, []);


    useEffect(() => {
        const fib = ibd.find(ib => ib.page == 'Admission')

        setInnerBan(fib)
    }, [
        ibd
    ])

    return (
        <div>
            <Header></Header>
            <section className="page-header">
                <div className="page-header-bg" style={{ backgroundImage: `url(https://whispering-woodland-88721.herokuapp.com/${innerBan?.image})` }}>
                </div>
                <div className="container">
                    <div className="page-header__inner">
                        <ul className="thm-breadcrumb list-unstyled">
                            <li><a href="index.html">Home</a></li>
                            <li><span>/</span></li>
                            <li>Tender</li>
                        </ul>
                        <h2>Our Tenders</h2>
                    </div>
                </div>
            </section>
            <div className='text-center pt-120 ptb-120'>
                {
                    certi.map(c =>
                        c.status == '1' && <div> <img src={`https://whispering-woodland-88721.herokuapp.com/${c.picture}`} className='img-fluid' /></div>)
                }
            </div>
            <Footer />
        </div>
    );
};

export default Tenders;