import { useState } from 'react';
import { match } from '../MatchingAlgorithm';

function Match() {

  const [matches, setMatches] = useState([]);

  async function handleGetMatchData() {
    await match().then(data => setMatches(data));
    console.log(matches);
  }

  return(
    <div>
      <div>
        <button onClick={handleGetMatchData} className="bg-pink-500 text-white font-bold p-3 w-1/4 rounded-lg hover:duration-100 hover:scale-110 hover:bg-pink-600">Run Match Script</button>
      </div>

      
    </div>
  )

}

export default Match;