import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

  const [form, setFormVal] = useState({
    username: "",
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

    console.log('username: ', form.username);
    console.log('password ', form.password);
    
  }

  return (
    <div className="min-h-screen flex items-start py-10">  
      <div className="grid gap-2 place-items-center w-fit justify-self-center text-blue-900 text-opacity-75  p-1 shadow-2xl bg-white">
        <h1 className="text-center font-bold text-4xl underline">
          Sign In
        </h1>

        <form onSubmit={handleLogin} className="grid grid-cols-1 place-items-center">
          <div className="grid grid-cols-2 gap-3">
            <label className="grid place-items-center p-3">
              <span className="font-bold pr-3 pb-2">
                Username:
              </span>
              <input name="username" defaultValue={form.username} onChange={e => updateForm("username", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-200"></input>
            </label> 

            <label className="grid place-items-center p-3">
              <span className="font-bold pr-3 pb-2">
                Password:
              </span>
              <input name="password" defaultValue={form.password} onChange={e => updateForm("password", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-200"></input>
            </label>

          </div>
          <input type="submit" value="Login" className=" bg-blue-600 text-white font-bold p-3 w-1/4 rounded-lg hover:duration-100 hover:scale-105 hover:bg-blue-400" />
        </form>
          <Link
            to="/forgotPassword"
            className="block p-4 font-bold hover:text-blue-400"
          >
            Forgot password?
          </Link>
          <div className="grid grid-cols-2">
            <p className="block p-2">
              Don't have an account?
            </p>
            <Link
              to="/createAccount"
              className="block p-2 font-bold hover:text-blue-400"
            >
              Create account
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Login;