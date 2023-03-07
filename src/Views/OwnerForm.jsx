import { useState } from "react";
import { createOwner } from '../UserService';

function OwnerForm() {

  const [form, setFormVal] = useState({
    id: "",
    name: "",
    type: "dog",
    age: "",
    address: "",
    travel: undefined,
    actLevel: 3,
    otherPets: 1,
    smallChildren: 1,
    contact: "",
    budget: undefined,
  })

  const updateForm = (formKey, e) => {
    let newVal;

    // value conversion
    const numVals = ["age", "travel", "actLevel", "otherPets", "smallChildren", "budget"];
    if (numVals.includes(formKey) && e.target.value != "") {
        newVal = parseInt(e.target.value);
        
        if (formKey == 'age') {
          if (newVal <= 2) {
            newVal = "puppy";
          } else if (newVal >= 8) {
            newVal = "senior";
          } else {
            newVal = "adult";
          }
        }
    }
    else {
      newVal = e.target.value;
    }
    
    setFormVal({
      ...form,
      [formKey]: newVal
    });
  }

  const handleSubmit = (e) => {
    // prevent page reload after submit
    e.preventDefault();

    // generate unique ID for pet
    form.id = Math.floor(100000000000 + Math.random() * 900000000000).toString();
    
    // make fetch request
    createOwner(form);
  }

  return(
    <div className="grid gap-2 place-items-center w-fit text-white p-1 shadow-xl bg-violet-500">

      <h1 className="text-center font-bold text-4xl underline">
        Owner
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 place-items-center">
      <input type="submit" value="Submit" className="bg-pink-500 text-white font-bold p-3 w-1/4 rounded-lg hover:duration-100 hover:scale-110 hover:bg-pink-600" />
        <div className="grid grid-cols-2 gap-3">

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Name:
            </span>
            <input name="contact" defaultValue={form.name} onChange={e => updateForm("name", e)} className="bg-white text-black rounded-lg p-1"></input>
          </label>
          
          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Type:
            </span>
            <select name="type" defaultValue={form.type} onChange={e => updateForm("type", e)} className="bg-white text-black rounded-lg p-1">
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
            </select>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Age:
            </span>
            <input name="age" type="number" defaultValue={form.age} onChange={e => updateForm("age", e)} className="bg-white text-black rounded-lg p-1 w-1/4"></input>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Address (Street Name Town/City State ZIP ):
            </span>
            <input name="contact" defaultValue={form.address} onChange={e => updateForm("address", e)} className="bg-white text-black rounded-lg p-1"></input>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Travel (miles):
            </span>
            <input name="travel" type="number" defaultValue={form.travel} onChange={e => updateForm("travel", e)}className="bg-white text-black rounded-lg p-1 w-1/4"></input>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3">
              Activity Level:
            </span>
            <p className="font-bold">{form.actLevel}</p>
            <input 
              name="actLevel" type="range" defaultValue={form.actLevel}
              min={1} max={5} step={1}
              onChange={e => updateForm("actLevel", e)}
              className="bg-white text-black rounded-lg w-1/2 accent-pink-500"></input>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Have other pets?
            </span>
            <select name="otherPets" defaultValue={form.otherPets} onChange={e => updateForm("otherPets", e)} className="bg-white text-black rounded-lg p-1">
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Have small children?
            </span>
            <select name="smallChildren" defaultValue={form.smallChildren} onChange={e => updateForm("smallChildren", e)} className="bg-white text-black rounded-lg p-1">
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Contact Information:
            </span>
            <input name="contact" type="email" defaultValue={form.contact} onChange={e => updateForm("contact", e)} className="bg-white text-black rounded-lg p-1"></input>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Budget ($)
            </span>
            <input name="budget" type="number" defaultValue={form.budget} onChange={e => updateForm("budget", e)} className="bg-white text-black rounded-lg p-1 w-1/3"></input>
          </label>
        </div> 
  
      </form>

    </div>
  )
}

export default OwnerForm;