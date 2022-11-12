import React, { useEffect, useState } from 'react';


const FeatureTop = () => {
    const [features, setFeatures] = useState([]);
    const [remainings, setRemaining] = useState([]);


    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/feature_home')
            .then(res => res.json())
            .then(data => setFeatures(data));
    }, [])
    useEffect(() => {
        const remaining = features.filter(b => b.status == "1")
        setRemaining(remaining)



    }, [features])
    console.log(features)
    return (
        <section className="feature-one">
            <div className="container">
                <div className="feature-one__inner">
                    <div className="feature-one__dot">
                        <img src="assets/images/shapes/feature-one-dot.png" alt />
                    </div>
                    <div className="row">


                        {
                            remainings.map(f =>
                                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                                    <div className="feature-one__single">
                                        <div className="feature-one__top">
                                            <div className="feature-one__icon">
                                                <span className="icon-roof-5"><i className={f?.fontLink} /></span>
                                            </div>
                                            <div className="feature-one__title-box">
                                                <h3 className="feature-one__title"><a href="about.html">{f?.title}</a></h3>
                                            </div>
                                        </div>
                                        <div className="feature-one__single-inner">
                                            <p className="feature-one__text">{f?.desc.slice(0, 59)}...</p>
                                            <div className="feature-one__read-more">
                                                <a href={f?.readMoreLink}>Read More <i className="fa fa-arrow-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }


                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureTop;