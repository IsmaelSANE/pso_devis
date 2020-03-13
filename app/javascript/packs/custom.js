let ceiling = document.getElementById('form_ceiling');
ceiling.oninput = function() {
  var myBox1 = document.getElementById('form_ceiling').value;
  var myBox2 = document.getElementById('form_ceiling_price').value;
  var result = document.getElementById('form_ceiling_total');
  var myResult = myBox1 * myBox2;
  result.value = myResult;
  var totalHt = document.getElementById('form_totalht');
  totalHt.value = myResult + 250;
  var totalTtc = document.getElementById('form_totalttc');
  totalTtc.value = (myResult+250) + (((myResult+250)/100) * 20);
}
var totalMurHt = document.getElementById('form_walls_total');

let wall = document.getElementById('form_walls');
wall.oninput = function() {
  var myBox1 = document.getElementById('form_ceiling').value;
  var myBox2 = document.getElementById('form_ceiling_price').value;
  var myResult = myBox1 * myBox2;
  var myBox3 = document.getElementById('form_walls').value;
  var myBox4 = document.getElementById('form_walls_price').value;
  var result2 = document.getElementById('form_walls_tot');
  var myResult2 = myBox3 * myBox4;
  result2.value = myResult2;
  totalMurHt.value = myResult2
  var totalHt = document.getElementById('form_totalht');
  totalHt.value = myResult2 + 250 + myResult;
  var totalTtc = document.getElementById('form_totalttc');
  totalTtc.value = (myResult2 + 250 + myResult) + (((myResult2 + 250 + myResult)/100) * 20);
}

let detailswall = document.getElementById('form_wall');
detailswall.oninput = function() {

  var myBox5 = document.getElementById('form_wall').value;
  var myBox6 = document.getElementById('form_wall_price').value;
  var result3 = document.getElementById('form_wall_tot');
  var myResult3 = myBox5 * myBox6;
  result3.value = myResult3;

  totalMurHt.value = myResult3;
}

let noWall = document.getElementById('noWall');
noWall.oninput = function() {
  document.getElementById('walls_forfait').style.display ='none';
  document.getElementById('walls_detail').style.display ='none';
  document.getElementById('todel').style.display ='none';
}

let allWall = document.getElementById('allWall');
allWall.oninput = function() {
  document.getElementById('walls_forfait').style.display ='block';
  document.getElementById('walls_detail').style.display ='none';
  document.getElementById('todel').style.display ='none';
}

let details = document.getElementById('details');
details.oninput = function() {
  document.getElementById('walls_forfait').style.display ='none';
  document.getElementById('walls_detail').style.display ='block';
  document.getElementById('todel').style.display ='block';
}
$(document).ready(function() {
    var max_fields = 10;
    var wrapper = $(".input_fields_wrap");
    var add_button = $(".add_field_button");

    var x = 1;
    $(add_button).click(function(e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(wrapper).append('<div><input type="hidden" id="monid" value="2"><select class="piece" name="piece[]"><option value="1">Séjour</option><option value="2">Cuisine</option><option value="3">Chambre1</option><option value="4">Chambre2</option><option value="5">Chambre3</option><option value="6">Chambre4</option><option value="7">WC</option><option value="8">SDB1</option><option value="9">SDB2</option><option value="10">Entrée</option><option value="11">Couloir</option><option value="12">Buanderie</option><option value="13">Garage</option><option value="14">Sous-sol</option><option value="15">Autres</option>                         </select>                         <select id="fw3" class="peinture" name="peinture[]"><option class="impress" value="9.5">Murs Dec. Impression</option><option class="satineBlanc" value="13.5">Murs Dec. Satiné Blanc</option><option class="satinePastel" value="15.2">Murs Dec. Satiné Pastel</option>                         </select>                         <input type="number" id="form_wall" name="wall_m[]" class="calcwall validate[required,custom[integer],min[1]] text-input" value="0" min="1" step="any" data-hasqtip="12">m²                         <input type="hidden" id="form_wall_coef" name="wall_coef[]" tabindex="-1" readonly="" value="2.62" title="Le coefficient 2.62 est un standard pour évaluer la surface des murs par rapport au sol">* coef Murs *                         <input type="text" id="form_wall_price" class="coefMurs3" name="wall_price[]" tabindex="-1" readonly="" value="9.5">€ =                         <input type="text" id="form_wall_tot" name="wall_tot[]" tabindex="-1" readonly="" value="0">Total&nbsp;&nbsp;&nbsp;<br><a href="#" class="delete">Suprimer</a></div>'); //add input box
            let impression3 = document.getElementById("fw3");
            impression3.onclick = function() {
              document.querySelector('.coefMurs3').value = impression3.value;
            }
        } else {
            alert('Vous avez atteint la limite de pièces à ajouter')
        }
    });

    $(wrapper).on("click", ".delete", function(e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    })
});

let impression = document.getElementById("fw");
impression.onclick = function() {
  document.querySelector('.coefMurs').value = impression.value;
}
let impression2 = document.getElementById("fw2");
impression2.onclick = function() {
  document.querySelector('.coefMurs2').value = impression2.value;
}
