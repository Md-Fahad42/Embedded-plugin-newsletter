import { Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Plugin = () => {
  const navigate = useNavigate();
  const loginSubmit = async(formdata) => {
    console.log(formdata);
    
  } 
  return (
    <div className='container'>
        <div className='card-body'>
            <div className='card'>
                <h1>Plugin</h1>
                <hr></hr>
                <Formik initialValues={{name:'', email:'', createdAt:new Date}}
                onSubmit={loginSubmit}>
                 
                 {({handleSubmit, values, handleChange}) => (
                  <form onSubmit={handleSubmit}>
                 

              <div className='name1'>
                <label>Name</label>
                <input className='form-control' id='name' value={values.name} onChange={handleChange} />
              </div>

              <div className='email1'>
                <label>Email</label>
                <input className='form-control' type={'email'} id='email' value={values.email} onChange={handleChange}  />
              </div>

       

           <div className='BtuN2'>
            <button className='btn btn-primary mb-3 mt-4'>CREATE</button>
           </div>
           
           </form>

           )}
           
           </Formik>
          
            </div>
        </div>
    </div>
    
  )
}

export default Plugin