
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../../api";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useParams } from "react-router-dom";

function DetailsCourseEdit() {

    const [imageURL, setImageURL] = useState("");
    const [loading, setLoading] = useState(false);
    const [toggle, setToggle] = useState(false);

    const [about, setAbout] = useState([]);
    const [aboutFull, setAboutFull] = useState({})


    const { id } = useParams()
    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/detail_course_get')
            .then(res => res.json())
            .then(data => setAbout(data));

    }, [toggle, loading])
    useEffect(() => {
        const ffff = about.find(a => a._id == id)

        setAboutFull(ffff)
    }, [about])
    console.log(about)

    const { register, handleSubmit, reset, setValue } = useForm();

    const onSubmit = async (data) => {

        const { title1, descOne, ...info } = data

        let collageArray = []

        collageArray.push({ ...info })



        const serviceData = {
            title1,

            descOne,
            collagename: collageArray,
            image: imageURL,
        };

        // console.log(collageArray)
        console.log(serviceData)

        //   const { password, ...info } = user._doc;


        const res = await fetcher.put(`detailsss_course_update/${id}`, serviceData);

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






    const [inputList, setinputList] = useState([{ firstName: '', lastName: '' }]);



    useEffect(() => {

        setValue('title1', `${aboutFull?.title1}`)
        setValue('descOne', `${aboutFull?.descOne}`)




    }, [aboutFull])


    const handleremove = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setinputList(list);
    }

    const handleaddclick = () => {
        setinputList([...inputList, { firstName: '', lastName: '' }]);
    }



    console.log(aboutFull?.collagename)
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
                                    <h5 className="mb-0 text-info">Add About</h5>
                                </div>
                                <hr />

                                <form onSubmit={handleSubmit(onSubmit)} >




                                    <div className="row mb-3">
                                        <label htmlFor="inputEnterYourName" className="col-sm-3 col-form-label">Enter Title  </label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="inputEnterYourName" placeholder="Enter Title"
                                                {...register("title1")}

                                            />
                                        </div>
                                    </div>


                                    <div className="row mb-3">
                                        <label htmlFor="inputAddress4" className="col-sm-3 col-form-label">Description </label>
                                        <div className="col-sm-9">
                                            <textarea className="form-control" id="inputAddress4" rows={3} placeholder="Description "
                                                {...register("descOne")}
                                            />
                                        </div>
                                    </div>




                                    {
                                        inputList.map((x, i) => {
                                            return (
                                                <div className="row mb-3">




                                                    <label htmlFor="inputEnterYourName" className="col-sm-3 col-form-label">Enter Collage Name</label>
                                                    <div className="col-sm-7 mb-3">
                                                        <input type="text" className="form-control" id="inputEnterYourName" placeholder="Enter Your Name"
                                                            {...register(`collagename${i + 1}`)}

                                                        />
                                                    </div>
                                                    <label htmlFor="inputEnterYourName" className="col-sm-3 col-form-label">Enter Collage Link</label>
                                                    <div className="col-sm-7">
                                                        <input type="text" className="form-control" id="inputEnterYourName" placeholder="Enter Your Name"
                                                            {...register(`collageLink${i + 1}`)}

                                                        />
                                                    </div>



                                                    <div class="form-group col-md-2 ">
                                                        {
                                                            inputList.length !== 1 &&
                                                            <button className="btn btn-danger mx-1" onClick={() => handleremove(i)}>Remove</button>
                                                        }
                                                        {inputList.length - 1 === i &&
                                                            <button className="btn btn-success mt-3" onClick={handleaddclick}>Add More</button>
                                                        }
                                                    </div>
                                                </div>
                                            );
                                        })}
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
}
export default DetailsCourseEdit;