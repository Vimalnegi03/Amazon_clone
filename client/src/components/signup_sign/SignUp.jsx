import React from 'react'
import "./signup.css";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const SignUp = () => {
    const [udata,setUdata]=useState({fname:"",
        email:"",
        password:"",
        cpassword:"",
        mobile:""})

  const adddata=(e)=>{
    const {name,value}=e.target;
    setUdata(()=>{
        return {
        ...udata,
        [name]:value
        }
    })
  }
  return (

    <section>
    <div className="sign_container">
        <div className="sign_header">
            <img src="./blacklogoamazon.png" alt="signupimg" />
        </div>
        <div className="sign_form">
            <form method="POST">
                <h1>Create account</h1>
                <div className="form_data">
                    <label htmlFor="name">Your name</label>
                    <input type="text" name="fname"
                        value={udata.fname}
                        onChange={adddata}
                        id="name" />
                </div>
                <div className="form_data">
                    <label htmlFor="email">email</label>
                    <input type="email" name="email"
                        value={udata.email}
                        onChange={adddata}
                        id="email" />
                </div>
                <div className="form_data">
                    <label htmlFor="mobile">Mobile number</label>
                    <input type="number" name="mobile"
                        value={udata.mobile}
                        onChange={adddata}
                        id="mobile" />
                </div>
                <div className="form_data">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"
                       value={udata.password}
                       onChange={adddata}
                        id="password" placeholder="At least 6 characters" />
                </div>
                <div className="form_data">
                    <label htmlFor="passwordg">Password again</label>
                    <input type="password" name="cpassword"
                       value={udata.cpassword}
                       onChange={adddata}
                        id="passwordg" />
                </div>
                <button type="submit" className="signin_btn">Continue</button>

                

                <div className="signin_info">
                    <p>Already have an account?</p>
                    <NavLink to="/login">Sign in</NavLink>
                </div>
            </form>
        </div>
       
    </div>
</section>
  )
}

export default SignUp
