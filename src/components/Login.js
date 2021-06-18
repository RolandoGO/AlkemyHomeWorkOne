import React, { useState,useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginApi } from "../apis/loginApi";
import { PostContext } from "../context/createContext";

const validationSchema = Yup.object({
	email: Yup.string().email("put a valid email").required("required!!"),
	password: Yup.string().min(5).max(15).required("required!!"),
});

const Login = () => {

	const {setTokenExist}=useContext(PostContext)
    const [callErrors,setCallErrors]=useState(null)
	

	async function onSubmit(values){
        setCallErrors(null)
        const call =  await loginApi(values)
        call.error?setCallErrors(call.error): setTokenExist(true)
        
    }

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit,
		validationSchema,
	});

	return (
		<div className="container mt-5 rounded">
			<h2>Login </h2>
            {callErrors&&
            <div className="text-danger text-uppercase" style={{ fontWeight: "bold" }}>{callErrors}</div>
            }

			<form onSubmit={formik.handleSubmit}>
				<div className="form-group w-50">
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input value={formik.values.email} name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
					{formik.errors.email && formik.touched.email ? (
						<div className="text-danger text-uppercase" style={{ fontWeight: "bold" }}>
							{formik.errors.email}
						</div>
					) : null}
				</div>
				<div className="form-group w-50">
					<label htmlFor="exampleInputPassword1">Password</label>
					<input value={formik.values.password} name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
					{formik.errors.password && formik.touched.password ? (
						<div className="text-danger text-uppercase" style={{ fontWeight: "bold" }}>
							{formik.errors.password}
						</div>
					) : null}
				</div>

				<button type="submit" className="btn btn-dark m-2">
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
