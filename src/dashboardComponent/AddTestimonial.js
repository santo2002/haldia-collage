import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import fetcher from "../api";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const AddTestimonial = () => {
    const [toggle, setToggle] = useState(false);

    const [testimonial, setTestimonial] = useState([]);
    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/testimonial_home')
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [toggle])

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const testimonialData = {
            ...data, status: "1"

        };


        const res = await fetcher.post("home_testimonial", testimonialData);
        console.log(res);
        reset();
    };






    const deleteCourse = (id) => {
        const proced = window.confirm('Are You Sure??');
        if (proced) {

            const url = `https://whispering-woodland-88721.herokuapp.com/testimonial_home_delete/${id}`;
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

        let statusData;

        if (stat == '1') {
            statusData = { status: "0" }
        }

        if (stat == '0') {
            statusData = { status: "1" }
        }


        console.log(statusData)

        const res = await fetcher.put(`testimonial-status/${id}`, statusData);
        setToggle(!toggle)
    }


    return (
        <>
            <div className='h-screen w-full flex bg-accent justify-center items-center'>
                <div class='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                    <div class='card-body'>
                        <h1 className='text-center text-2xl'>Add Testimonial</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class='form-control'>
                                <label htmlFor='username' class='label'>
                                    <span class='label-text'>User Name</span>
                                </label>
                                <input
                                    type='text'
                                    id='username'
                                    class='input input-bordered'
                                    {...register("username")}
                                />
                            </div>
                            <div class='form-control'>
                                <label class='label'>
                                    <span class='label-text'>Review Description</span>
                                </label>
                                <textarea

                                    class='input input-bordered'
                                    {...register("desc")}
                                />
                            </div>



                            <div class='form-control mt-6'>
                                <button
                                    type='submit'
                                    class='btn btn-primary'

                                >
                                    Add Feature
                                </button>
                            </div>
                        </form>
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
                                            <th scope="col">Username</th>
                                            <th scope="col">Review Description</th>



                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            testimonial.map((b, i) =>

                                                <tr>
                                                    <th scope="row">{i + 1}</th>

                                                    <td> {b.username}</td>

                                                    <td>{b.desc}</td>



                                                    <td><button className={(b.status == "1") ? 'btn btn-success' : "btn btn-danger"} onClick={() => statusChange(b._id, b.status)}>{b.status == '1' ? "Active" : "Inactive"}</button></td>
                                                    <td>
                                                        <button className="text-danger btn border-0" onClick={() => deleteCourse(b._id)} > <i class="fa-solid fa-trash-can"></i></button>
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

export default AddTestimonial;