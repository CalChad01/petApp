import React from "react";
import { Link } from "react-router-dom";

function CreateAccount() {

  const [form, setFormVal] = useState({
    id: undefined,
    username: "",
    password: "",
    email: "",
  });

  const updateForm = (formKey, e) => {
    // update values in form

    newVal = e.target.value;

    setFormVal({
      ...form,
      [formKey]: newVal
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // check to make sure all form values have something in them
    // generate ID
    // do password security stuff
  }

  const confirmPassword = (e) => {
    // check to make sure password and confirm password fields have identical input
  }

  return (
    <div>
      <form class="form form--hidden" id="createAccount">
            <h1 class="form__title">Create Account</h1>
            <div class="form__message form__message--error"></div>
            <div class="form__input-group">
                <input type="text" id="signupUsername" class="form__input" autofocus placeholder="Username"/>
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="password" class="form__input" autofocus placeholder="Password"/>
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="password" class="form__input" autofocus placeholder="Confirm password"/>
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="text" class="form__input" autofocus placeholder="Email Address"/>
                <div class="form__input-error-message"></div>
            </div>
            <button class="form__button" type="submit">Continue</button>
        </form>
        <Link
          to="/login"
          className="hover:duration-100 hover:scale-110 hover:bg-pink-400 hover:text-gray-200 block p-4"
        >
          <p>
            Already have an account? Sign in
          </p>
        </Link>
    </div>
  )

}

export default CreateAccount;