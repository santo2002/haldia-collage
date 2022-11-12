import React, { useEffect, useState } from 'react';
import fetcher from '../api';

const Resume = () => {

    const [formvalue, setformvalue] = useState([])

    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/resume_get')
            .then(res => res.json())
            .then(data => setformvalue(data))


    }
        , [])



    return (
        <div className="row" >
            <div className="col">
                <div class="card">
                    <div class="card-body">
                        <table class="table table-bordered mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">User Email</th>
                                    <th scope="col">Subject</th>



                                    <th scope="col">Resume File</th>

                                </tr>
                            </thead>
                            <tbody>

                                {formvalue.map((f, i) =>
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{f.email}</td>

                                        <td>{f.subject} </td>
                                        <td>
                                            <a href={`https://whispering-woodland-88721.herokuapp.com/${f?.image} `} >{f?.image} </a>
                                        </td>


                                    </tr>
                                )}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;