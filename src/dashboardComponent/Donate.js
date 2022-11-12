import React, { useEffect, useState } from 'react';
import fetcher from '../api';

const Donate = () => {

    const [formvalue, setformvalue] = useState([])

    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/donate_get')
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



                                    <th scope="col">Message</th>

                                </tr>
                            </thead>
                            <tbody>

                                {formvalue.map((f, i) =>
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{f.email}</td>

                                        <td>{f.subject} </td>
                                        <td>{f.message} </td>


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

export default Donate;