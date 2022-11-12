import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../../api";
import { ToastContainer, toast } from 'react-toastify';

import { Link, useParams } from "react-router-dom";

const TestimonialDetail = () => {

    const { testimonial } = useParams();

    const [loading, setLoading] = useState(false);

    const [testimonials, setTestimonials] = useState({});
    const [toggle, setToggle] = useState(false);


    useEffect(() => {
        fetch(`https://whispering-woodland-88721.herokuapp.com/testimonial_home_detail/${testimonial}`)
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [toggle]);
    console.log(testimonials, toggle)


    useEffect(() => {
        setValue('desc', `${testimonials.desc}`)
        setValue('username', `${testimonials.username}`)

    }, [testimonials.desc])


    const { register, handleSubmit, reset, setValue } = useForm();




    const onSubmit = async (data) => {
        const serviceData = {
            ...data

        };

        const res = await fetcher.put(`testimonial_update/${testimonial}`, serviceData);
        toast.success("Data successfully updated")

        console.log(res);
        reset();

        setToggle(!toggle)
    };




    return (
        <div>
            <div className="row">
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
                                name='username'
                                class='input input-bordered'
                                {...register("username")}
                            />
                        </div>
                        <div class='form-control'>
                            <label class='label'>
                                <span class='label-text'>Review Description</span>
                            </label>
                            <textarea
                                name='desc'
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

        </div>
    );
};

export default TestimonialDetail;