import { useState } from "react";
import { getPet } from "../UserService";
import nyanCat from '../Assets/nyanCat.gif';

function Home() {

  const [petData, setPetData] = useState([]);

  const handleGetData = () => {
    getPet().then(data => setPetData(data))
    console.log(petData)
  }

  return (
    <div>
      <div className="flex items-center">
        <img src={nyanCat} className="w-64 animate-[fly_6s_forwards_1]"></img>
      </div>
      <div>
        <button onClick={handleGetData} className="bg-pink-500 text-white font-bold p-3 w-1/4 rounded-lg hover:duration-100 hover:scale-110 hover:bg-pink-600">Get Data</button>
        <ul>
          {
          petData && petData.map(pet => (
            <li key={pet.id}>Pet ID: {pet.id} Pet Breed: {pet.breed}</li>
          ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Home;