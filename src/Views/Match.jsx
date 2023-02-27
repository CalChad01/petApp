import React from 'react';
import { loadPyodide } from 'pyodide';

//let pyshell = new PythonShell('matching_algorithm.py');

async function runPythonScript() {
  let pyodide = await loadPyodide({
    indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.22.1/full/',
  });

  console.log(pyodide.runPythonAsync("1+2"));
  return pyodide.runPythonAsync("1+2");
}

function Match() {

  return(
    <div>
      <div>
        <button onClick={runPythonScript} className="bg-pink-500 text-white font-bold p-3 w-1/4 rounded-lg hover:duration-100 hover:scale-110 hover:bg-pink-600">Run Python Script</button>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  )

}

export default Match;