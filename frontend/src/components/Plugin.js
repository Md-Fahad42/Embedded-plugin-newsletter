import { Formik } from "formik"
import React from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
// import { useNavigate, } from 'react-router-dom'

const Plugin = ({ownerid}) => {
  // const navigate = useNavigate();
  const userSubmit = async (formdata, { resetForm }) => {
    const response = await fetch("http://localhost:5000/subscriber/add", {
      method: "POST",
      body: JSON.stringify(formdata, { resetForm }),
      headers: {
        "content-type": "application/json",
      },
    })
    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Created",
      })
      resetForm()
    } else if (response.status === 401) {
      Swal.fire({
        icon: "Oops",
        title: "Failed",
        text: "Not Created",
      })
    } else {
      console.log("Unknown error occured")
    }
  }

  return (
    <section className="v-100">
      <div className="container col-md-6 h-100">
        <div className="card-body p-mt-4">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div class="row justify-content-center">
                  <div class="col-md-7 col-lg-8 col-xl-6 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Plugin</p>

                    <Formik initialValues={{ name: "", email: "", owner: ownerid, createdAt: new Date() }} onSubmit={userSubmit}>
                      {({ handleSubmit, values, handleChange }) => (
                        <form onSubmit={handleSubmit}>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input type="text" className="form-control" id="name" value={values.name} onChange={handleChange} />
                              <label class="form-label" for="form3Example1c">
                                Name
                              </label>
                            </div>
                          </div>

                          {/* <!-- Email input --> */}
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-1">
                              <input type="email" id="email" class="form-control" value={values.email} onChange={handleChange} />
                              <label class="form-label" for="form3Example3c">
                                Your Email
                              </label>
                            </div>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="submit" className="btn btn-primary mt-3 mb-4">
                              Create
                            </button>
                          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Plugin
