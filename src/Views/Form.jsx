import React from "react";

function Form() {
  return(
    // Need one button that returns all inputs
    <form>
      <label>
        <span className="pr-3">
          Type:
        </span>
        <input className="border-2 border-black rounded-lg"></input>
      </label>
    </form>
  )
}

export default Form;