import { useState, useEffect } from 'react';
import { match } from '../MatchingAlgorithm';

function Match() {

  return(
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-10 select-none w-10/12 h-full">

      <div className="bg-white max-w-sm h-full rounded-2xl overflow-hidden shadow-xl hover:scale-105">
        <img className="w-full" src="src/Assets/mara.jpg" alt="Mara" />
        <div className="px-3 py-3">
          <div className="font-bold text-2xl">Mara</div>
        </div>
        <div className="px-3 pb-2 flex flex-wrap">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 h-7 w-fit">3 years old</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 h-7 w-fit">Female</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Labrador Retriever / Great Dane</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Good w/ other animals</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Good w/ small children</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Spayed/Neutered</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Leash Trained</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Potty Trained</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Moderately Active</span>
        </div>
      </div>

      <div className="bg-white max-w-sm h-full rounded-2xl overflow-hidden shadow-xl hover:scale-105">
        <img className="w-full" src="src/Assets/sip.jpg" alt="Sip" />
        <div className="px-3 py-3">
          <div className="font-bold text-2xl">Sip</div>
        </div>
        <div className="px-3 pb-2 flex flex-wrap">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 h-7 w-fit">6 months</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 h-7 w-fit">Female</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Domestic Shorthair</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Good w/ other animals</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Good w/ small children</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Spayed/Neutered</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Moderately Active</span>
        </div>
      </div>

      <div className="bg-white max-w-sm h-full rounded-2xl overflow-hidden shadow-xl hover:scale-105">
        <img className="w-full" src="src/Assets/daemon.jpg" alt="Daemon" />
        <div className="px-3 py-3">
          <div className="font-bold text-2xl">Daemon</div>
        </div>
        <div className="px-3 pb-2 flex flex-wrap">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 h-7 w-fit">2 years old</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 h-7 w-fit">Male</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Shorthair</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Good w/ other animals</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Good w/ small children</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Pretty Active</span>
        </div>
      </div>

      <div className="bg-white max-w-sm h-full rounded-2xl overflow-hidden shadow-xl hover:scale-105">
        <img className="w-full" src="src/Assets/soup.jpg" alt="Soup" />
        <div className="px-3 py-3">
          <div className="font-bold text-2xl">Soup</div>
        </div>
        <div className="px-3 pb-2 flex flex-wrap">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 h-7 w-fit">6 months</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 h-7 w-fit">Female</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Domestic Shorthair</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Good w/ other animals</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Good w/ small children</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Moderately Active</span>
        </div>
      </div>

      <div className="bg-white max-w-sm h-full rounded-2xl overflow-hidden shadow-xl hover:scale-105">
        <img className="w-full" src="src/Assets/franklin.jpg" alt="Franklin" />
        <div className="px-3 py-3">
          <div className="font-bold text-2xl">Franklin</div>
        </div>
        <div className="px-3 pb-2 flex flex-wrap">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 h-7 w-fit">1 year old</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 h-7 w-fit">Male</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Mastiff</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Good w/ other animals</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Good w/ small children</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Spayed/Neutered</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Leash Trained</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Potty Trained</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Less Active</span>
        </div>
      </div>

      <div className="bg-white max-w-sm h-full rounded-2xl overflow-hidden shadow-xl hover:scale-105">
        <img className="w-full" src="src/Assets/colby.jpg" alt="Colby" />
        <div className="px-3 py-3">
          <div className="font-bold text-2xl">Colby</div>
        </div>
        <div className="px-3 pb-2 flex flex-wrap">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 h-7 w-fit">11 months</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 h-7 w-fit">Male</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Labrador Retriever / Anatolian Shepherd</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Good w/ other animals</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Not good w/ small children</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Distemper</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Bordetella</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Parvovirus</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">Less Active</span>
        </div>
      </div>

    </div>
  )

}

export default Match;