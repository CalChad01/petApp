import { useState } from "react";
import { getPet, getOwner } from "../UserService";
import nyanCat from '../Assets/nyanCat.gif';

function Home() {

  const [petData, setPetData] = useState([]);
  const [ownerData, setOwnerData] = useState([]);

  const handleGetPetData = () => {
    getPet().then(data => setPetData(data));
  }

  const handleGetOwnerData = () => {
    getOwner().then(data => setOwnerData(data));
  }

  return (
    <div>
      <div className="flex items-center">
        <img src={nyanCat} className="w-64 animate-[fly_6s_forwards_1]"></img>
      </div>
      <div>
        <button onClick={handleGetPetData} className="bg-pink-500 text-white font-bold p-3 w-1/4 rounded-lg hover:duration-100 hover:scale-110 hover:bg-pink-600">Get Pet Data</button>
        <ul>
          {
          petData && petData.map(pet => (
            <li key={pet.id}>Pet ID: {pet.id} Pet Breed: {pet.breed}</li>
          ))
          }
        </ul>
      </div>
      <div>
        <button onClick={handleGetOwnerData} className="bg-pink-500 text-white font-bold p-3 w-1/4 rounded-lg hover:duration-100 hover:scale-110 hover:bg-pink-600">Get Owner Data</button>
        <ul>
          {
          ownerData && ownerData.map(owner => (
            <li key={owner.id}>Owner ID: {owner.id} Pet Breed: {owner.type}</li>
          ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Home;