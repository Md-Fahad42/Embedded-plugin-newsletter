import { Formik } from "formik"
import React from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const loginSubmit = async (formdata, { resetForm }) => {
    console.log(formdata)
    const response = await fetch("http://localhost:5000/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-type": "application/json",
      },
    })
    if (response.status === 200) {
      console.log("success")
      const data = await response.json();
      console.log(data)
      sessionStorage.setItem('user', JSON.stringify(data));
      resetForm()
    } else if (response.status === 401) {
      console.log("failed")
    } else {
      console.log("Unknown error detected")
    }
  }

  return (
    <section className="v-100">
      <div className="container col-md-7 h-100">
        <div className="card-body p-mt-4">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div class="row justify-content-center">
                  <div class="col-md-7 col-lg-8 col-xl-6 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                    <Formik initialValues={{ email: "", password: "" }} onSubmit={loginSubmit}>
                      {({ handleSubmit, values, handleChange }) => (
                        <form onSubmit={handleSubmit}>
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

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input type="password" id="password" class="form-control" value={values.password} onChange={handleChange} />
                              <label class="form-label" for="form3Example4c">
                                Password
                              </label>
                            </div>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="submit" className="btn btn-danger mt-3 mb-4">
                              Login
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

export default Login
