import { useState } from 'react';
import { loadPyodide } from 'pyodide';
import matchAlgorithm from '../matching_algorithm';

const pyodide = await loadPyodide({
  indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.22.1/full/',
})

await pyodide.loadPackage('micropip');
const micropip = pyodide.pyimport('micropip');
await micropip.install('geopy');
await micropip.install('haversine');

const matchAlgorithmCode = matchAlgorithm()

function Match() {

  const [pythonOutput, setPythonOutput] = useState([]);
  
  const runPythonScript = () => {
    setPythonOutput(pyodide.runPythonAsync(matchAlgorithmCode))
  }

  return(
    <div>
      <div>
        <button onClick={runPythonScript} className="bg-pink-500 text-white font-bold p-3 w-1/4 rounded-lg hover:duration-100 hover:scale-110 hover:bg-pink-600">Run Python Script</button>
      </div>
      <div className="text-3xl">
        <p>{pythonOutput}</p>
        {/* <ul>
          {
            pythonOutput && pythonOutput.map(match => (
              <li>{match}</li>
            ))
          }
        </ul> */}
      </div>
    </div>
  )

}

export default Match;