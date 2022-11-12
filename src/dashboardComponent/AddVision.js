import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import fetcher from "../api";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';



const AddVision = () => {
    const [imageURL, setImageURL] = useState("");
    const [loading, setLoading] = useState(false);
    const [mission, setmission] = useState([]);
    const [missionData, setmissionData] = useState({});
    const [toggle, setToggle] = useState(false);


    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/vission_home')
            .then(res => res.json())
            .then(data => setmission(data))
    }, [toggle]);

    useEffect(() => {
        mission.map(a => setmissionData(a))
    }, [mission]);

    const { register, handleSubmit, reset, setValue } = useForm();

    const onSubmit = async (data) => {
        const testimonialData = {
            ...data


        };


        const res = await fetcher.put(`home_vission_update/${missionData._id}`, testimonialData);
        toast.success('Data Successfully uploaded!')
        reset();

    };

    const handleEdit = () => {
        console.log(missionData._id)
        setValue('firstTitle', `${missionData.firstTitle}`)
        setValue('collageDesc', `${missionData.collageDesc}`)
        setValue('subone', `${missionData.subone}`)
        setValue('subTwo', `${missionData.subTwo}`)
        setValue('subThree', `${missionData.subThree}`)
        setValue('subFour', `${missionData.subFour}`)
        setValue('subFive', `${missionData.subFive}`)
        setValue('subSix', `${missionData.subSix}`)
        setValue('secondTitle', `${missionData.secondTitle}`)
        setValue('secondDesc', `${missionData.secondDesc}`)


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

        const res = await fetcher.put(`vission-status/${id}`, statusData);
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
                                        <h5 className="mb-0 text-info">Add Mission Vision</h5>
                                    </div>
                                    <hr />


                                    <form onSubmit={handleSubmit(onSubmit)} >
                                        <div className="row mb-3">
                                            <label htmlFor="firstTitle" className="col-sm-3 col-form-label">First Title</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" placeholder="Enter firstTitle"
                                                    {...register("firstTitle")}

                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputAddress4" className="col-sm-3 col-form-label">First Description</label>
                                            <div className="col-sm-9">
                                                <textarea className="form-control" id="inputAddress4" rows={3} placeholder="Address"
                                                    {...register("collageDesc")}
                                                />
                                            </div>
                                        </div>


                                        <div className="row mb-3">
                                            <label htmlFor="subone" className="col-sm-3 col-form-label">Subtitle One</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" placeholder="Enter Your Name"
                                                    {...register("subone")}

                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="subTwo" className="col-sm-3 col-form-label">Subtitle Two</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" placeholder="Enter Your Name"
                                                    {...register("subTwo")}

                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="subThree" className="col-sm-3 col-form-label">Subtitle Three</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" placeholder="Enter Your Name"
                                                    {...register("subThree")}

                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="subFour" className="col-sm-3 col-form-label">Subtitle Four</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" placeholder="Enter Your Name"
                                                    {...register("subFour")}

                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="subFive" className="col-sm-3 col-form-label">Subtitle Five</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" placeholder="Enter Your Name"
                                                    {...register("subFive")}

                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="subSix" className="col-sm-3 col-form-label">Subtitle Six</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" placeholder="Enter Your Name"
                                                    {...register("subSix")}

                                                />
                                            </div>
                                        </div>


                                        <div className="row mb-3">
                                            <label htmlFor="secondTitle" className="col-sm-3 col-form-label">Second Title</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" placeholder="Enter secondTitle"
                                                    {...register("secondTitle")}

                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="secondDesc" className="col-sm-3 col-form-label">Second Description</label>
                                            <div className="col-sm-9">
                                                <textarea className="form-control" rows={3} placeholder="Address"
                                                    {...register("secondDesc")}
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

            <div className="row" >
                <div className="col">
                    <div class="card">
                        <div class="card-body">
                            <table class="table table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First Title</th>
                                        <th scope="col">Second Title</th>



                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{missionData.firstTitle}</td>

                                        <td>{missionData.secondTitle} </td>

                                        <td>
                                            <button
                                                className={(missionData.status == "1") ? 'btn btn-success' : "btn btn-danger"}
                                                onClick={() => statusChange(missionData._id, missionData.status)}>{missionData.status == '1' ? "Active" : "Inactive"}</button>
                                        </td>

                                        <td>

                                            <button
                                                className="text-primary border-0"
                                                onClick={handleEdit}>      <i class="fa-solid fa-pen-to-square"></i>
                                            </button>
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default AddVision;