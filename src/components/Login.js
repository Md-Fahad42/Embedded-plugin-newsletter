import { Formik } from 'formik'
import React from 'react'
import { useNavigate, } from 'react-router-dom'


const Login = () => { 
  const navigate = useNavigate();
   const loginSubmit = async(formdata) => {
    console.log(formdata);
    const response = await fetch('http://localhost:5000/subscriber/authenticate',{
      method: 'POST',
      body: JSON.stringify(formdata),
      headers :{
        'Content-type' : 'application/json'
      }
    });
    if(response.status=== 200){
     console.log('success');
    } else if  (response.status===401){
        console.log('failed');
       } else {
        console.log('Unknown error detected');
       }
      }

   
  return (
    <div className='container'>
        <div className='card-body'>
            <div className='card'>
                     
    <Formik initialValues={{email:'',password:''}}
    onSubmit={loginSubmit}>

      {({handleSubmit, values, handleChange}) => (
         <form onSubmit={handleSubmit}>
     



          <div className='inputemail '>
            <label>Email</label>
            <input className='form-control' id='email' value={values.eamil} onChange={handleChange} />
            </div>

            <div className='inputpass '>
                <label>Password</label>
                <input className='form-control' id='password' value={values.password} onChange={handleChange} />
            </div>

            <div className='button'>
                <button className='btn btn-danger mt-4'>Log in</button>
            </div>

           </form>
      ) }
          </Formik>
            </div>
        </div>
    </div>
    
  )
}

export default Login