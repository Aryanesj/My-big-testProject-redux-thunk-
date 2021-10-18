import { useFormik } from 'formik'
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../redux/auth-reducer'

const Login = (props) => {

const initialValues = {email: '', password: '', rememberMe: false}

const onSubmit = values => {
    props.login (formik.values.email, formik.values.password, formik.values.rememberMe)
}

const formik = useFormik({initialValues, onSubmit})

if (props.isAuth) {
    return <Redirect to={'/profile'} />
}

return <div>
        <h1>LOGIN</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input value={formik.values.email} 
                            onChange={formik.handleChange} 
                            type = 'email' 
                            name='email' 
                            placeholder='Email'/><label></label>
                        {props.errorCod !== 0 ? <div>{props.errorName}</div> : null}
                </div>
                    <div>
                        <input value={formik.values.password} 
                                onChange={formik.handleChange} 
                                type = 'password' 
                                name='password' 
                                placeholder='Password'/>
                            <label></label>
                    </div>
                        <div>
                            <input value={formik.values.rememberMe} 
                                    onChange={formik.handleChange} 
                                    name='rememberMe' 
                                    type="checkbox"/>remember me
                        </div>
                        <div>
                            <button type='submit'>Login</button>
                        </div>
                </form>
            </div>
        }

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    errorCod: state.auth.errorCod,
    errorName: state.auth.errorName
})
export default connect(mapStateToProps, {login})(Login)


// import React from 'react';
// import {Formik, Field, ErrorMessage} from 'formik';
// import * as Yup from 'yup';
// import {required} from '../../utils/validators/validators.js'
// import {connect} from 'react-redux';
// import {login} from '../../redux/auth-reducer.js';

// const SignupForm = (props) => {
//     return (
//         <Formik
//             initialValues={{ Login: '', Password: '', email: '' }}
//             validationSchema={Yup.object({
//                 Login: Yup.string()
//                     .max(15, 'Must be 15 characters or less')
//                     .required('Required'),
//                 Password: Yup.string()
//                     .max(20, 'Must be 20 characters or less')
//                     .required('Required'),
//                 email: Yup.string().email('Invalid email address').required('Required'),
//             })}
//             onSubmit={values => console.log(values)}
//             >

//             {formik => (
//                 <form onSubmit={formik.handleSubmit}>
//                     <label htmlFor='Login'></label>
//                     <Field name='Login' type='text' placeholder='Login'/>
//                     <ErrorMessage name='Login' />
//                  <br />
//                     <label htmlFor='Password'></label>
//                     <Field name='Password' type='text' placeholder='Password' />
//                     <ErrorMessage name='Password' />
//                  <br />
//                     <label htmlFor='email'></label>
//                     <Field name='email' type='text' placeholder='email' />
//                     <ErrorMessage name='email' />
//                  <br />
//                     <Field component={'input'} name={'rememberMe'} type={'checkbox'} />
//                     <label htmlFor='rememberMe'>Remember me?</label>
//                  <br />
//                     <button type='submit'>Submit</button>
//                 </form>
//             )}
//         </Formik>
//     );
// };


// export default SignupForm;
