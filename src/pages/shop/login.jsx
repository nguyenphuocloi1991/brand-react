import { useState, useEffect } from "react"
import { loginPost } from "@apis/loginApi"
import Cookies from "universal-cookie"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

export default () => {
    // const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     responseBody.firstName = firstName
    //     responseBody.lastName = lastName
    //     responseBody.age = age
    //     const result = await loginPost(input.user_name, input.pass_word);
	
    // }
    const handleSubmit = async () => {
        const result = await loginPost(input.user_name, input.pass_word);
       
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
                <h2>Log In</h2>
                <p>login here using your username and password</p>
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
                  placeholder="UserName"
                  name="user_name"
                  required="required"
                  onChange={(e) => setInput({ ...input, user_name: e.target.value })}
                />
                <br />
                <span className="input-item">
                  <i className="fa fa-key"></i>
                </span>
                <input
                  className="form-input"
                  type="password"
                  placeholder="Password"
                  id="pass_word"
                  name="pass_word"
                  required="required"
                  onChange={(e) => setInput({ ...input, pass_word: e.target.value })}
                />
                <span>
                  <i
                    className="fa fa-eye"
                    aria-hidden="true"
                    type="button"
                    id="eye"
                  ></i>
                </span>
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
