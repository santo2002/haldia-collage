import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import fetcher from "../../api";
import { ToastContainer, toast } from 'react-toastify';
import { useParams, Link } from 'react-router-dom';
import axios from "axios";


const CourseDetails = () => {
    const { course } = useParams();





    const { register, handleSubmit, reset, setValue } = useForm();
    const [toggle, setToggle] = useState(false);
    const [imageURL, setImageURL] = useState('');
    const [loading, setLoading] = useState(false);


    const [courses, setcourses] = useState({});

    useEffect(() => {
        fetch(`https://whispering-woodland-88721.herokuapp.com/course-home/${course}`)
            .then(res => res.json())
            .then(data => setcourses(data));
    }, [course])

    console.log(courses);

    useEffect(() => {
        setValue('title', `${courses.title}`)
        setValue('link', `${courses.link}`)
        setValue('picture', `${courses.picture}`)

    }, [courses.title, courses.picture])






    const onSubmit = async (data) => {



        console.log(data)



        let serviceData = {
            ...data,
            picture: imageURL,
        };


        console.log(serviceData)
        const res = await fetcher.put(`course_update/${course}`, serviceData);
        console.log(serviceData, res.status);

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
        const image = event.target.files[0];

        const formData = new FormData();

        formData.append("image", image);

        axios
            .post(
                "https://whispering-woodland-88721.herokuapp.com/api/images",
                formData
            )
            .then((res) => {
                console.log(res);
                setImageURL(res?.data?.result?.filename)

            })
            .catch((error) => {
                console.log(error);
            });
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
                                    <h5 className="mb-0 text-info">Add Courses</h5>
                                </div>
                                <hr />


                                <form onSubmit={handleSubmit(onSubmit)} >



                                    <div className="row mb-3">
                                        <label htmlFor="inputEnterYourName" className="col-sm-3 col-form-label">Course Title </label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="inputEnterYourName" placeholder="Enter Course Title"
                                                {...register("title")}

                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="inputEnterYourName" className="col-sm-3 col-form-label">Collage Link </label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="inputEnterYourName" placeholder="Enter collage Link"
                                                {...register("link")}

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

export default CourseDetails;