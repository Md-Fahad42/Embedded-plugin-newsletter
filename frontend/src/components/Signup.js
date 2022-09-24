import React from 'react'
import {Formik} from 'formik'
import { useNavigate, } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();
    const sublogSubmit = async(formdata) => {
      console.log(formdata);
       
      const response = await fetch('http://localhost:5000/subscriber/signup',{
        method: 'POST',
        body : JSON.stringify(formdata),
        headers : {
            'content-type' : 'application/json'
        }
      })
      if(response.status === 200) {
        console.log('request successful');
        navigate('/signup');
      }  else {
        console.log('some error occured');
      }
    } 
  return (
   
    <div className='container' >
        <div className='card-body'>
            <div className='card'>
                <div>
                    <h1>Signup Here</h1>
                    <hr/>
                    <Formik initialValues={{username:'', email:'', password:'' }}
                    onSubmit ={sublogSubmit}>

                    {({handleSubmit, values, handleChange}) => (

                        <form onSubmit={handleSubmit}>
                    

                     <div className='userN p-1 '>
                        <label>User Name</label>
                        <input className='form-control p-1 mt-1'id='username' value={values.username} onChange={handleChange}/>
                    </div>
                    <div className='emailN p-1'>
                        <label>Email</label>
                        <input className='form-control p-1 mt-1' type={'email'} id='email' value={values.email} onChange={handleChange}  />
                    </div>
                    <div className='passN p-1 mb-4'>
                        <label>Password</label>
                        <input className='form-control p-1 mt-1' type={'password'} id='password' value={values.password} onChange={handleChange}   />

                    </div>

                    <div className='ButN'>
                        <button type='submit' className='btn btn-success mb-4'>SIGN UP</button>
                    </div>
                    </form>
                    ) }

                </Formik>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup