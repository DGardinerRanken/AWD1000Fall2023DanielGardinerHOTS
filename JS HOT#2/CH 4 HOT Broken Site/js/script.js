"use strict"

  let itemTotal = 0;
  let tax = 0;
  let totalWithTax = 0;

function calcTotal() {
  

  let items = document.getElementsByTagName("input");
  let cells = document.getElementsByTagName("td");


  //changed i < 3 to i < 5 to let all check boxes be registered when calculating, calculating the price. ii
  
  for (let i = 0; i < 5; i++) {
    if (items[i].checked) {
      itemTotal += items[i].value * 1;
    }
  }
  //changed multiple of itemTotal from 0.1 to 0.05 to correctly calculate tax. iii
  //changed the "taxTotal"'s to "tax"'s to allow it to calculate total with tax correctly. V
  //^ this also made it use the constants and variables that were set previously. IV
  //all of these changes amounted to the checkboxes adding their prices to the total correctly. VI
  tax = itemTotal * 0.05;
  totalWithTax = itemTotal + tax;
  cells[1].innerHTML = (itemTotal).toFixed(2);
  cells[3].innerHTML = (tax).toFixed(2);
  cells[5].innerHTML = "$" + (totalWithTax).toFixed(2);


  //4. Clearing any checked boxes after calculate has been clicked
  document.querySelectorAll('input[type="checkbox"]')
   .forEach(el => el.checked = false);
};


//5. clearing the table and check boxes.

function clear(){
  itemTotal = '0.00'
  tax = '0.00'
  totalWithTax = '$0.00'
};


//3. time and date
const d = new Date();
d.setFullYear(2023);
document.getElementById("date").innerHTML = d;

// added onclick(); to call calcTotal when clicking sButton. i
// add event listener to Submit button
let submitButton = document.getElementById("sButton");

