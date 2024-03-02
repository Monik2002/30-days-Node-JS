// generateData.mjs
const fetch = require('node-fetch');

/**
 * Fetch data from an API
 * @returns {Promise<Object>} - The fetched data
 */
async function generateData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await response.json();
  // console.log('Data fetched:', data);
  return data;
}

module.exports = generateData;

