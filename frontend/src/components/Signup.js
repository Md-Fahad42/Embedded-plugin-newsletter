import React from "react"
import { Formik } from "formik"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

const Signup = () => {
  const navigate = useNavigate()
  const sublogSubmit = async (formdata, { resetForm }) => {
    console.log(formdata)

    const response = await fetch("http://localhost:5000/user/signup", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "You are registerd",
      })
      resetForm()
      navigate("/login")
    } else if (response.status === 401) {
      Swal.fire({
        icon: "Oops",
        title: "Failed",
        text: "Signup Failed",
      })
    } else {
      console.log("Unknown error occured")
    }
  }
  return (
    <section class="v-100">
      <div className="container col-md-8 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div className="card-body p-mt-4">
              <div className="card text-black">
                <div class="row justify-content-center">
                  <div class="col-md-7 col-lg-8 col-xl-6 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Signup Here</p>

                    <Formik initialValues={{ username: "", email: "", password: "" }} onSubmit={sublogSubmit}>
                      {({ handleSubmit, values, handleChange }) => (
                        <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                          {/* username input */}
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input type="text" className="form-control" id="username" value={values.username} onChange={handleChange} />
                              <label class="form-label">Username</label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input type="email" id="email" class="form-control " value={values.email} onChange={handleChange} />
                              <label class="form-label">Your Email</label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input type="password" id="password" class="form-control" value={values.password} onChange={handleChange} />
                              <label class="form-label">Password</label>
                            </div>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="submit" className="btn btn-success mb-4">
                              SIGN UP
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

export default Signup
