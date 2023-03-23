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
    <div className="grid gap-2 place-items-center w-fit text-white p-1 shadow-xl bg-violet-500">
      <h1 className="text-center font-bold text-4xl underline">
        Password Recovery
      </h1>

      <h2 className="text-center font-bold text-2xl">
        Enter your account's email, and we will send a password recovery email to you.
      </h2>

      <form onSubmit={handlePasswordRecovery} className="grid grid-cols-1 place-items-center">
        <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
          <span className="font-bold pr-3 pb-2">
            Email:
          </span>
          <input name="email" type="email" defaultValue={form.email} onChange={e => updateForm("email", e)} className="bg-white text-black rounded-lg p-1"></input>
        </label>
        <input type="submit" value="Send Email" className="bg-pink-500 text-white font-bold p-3 rounded-lg hover:duration-100 hover:scale-110 hover:bg-pink-600" />
      </form>
    </div>
  )
}

export default ForgotPassword;