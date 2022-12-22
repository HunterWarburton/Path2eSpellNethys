// First, we need to import the necessary libraries and API endpoint
const axios = require('axios');
const API_ENDPOINT = 'https://www.nethys.net/pfsrd/api';

// Next, let's define a function that retrieves data from the API
async function getPathfinderData(path, queryParams = {}) {
  try {
    // Make a GET request to the API endpoint and pass the query parameters
    const response = await axios.get(`${API_ENDPOINT}/${path}`, { params: queryParams });
    // Return the data from the response
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Now let's use our function to retrieve and display data from the API
async function displayPathfinderData() {
  // Retrieve a list of spells from the API
  const spells = await getPathfinderData('spells', { school: 'evocation' });
  // Loop through the spells and display their names in a list
  const spellList = document.getElementById('spell-list');
  spells.forEach(spell => {
    const spellItem = document.createElement('li');
    spellItem.textContent = spell.name;
    spellList.appendChild(spellItem);
  });

  // Retrieve a list of classes from the API
  const classes = await getPathfinderData('classes');
  // Loop through the classes and display their names in a list
  const classList = document.getElementById('class-list');
  classes.forEach(class => {
    const classItem = document.createElement('li');
    classItem.textContent = class.name;
    classList.appendChild(classItem);
  });

  // Retrieve a list of feats from the API
  const feats = await getPathfinderData('feats');
  // Loop through the feats and display their names in a list
  const featList = document.getElementById('feat-list');
  feats.forEach(feat => {
    const featItem = document.createElement('li');
    featItem.textContent = feat.name;
    featList.appendChild(featItem);
  });
}

// Call the displayPathfinderData function when the page loads
window.addEventListener('load', displayPathfinderData);
