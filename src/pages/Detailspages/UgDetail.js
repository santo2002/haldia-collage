import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import fetcher from "../../api";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useParams } from 'react-router-dom';

const UgDetail = () => {



    const { register, handleSubmit, reset, setValue } = useForm();
    const [toggle, setToggle] = useState(false);


    const [features, setFeatures] = useState({});
    const { ug } = useParams();
    useEffect(() => {
        fetch(`https://whispering-woodland-88721.herokuapp.com/ug/${ug}`)
            .then(res => res.json())
            .then(data => setFeatures(data));
    }, [toggle])

    useEffect(() => {
        setValue('title', `${features.title}`)
        setValue('sits', `${features.sits}`)


    }, [features.title, features.sits])

    const onSubmit = async (data) => {
        const featureData = {
            ...data


        };

        const res = await fetcher.put(`ug_update/${ug}`, featureData);
        console.log(res);
        reset();
        toast('Data Successfully uploaded')
        setToggle(!toggle)

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
                                    <h5 className="mb-0 text-info">Add Banner</h5>
                                </div>
                                <hr />


                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div className="row mb-3">
                                        <label htmlFor="inputEnterYourName" className="col-sm-3 col-form-label"> Title </label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="title" placeholder="Enter Your Name" name="title"
                                                {...register("title")}

                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="sits" className="col-sm-3 col-form-label">Sit Amount</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name='sits' id="sits" placeholder="Enter Your Name"
                                                {...register("sits")}

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

export default UgDetail;