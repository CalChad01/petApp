// API Call Functions

// GET Pet Data
export async function getPet() {
  const url = `https://fshjjmdf66.execute-api.ca-central-1.amazonaws.com/pets`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data[0]);
  return data;
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