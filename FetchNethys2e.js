// First, we need to import the necessary libraries and API endpoint
const axios = require('axios');
const API_ENDPOINT = 'https://www.nethys.net/pfsrd/api';

// Next, let's define a function that retrieves data from the API
async function getPathfinderData(path) {
  try {
    // Make a GET request to the API endpoint
    const response = await axios.get(`${API_ENDPOINT}/${path}`);
    // Return the data from the response
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Now let's use our function to retrieve data from the API
async function displayPathfinderData() {
  // Retrieve a list of spells from the API
  const spells = await getPathfinderData('spells');
  // Loop through the spells and display their names in a list
  const spellList = document.getElementById('spell-list');
  spells.forEach(spell => {
    const spellItem = document.createElement('li');
    spellItem.textContent = spell.name;
    spellList.appendChild(spellItem);
  });
}

// Call the displayPathfinderData function when the page loads
window.addEventListener('load', displayPathfinderData);
