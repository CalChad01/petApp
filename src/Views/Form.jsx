import { useState } from "react";
import { createPet } from '../UserService';

function Form() {

  const [actLevel, setActLevel] = useState(3);

  const handleActivitySlider = e => {
    setActLevel(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e)
    createPet(e);
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
            <select name="type" className="bg-white text-black rounded-lg p-1">
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
            </select>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Age:
            </span>
            <input name="age" type="number" className="bg-white text-black rounded-lg p-1 w-1/4"></input>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Weight (lbs):
            </span>
            <input name="weight" type="number" className="bg-white text-black rounded-lg p-1 w-1/4"></input>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Breed:
            </span>
            <input name="breed" className="bg-white text-black rounded-lg p-1"></input>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3">
              Activity Level:
            </span>
            <p className="font-bold">{actLevel}</p>
            <input 
              name="actLevel" type="range" defaultValue={actLevel}
              min={1} max={5} step={1}
              onChange={handleActivitySlider}
              className="bg-white text-black rounded-lg w-1/2 accent-pink-500"></input>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Friendly with other animals?
            </span>
            <span className="font-bold grid grid-cols-2 gap-1">
              <p>Yes</p>
              <input name="otherAnimals" type="checkbox" className="bg-white text-black rounded-lg p-1"></input>
            </span>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Friendly with small children?
            </span>
            <span className="font-bold grid grid-cols-2 gap-1">
              <p>Yes</p>
              <input name="smallChildren" type="checkbox" className="bg-white text-black rounded-lg p-1"></input>
            </span>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Contact Information:
            </span>
            <input name="contact" type="email" className="bg-white text-black rounded-lg p-1"></input>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Trained:
            </span>
            <input name="trained" className="bg-white text-black rounded-lg p-1"></input>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Disabled?
            </span>
            <span className="font-bold grid grid-cols-2 gap-1">
              <p>Yes</p>
              <input name="disabled" type="checkbox" className="bg-white text-black rounded-lg p-1"></input>
            </span>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Health background (vaccines, neutered, etc.)
            </span>
            <input name="health" className="bg-white text-black rounded-lg p-1"></input>
          </label>

          <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
            <span className="font-bold pr-3 pb-2">
              Price ($)
            </span>
            <input name="price" type="number" className="bg-white text-black rounded-lg p-1 w-1/3"></input>
          </label>
        </div>
        
  
      </form>

    </div>
  )
}

export default Form;