import { useState, useRef, useEffect } from "react";
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
  
  const [showAccountForm, setShowAccountForm] = useState(false);
  const [isShelter, setIsShelter] = useState();

  // for full name concatenation
  let firstNameRef = useRef("");
  let lastNameRef = useRef("");

  // for address concatenation
  let streetRef = useRef("");
  let cityRef = useRef("");
  let stateRef = useRef("");
  let zipRef = useRef("");

  // update values in form
  const updateForm = (formKey, e) => {
    let newVal;

    // full name concatenation
    if (["firstName", "lastName"].includes(formKey)) {
      if (formKey == "firstName")
        firstNameRef.current = e.target.value;
      else
        lastNameRef.current = e.target.value;
      formKey = "name";
      newVal = firstNameRef.current + " " + lastNameRef.current;
    }

    // address concatenation
    else if (["street", "city", "state", "zip"].includes(formKey)) {
      console.log(formKey);
      switch (formKey) {
        case "street": streetRef.current = e.target.value; break;
        case "city": cityRef.current = e.target.value; break;
        case "state": stateRef.current = e.target.value; break;
        case "zip": zipRef.current = e.target.value; break;
      }
      formKey = "address";
      newVal = streetRef.current + " " + cityRef.current + " "
        + stateRef.current + " " + zipRef.current;
    }
    else {
      newVal = e.target.value;
    }

    setFormVal({
      ...form,
      [formKey]: newVal
    });
  }

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // TO BE IMPLEMENTED
    // check to make sure all form values have something in them

    if (true) {
      // generate ID
      form.name = 
      form.id = Math.floor(100000000000 + Math.random() * 900000000000);
      // do password security stuff
      
      return true
    } 
  }

  // handle account type selection
  const handleSelectAcct = (e) => {
    setShowAccountForm(state => !state);

    if (e.target.value == "shelter") {
      setIsShelter(true);
    } else {
      setIsShelter(false);
    }

    updateForm("acc_type", e);
  }

  return (
    <div className="min-h-screen flex items-start py-10 space-x-10">
      {
        showAccountForm ? 
        <div className="grid place-items-center w-fit justify-self-center text-blue-900 text-opacity-75  p-1 shadow-2xl bg-white rounded-md">
          <h1 className="text-center font-bold text-4xl select-none">
            Create Account
          </h1>

          <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 place-items-center">
            <div className="w-full">
              {
                isShelter ? 
                <div className="grid">
                <label className="grid p-3">
                  <span className="font-bold pr-3 pb-2 select-none">
                    Shelter Name:
                  </span>
                  <input name="name" defaultValue={form.name} onChange={e => updateForm("firstName", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-200"></input>
                </label>
                </div> :
                <div className="grid grid-cols-2">
                  <label className="grid p-3">
                    <span className="font-bold pr-3 pb-2 select-none">
                      First Name
                    </span>
                    <input name="name" defaultValue={firstNameRef.current} onChange={e => updateForm("firstName", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-200"></input>
                  </label>
                  <label className="grid p-3">
                    <span className="font-bold pr-3 pb-2 select-none">
                      Last Name
                    </span>
                    <input name="name" defaultValue={lastNameRef.current} onChange={e => updateForm("lastName", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-200"></input>
                  </label>
                </div>
              }

              <label className="grid p-3">
                <span className="font-bold pr-3 pb-2 select-none">
                  Email
                </span>
                <input name="email" defaultValue={form.contact} onChange={e => updateForm("contact", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-200"></input>
              </label>

              <label className="grid p-3">
                <span className="font-bold pr-3 pb-2 select-none">
                  Password
                </span>
                <input name="password" defaultValue={form.password} onChange={e => updateForm("password", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-200"></input>
              </label>

              <label className="grid p-3">
                <span className="font-bold pr-3 pb-2 select-none">
                  Street Address
                </span>
                <input name="street" defaultValue={streetRef.current} onChange={e => updateForm("street", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-200"></input>
              </label>
              <label className="grid p-3">
                <span className="font-bold pr-3 pb-2 select-none">
                  City
                </span>
                <input name="city" defaultValue={cityRef.current} onChange={e => updateForm("city", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-200"></input>
              </label>
              <div className="grid grid-cols-2">
                <label className="grid p-3">
                  <span className="font-bold pr-3 pb-2 select-none">
                    State
                  </span>
                  <select name="state" type="state" defaultValue={stateRef.current} onChange={e => updateForm("state", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-200">
                    <option value="AL">Alabama</option> <option value="AK">Alaska</option> <option value="AZ">Arizona</option> <option value="AR">Arkansas</option> <option value="CA">California</option> <option value="CO">Colorado</option> <option value="CT">Connecticut</option> <option value="DE">Delaware</option> <option value="DC">District Of Columbia</option> <option value="FL">Florida</option> <option value="GA">Georgia</option> <option value="HI">Hawaii</option> <option value="ID">Idaho</option> <option value="IL">Illinois</option> <option value="IN">Indiana</option> <option value="IA">Iowa</option> <option value="KS">Kansas</option> <option value="KY">Kentucky</option> <option value="LA">Louisiana</option> <option value="ME">Maine</option> <option value="MD">Maryland</option> <option value="MA">Massachusetts</option> <option value="MI">Michigan</option> <option value="MN">Minnesota</option> <option value="MS">Mississippi</option> <option value="MO">Missouri</option> <option value="MT">Montana</option> <option value="NE">Nebraska</option> <option value="NV">Nevada</option> <option value="NH">New Hampshire</option> <option value="NJ">New Jersey</option> <option value="NM">New Mexico</option> <option value="NY">New York</option> <option value="NC">North Carolina</option> <option value="ND">North Dakota</option> <option value="OH">Ohio</option> <option value="OK">Oklahoma</option> <option value="OR">Oregon</option> <option value="PA">Pennsylvania</option> <option value="RI">Rhode Island</option> <option value="SC">South Carolina</option> <option value="SD">South Dakota</option> <option value="TN">Tennessee</option> <option value="TX">Texas</option> <option value="UT">Utah</option> <option value="VT">Vermont</option> <option value="VA">Virginia</option> <option value="WA">Washington</option> <option value="WV">West Virginia</option> <option value="WI">Wisconsin</option> <option value="WY">Wyoming</option>
                  </select>
                </label>
                <label className="grid p-3">
                  <span className="font-bold pr-3 pb-2 select-none">
                    ZIP/ postcode
                  </span>
                  <input name="ZIP" defaultValue={zipRef.current} onChange={e => updateForm("zip", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-200"></input>
                </label>
              </div>
            </div>
            <button type="submit" className="bg-blue-600 text-white font-bold p-3 rounded-lg hover:duration-100 hover:scale-105 hover:bg-blue-400 w-3/4"><Link to="/petForm">Continue</Link>
            </button>
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
      </div> : 

      // Select Account Type
      <div className="grid gap-2 place-items-center w-fit justify-self-center text-blue-900 text-opacity-75  p-3 shadow-2xl bg-white rounded-md">
        <h1 className="text-center font-bold text-4xl select-none">
          Are you looking to adopt or are you a pet shelter?
        </h1>
        <button value="owner" onClick={(e) => handleSelectAcct(e)} className="bg-blue-600 text-white text-3xl font-bold p-3 w-3/5 rounded-lg hover:duration-100 hover:scale-105 hover:bg-blue-400">Looking to Adopt</button>
        <button value="shelter" onClick={(e) => handleSelectAcct(e)} className="bg-blue-500 text-white text-3xl font-bold p-3 w-3/5 rounded-lg hover:duration-100 hover:scale-105 hover:bg-blue-400">Pet Shelter</button>
      </div>
      }
    </div>
    
  )

}

export default CreateAccount;