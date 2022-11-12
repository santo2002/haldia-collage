import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import fetcher from "../../api";
import { ToastContainer, toast } from 'react-toastify';
import { useParams, Link } from 'react-router-dom';

const FeatureDetails = () => {
    const { feature } = useParams();





    const { register, handleSubmit, reset, setValue } = useForm();
    const [toggle, setToggle] = useState(false);


    const [features, setFeatures] = useState({});

    useEffect(() => {
        fetch(`https://whispering-woodland-88721.herokuapp.com/feature_home/${feature}`)
            .then(res => res.json())
            .then(data => setFeatures(data));
    }, [feature])



    useEffect(() => {
        setValue('title', `${features.title}`)
        setValue('fontLink', `${features.fontLink}`)
        setValue('desc', `${features.desc}`)
        setValue('readMoreLink', `${features.readMoreLink}`)
    }, [features.title, features.fontLink, features.desc, features.readMoreLink])


    const onSubmit = async (data) => {
        const featureData = {
            ...data

        };

        console.log(featureData)
        const res = await fetcher.put(`home_feature/${feature}`, featureData);
        console.log(res);
        reset();
        toast('Data Successfully updated')

    };


    return (
        <div className=''>




            <div className="row">
                <div className="col-xl-9 mx-auto">

                    <div className="card border-top border-0 border-4 border-info">
                        <div className="card-body">
                            <div className="border p-4 rounded">
                                <div className="card-title d-flex align-items-center">
                                    <div><i className="bx bxs-user me-1 font-22 text-info" />
                                    </div>
                                    <h5 className="mb-0 text-info">Updated Feature</h5>
                                </div>
                                <hr />


                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div className="row mb-3">
                                        <label htmlFor="inputEnterYourName" className="col-sm-3 col-form-label">Feather Title </label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="inputEnterYourName" placeholder="Enter Your Name"
                                                {...register("title")}

                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="inputEnterYourName" className="col-sm-3 col-form-label">Font Aswome Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="inputEnterYourName" placeholder="Enter Your Name"
                                                {...register("fontLink")}

                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="inputEnterYourName" className="col-sm-3 col-form-label">Read More Link</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="inputEnterYourName" placeholder="Enter Your Name"
                                                {...register("readMoreLink")}

                                            />
                                        </div>
                                    </div>




                                    <div className="row mb-3">
                                        <label htmlFor="inputAddress4" className="col-sm-3 col-form-label">Feature Description</label>
                                        <div className="col-sm-9">
                                            <textarea className="form-control" id="inputAddress4" rows={3} placeholder="Address"
                                                {...register("desc")}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <label className="col-sm-3 col-form-label" />
                                        <div className="col-sm-9">
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

export default FeatureDetails;