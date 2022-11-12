
import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useForm } from "react-hook-form";

import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../firebase/firebase';

const LoginN = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // useEffect(() => {
    //     if (user) {
    //         navigate(from, { replace: true });
    //     }
    // }, [user, from, navigate])

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        signInError = <p className='text-red-500'><small>{error?.message}</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);

        if (user) {
            const url = 'https://whispering-woodland-88721.herokuapp.com/login_check';


            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: user.email
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    localStorage.setItem("accessToken", data.token);
                    navigate(from, { replace: true });
                });


        }
    }

    return (

        <>

            <div className="login">
                <div className="authentication-header" />
                <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
                    <div className="container-fluid">
                        <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">



                            <div className="mb-4 text-center">
                                <img src="assets/images/logo-img.png" width={180} alt />
                            </div>
                            <div className='col mx-auto'>
                                <div className="card">
                                    <div className="card-body">

                                        <div className="p-4 rounded">
                                            <div className="text-center">
                                                <h3 className>Admin Area</h3>

                                            </div>

                                            <div className="login-separater text-center mb-4"> <span>Login</span>
                                                <hr />
                                            </div>
                                            <div className="form-body">
                                                <form onSubmit={handleSubmit(onSubmit)}>

                                                    <div className="form-control w-full max-w-xs mb-3">
                                                        <label className="label">
                                                            <span className="label-text">Email</span>
                                                        </label>
                                                        <input
                                                            type="email"
                                                            placeholder="Your Email"
                                                            className="input input-bordered w-full max-w-xs"
                                                            {...register("email", {
                                                                required: {
                                                                    value: true,
                                                                    message: 'Email is Required'
                                                                },
                                                                pattern: {
                                                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                                    message: 'Provide a valid Email'
                                                                }
                                                            })}
                                                        />
                                                        <label className="label">
                                                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                                        </label>
                                                    </div>
                                                    <div className="form-control w-full max-w-xs">
                                                        <label className="label">
                                                            <span className="label-text">Password</span>
                                                        </label>
                                                        <input
                                                            type="password"
                                                            placeholder="Password"
                                                            className="input input-bordered w-full max-w-xs"
                                                            {...register("password", {
                                                                required: {
                                                                    value: true,
                                                                    message: 'Password is Required'
                                                                },
                                                                minLength: {
                                                                    value: 6,
                                                                    message: 'Must be 6 characters or longer'
                                                                }
                                                            })}
                                                        />
                                                        <label className="label">
                                                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                                        </label>
                                                    </div>


                                                    <div className="col-md-6 text-end">	<Link to="/forget-password">Forgot Password ?</Link>
                                                    </div>
                                                    {
                                                        signInError
                                                    }
                                                    <div className="col-12">
                                                        <div className="d-grid">
                                                            <button type="submit" className="btn btn-primary"><i className="bx bxs-lock-open" />Sign in</button>
                                                        </div>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div >


                        </div>
                    </div>

                </div>
            </div>


        </>
    );
};

export default LoginN;
