import { useState, useEffect } from "react"
import { registerPost } from "@apis/registerAPI"
import Cookies from "universal-cookie"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

export default () => {

    const handleSubmit = async () => {
        const result = await registerPost(input.user_name, input.password, input.full_name, input.number_phone, input.email);
       
    }
    const handlePress = async (e) => {
        if (e.keyCode == 13) {
            handleSubmit()
        }
    }
 
    
  return (
    <>
      <div>
        <div className="overlay">
        <form onKeyDown={handlePress}  action="">
            <div className="con">
              <header className="head-form">
                <h2>Register</h2>
                <p>Please enter information below</p>
              </header>
              <br />
              <div className="field-set">
                <span className="input-item">
                  <i className="fa fa-user-circle"></i>
                </span>
                <input
                  className="form-input"
                  id="txt-input"
                  type="text"
                  placeholder="User Name"
                  name="user-name"
                  required="required"
                  onChange={(e) => setInput({ ...input, user_name: e.target.value })}
                />
                <br />
                <span className="input-item">
                  <i className="fa fa-user-circle"></i>
                </span>
                <input
                  className="form-input"
                  id="txt-input"
                  type="text"
                  placeholder="Password"
                  name="password"
                  required="required"
                  onChange={(e) => setInput({ ...input, password: e.target.value })}
                />
                <br />
                <span className="input-item">
                  <i className="fa fa-user-circle"></i>
                </span>
                <input
                  className="form-input"
                  id="txt-input"
                  type="text"
                  placeholder="Full Name"
                  name="full-name"
                  required="required"
                  onChange={(e) => setInput({ ...input, full_name: e.target.value })}
                />
                <br />
                <span className="input-item">
                  <i className="fa fa-user-circle"></i>
                </span>
                <input
                  className="form-input"
                  id="txt-input"
                  type="text"
                  placeholder="Phone"
                  name="number-phone"
                  required="required"
                  onChange={(e) => setInput({ ...input, number_phone: e.target.value })}
                />
                <br />
                <span className="input-item">
                  <i className="fa fa-user-circle"></i>
                </span>
                <input
                  className="form-input"
                  id="txt-input"
                  type="text"
                  placeholder="Email"
                  name="Email"
                  required="required"
                  onChange={(e) => setInput({ ...input, email: e.target.value })}
                />
                
                <br />
                <button className="log-in" onClick={handleSubmit}> Log In </button>
              </div>
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
