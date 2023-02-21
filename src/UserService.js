// API Call Functions

const url = `https://fshjjmdf66.execute-api.ca-central-1.amazonaws.com/pets`;

// GET Pet Data
export async function getPet() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// PUT Pet Data
export async function createPet(data) {
  const response = await fetch(`${url}/${data.id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  const content = await response.json();

  console.log(content);
}