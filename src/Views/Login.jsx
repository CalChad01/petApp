import React from "react";
import { Link } from "react-router-dom";

function Login() {

  return (
    <div class="container">
        <form class="form" id="login">
            <h1 class="form__title">Login</h1>
            <div class="form__message form__message--error"></div>
            <div class="form__input-group">
                <input type="text" class="form__input" autofocus placeholder="Username or email"/>
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="password" class="form__input" autofocus placeholder="Password"/>
                <div class="form__input-error-message"></div>
            </div>
            <button class="form__button" type="submit">Continue</button>
        </form>
        <Link
          to="/forgotPassword"
          className="hover:duration-100 hover:scale-110 hover:bg-pink-400 hover:text-gray-200 block p-4"
        >
          <p>
            Forgot password?
          </p>
        </Link>
        <Link
          to="/createAccount"
          className="hover:duration-100 hover:scale-110 hover:bg-pink-400 hover:text-gray-200 block p-4"
        >
          <p>
            Don't have an account? Create account
          </p>
        </Link>

    </div>
  )
}

export default Login;