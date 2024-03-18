import {  useState } from 'react';
import '../css/login.css'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [isAuthenticatedFailed,setisAuthenticatedFailed] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Clicked On Submit Button !");
        console.log(emailValue,passwordValue);
        if(emailValue=="abcd@gmail.com" && passwordValue == "abcd@1234"){
          navigate("/home")
        }
        else{
          setisAuthenticatedFailed(true);
        }
    };
 
    // Define a function to handle changes in the input
    const handleEmailChange = (event) => {
        setEmailValue(event.target.value);
    };

    // Define a function to handle changes in the input
    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
    };

  return (
   <>
<div className="container">
  <div className="row g-0">
    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
    <div className="col-md-8 col-lg-6">
      <div className="login d-flex align-items-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-8 mx-auto">
              <h3 className="login-heading mb-4">Welcome back!</h3>

     
              <form>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="email" value={emailValue} onChange={handleEmailChange} placeholder="name@example.com"/>
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="password" value={passwordValue} onChange={handlePasswordChange} placeholder="Password"/>
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                  <label className="form-check-label" htmlFor="rememberPasswordCheck">
                    Remember password
                  </label>
                </div>

                <div className="d-grid">
                  <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit" onClick={handleSubmit}>Sign in</button>
                  <div className="text-center">
                    <a className="small" href="#">Forgot password?</a>
                    <br/>
                  {isAuthenticatedFailed
                    && 
                   <div> Wrong Password </div>
                  }
                 
                  </div>
                 
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   </>
  )
}
