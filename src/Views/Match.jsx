import { useState, useEffect } from 'react';
import { match } from '../MatchingAlgorithm';
import { getOwners } from '../UserService';

function Match() {

  const [ownerData, setOwnerData] = useState([]);
  const [matches, setMatches] = useState([]);
  const [highList, setHighList] = useState([]);
  const [medList, setMedList] = useState([]);
  const [lowList, setLowList] = useState([]);

  async function handleGetMatchData() {
    await match().then(data => setMatches(data));
  }

  const handleGetOwnerData = () => {
    getOwners().then(data => setOwnerData(data));
  }
  
  useEffect(() => {
    if (matches != []) {
      setHighList(matches[0]);
      setMedList(matches[1]);
      setLowList(matches[2]);
    }
    handleGetOwnerData()
  }, [matches]);


  return(
    <div>
      <div>
        <button onClick={handleGetMatchData} className="bg-pink-500 text-white font-bold p-3 w-1/4 rounded-lg hover:duration-100 hover:scale-110 hover:bg-pink-600">Run Match Algorithm</button>
        <h2 className="text-2xl font-bold">Owner:</h2>
        <ul>
          {
          ownerData && ownerData.map(owner => (
            <li key={owner.id}>Name: {owner.name} || Type: {owner.type} || Age: {owner.age} || Small Children? {owner.smallChildren}  || Other Pets? {owner.otherPets} || Contact: {owner.contact}</li>
          ))
          }
        </ul>
        <div className="h-10">

        </div>
        <h2 className="text-2xl font-bold">High Matches</h2>
        <ul>
          {
            highList && highList.map(pet => (
              <li key={pet.id}>Name: {pet.name} || Type: {pet.type} || Breed: {pet.breed} || Age: {pet.age} || Contact: {pet.contact}</li>
            ))
          }
        </ul>
        <h2 className="text-2xl font-bold">Medium Matches</h2>
        <ul>
          {
            medList && medList.map(pet => (
              <li key={pet.id}>Name: {pet.name} || Type: {pet.type} || Breed: {pet.breed} || Age: {pet.age} || Contact: {pet.contact}</li>
            ))
          }
        </ul>
        <h2 className="text-2xl font-bold">Low Matches</h2>
        <ul>
          {
            lowList && lowList.map(pet => (
              <li key={pet.id}>Name: {pet.name} || Type: {pet.type} || Breed: {pet.breed} || Age: {pet.age} || Contact: {pet.contact}</li>
            ))
          }
        </ul>
      </div>


      

      
    </div>
  )

}

export default Match;