import { useState } from "react";

function ForgotPassword() {

  const [form, setFormVal] = useState({
    username: "",
    email: "",
  });

  const updateForm = (formKey, e) => {
    // update values in form

    let newVal = e.target.value;

    setFormVal({
      ...form,
      [formKey]: newVal
    })
  }

  const handlePasswordRecovery = (e) => {

    e.preventDefault();

    if (form.email != "") {
      console.log('recovery email sent to: ', form.email);
    } else {
      console.log("email missing");
    }
    
  }

  return (
    <div className="min-h-screen flex items-start py-10">
      <div className="grid gap-2 place-items-center w-fit justify-self-center text-blue-900 text-opacity-75  p-1 shadow-2xl bg-white">
        <h1 className="text-center font-bold text-4xl select-none">
          Password Recovery
        </h1>

        <h2 className="text-center font-bold text-xl select-none">
          Enter your account's email, and we will send a password recovery email to you.
        </h2>

        <form onSubmit={handlePasswordRecovery} className="grid grid-cols-1 place-items-center">
          <label className="grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2 select-none">
              Email:
            </span>
            <input name="email" type="email" defaultValue={form.email} onChange={e => updateForm("email", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-200"></input>
          </label>
          <input type="submit" value="Send Email" className="bg-blue-600 text-white font-bold p-3 w-fit rounded-lg hover:duration-100 hover:scale-105 hover:bg-blue-400" />
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword;