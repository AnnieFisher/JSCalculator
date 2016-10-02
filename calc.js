window.addEventListener('load', function(e){


var table = document.createElement('table');    //table created
table.id = 'calcTable';

var thead = document.createElement('thead');
thead.id = "thead";                             //thead created
var tdHead = document.createElement('td');        //tdHead created for calculation area
tdHead.id = "tdHead"
tdHead.colSpan = "4";
// td17.style.text-align = center;
tdHead.textContent=" ";
thead.appendChild(tdHead);                     //tdHead appended
table.appendChild(thead);                       //thead appended

var tbody = document.createElement('tbody');
tbody.id = "tbody"                               //tbody created
var tr1 = document.createElement('tr');         //first table row created
tr1.id = "tr1";
var td1 = document.createElement('td');
td1.id="td1";
td1.textContent = 'C';                          //first td created
var td2 = document.createElement('td');
td2.textContent = '+/-';                        //second td created
td2.id="td2";
var td3 = document.createElement('td');
td3.id="td3";
td3.textContent = '%';                          //third td created
var td4 = document.createElement('td');
td4.id="td4";
td4.textContent = '/';                          //fourth td created
tr1.appendChild(td1);
tr1.appendChild(td2);
tr1.appendChild(td3);                            //1-4 td appended
tr1.appendChild(td4);
tbody.appendChild(tr1);                         //tr1 appended


var tr2 = document.createElement('tr');       //second table row created
tr2.id="tr2";
var td5 = document.createElement('td');       //5th td created
td5.id="td5";
td5.textContent = 7;
var td6 = document.createElement('td');        //6th td created
td6.id="td6";
td6.textContent = 8;
var td7 = document.createElement('td');        //7th td created
td7.id="td7";
td7.textContent = 9;
var td8 = document.createElement('td');         //8th td created
td8.id="td8";
td8.textContent = '*';
tr2.appendChild(td5);
tr2.appendChild(td6);
tr2.appendChild(td7);                            //5-8 td appended
tr2.appendChild(td8);
tbody.appendChild(tr2);                         //tr2 appended

var tr3 = document.createElement('tr');       //third table row created
tr3.id="tr3";
var td9 = document.createElement('td');       //9th td created
td9.id="td9";
td9.textContent = 4;
var td10 = document.createElement('td');        //10th td created
td10.id="td10";
td10.textContent = 5;
var td11 = document.createElement('td');        //11th td created
td11.id="td11";
td11.textContent = 6;
var td12 = document.createElement('td');         //12th td created
td12.id="td12";
td12.textContent = '-';
tr3.appendChild(td9);
tr3.appendChild(td10);
tr3.appendChild(td11);                            //9-12 td appended
tr3.appendChild(td12);
tbody.appendChild(tr3);                         //tr3 appended

var tr4 = document.createElement('tr');       //fourth table row created
tr4.id="tr4";
var td13 = document.createElement('td');       //13th td created
td13.id="td13";
td13.textContent = 1;
var td14 = document.createElement('td');        //14th td created
td14.id="td14";
td14.textContent = 2;
var td15 = document.createElement('td');        //15th td created
td15.id="td15";
td15.textContent = 3;
var td16 = document.createElement('td');         //16th td created
td16.id="td16";
td16.textContent = '+';
tr4.appendChild(td13);
tr4.appendChild(td14);
tr4.appendChild(td15);                            //13-16 td appended
tr4.appendChild(td16);
tbody.appendChild(tr4);                         //tr4 appended

var tr5 = document.createElement('tr');       //fifth table row created
tr5.id="tr5";
var td17 = document.createElement('td');       //17th td created
td17.id="td17";
td17.colSpan = '2';
// td17.style.text-align = center;
td17.textContent = 0;
var td18 = document.createElement('td');        //18th td created
td18.id="td18";
td18.textContent = '.';
var td19 = document.createElement('td');        //19th td created
td19.id="td19";
td19.textContent = '=';

tr5.appendChild(td17);
tr5.appendChild(td18);
tr5.appendChild(td19);                            //17-19 td appended
tbody.appendChild(tr5);                         //tr5 appended
table.appendChild(tbody);                       //tbody appended
document.body.appendChild(table)                //table appended

    var numbers = [];
    var operand = null;
    var operate = [];
    var result = null;
    var inputs = [];

    var add = function(numbers) {
      var num1 = numbers.shift();
      var num2 = numbers.shift();
      return num1 + num2;
    };
    var subtract = function(numbers) {
      var num1 = numbers.shift();
      var num2 = numbers.shift();
      return num1 - num2;
    };
    var multiply = function(numbers) {
      var num1 = numbers.shift();
      var num2 = numbers.shift();
      return num1 * num2;
    };
    var divide = function(numbers) {
      var num1 = numbers.shift();
      var num2 = numbers.shift();
      return num1 / num2;
    };

td1.addEventListener('click', function(e){
    console.log(td1.textContent);
    inputs.push(td1.textContent);
    tdHead.textContent = null;
    numbers = [];
});
// td2.addEventListener('click', function(e){
//     console.log(td2.textContent);
//     // tdHead.textContent += td2.textContent;
// });
// td3.addEventListener('click', function(e){
//     console.log(td3.textContent);
//     // tdHead.textContent += td3.textContent;
// });

td4.addEventListener('click', function(e){
    console.log(td4.textContent);
    inputs.push(td4.textContent);
    operand = td4.textContent;
    operate.push(parseFloat(tdHead.textContent));
    if(numbers.length>1) {
      result = divide(numbers);
      tdHead.textContent = result;
      numbers.push(result)
    }
    return operand;
});
td5.addEventListener('click', function(e){
    console.log(td5.textContent);
    inputs.push(td5.textContent);
      if (operate.length <= 1) {
        tdHead.textContent += td5.textContent;
      }
      else if (operate.length > 1 && !isNaN(inputs[inputs.length - 2])) {
        tdHead.textContent += td5.textContent;
      }
      else {
        tdHead.textContent = td5.textContent;
      }
    });
td6.addEventListener('click', function(e){
    console.log(td6.textContent);
    inputs.push(td6.textContent);
      if (operate.length <= 1) {
        tdHead.textContent += td6.textContent;
      }
      else if (operate.length > 1 && !isNaN(inputs[inputs.length - 2])) {
        tdHead.textContent += td6.textContent;
      }
      else {
        tdHead.textContent = td6.textContent;
      }
    });
td7.addEventListener('click', function(e){
    console.log(td7.textContent);
    inputs.push(td7.textContent);
      if (operate.length <= 1) {
        tdHead.textContent += td7.textContent;
      }
      else if (operate.length > 1 && !isNaN(inputs[inputs.length - 2])) {
        tdHead.textContent += td7.textContent;
      }
      else {
        tdHead.textContent = td7.textContent;
      }
    });

td8.addEventListener('click', function(e){
    console.log(td8.textContent);
    inputs.push(td8.textContent);
       operand = td8.textContent;
       operate.push(operand);
       numbers.push(parseFloat(tdHead.textContent));
       tdHead.textContent = null;
       if (numbers.length > 1) {
         result = multiply(numbers);
         tdHead.textContent = result;
         numbers.push(result);
       }
       return operand;
     });
td9.addEventListener('click', function(e){
    console.log(td9.textContent);
      inputs.push(td9.textContent);
      if (operate.length <= 1) {
        tdHead.textContent += td9.textContent;
      }
      else if (operate.length > 1 && !isNaN(inputs[inputs.length - 2])) {
        tdHead.textContent += td9.textContent;
      }
      else {
        tdHead.textContent = td9.textContent;
      }
    });
td10.addEventListener('click', function(e){
    console.log(td10.textContent);
      inputs.push(td10.textContent);
      if (operate.length <= 1) {
        tdHead.textContent += td10.textContent;
      }
      else if (operate.length > 1 && !isNaN(inputs[inputs.length - 2])) {
        tdHead.textContent += td10.textContent;
      }
      else {
        tdHead.textContent = td10.textContent;
      }
    });
td11.addEventListener('click', function(e){
    console.log(td11.textContent);
    inputs.push(td11.textContent);
    if (operate.length <= 1) {
      tdHead.textContent += td11.textContent;
    }
    else if (operate.length > 1 && !isNaN(inputs[inputs.length - 2])) {
      tdHead.textContent += td11.textContent;
    }
    else {
      tdHead.textContent = td11.textContent;
    }
});
td12.addEventListener('click', function(e){
    console.log(td12.textContent);
    inputs.push(td12.textContent);
      operand = td12.textContent;
      operate.push(operand);
      numbers.push(parseFloat(tdHead.textContent));
      tdHead.textContent = null;
      if (numbers.length > 1) {
        result = subtract(numbers);
        tdHead.textContent = result;
        numbers.push(result);
      }
      return operand;
    });
td13.addEventListener('click', function(e){
    console.log(td13.textContent);
    inputs.push(td13.textContent);
    if (operate.length <= 1) {
      tdHead.textContent += td13.textContent;
    }
    else if (operate.length > 1 && !isNaN(inputs[inputs.length - 2])) {
      tdHead.textContent += td13.textContent;
    }
    else {
      tdHead.textContent = td13.textContent;
    }
});
td14.addEventListener('click', function(e){
    console.log(td14.textContent);
    inputs.push(td14.textContent);
    if (operate.length <= 1) {
      tdHead.textContent += td14.textContent;
    }
    else if (operate.length > 1 && !isNaN(inputs[inputs.length - 2])) {
      tdHead.textContent += td14.textContent;
    }
    else {
      tdHead.textContent = td14.textContent;
    }
});
td15.addEventListener('click', function(e){
    console.log(td15.textContent);
    inputs.push(td15.textContent);
    if (operate.length <= 1) {
      tdHead.textContent += td15.textContent;
    }
    else if (operate.length > 1 && !isNaN(inputs[inputs.length - 2])) {
      tdHead.textContent += td15.textContent;
    }
    else {
      tdHead.textContent = td15.textContent;
    }
});
td16.addEventListener('click', function(e){
    console.log(td16.textContent);
    inputs.push(td16.textContent);
    operand = td16.textContent;
    operate.push(operand);
    numbers.push(parseFloat(tdHead.textContent));
    tdHead.textContent = null;
    if(numbers.length>1) {
      result = add(numbers);
      tdHead.textContent = result;
      numbers.push(result);
    }
    return operand;
  });

td17.addEventListener('click', function(e){
    console.log(td17.textContent);
    inputs.push(td17.textContent);
    if (operate.length <= 1) {
      tdHead.textContent += td17.textContent;
    }
    else if (operate.length > 1 && !isNaN(inputs[inputs.length - 2])) {
      tdHead.textContent += td17.textContent;
    }
    else {
      tdHead.textContent = td17.textContent;
    }
});
td18.addEventListener('click', function(e){
    console.log(td18.textContent);
    // tdHead.textContent += td18.textContent;
  if ( tdHead.textContent.length == 0) {
      tdHead.textContent = "0.";
   } else {
        if ((tdHead.textContent.indexOf(".") == -1) && (tdHead.textContent.indexOf("e") == -1))
             { tdHead.textContent = tdHead.textContent + ".";
        };
      };
       tdHead.textContent = tdHead.textContent;
});

td19.addEventListener('click', function(e){
    console.log(td19.textContent)
    inputs.push(td19.textContent);
    numbers.push(parseFloat(tdHead.textContent));
    if (operand==='+'){
      result = add(numbers);
      tdHead.textContent = result;
    }
    else if (operand==='-'){
      result = subtract(numbers);
      tdHead.textContent = result;
    }
    else if (operand==='*'){
      result = multiply(numbers);
      tdHead.textContent = result;
    }
    else if (operand==='/'){
      result = divide(numbers);
      tdHead.textContent = result;
    }
    numbers = [];
 });
});
