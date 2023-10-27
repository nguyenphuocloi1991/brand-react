import { useState, useEffect } from "react";
import { loginPost } from "@apis/loginApi";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

export default () => {
  let navigate = useNavigate();
 
  const [userInput, setUserInput] = useState({ user_name: "", pass_word: "" })
  const cookies = new Cookies();
  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await loginPost(userInput);
    debugger
    if (result.message === "SUCCESS") {

      cookies.set("manager_acs_tk", result.access_token, { path: "/", sameSite: "strict", maxAge: 84600 });
      window.localStorage.setItem("admin_info", JSON.stringify(result.data));
      

      return (navigate("/manager/list"));
     

    }
  }


  const handleSetUserInput = (input, e) => {
    if (input === "user_name") {
      setUserInput({ ...userInput, user_name: e.target.value })
    }

    if (input === "pass_word") {
      setUserInput({ ...userInput, pass_word: e.target.value })
    }
  }
  return (
    <>
      <div>
        <div className="overlay">
          <form method="post" className="d-flex flex-column gap-4" onSubmit={handleSubmit}>
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
                  onChange={(e) => handleSetUserInput("user_name", e)}
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
                  onChange={(e) => handleSetUserInput("pass_word", e)}
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
                <button className="log-in" > Log In </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </>
  );
};
