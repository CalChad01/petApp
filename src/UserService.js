// API Call Functions

export async function createUser(data) {
  console.log('data: ' + data)
  const response = await fetch(
    'https://fshjjmdf66.execute-api.ca-central-1.amazonaws.com/pets', {
    method: 'POST',
    headers: {'Content Type': 'application/json'},
    body: JSON.stringify({user: data})
  })
  return await response.json();
}