import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../api";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useLocation, Link, useParams } from 'react-router-dom';

const BannerDetails = () => {


    const { banner } = useParams();

    const [loading, setLoading] = useState(false);



    const [banners, setbanners] = useState({});
    const [imageURL, setImageURL] = useState('');

    useEffect(() => {
        fetch(`https://whispering-woodland-88721.herokuapp.com/banner/${banner}`)
            .then(res => res.json())
            .then(data => setbanners(data));

        // setValue('title', `${banners.title}`)
        // setValue('subtitle', `${banners.subtitle}`)
        // setValue('link', `${banners.link}`)
        // setValue('desc', `${banners.desc}`)
        // setValue('picture', `${banners.picture}`)
    }, [banner, loading])

    useEffect(() => {
        setValue('title', `${banners.title}`)
        setValue('subtitle', `${banners.subtitle}`)
        setValue('link', `${banners.link}`)
        setValue('desc', `${banners.desc}`)
        setValue('picture', `${banners.picture}`)
    }, [banners.title, banners.subtitle, banners.desc, banners.picture])



    console.log(banners.picture)





    const { register, handleSubmit, reset, setValue } = useForm();








    const onSubmit = async (data) => {



        console.log(data)



        let serviceData = {
            ...data,
            picture: imageURL,
        };


        console.log(serviceData)
        const res = await fetcher.put(`update-banner/${banner}`, serviceData);
        console.log(serviceData, res.status);

        if (res.status == 200) {
            toast.success('Data Successfully uploaded')
            reset();
            setImageURL("");
            setLoading(!loading)
        }
        else {
            toast.error('Fail to update data')

        }
    };

    const handleUploadImage = (event) => {
        const image = event.target.files[0];

        const formData = new FormData();

        formData.append("image", image);

        axios
            .post(
                "https://whispering-woodland-88721.herokuapp.com/api/images",
                formData
            )
            .then((res) => {
                console.log(res);
                setImageURL(res?.data?.result?.filename)

            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='addbanner'>

            {/* <img src={banner1} /> */}

            <div className="row">
                <div className="col-xl-9 mx-auto">

                    <div className="card border-top border-0 border-4 border-info">
                        <div className="card-body">
                            <div className="border p-4 rounded">
                                <div className="card-title d-flex align-items-center">
                                    <div><i className="bx bxs-user me-1 font-22 text-info" />
                                    </div>
                                    <h5 className="mb-0 text-info">Update Banner</h5>
                                </div>
                                <hr />


                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div className="row mb-3">
                                        <label htmlFor="inputEnterYourName" className="col-sm-3 col-form-label">Banner Title </label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name='title' id="inputEnterYourName" placeholder="Enter Your Name"
                                                setValue={banners?.title} defaultValue={banners?.title}   {...register("title")}

                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="inputEnterYourName" className="col-sm-3 col-form-label">Enter Subtitle Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name='subtitle' id="inputEnterYourName" placeholder="Enter Your Name"
                                                {...register("subtitle")}
                                                defaultValue={banners?.subtitle}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="inputEnterYourName" className="col-sm-3 col-form-label">Banner Link</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name='link' id="inputEnterYourName" placeholder="Enter Your Name"
                                                {...register("link")}
                                                defaultValue={banners?.link}
                                            />
                                        </div>
                                    </div>




                                    <div className="row mb-3">
                                        <label htmlFor="inputAddress4" className="col-sm-3 col-form-label">Banner Description</label>
                                        <div className="col-sm-9">
                                            <textarea className="form-control" id="inputAddress4" rows={3} placeholder="Address" name='desc'
                                                {...register("desc")}
                                                defaultValue={banners?.desc}
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-9 mx-auto">

                                            <div class="card">
                                                <div class="card-body">
                                                    <form>
                                                        <input id="image-uploadify" name='picture' type="file" onChange={handleUploadImage} />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-sm-3 col-form-label" />
                                        <div className="col-sm-9">
                                            <img src={`https://whispering-woodland-88721.herokuapp.com/${banners.picture}`} id='singleImage' />

                                            <button type="submit" className="btn btn-info px-5">Submit</button>
                                        </div>
                                    </div>
                                </form>




                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default BannerDetails;