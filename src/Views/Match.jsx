import { useState } from 'react';
import { loadPyodide } from 'pyodide';

const pyodide = await loadPyodide({
  indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.22.1/full/',
})

await pyodide.loadPackage('micropip');
const micropip = pyodide.pyimport('micropip');
await micropip.install('geopy');
await micropip.install('haversine');

function Match() {

  const [pythonOutput, setPythonOutput] = useState([]);
  
  const runPythonScript = () => {
    pyodide.runPythonAsync(`
    print(\'hello world\')
    `)
    .then(output => setPythonOutput(output))
    .catch((err) => { setPythonOutput(err) })

  }

  return(
    <div>
      <div>
        <button onClick={runPythonScript} className="bg-pink-500 text-white font-bold p-3 w-1/4 rounded-lg hover:duration-100 hover:scale-110 hover:bg-pink-600">Run Python Script</button>
      </div>
      <div className="text-3xl">
        <p>{pythonOutput}</p>
      </div>
    </div>
  )

}

export default Match;