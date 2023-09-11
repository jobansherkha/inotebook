import React from "react";

import { useState } from "react";
import { useNavigate } from 'react-router-dom';


export default function SignUp(props) {


  let history = useNavigate();
  const host = "http://localhost:3006";

//   setting up the state 
  const [signupdata, setsignupdata] = useState({
    name : "",
    email: "",
    password: "",
    cpassword:""
  });

//   making a onChange function 

  const onChange = (e) => {
    setsignupdata({ ...signupdata, [e.target.name]: e.target.value });
  };

//   calling api using fetch method
  const signup = async (name, email, password) => {
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const json = await response.json();
    console.log(json);
   
    if(json.success){
      history("/login")
      props.showAlert("success", "sign up successfull, now please login to continue ")
      console.log(props.alert)
    }
    else{
      props.showAlert("danger", json.error)

    }
  
    
  };

//   making a handleClick function 

  const handleClick = (e) => {
    e.preventDefault();
    
    if(signupdata.password === signupdata.cpassword){
      signup(signupdata.name, signupdata.email, signupdata.password);

    }
    else{
      props.showAlert("danger", "your password doesnot match")

    }
    setsignupdata({name : "", email: "", password: "", cpassword:""});
    
  };
  return (
    <div>
         <form onSubmit={handleClick}>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="name"
            className="form-control"
            name = "name"
            value = {signupdata.name}
            onChange = {onChange}
            required
            minLength={3}
          />
          <label className="form-label" htmlFor="form2Example1">
            name
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="email"
            className="form-control"
            name = "email"
            value = {signupdata.email}
            onChange = {onChange}
          />
          <label className="form-label" htmlFor="form2Example2">
            email
          </label>
        </div>
        <div className="form-outline mb-4">
          <input
           type="password"
           id="password"
           className="form-control"
           name = "password"
           value = {signupdata.password}
           onChange = {onChange}
           minLength={8}
           required
          
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <button
          type="submit"
          
          className="btn btn-primary btn-block mb-4"
        >
          Sign up
        </button>
      </form>  
   
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form onSubmit={handleClick} className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="name"
                              className="form-control"
                              name = "name"
                              value = {signupdata.name}
                              onChange = {onChange}
                              minLength={3}
                              required
                            
                             
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="email"
                              className="form-control"
                              name = "email"
                              value = {signupdata.email}
                              onChange = {onChange}
                              

                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              className="form-control"
                              name = "password"
                              value = {signupdata.password}
                              onChange = {onChange}
                              required
                              minLength={8}
                              
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="cpassword"
                              
                              value = {signupdata.cpassword}
                              className="form-control"
                              name = "cpassword"
                              onChange = {onChange}
                              
                              
                              
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              Repeat your password
                            </label>
                          </div>
                        </div>

                        

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
