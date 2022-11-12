import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../api";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useLocation, Link } from 'react-router-dom';


import './AddBanner.css'

const AddBanner = () => {


    const [imageURL, setImageURL] = useState("");
    const [loading, setLoading] = useState(false);



    const [banners, setbanners] = useState([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/banner')
            .then(res => res.json())
            .then(data => setbanners(data));
    }, [toggle])




    const deleteBanner = (id) => {
        const proced = window.confirm('Are You Sure??');
        if (proced) {

            const url = `https://whispering-woodland-88721.herokuapp.com/add-banner/${id}`;
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    toast.success("Successfully delete the data!");
                    setToggle(!toggle)
                    // const remaining = items.filter(item => item._id !== id);
                    // setItems(remaining);
                })


        }

    }



    const statusChange = async (id, stat) => {

        let statusData;

        if (stat == '1') {
            statusData = { status: "0" }
        }

        if (stat == '0') {
            statusData = { status: "1" }
        }


        console.log(statusData)

        const res = await fetcher.put(`banner-status/${id}`, statusData);
        console.log(res)
        setToggle(!toggle)
        toast('Status Changes Successfully')
    }

    const { register, handleSubmit, reset, setValue } = useForm();

    const onSubmit = async (data) => {
        const serviceData = {
            ...data,
            status: '1',
            picture: imageURL,
        };

        const res = await fetcher.post("home_banner", serviceData);



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
        setLoading(true);
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

                setLoading(false);
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
                                    <h5 className="mb-0 text-info">Add Banner</h5>
                                </div>
                                <hr />


                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div className="row mb-3">
                                        <label htmlFor="inputEnterYourName" className="col-sm-3 col-form-label">Banner Title </label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name='title' id="inputEnterYourName" placeholder="Enter Your Name"
                                                {...register("title")}

                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="inputEnterYourName" className="col-sm-3 col-form-label">Enter Subtitle Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name='subtitle' id="inputEnterYourName" placeholder="Enter Your Name"
                                                {...register("subtitle")}

                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="inputEnterYourName" className="col-sm-3 col-form-label">Banner Link</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name='link' id="inputEnterYourName" placeholder="Enter Your Name"
                                                {...register("link")}

                                            />
                                        </div>
                                    </div>




                                    <div className="row mb-3">
                                        <label htmlFor="inputAddress4" className="col-sm-3 col-form-label">Banner Description</label>
                                        <div className="col-sm-9">
                                            <textarea className="form-control" id="inputAddress4" rows={3} placeholder="Address" name='desc'
                                                {...register("desc")}
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
                                        <th scope="col">Subtitle</th>

                                        <th scope="col">Image</th>

                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        banners.map((b, index) =>
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>{b.title}</td>
                                                <td>{b.subtitle}</td>
                                                <td>
                                                    <img id='singleImage' src={`https://whispering-woodland-88721.herokuapp.com/${b.picture}`} className='img-fluid' />

                                                </td>
                                                <td><button className={(b.status == "1") ? 'btn btn-success' : "btn btn-danger"} onClick={() => statusChange(b._id, b.status)}>{b.status == '1' ? "Active" : "Inactive"}</button></td>
                                                <td>
                                                    <button className="text-danger btn border-0" onClick={() => deleteBanner(b._id)} > <i class="fa-solid fa-trash-can"></i></button>
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
    );
};

export default AddBanner;












