let ceiling = document.getElementById('form_ceiling')

// Write your code here:
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
