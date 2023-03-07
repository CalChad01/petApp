import { useState } from 'react';
import { match } from '../MatchingAlgorithm';

function Match() {

  return(
    <div>
      <div>
        <button onClick={match} className="bg-pink-500 text-white font-bold p-3 w-1/4 rounded-lg hover:duration-100 hover:scale-110 hover:bg-pink-600">Run Match Script</button>
      </div>
    </div>
  )

}

export default Match;