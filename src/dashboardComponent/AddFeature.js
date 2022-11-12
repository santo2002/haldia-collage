import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import fetcher from "../api";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';



const AddFeature = () => {

    const { register, handleSubmit, reset } = useForm();
    const [toggle, setToggle] = useState(false);


    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/feature_home')
            .then(res => res.json())
            .then(data => setFeatures(data));
    }, [toggle])


    const onSubmit = async (data) => {
        const featureData = {
            ...data,
            status: '1'

        };

        const res = await fetcher.post("home_feature", featureData);
        console.log(res);
        reset();
        toast('Data Successfully uploaded')

    };





    const deleteFeature = (id) => {
        const proced = window.confirm('Are You Sure??');
        console.log(id)
        if (proced) {

            const url = `https://whispering-woodland-88721.herokuapp.com/feature_home/${id}`;
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data.acknowledged);
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

        const res = await fetcher.put(`feature-status/${id}`, statusData);
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
                                        <h5 className="mb-0 text-info">Add Banner</h5>
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



                <div className="row" >
                    <div className="col">
                        <div class="card">
                            <div class="card-body">
                                <table class="table table-bordered mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Font Icon</th>

                                            <th scope="col">Button Link</th>

                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            features.map((b, i) =>
                                                <tr>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{b.title}</td>
                                                    <td>{b.fontLink}</td>
                                                    <td>
                                                        {b.readMoreLink}

                                                    </td>





                                                    <td><button className={(b.status == "1") ? 'btn btn-success' : "btn btn-danger"} onClick={() => statusChange(b._id, b.status)}>{b.status == '1' ? "Active" : "Inactive"}</button></td>
                                                    <td>
                                                        <button className="text-danger btn border-0" onClick={() => deleteFeature(b._id)} > <i class="fa-solid fa-trash-can"></i></button>
                                                        <Link className="text-primary "
                                                            to={`${b._id}`}
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

            </div>
        </>
    );
};

export default AddFeature;