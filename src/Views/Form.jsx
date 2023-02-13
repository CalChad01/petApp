import { useState } from "react";

function Form() {

  const [actLevel, setActLevel] = useState(3);

  const handleActivitySlider = e => {
    setActLevel(e.target.value)
  }

  return(
    // Need one button that returns all inputs
    <div className="grid gap-2 place-items-center w-fit text-white p-1 shadow-xl bg-violet-500">

      <h1 className="text-center font-bold text-4xl underline">
        Pet
      </h1>

      <button className="bg-pink-500 text-white font-bold p-3 rounded hover:duration-100 hover:scale-110 hover:bg-pink-600">
        Submit
      </button>

      <form className="grid grid-cols-2 gap-3">
        <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
          <span className="font-bold pr-3 pb-2">
            Type:
          </span>
          <input className="bg-white text-black rounded-lg p-1"></input>
        </label>
        <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
          <span className="font-bold pr-3 pb-2">
            Age:
          </span>
          <input type="number" className="bg-white text-black rounded-lg p-1 w-1/4"></input>
        </label>
        <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
          <span className="font-bold pr-3 pb-2">
            Breed:
          </span>
          <input className="bg-white text-black rounded-lg p-1"></input>
        </label>
        <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
          <span className="font-bold pr-3 pb-2">
            Weight (lbs):
          </span>
          <input className="bg-white text-black rounded-lg p-1 w-1/4"></input>
        </label>
        <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
          <span className="font-bold pr-3 pb-2">
            Location:
          </span>
          <input className="bg-white text-black rounded-lg p-1"></input>
        </label>
        <label className="hover:duration-100 hover:scale-110 hover:bg-violet-600 grid place-items-center p-3">
          <span className="font-bold pr-3">
            Activity Level:
          </span>
          <p className="font-bold">{actLevel}</p>
          <input 
            type="range" defaultValue={actLevel}
            min={1} max={5} step={1}
            onChange={handleActivitySlider}
            className="bg-white text-black rounded-lg w-1/2 accent-pink-500"></input>
        </label>
        
      </form>

      

    </div>
  )
}

export default Form;