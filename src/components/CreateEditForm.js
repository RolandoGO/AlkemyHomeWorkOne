import React from 'react'
import bakcArrow from "../icons/backArrow.svg"
import GoBackArrow from '../hooks/goBack'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from 'react-router-dom'



const validationSchema = Yup.object({
	title: Yup.string().required("required!!"),
	content: Yup.string().required("required!!"),
});


export default function CreateEditForm({func}) {

    const {goBack}=GoBackArrow()
    const history=useHistory()

    function onSubmit(values){

       func(values,history)
        
        
    }


    const formik = useFormik({
		initialValues: {
			title: "",
			content: "",
		},
		onSubmit,
		validationSchema,
	});

    return (
        <div>
        <button className="backArrow" onClick={goBack}>
            <img src={bakcArrow}/>
        </button>

        <form onSubmit={formik.handleSubmit}>
            <div className="form-group w-50">
                <label >Title</label>
                <input value={formik.values.title} name="title" onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" className="form-control"  />
                {formik.errors.title && formik.touched.title ? (
                    <div className="text-danger text-uppercase" style={{ fontWeight: "bold" }}>
                        {formik.errors.title}
                    </div>
                ) : null}
            </div>
            <div className="form-group w-50">
                <label >Content</label>
                <textarea value={formik.values.content} name="content" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" rows="3"></textarea>
                {formik.errors.content && formik.touched.content ? (
                    <div className="text-danger text-uppercase" style={{ fontWeight: "bold" }}>
                        {formik.errors.content}
                    </div>
                ) : null}
            </div>

            <button type="submit" className="btn btn-dark m-2">
                Crear
            </button>
        </form>
        
        
    </div>
    )
}
