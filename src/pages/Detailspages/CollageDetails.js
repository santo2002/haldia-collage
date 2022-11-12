//eslint - disable - next - line
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../../api";
import { ToastContainer, toast } from 'react-toastify';

import { Link, useParams } from "react-router-dom";

const ColllageDetails = () => {

    const { collage } = useParams();

    const [imageURL, setImageURL] = useState("");
    const [loading, setLoading] = useState(false);

    const [collages, setCollages] = useState({});
    const [toggle, setToggle] = useState(false);


    useEffect(() => {
        fetch(`https://whispering-woodland-88721.herokuapp.com/collage_home_detail/${collage}`)
            .then(res => res.json())
            .then(data => setCollages(data))
    }, [toggle]);
    console.log(collages, toggle)


    useEffect(() => {
        setValue('collageName', `${collages.collageName}`)
        setValue('collageLink', `${collages.collageLink}`)
        setValue('collageDesc', `${collages.collageDesc}`)
        setValue('image', `${collages.image}`)

    }, [collages.collageName, collages.collageLink, setValue, collages.collageDesc, collages.image])


    const { register, handleSubmit, reset, setValue } = useForm();




    const onSubmit = async (data) => {
        const serviceData = {
            ...data,
            image: imageURL,
        };

        const res = await fetcher.put(`collage_update/${collage}`, serviceData);
        toast.success("Data successfully updated")

        console.log(res);
        reset();
        setImageURL("");
        setToggle(!toggle)
    };

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
        <div>
            <div className="row">
                <div className="col-xl-9 mx-auto">

                    <div className="card border-top border-0 border-4 border-info">
                        <div className="card-body">
                            <div className="border p-4 rounded">
                                <div className="card-title d-flex align-items-center">
                                    <div><i className="bx bxs-user me-1 font-22 text-info" />
                                    </div>
                                    <h5 className="mb-0 text-info">Update Collage</h5>
                                </div>
                                <hr />


                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div className="row mb-3">
                                        <label htmlFor="inputEnterYourName" className="col-sm-3 col-form-label">Enter Collage Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="inputEnterYourName" placeholder="Enter Your Name"
                                                {...register("collageName")}

                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="inputEnterYourName" className="col-sm-3 col-form-label">Enter Collage Link</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="inputEnterYourName" placeholder="Enter Your Name"
                                                {...register("collageLink")}

                                            />
                                        </div>
                                    </div>




                                    <div className="row mb-3">
                                        <label htmlFor="inputAddress4" className="col-sm-3 col-form-label">Collage Description</label>
                                        <div className="col-sm-9">
                                            <textarea className="form-control" id="inputAddress4" rows={3} placeholder="Address"
                                                {...register("collageDesc")}
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-9 mx-auto">

                                            <div class="card">
                                                <div class="card-body">
                                                    <form>
                                                        <input id="image-uploadify" type="file" onChange={handleUploadImage} />
                                                    </form>
                                                </div>
                                            </div>
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

export default ColllageDetails;