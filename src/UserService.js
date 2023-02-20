// API Call Functions

// GET Pet Data
export async function getPet(id) {
  const url = `https://fshjjmdf66.execute-api.ca-central-1.amazonaws.com/pets/${id}`;

  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
  console.log(typeof json);
  return json;
}

// PUT Pet Data
export async function createPet(data) {
  console.log('data: ' + data)
  const response = await fetch(
    'https://fshjjmdf66.execute-api.ca-central-1.amazonaws.com/pets', {
    method: 'POST',
    headers: {'Content Type': 'application/json'},
    body: JSON.stringify({user: data})
  })
  return await response.json();
}