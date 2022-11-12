import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import book1 from '../images/shapes/section-title-shape-1.png'
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeAbout from '../components/HomeAbout';
import { useForm } from "react-hook-form";
import aboutimg from '../images/resources/iabout1.jpg'
import fetcher from "../api";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';


const Career = () => {
    const [toggle, setToggle] = useState(false);
    const [mission, setmission] = useState([]);
    const [missionData, setmissionData] = useState({});
    const [filterteam, setFilterTeam] = useState([])
    const [team, setTeam] = useState([]);

    const [imageURL, setImageURL] = useState("");

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {

        const serviceData = {
            ...data,

            image: imageURL,
        };
        console.log(serviceData)
        const res = await fetcher.post(`resume_post`, serviceData);
        if (res.data.acknowledged == true) {
            toast.success("Data successfully updated")
            reset();
            setToggle(!toggle)
            setImageURL("");
        }
        else {
            toast.error('Fail to update data')
            console.log(data.status);
        }




    };

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
    const handleUploadImage = (event) => {
        // setLoading(true);
        const image = event.target.files[0];

        const formData = new FormData();

        formData.append("image", image);

        axios
            .post(
                "https://whispering-woodland-88721.herokuapp.com/api/images",
                formData
            )
            .then((res) => {
                setImageURL(res.data.result.filename)

                // setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };





    return (
        <>
            <div>

                <Header id="header" />
                {/*Page Header Start*/}
                <section className="page-header" id='about-top'>
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

                    <div className={''}>
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
                                                        <img src={aboutimg} alt />

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
                                                    <h2 className="section-title__title">Indian Centre for Advancement of
                                                        Research and Education, Haldia</h2>
                                                </div>
                                                <p className="about-one__text">Applications are invited from interested candidates having Diploma in Civil Engineering preferably with experience for ICARE Projects and for maintenance & constructions of buildings and internal roads.

                                                    Application along with bio-data with all supporting documents should reach to the above address within 19.09.2015.</p>

                                                <h2 className="section-title__title">Wanted Diploma Civil Engineer</h2>
                                                <div className="yl-about-qoute">
                                                    <span>ICARE Complex, P.O. Hatiberia - 721 657, Haldia,
                                                        Dist. Purba Medinipur
                                                        Phone : (03224) 255275/ 255843</span>
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
                </div>
                <section className="contact-page">
                    <div className="contact-page-shape-1">
                        {/* <img src="assets/images/shapes/contact-page-shape-1.png" alt /> */}
                    </div>
                    <div className="container">
                        <div className="section-title text-center">
                            <div className="section-sub-title-box">
                                <p className="section-sub-title"> Upload Resume</p>
                                <div className="section-title-shape-1">
                                    <img src="assets/images/shapes/section-title-shape-1.png" alt />
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="contact-page__form">






                                    <form className="comment-one__form contact-form-validated" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="comment-form__input-box">
                                                    <input type="text" placeholder="Name" name="name" {...register("name", { required: true })} />
                                                    {errors.name?.type === 'required' && "First name is required"}
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="comment-form__input-box">
                                                    <input type="email" placeholder="Email" name="email"
                                                        {...register("email", { required: true })}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="comment-form__input-box">
                                                    <input type="text" placeholder="Phone" name="phone"
                                                        {...register("phone")}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="comment-form__input-box">
                                                    <input type="text" placeholder="Post Applying for" name="subject"
                                                        {...register("subject", { required: true })}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="comment-form__input-box">
                                                    <input type="text" placeholder="Institute Applying to" name="subject"
                                                        {...register("subject", { required: true })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">


                                                <div class="card">
                                                    <div class="card-body">
                                                        <form>
                                                            <input placeholder='upload resume' id="image-uploadify" type="file" onChange={handleUploadImage} />
                                                        </form>
                                                    </div>
                                                </div>


                                            </div>

                                        </div>
                                        <div className="comment-form__btn-box">
                                            <button type="submit" className="thm-btn comment-form__btn"> <i className="fa fa-arrow-right" /> Submit</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </section >





                <Footer />
            </div>

        </>
    );
};

export default Career;