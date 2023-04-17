import { useState, useEffect } from "react";
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

  const [passwordMatch, setPasswordMatch] = useState("");

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

  return (
    <div className="min-h-screen flex items-start py-10">
      <div className="grid gap-2 place-items-center w-fit justify-self-center text-blue-900 text-opacity-75  p-1 shadow-2xl bg-white">
        <h1 className="text-center font-bold text-4xl select-none">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 place-items-center">
          <div className="grid grid-cols-1 gap-3">
            <label className="grid place-items-center p-3">
              <span className="font-bold pr-3 pb-2 select-none">
                Name or Business Name:
              </span>
              <input name="username" defaultValue={form.username} onChange={e => updateForm("username", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-200"></input>
            </label>

            <label className="grid place-items-center p-3">
              <span className="font-bold pr-3 pb-2 select-none">
                Email:
              </span>
              <input name="email" defaultValue={form.contact} onChange={e => updateForm("contact", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-200"></input>
            </label>

            <label className="grid place-items-center p-3">
              <span className="font-bold pr-3 pb-2 select-none">
                Password:
              </span>
              <input name="password" defaultValue={form.password} onChange={e => updateForm("password", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-200"></input>
            </label>

          </div>
          <button type="submit" className="bg-blue-600 text-white font-bold p-3 w-fit rounded-lg hover:duration-100 hover:scale-105 hover:bg-blue-400">Continue</button>
        </form>
        <div className="grid grid-cols-2 justify-items-center">
          <p className="block p-2 select-none">
            Already have an account?
          </p>
          <Link
            to="/login"
            className="block p-2 font-bold hover:text-blue-400"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )

}

export default CreateAccount;