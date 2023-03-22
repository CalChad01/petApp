import { useState } from "react";
import { Link } from "react-router-dom";

function CreateAccount() {

  const [form, setFormVal] = useState({
    id: undefined,
    username: "",
    email: "",
    password: "",
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
    <div className="grid gap-2 place-items-center w-fit text-white p-1 shadow-xl bg-violet-500">
      <h1 className="text-center font-bold text-4xl underline">
        Create Account
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 place-items-center">
        <div className="grid grid-cols-2 gap-3">
          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              UserName:
            </span>
            <input name="username" defaultValue={form.username} onChange={e => updateForm("username", e)} className="bg-white text-black rounded-lg p-1"></input>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Email:
            </span>
            <input name="email" defaultValue={form.email} onChange={e => updateForm("email", e)} className="bg-white text-black rounded-lg p-1"></input>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Password:
            </span>
            <input name="password" defaultValue={form.password} onChange={e => updateForm("password", e)} className="bg-white text-black rounded-lg p-1"></input>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Confirm Password:
            </span>
            <input name="confirmPassword" defaultValue="" onChange={e => confirmPassword(e)} className="bg-white text-black rounded-lg p-1"></input>
          </label>

        </div>
        <input type="submit" value="Continue" className="bg-pink-500 text-white font-bold p-3 w-1/4 rounded-lg hover:duration-100 hover:scale-110 hover:bg-pink-600" />
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