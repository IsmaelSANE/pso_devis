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
const adresse2 = words.get('adresse2');
const zipCode2 = words.get('zipcode2');
const city2 = words.get('city2');
const phone = words.get('phone');
const ceilingQuant = words.get('ceiling_m');
const ceilingTot = words.get('ceiling_total');
const wallsQuant = words.get('walls_m');
const wallsTot = words.get('walls_tot');
const totalHt = words.get('totalht');
const totalTtc = words.get('totalttc');
const tva = (totalTtc*10 - totalHt*10) / 10;
// const answer = cleanAndCap(words.get('answer'));
// const conjunction = answer === 'Yes' ? 'and' : 'but';

// const thirdAnimal = cleanAndCap(words.get('animal-3'));
// const quote = words.get('quote');

// const verb1 = words.get('verb-1');
// const num1 = words.get('num-1');
// const message = words.get('message');

// Grabbing the title element
const customer = document.getElementById('customer');
const constructionSite = document.getElementById('constructionSite');
const customerHt = document.getElementById('customerHt');
const body = document.getElementById('bodyForm');

// Populating the title element with text
customer.innerHTML = `<p><strong>Adresse du Client</strong><br>${gender} ${firstName} ${lastName}<br>${adresse}<br>${zipCode} ${city}</p>`;
constructionSite.innerHTML = `<strong>Adresse du chantier:</strong><br>${adresse2}<br>${zipCode2} ${city2}<br>Téléphone: ${phone}`
customerTot.innerHTML = `<li><strong>TOTAL HT:&nbsp;&nbsp;&nbsp;${totalHt}€</strong></li><li><strong>TVA 20%:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${tva}€</strong></li><li><strong>TOTAL TTC: ${totalTtc}€</strong></li>`
body.innerHTML = `<tr><td>Peinture Plafonds</td><td>m²</td><td>${ceilingQuant}</td><td>14.5€</td><td>${ceilingTot}€</td></tr><tr><td>Ensemble des murs</td><td>m²</td><td>${wallsQuant}</td><td>14.5€</td><td>${wallsTot}€</td></tr><tr><td>Forfait Protection des ouvrants</td><td>U</td><td>1</td><td>250€</td><td>250€</td></tr>`
