import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import fetcher from "../api";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';



const AddCollageDetailsMore = () => {
    const [imageURLOne, setImageURLOne] = useState("");
    const [imageURLTwo, setImageURLTwo] = useState("");
    const [loading, setLoading] = useState(false);
    const [mission, setmission] = useState([]);
    const [missionData, setmissionData] = useState({});
    const [toggle, setToggle] = useState(false);


    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/collage_details_about_get')
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




        };
        console.log(testimonialData, data.collage)

        const res = await fetcher.put(`collage_details_more_update/${data.collage}`, testimonialData);

        console.log(testimonialData)
        setToggle(!toggle)

        toast.success('Data Successfully uploaded!')
        reset();


        setToggle(!toggle)
    };

    const handleEdit = (id) => {
        console.log(id)
        const remaining = mission2.find(r => r._id == id)
        setValue('phone', `${remaining.phone}`)
        setValue('address', `${remaining.address}`)

        setValue('websiteLink', `${remaining.websiteLink}`)
        setValue('collage', `${remaining.collage}`)







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

        const res = await fetcher.put(`collage_details_more_status/${id}`, statusData);
        console.log(res)
        // toast('Data Successfully uploaded')
    }

    const [mission2, setmission2] = useState([]);




    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/collage_details_more_get')
            .then(res => res.json())
            .then(data => setmission2(data))
    }, [toggle]);


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
                                            <div className="col-lg-9 mx-auto">
                                                <select class="form-select "
                                                    {...register("collage", { required: true })}

                                                    aria-label="Default select example">
                                                    <option selected>Select the Collage </option>
                                                    <option value="Haldia Institute of Technology">Haldia Institute of Technology</option>
                                                    <option value="ICARE Institute of Medical Science & Research & Dr.Bidhan Chandra Roy Hospital">ICARE Institute of Medical Science & Research & Dr.Bidhan Chandra Roy Hospital</option>
                                                    <option value="Haldia Institute of Dental Science & Research">	Haldia Institute of Dental Science & Research</option>
                                                    <option value="Haldia Institute of Maritime Studies and Research">Haldia Institute of Maritime Studies and Research</option>
                                                    <option value="Haldia Law College">Haldia Law College</option>
                                                    <option value="Global Institute of Science & Technology">Global Institute of Science & Technology</option>
                                                    <option value="Haldia Institute of Health Science">	Haldia Institute of Health Science</option>
                                                    <option value="Institute of Education, Haldia">Institute of Education, Haldia</option>
                                                    <option value="Haldia Institute of Management">Haldia Institute of Management</option>
                                                    <option value="Haldia School of Languages">	Haldia School of Languages</option>
                                                    <option value="Vidyasagar Primary Teachers Training Institute">Vidyasagar Primary Teachers Training Institute</option>
                                                    <option value="Research & Development Centre">	Research & Development Centre</option>
                                                    <option value="Dr B.C. Roy Hospital">Dr B.C. Roy Hospital</option>
                                                    <option value="Haldia Institute of Nursing Science">Haldia Institute of Nursing Science</option>
                                                    <option value="INDIRA GANDHI NATIONAL OPEN UNIVERSITY (IGNOU)">INDIRA GANDHI NATIONAL OPEN UNIVERSITY (IGNOU)</option>
                                                </select>
                                            </div>

                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="phone" className="col-sm-3 col-form-label"> Phone No</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" placeholder="Enter phone no"
                                                    {...register("phone", { required: true })}

                                                />
                                            </div>
                                        </div>



                                        <div className="row mb-3">
                                            <label htmlFor="address" className="col-sm-3 col-form-label">Address</label>
                                            <div className="col-sm-9">
                                                <textarea type="text" className="form-control" placeholder="Enter Collage Address"
                                                    {...register("address")}

                                                />
                                            </div>
                                        </div>


                                        <div className="row mb-3">
                                            <label htmlFor="websiteLink" className="col-sm-3 col-form-label"> websiteLink </label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" placeholder="Enter websiteLink no"
                                                    {...register("websiteLink", { required: true })}

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
                                        <th scope="col">Collage Name</th>
                                        <th scope="col">Contact</th>




                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        mission2.map((m, i) =>
                                            <tr>
                                                <th scope="row">{i + 1}</th>
                                                <td>{m?.collage}</td>
                                                <td>{m?.phone}</td>



                                                <td>
                                                    <button
                                                        className={(m.status == "1") ? 'btn btn-success' : "btn btn-danger"}
                                                        onClick={() => statusChange(m._id, m.status)}>{m.status == '1' ? "Active" : "Inactive"}</button>
                                                </td>

                                                <td>

                                                    <button onClick={() => handleEdit(m._id)}
                                                        className="text-primary border-0"
                                                    >      <i class="fa-solid fa-pen-to-square"></i>
                                                    </button>
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

export default AddCollageDetailsMore;