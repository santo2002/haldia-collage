
import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    let signInError;


    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);
        console.log(user, errors)



    }
    if (user) {
        navigate(from, { replace: true });
    }


    if (error) {
        signInError = <p className='text-danger'><small>{error?.message}</small></p>
    }

    if (loading) {
        return <p>loading....</p>
    }


    return (
        <div className="wrapper">
            <div className="authentication-header" />
            <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
                <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                        <div className="col mx-auto">
                            <div className="mb-4 text-center">
                                <img src="assets/images/logo-img.png" width={180} alt />
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="p-4 rounded">
                                        <div className="text-center">
                                            <h3 className>Sign in</h3>
                                            {error}
                                        </div>

                                        <div className="login-separater text-center mb-4"> <span>OR SIGN IN WITH EMAIL</span>
                                            <hr />
                                        </div>
                                        <div className="form-body">



                                            <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                                                <div className="col-12">
                                                    <label htmlFor="email" className="form-label">Email Address</label>
                                                    <input type="email" className="form-control" id="email" placeholder="Email Address"

                                                        {...register("email", {
                                                            required: {
                                                                value: true,
                                                                message: "Email is required!"
                                                            }
                                                            ,
                                                            pattern: {
                                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                                message: 'Provide a valid email'
                                                            }
                                                        })}

                                                    />

                                                    <label className="label">
                                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}



                                                    </label>

                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="password" className="form-label">Enter Password</label>
                                                    <div className="input-group" id="show_hide_password">
                                                        <input type="password" className="form-control border-end-0" id="password" placeholder="Enter Password"



                                                            {...register("password", {
                                                                required: {
                                                                    value: true,
                                                                    message: "Password is required!"
                                                                }
                                                                ,
                                                                minLength: {
                                                                    value: 6,
                                                                    message: 'Must be 6 character or longer'
                                                                }
                                                            })}




                                                        />

                                                        <label className="label">
                                                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}



                                                        </label>

                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
                                                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Remember Me</label>
                                                    </div>
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
                        </div>
                    </div>
                    {/*end row*/}

                </div>
            </div>
        </div>

    );
};

export default Login;