import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

  const [form, setFormVal] = useState({
    email: "",
    password: "",
  });

  const updateForm = (formKey, e) => {
    // update values in form

    let newVal = e.target.value;

    setFormVal({
      ...form,
      [formKey]: newVal
    })
  }
  const handleLogin = (e) => {

    e.preventDefault();

    console.log('email: ', form.email);
    console.log('password ', form.password);
    
  }

  return (
    <div className="grid gap-2 place-items-center w-fit text-white p-1 shadow-xl bg-violet-500">
      <h1 className="text-center font-bold text-4xl underline">
        Sign In
      </h1>

      <form onSubmit={handleLogin} className="grid grid-cols-1 place-items-center">
        <div className="grid grid-cols-2 gap-3">
          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Email:
            </span>
            <input name="email" type="email" defaultValue={form.email} onChange={e => updateForm("email", e)} className="bg-white text-black rounded-lg p-1"></input>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Password:
            </span>
            <input name="password" defaultValue={form.password} onChange={e => updateForm("password", e)} className="bg-white text-black rounded-lg p-1"></input>
          </label>

        </div>
        <input type="submit" value="Login" className="bg-pink-500 text-white font-bold p-3 w-1/4 rounded-lg hover:duration-100 hover:scale-110 hover:bg-pink-600" />
      </form>
        <Link
          to="/forgotPassword"
          className="hover:duration-100 hover:scale-110 hover:bg-pink-400 hover:text-gray-200 block p-4 rounded-lg font-bold"
        >
          Forgot password?
        </Link>
        <Link
          to="/createAccount"
          className="hover:duration-100 hover:scale-110 hover:bg-pink-400 hover:text-gray-200 block p-4 rounded-lg font-bold"
        >
          Don't have an account? Create account
        </Link>

    </div>
  )
}

export default Login;