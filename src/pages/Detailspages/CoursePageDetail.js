import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import book1 from '../../images/shapes/section-title-shape-1.png'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HomeAbout from '../../components/HomeAbout';
import shadow from '../../images/shapes/about-one-line.png'


const CoursePageDetail = () => {
    const [toggle, setToggle] = useState(false);
    const [mission, setmission] = useState([]);
    const [missionData, setmissionData] = useState({});
    const [filterteam, setFilterTeam] = useState([])
    const [team, setTeam] = useState([]);

    const [collaneNa1, setCollageNa1] = useState({})





    const location = useLocation();
    const path = location?.pathname.split("/")[2].toLocaleLowerCase();

    console.log(path)

    const [about, setAbout] = useState([]);
    const [aboutFull, setAboutFull] = useState({})

    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/detail_course_get')
            .then(res => res.json())
            .then(data => setAbout(data));

    }, [toggle])






    const [courseDetail, setCourseDetail] = useState({})




    useEffect(() => {

        const titlecollage = about.find(t => t?.title1.toLocaleLowerCase().split(' ').join('-') == path);
        about.find(t => console.log(t));
        console.log(titlecollage, titlecollage?.title1)
        // const { image, descOne
        //     , title1 } = titlecollage;


        setCourseDetail(titlecollage)

        Object.entries(titlecollage?.collagename || {}).forEach(([key, val]) => {

            setAboutFull(val)

        });


    }, [about])
    const [cccnamess, setcccnamesss] = useState([])
    const [ccclinkss, setccclinksss] = useState([])


    const [collagenamess, setCollagenamess] = useState([])

    useEffect(() => {

        let jjj = []

        Object.entries(aboutFull).forEach(([key, val]) => {

            jjj.push(val)
            console.log(val)
            setCollagenamess(jjj)
        });


    }, [aboutFull])
    useEffect(() => {

        const link = collagenamess.filter(t => t.includes('http'))
        const cnamesss = collagenamess.filter(t => !t.includes('http'))
        setcccnamesss(cnamesss)
        setccclinksss(link)

        let colllnam1 = { ...collagenamess }


        let objn1 = colllnam1[0]
        let objl1 = colllnam1[1]

        let objn2 = colllnam1[2]
        let objl2 = colllnam1[3]

        let objn3 = colllnam1[4]
        let objl3 = colllnam1[5]

        let objn4 = colllnam1[6]
        let objl4 = colllnam1[7]


        console.log(objn1, objl1, objn4, objl4)

    }, [collagenamess])

    useEffect(() => {






    }, [cccnamess, ccclinkss])








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


    const [coursedetailsssss, setcoursedetailsssss] = useState([])
    const [coursedetailssssff, setcoursedetailsssff] = useState([])

    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/course_home')
            .then(res => res.json())
            .then(data => setcoursedetailsssss(data))
    }, []);


    useEffect(() => {
        const fib = ibd.find(ib => ib.page == 'Career')

        setInnerBan(fib)
    }, [
        ibd
    ])
    useEffect(() => {
        const fib = coursedetailsssss.filter(ib => ib.collage.split(' ').join('-').toLocaleLowerCase() == path)
        const ttt = coursedetailsssss.filter(ib => console.log(ib.collage.toLocaleLowerCase()))
        console.log(ttt)
        setcoursedetailsssff(fib)
    }, [
        coursedetailsssss, path
    ])
    console.log(about)

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
                                                        <img src={`https://whispering-woodland-88721.herokuapp.com/${courseDetail?.image}`} alt />

                                                    </div>
                                                    <div className="about-one__line">
                                                        <img src={shadow} alt />
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
                                                            <img src={book1} alt />
                                                        </div>
                                                    </div>
                                                    <h2 className="section-title__title"> {courseDetail?.title1}</h2>


                                                    {/* setValue('titlte2', `${aboutFull.titlte2}`)
                                                        setValue('title1', `${aboutFull.title1}`)
                                                        setValue('descOne', `${aboutFull.descOne}`)
                                                        setValue('descTwo', `${aboutFull.descTwo}`) */}

                                                </div>
                                                <p className="about-one__text"> {courseDetail?.descOne}

                                                </p>



                                                <ul className="list-unstyled about-three__point">


                                                    {
                                                        coursedetailssssff.map(c =>
                                                            <li>
                                                                <div className="icon">
                                                                    <i className="fa fa-check" />
                                                                </div>
                                                                <div className="text">
                                                                    <a href={c?.link} target='blanck' ><p>{c?.title}</p></a>
                                                                </div>
                                                            </li>

                                                        )}


                                                </ul>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </section>


                    </div>


                </div>


                <Footer />
            </div>

        </>
    );
};

export default CoursePageDetail;