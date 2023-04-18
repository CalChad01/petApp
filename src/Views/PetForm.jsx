import { useState } from "react";
import { createPet } from '../UserService';

function PetForm(props) {

  const [form, setFormVal] = useState({
    id: undefined,
    name: "",
    type: "dog",
    age: undefined,
    weight: undefined,
    breed: "",
    address: "",
    actLevel: 3,
    otherAnimals: 1,
    smallChildren: 1,
    contact: "",
    trained: "",
    disabled: "no",
    health: "",
    price: undefined,
    s3uri: undefined,
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
    form.id = Math.floor(100000000000 + Math.random() * 900000000000);

    console.log(form);
    
    // make fetch request
    createPet(form);
  }

  return(
    <div className="min-h-screen flex items-start py-10">
      <div className="grid gap-2 place-items-center w-fit h-fit justify-self-center text-blue-900 text-opacity-75  p-1 shadow-2xl bg-white">

        <h1 className="text-center font-bold text-4xl select-none">
          Pet
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 place-items-center">
          <div className="grid grid-cols-2 gap-1">
            
            <label className="grid place-items-center p-3">
              <span className="font-bold pr-3 pb-2 select-none">
                Name:
              </span>
              <input name="name" defaultValue={form.name} onChange={e => updateForm("name", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-20"></input>
            </label>
            
            <label className="grid place-items-center p-3">
              <span className="font-bold pr-3 pb-2 select-none">
                Type:
              </span>
              <select name="type" defaultValue={form.type} onChange={e => updateForm("type", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-20">
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Bird</option>
              </select>
            </label>

            <label className="grid place-items-center p-3">
              <span className="font-bold pr-3 pb-2 select-none">
                Age:
              </span>
              <input name="age" type="number" defaultValue={form.age} onChange={e => updateForm("age", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-20 w-1/4"></input>
            </label>

            <label className="grid place-items-center p-3">
              <span className="font-bold pr-3 pb-2 select-none">
                Weight (lbs):
              </span>
              <input name="weight" type="number" defaultValue={form.weight} onChange={e => updateForm("weight", e)}className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-20 w-1/4"></input>
            </label>

            <label className="grid place-items-center p-3">
              <span className="font-bold pr-3 pb-2 select-none">
                Breed:
              </span>
              <input name="breed" defaultValue={form.breed} onChange={e => updateForm("breed", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-20"></input>
            </label>

            <label className="grid place-items-center p-3">
              <span className="font-bold pr-3 pb-2 select-none">
                Address (Street Name Town/City State ZIP ):
              </span>
              <input name="contact" defaultValue={form.address} onChange={e => updateForm("address", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-20"></input>
            </label>

            <label className="grid place-items-center p-3">
              <span className="font-bold pr-3 pb-2 select-none">
                Activity Level:
              </span>
              <p className="font-bold">{form.actLevel}</p>
              <input 
                name="actLevel" type="range" defaultValue={form.actLevel}
                min={1} max={5} step={1}
                onChange={e => updateForm("actLevel", e)}
                className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-200"></input>
            </label>

            <label className="grid place-items-center p-3">
              <span className="font-bold pr-3 pb-2 select-none">
                Friendly with other animals?
              </span>
              <select name="otherAnimals" defaultValue={form.otherAnimals} onChange={e => updateForm("otherAnimals", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-20">
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </label>

            <label className="grid place-items-center p-3">
              <span className="font-bold pr-3 pb-2 select-none">
                Friendly with small children?
              </span>
              <select name="smallChildren" defaultValue={form.smallChildren} onChange={e => updateForm("smallChildren", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-20">
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </label>

            <label className="grid place-items-center p-3">
              <span className="font-bold pr-3 pb-2 select-none">
                Contact Information:
              </span>
              <input name="contact" type="email" defaultValue={form.contact} onChange={e => updateForm("contact", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-20"></input>
            </label>

            <label className="grid place-items-center p-3">
              <span className="font-bold pr-3 pb-2">
                Trained:
              </span>
              <input name="trained" defaultValue={form.trained} onChange={e => updateForm("trained", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-20"></input>
            </label>

            <label className="grid place-items-center p-3">
              <span className="font-bold pr-3 pb-2 select-none">
                Disabled?
              </span>
              <select type="number" name="disabled" defaultValue={form.disabled} onChange={e => updateForm("disabled", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-20">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>

            

            <label className="grid place-items-center p-3">
              <span className="font-bold pr-3 pb-2 select-none">
                Health background (vaccines, neutered, etc.)
              </span>
              <input name="health" defaultValue={form.health} onChange={e => updateForm("health", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-20"></input>
            </label>

            <label className="grid place-items-center p-33">
              <span className="font-bold pr-3 pb-2 select-none">
                Price ($)
              </span>
              <input name="price" type="number" defaultValue={form.price} onChange={e => updateForm("price", e)} className="text-black rounded-md p-1 border-2 border-black border-opacity-25 bg-slate-100 hover:bg-slate-20"></input>
            </label>
          </div>
          <input type="submit" value="Submit" className="bg-blue-600 text-white font-bold p-3 w-1/4 rounded-lg hover:duration-100 hover:scale-105 hover:bg-blue-400" />
        </form>

      </div>
    </div>
  )
}

export default PetForm;