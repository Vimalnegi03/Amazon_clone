import React,{useState} from 'react'
import './signup.css'
import { NavLink } from 'react-router-dom'
const Sign_in = () => {
const [logdata,setData]=useState({
    email:"",
    password:""

})
const adddata=(e)=>{
    const {name,value}=e.target
    setData(()=>{
        return {
            ...logdata,
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
                        <h1>Sign-In</h1>

                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"
                                value={logdata.email}
                                onChange={adddata}
                                id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                               value={logdata.password} onChange={adddata}
                                id="password" placeholder="At least 6 characters" />
                        </div>
                        <button type="submit" className="signin_btn" >Continue</button>
                    </form>
                </div>
                <div className="create_accountinfo">
                    <p>New to Amazon?</p>
                   <NavLink to="/register"><button> Create your Amazon Account</button></NavLink>
                </div>
            </div>
                </section>
  )
}

export default Sign_in
