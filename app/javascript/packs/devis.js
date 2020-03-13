// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);

// Cleans up and capitalizes the names of the animals
function cleanAndCap (str){
  if(!str) return null
  let temp = str.trim()
  return temp[0].toUpperCase() + temp.substring(1)
}

// Assigning the variables with values used in the story
const firstName = cleanAndCap(words.get('firstname'));
const lastName = cleanAndCap(words.get('lastname'));

const adresse = words.get('adresse');
const zipCode = words.get('zipcode');
const city = words.get('city');
const gender = words.get('form_gender');
// const answer = cleanAndCap(words.get('answer'));
// const conjunction = answer === 'Yes' ? 'and' : 'but';

// const thirdAnimal = cleanAndCap(words.get('animal-3'));
// const quote = words.get('quote');

// const verb1 = words.get('verb-1');
// const num1 = words.get('num-1');
// const message = words.get('message');

// Grabbing the title element
const customer = document.getElementById('customer');
// Populating the title element with text
customer.innerHTML = `<p><strong>Adresse du Client</strong><br>${gender} ${firstName} ${lastName}<br>${adresse}<br>${zipCode} ${city}</p>`;
