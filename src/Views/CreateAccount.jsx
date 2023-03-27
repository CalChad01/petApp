import { useState } from "react";
import { Link } from "react-router-dom";

function CreateAccount() {

  const [form, setFormVal] = useState({
    id: undefined,
    name: "",
    password: "",
    acc_type: "",
    contact: "",
    address: "",
  });

  let passwordMatch = "";

  const updateForm = (formKey, e) => {
    // update values in form
    let newVal = e.target.value;

    setFormVal({
      ...form,
      [formKey]: newVal
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // check to make sure all form values have something in them
    
    // check that passwords match
    if (!confirmPassword()) {
      console.log('Passwords do not match')
      return false;
    }
    // generate ID
    form.id = Math.floor(100000000000 + Math.random() * 900000000000);
    // do password security stuff
  }

  const confirmPassword = () => {
    if (form.password == passwordMatch) {
      console.log('Passwords match');
      return true;
    } else
      return false;
  }

  const updatePasswordMatch = (e) => {
    passwordMatch = e.target.value;
  }

  return (
    <div className="grid gap-2 place-items-center w-fit text-white p-1 shadow-xl bg-violet-500">
      <h1 className="text-center font-bold text-4xl underline">
        Create Account
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 place-items-center">
        <div className="grid grid-cols-1 gap-3">
          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Name or Business Name:
            </span>
            <input name="username" defaultValue={form.username} onChange={e => updateForm("username", e)} className="bg-white text-black rounded-lg p-1"></input>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Email:
            </span>
            <input name="email" defaultValue={form.contact} onChange={e => updateForm("contact", e)} className="bg-white text-black rounded-lg p-1"></input>
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
            <input name="confirmPassword" defaultValue="" onChange={e => updatePasswordMatch(e)} className="bg-white text-black rounded-lg p-1"></input>
          </label>

        </div>
        <button type="submit" className="bg-pink-500 text-white font-bold p-3 w-fit rounded-lg hover:duration-100 hover:scale-110 hover:bg-pink-600">Continue</button>
      </form>
      <Link
        to="/login"
        className="hover:duration-100 hover:scale-110 hover:bg-pink-400 hover:text-gray-200 block p-4 rounded-lg"
      >
        <p>
          Already have an account? Sign in
        </p>
      </Link>
    </div>
  )

}

export default CreateAccount;