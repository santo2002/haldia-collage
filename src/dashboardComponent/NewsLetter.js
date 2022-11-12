import React, { useEffect, useState } from 'react';
import fetcher from '../api';

const NewsLetter = () => {

    const [formvalue, setformvalue] = useState([])

    useEffect(() => {
        fetch('https://whispering-woodland-88721.herokuapp.com/news_get')
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


                                </tr>
                            </thead>
                            <tbody>

                                {formvalue.map((f, i) =>
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{f.email}</td>




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

export default NewsLetter;