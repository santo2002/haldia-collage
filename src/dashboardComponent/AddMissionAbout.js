import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import fetcher from "../api";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';



const AddMissionAbout = () => {
    const [imageURLOne, setImageURLOne] = useState("");
    const [imageURLTwo, setImageURLTwo] = useState("");
    const [loading, setLoading] = useState(false);
    const [mission, setmission] = useState([]);
    const [missionData, setmissionData] = useState({});
    const [toggle, setToggle] = useState(false);


    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/mission_page')
            .then(res => res.json())
            .then(data => setmission(data))
    }, [toggle]);

    useEffect(() => {
        mission.map(a => setmissionData(a))
    }, [mission]);

    const { register, handleSubmit, reset, setValue } = useForm();

    const onSubmit = async (data) => {
        const testimonialData = {
            ...data,
            imageOne: imageURLOne,
            imageTwo: imageURLTwo


        };
        console.log(testimonialData)

        const res = await fetcher.put(`admission_vission_update/${missionData._id}`, testimonialData);
        toast.success('Data Successfully uploaded!')
        reset();
        setImageURLOne(" ")
        setImageURLTwo('')
    };

    const handleEdit = () => {
        console.log(missionData._id)
        setValue('subone', `${missionData.subone}`)
        setValue('subTwo', `${missionData.subTwo}`)
        setValue('subThree', `${missionData.subThree}`)
        setValue('firstTitle', `${missionData.firstTitle}`)
        setValue('imageTwo', `${missionData.imageTwo}`)
        setValue('imageOne', `${missionData.imageOne}`)
        setValue('percentage', `${missionData.percentage}`)




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

        const res = await fetcher.put(`admission_page_status/${id}`, statusData);
        console.log(res)
        // toast('Data Successfully uploaded')
    }

    const handleUploadImageOne = (event) => {
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
                setImageURLOne(res.data.result.filename)

                // setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const handleUploadImageTwo = (event) => {
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
                setImageURLTwo(res.data.result.filename)

                // setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };




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
                                            <label htmlFor="firstTitle" className="col-sm-3 col-form-label"> Title</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" placeholder="Enter firstTitle"
                                                    {...register("firstTitle")}

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
                                            <label htmlFor="percentage" className="col-sm-3 col-form-label">Percentage</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" placeholder="Enter Your Name"
                                                    {...register("percentage")}

                                                />
                                            </div>
                                        </div>



                                        <div class="row">
                                            <div class="col-xl-6 mx-auto">

                                                <div class="card">
                                                    <div class="card-body">
                                                        <form>
                                                            <label htmlFor="imageone" className="col-sm-8 col-form-label">Image One</label>
                                                            <input id="image-uploadify" type="file" onChange={handleUploadImageOne} />
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-xl-6 mx-auto">

                                                <div class="card">
                                                    <div class="card-body">
                                                        <form>
                                                            <label htmlFor="imagetwo" className="col-sm-8 col-form-label">Image Two</label>
                                                            <input id="image-uploadify" type="file" onChange={handleUploadImageTwo} />
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
                                        <th scope="col">First Title</th>
                                        <th scope="col">Percentage</th>



                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{missionData.firstTitle}</td>

                                        <td>{missionData.percentage} </td>

                                        <td>
                                            <button
                                                className={(missionData.status == "1") ? 'btn btn-success' : "btn btn-danger"}
                                                onClick={() => statusChange(missionData._id, missionData.status)}>{missionData.status == '1' ? "Active" : "Inactive"}</button>
                                        </td>

                                        <td>

                                            <button onClick={handleEdit}
                                                className="text-primary border-0"
                                            >      <i class="fa-solid fa-pen-to-square"></i>
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

export default AddMissionAbout;