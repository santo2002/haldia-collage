
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../api";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";

function AddCourseDetail() {

    const [imageURL, setImageURL] = useState("");
    const [loading, setLoading] = useState(false);
    const [toggle, setToggle] = useState(false);

    const [about, setAbout] = useState([]);
    const [aboutFull, setAboutFull] = useState({})

    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/detail_course_get')
            .then(res => res.json())
            .then(data => setAbout(data));

    }, [toggle, loading])
    useEffect(() => {
        about.map(a => setAboutFull(a))
    }, [about])
    console.log(aboutFull._id)

    const { register, handleSubmit, reset, setValue } = useForm();

    const onSubmit = async (data) => {

        const { title1, descOne, ...info } = data

        let collageArray = []

        collageArray.push({ ...info })



        const serviceData = {
            title1,
            status: "1",
            descOne,

            image: imageURL,
        };

        // console.log(collageArray)
        console.log(serviceData)

        //   const { password, ...info } = user._doc;


        const res = await fetcher.post(`detail_course_post`, serviceData);

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

    const handleEdit = () => {
        // console.log(aboutFull._id)
        // setValue('aboutTitle', `${aboutFull.aboutTitle}`)
        // setValue('percentage', `${aboutFull.percentage}`)
        // setValue('aboutDesc', `${aboutFull.aboutDesc}`)
        // titlte2: data.titlte2,
        setValue('titlte2', `${aboutFull.titlte2}`)
        setValue('title1', `${aboutFull.title1}`)
        setValue('descOne', `${aboutFull.descOne}`)
        setValue('descTwo', `${aboutFull.descTwo}`)



        setValue('picture', `${aboutFull.picture}`)
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

        const res = await fetcher.put(`course_detail_status/${id}`, statusData);
        console.log(res)
        toast('Data Successfully uploaded')
    }

    console.log(about)

    const [inputList, setinputList] = useState([{ firstName: '', lastName: '' }]);

    const handleinputchange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setinputList(list);

    }

    const handleremove = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setinputList(list);
    }

    const handleaddclick = () => {
        setinputList([...inputList, { firstName: '', lastName: '' }]);
    }

    const deleteBanner = (id) => {
        const proced = window.confirm('Are You Sure??');
        if (proced) {

            const url = `https://whispering-woodland-88721.herokuapp.com/course_details_delete/${id}`;
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


    console.log(about)
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


            <div className="row" >
                <div className="col">
                    <div class="card">
                        <div class="card-body">
                            <table class="table table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Course Name</th>
                                        <th scope="col">Contact</th>




                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        about.map((m, i) =>




                                            <tr>
                                                <th scope="row">{i + 1}</th>
                                                <td>{m?.title1}</td>
                                                <td><img src={`https://whispering-woodland-88721.herokuapp.com//${m?.image}`} /></td>



                                                <td>
                                                    <button
                                                        className={(m.status == "1") ? 'btn btn-success' : "btn btn-danger"}
                                                        onClick={() => statusChange(m._id, m.status)}>{m.status == '1' ? "Active" : "Inactive"}</button>
                                                </td>

                                                <td>


                                                    <button className="text-danger btn border-0" onClick={() => deleteBanner(m._id)} > <i class="fa-solid fa-trash-can"></i></button>
                                                    <Link className="text-primary "
                                                        to={`${m._id}`}
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
}
export default AddCourseDetail;