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
  // Retrieve the values from the spell form elements
  const spellLevel = document.getElementById('spell-level').value;
  const spellSchool = document.getElementById('spell-school').value;
  // Create an object to hold the query parameters
  const spellQueryParams = {};
  // Add the level and school query parameters if they have values
  if (spellLevel) {
    spellQueryParams.level = spellLevel;
  }
  if (spellSchool && spellSchool !== 'all') {
    spellQueryParams.school = spellSchool;
  }
  // Retrieve a list of spells from the API using the query parameters
  const spells = await getPathfinderData('spells', spellQueryParams);
  // Loop through the spells and display their names in a list
  const spellList = document.getElementById('spell-list');
  spellList.innerHTML = ''; // Clear the list
  spells.forEach(spell => {
    const spellItem = document.createElement('li');
    spellItem.textContent = spell.name;
    spellList.appendChild(spellItem);
  });

  // Retrieve the value from the class form element
  const className = document.getElementById('class-name').value;
  // Create an object to hold the query parameter
  const classQueryParams = {};
  // Add the name query parameter if it has a value
  if (className) {
    classQueryParams.name = className;
  }
  // Retrieve a list of classes from the API using the query parameter
  const classes = await getPathfinderData('classes', classQueryParams);
  // Loop through the classes and display their names in a list
  const classList = document.getElementById('class-list');
  classList.innerHTML = ''; // Clear the list
  classes.forEach(class => {
    const classItem = document.createElement('li');
    classItem.textContent = class.name;
    classList.appendChild(classItem);
  });

  // Retrieve the value from the feat form element
  const featName = document.getElementById('feat-name').value;
  // Create an object to hold the query parameter
  const featQueryParams = {};
  // Add the name query parameter if it has a value
  if (featName) {
    featQueryParams.name = featName;
  }
  // Retrieve a list of feats from the API using the query parameter
  const feats = await getPathfinderData('feats', featQueryParams);
  // Loop through the feats and display their names in a list
  const featList = document.getElementById('feat-list');
  featList.innerHTML = ''; // Clear the list
  feats.forEach(feat => {
    const featItem = document.createElement('li');
    featItem.textContent = feat.name;
    featList.appendChild(featItem);
  });
}


// Call the displayPathfinderData function when the page loads
window.addEventListener('load', displayPathfinderData);
