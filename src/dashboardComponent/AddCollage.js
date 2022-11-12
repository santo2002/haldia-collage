import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../api";
import { ToastContainer, toast } from 'react-toastify';

import { Link } from "react-router-dom";


const AddCollage = () => {
    const [imageURL, setImageURL] = useState("");
    const [loading, setLoading] = useState(false);

    const [collages, setCollages] = useState([]);
    const [toggle, setToggle] = useState(false);


    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/collage_home')
            .then(res => res.json())
            .then(data => setCollages(data))
    }, [toggle, loading]);
    console.log(collages)

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const serviceData = {
            ...data,
            status: "1",
            image: imageURL,
        };

        const res = await fetcher.post("home-collage", serviceData);



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


    const deleteCourse = (id) => {
        const proced = window.confirm('Are You Sure??');
        if (proced) {

            const url = `https://whispering-woodland-88721.herokuapp.com/collage_home_delete/${id}`;
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged == true) {
                        toast.success('Delete Successfully')
                        reset();
                        setToggle(!toggle)
                    }
                    else {
                        toast.error('Fail to update data')
                        console.log(data.status);
                    }
                })

        }

    }



    const statusChange = async (id, stat) => {
        setToggle(!toggle)
        let statusData;

        if (stat == '1') {
            statusData = { status: "0" }
        }

        if (stat == '0') {
            statusData = { status: "1" }
        }


        console.log(statusData)

        const res = await fetcher.put(`collage-status/${id}`, statusData);
        console.log(res)
        // toast('Data Successfully uploaded')
    }

    return (
        <>
            <div className=''>



                <div className="row">
                    <div className="col-xl-9 mx-auto">

                        <div className="card border-top border-0 border-4 border-info">
                            <div className="card-body">
                                <div className="border p-4 rounded">
                                    <div className="card-title d-flex align-items-center">
                                        <div><i className="bx bxs-user me-1 font-22 text-info" />
                                        </div>
                                        <h5 className="mb-0 text-info">Add Collage</h5>
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
                                                <textarea className="form-control" id="inputAddress4" rows={3} placeholder="Collage Description"
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

            <div className="row" >
                <div className="col">
                    <div class="card">
                        <div class="card-body">
                            <table class="table table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Title</th>


                                        <th scope="col">Image</th>

                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        collages.map((c, i) =>

                                            <tr>
                                                <th scope="row">{i + 1}</th>

                                                <td> {c.collageName}</td>
                                                <td>
                                                    <img src={`https://whispering-woodland-88721.herokuapp.com/${c.image}`} className='img-fluid' />

                                                </td>

                                                <td><button className={(c.status == "1") ? 'btn btn-success' : "btn btn-danger"} onClick={() => statusChange(c._id, c.status)}>{c.status == '1' ? "Active" : "Inactive"}</button></td>
                                                <td>
                                                    <button className="text-danger btn border-0" onClick={() => deleteCourse(c._id)} > <i class="fa-solid fa-trash-can"></i></button>
                                                    <Link className="text-primary "
                                                        to={`${c._id}`}
                                                    > <i class="fa-solid fa-pen-to-square"></i></Link>

                                                </td>
                                            </tr>
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddCollage;
