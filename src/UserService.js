// API Call Functions

const urlPet = `https://fshjjmdf66.execute-api.ca-central-1.amazonaws.com/pets`;
const urlOwner = `https://7mc3sxy1v3.execute-api.ca-central-1.amazonaws.com/owners`;

// GET Pet Data
export async function getPets() {
  const response = await fetch(urlPet);
  const data = await response.json();
  return data;
}

// PUT Pet Data
export async function createPet(data) {
  const response = await fetch(urlPet, {
    method: 'PUT',
    mode: 'cors',
    headers: 
    {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Headers': 'Content-Type, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token',
    },
    body: JSON.stringify(data)
  });
  const content = await response.json()
  console.log(content);
}

// GET Owner Data
export async function getOwners() {
  const response = await fetch(urlOwner);
  const data = await response.json();
  return data;
}

// PUT Owner Data
export async function createOwner(data) {
  const response = await fetch(urlOwner, {
    method: 'PUT',
    mode: 'cors',
    headers: 
    {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Headers': 'Content-Type, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token',
    },
    body: JSON.stringify(data)
  });
  const content = await response.json();
  console.log(content);
}

// GET lattitude and longitude
export async function getCoords(user) {
  const address = user.address;
  // Define the URL for the API request
  const urlGeoCode = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=3ce1df84633c4ee69df601f0e7251810`;

  // Make a request to the API using fetch()
  const response = await fetch(urlGeoCode);
  const data = await response.json();
  const { lat, lng } = data.results[0].geometry;

  return { lat, lng };
}