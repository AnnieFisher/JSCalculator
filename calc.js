window.addEventListener('load', function(e){


var table = document.createElement('table');
table.id = 'table';

var thead = document.createElement('thead');
thead.id = "thead";
var result = document.createElement('th');
result.id = "result"
result.colSpan = "4";
thead.appendChild(result);
table.appendChild(thead);

var tbody = document.createElement('tbody');
tbody.id = "tbody"
var tr1 = document.createElement('tr');
tr1.id = "row1";
var clear = document.createElement('td');
clear.id="clear";
clear.textContent = 'C';
var negative = document.createElement('td');
negative.textContent = '+/-';
negative.id="negative";
var modulus = document.createElement('td');
modulus.id="modulus";
modulus.textContent = '%';
var divide = document.createElement('td');
divide.id="divide";
divide.textContent = '/';
tr1.appendChild(clear);
tr1.appendChild(negative);
tr1.appendChild(modulus);
tr1.appendChild(divide);
tbody.appendChild(tr1);


var tr2 = document.createElement('tr');
tr2.id="row2";
var seven = document.createElement('td');
seven.id="seven";
seven.textContent = 7;
var eight = document.createElement('td');
eight.id="eight";
eight.textContent = 8;
var nine = document.createElement('td');
nine.id="nine";
nine.textContent = 9;
var multiply = document.createElement('td');
multiply.id="multiply";
multiply.textContent = '*';
tr2.appendChild(seven);
tr2.appendChild(eight);
tr2.appendChild(nine);
tr2.appendChild(multiply);
tbody.appendChild(tr2);

var tr3 = document.createElement('tr');
tr3.id="row3";
var four = document.createElement('td');
four.id="four";
four.textContent = 4;
var five = document.createElement('td');
five.id="five";
five.textContent = 5;
var six = document.createElement('td');
six.id="six";
six.textContent = 6;
var subtract = document.createElement('td');
subtract.id="subtract";
subtract.textContent = '-';
tr3.appendChild(four);
tr3.appendChild(five);
tr3.appendChild(six);
tr3.appendChild(subtract);
tbody.appendChild(tr3);

var tr4 = document.createElement('tr');
tr4.id="row4";
var one = document.createElement('td');
one.id="one";
one.textContent = 1;
var two = document.createElement('td');
two.id="two";
two.textContent = 2;
var three = document.createElement('td');
three.id="three";
three.textContent = 3;
var addition = document.createElement('td');
addition.id="addition";
addition.textContent = '+';
tr4.appendChild(one);
tr4.appendChild(two);
tr4.appendChild(three);
tr4.appendChild(addition);
tbody.appendChild(tr4);

var tr5 = document.createElement('tr');
tr5.id="row5";
var zero = document.createElement('td');
zero.id="zero";
zero.colSpan = '2';
zero.textContent = 0;
var decimal = document.createElement('td');
decimal.id="decimal";
decimal.textContent = '.';
var equals = document.createElement('td');
equals.id="equals";
equals.textContent = '=';

tr5.appendChild(zero);
tr5.appendChild(decimal);
tr5.appendChild(equals);
tbody.appendChild(tr5);
table.appendChild(tbody);
document.body.appendChild(table)

var keepNum = 0;
var last = '';
var notFirst = false;

decimal.addEventListener('click', function(e){
  if (!notFirst) {
    result.textContent = '';
  }

  if(result.textContent === ''){
    result.textContent += '0.';
  }
  else if (result.textContent.indexOf(".") > -1){
    result.textContent = result.textContent;
  }
  else {
    result.textContent += '.';
  }
  notFirst = true;
});
negative.addEventListener('click', function(e){
  result.textContent = result.textContent * -1;
});
modulus.addEventListener('click', function(e){
  result.textContent = result.textContent / 100;
});
zero.addEventListener('click', function(e){
  if (!notFirst) {
    result.textContent = '';
  }
  result.textContent += '0';
  notFirst = true;
});
one.addEventListener('click', function(e){
  if (!notFirst) {
    result.textContent = '';
  }
  result.textContent += '1';
  notFirst = true;
});
two.addEventListener('click', function(e){
  if (!notFirst) {
    result.textContent = '';
  }
  result.textContent += '2';
  notFirst = true;
});
three.addEventListener('click', function(e){
  if (!notFirst) {
    result.textContent = '';
  }
  result.textContent += '3';
  notFirst= true;
});
four.addEventListener('click', function(e){
  if (!notFirst) {
    result.textContent = '';
  }
  result.textContent += '4';
  notFirst = true;
});
five.addEventListener('click', function(e){
  if (!notFirst) {
    result.textContent = '';
  }
  result.textContent += '5';
  notFirst = true;
});
six.addEventListener('click', function(e){
  if (!notFirst) {
    result.textContent = '';
  }
  result.textContent += '6';
  notFirst = true;
});
seven.addEventListener('click', function(e){
  if (!notFirst) {
    result.textContent = '';
  }
  result.textContent += '7';
  notFirst = true;
});
eight.addEventListener('click', function(e){
  if (!notFirst) {
    result.textContent = '';
  }
  result.textContent += '8';
  notFirst= true;
});
nine.addEventListener('click', function(e){
  if (!notFirst) {
    result.textContent = '';
  }
  result.textContent += '9';
  notFirst= true;
});

var calculate = function(current, keepVal , last){

  switch (last) {
    case 'addition':
      result.textContent = (result.textContent * 1) + (keepVal * 1);
      break;
    case 'subtract':
      result.textContent = (keepVal * 1) - (result.textContent * 1);
      break;
    case 'multiply':
      result.textContent = (result.textContent * 1) * (keepVal * 1);
      break;
    case 'divide':
      result.textContent = (keepVal * 1) / (result.textContent * 1);
      break;
    case 'equals':
      break;
    default:
      break;
  };
  return result.textContent;
};



addition.addEventListener('click', function(e){
  keepNum  = calculate(result.textContent, keepNum , last);
  last = 'addition'
  notFirst = false;
});
subtract.addEventListener('click', function(e){
  keepNum  = calculate(result.textContent,keepNum , last);
  last= 'subtract'
  notFirst = false;
});
multiply.addEventListener('click', function(e){
  keepNum  = calculate(result.textContent,keepNum , last);
  last = 'multiply'
  notFirst= false;
});
divide.addEventListener('click', function(e){
  keepNum  = calculate(result.textContent, keepNum , last);
  last = 'divide'
  notFirst = false;
});

equals.addEventListener('click', function(e){
  keepNum  = calculate(result.textContent, keepNum , last);
  last = 'equals'
  notFirst = false;
});

clear.addEventListener('click', function(e){
  keepNum  = 0;
  result.textContent = '';
  last = '';
  notFirst= false;
});
});
