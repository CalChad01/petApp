import { useState } from "react";
import { createPet } from '../UserService';
import { v4 as uuid } from 'uuid';



function Form() {



  const [form, setFormVal] = useState({
    id: undefined,
    type: "dog",
    age: undefined,
    weight: undefined,
    breed: "",
    actLevel: 3,
    otherAnimals: 1,
    smallChildren: 1,
    contact: "",
    trained: "",
    disabled: "no",
    health: "",
    price: undefined,
  })

  const updateForm = (formKey, e) => {
    let newVal;

    // value conversion
    const numVals = ["age", "weight", "actLevel", "otherAnimals", "smallChildren", "price"];
    if (numVals.includes(formKey) && e.target.value != "") {
        newVal = parseInt(e.target.value);
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
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 8);
    form.id = small_id;
    
    createPet(form);
  }

  return(
    <div className="grid gap-2 place-items-center w-fit text-white p-1 shadow-xl bg-violet-500">

      <h1 className="text-center font-bold text-4xl underline">
        Pet
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 place-items-center">
      <input type="submit" value="Submit" className="bg-pink-500 text-white font-bold p-3 w-1/4 rounded-lg hover:duration-100 hover:scale-110 hover:bg-pink-600" />
        <div className="grid grid-cols-2 gap-3">
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
              Weight (lbs):
            </span>
            <input name="weight" type="number" defaultValue={form.weight} onChange={e => updateForm("weight", e)}className="bg-white text-black rounded-lg p-1 w-1/4"></input>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Breed:
            </span>
            <input name="breed" defaultValue={form.breed} onChange={e => updateForm("breed", e)} className="bg-white text-black rounded-lg p-1"></input>
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
              Friendly with other animals?
            </span>
            <select name="otherAnimals" defaultValue={form.otherAnimals} onChange={e => updateForm("otherAnimals", e)} className="bg-white text-black rounded-lg p-1">
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Friendly with small children?
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
              Trained:
            </span>
            <input name="trained" defaultValue={form.trained} onChange={e => updateForm("trained", e)} className="bg-white text-black rounded-lg p-1"></input>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Disabled?
            </span>
            <select type="number" name="disabled" defaultValue={form.disabled} onChange={e => updateForm("disabled", e)} className="bg-white text-black rounded-lg p-1">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>

          

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Health background (vaccines, neutered, etc.)
            </span>
            <input name="health" defaultValue={form.health} onChange={e => updateForm("health", e)} className="bg-white text-black rounded-lg p-1"></input>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Price ($)
            </span>
            <input name="price" type="number" defaultValue={form.price} onChange={e => updateForm("price", e)} className="bg-white text-black rounded-lg p-1 w-1/3"></input>
          </label>
        </div>
        
  
      </form>

    </div>
  )
}

export default Form;