    /* REMOVE BUTTON */

    var limitInput = document.getElementById("limit"); 
    var totalPrice = document.getElementById("total"); // soma valores carrinho compras

    var limitInput = document.getElementById("limit");

    function removeLine(event) {
    
        var event = event || window.event;
        var target = event.target || event.srcElement;
        console.log(event.target.tagName);
        if (event.target.tagName !== "BUTTON") {
        return;
        }
    
        var row = event.target.parentNode.parentNode;
        
        //var row = this.parentElement.parentElement;
    
        var index = row.rowIndex - 1;
        var order = orders[index];
        orders.splice(index, 1);
        console.log(orders)
        total -= order.value;
    
        tbody.removeChild(row);
        totalElem.innerHTML = total;
    }
    
    tbody.addEventListener("click", removeLine);

    

    /* RED LINE */


    function paintLine(row, order, limit){
        if (limit < order.value){
            row.style.backgroundColor = "red";
            return;
        }
        
        row.style.backgroundColor = "white";
      }
      
      function updateBackgroundColor() {
        var limit = limitInput.value;
        var rows = tbody.getElementsByTagName("tr");
        for (var i = 0; i < orders.length; i++) {
          paintLine(rows[i], orders[i], limit);
        }
      }
      
      limitInput.addEventListener("change", updateBackgroundColor);

 

/* REMOVE BUTTON */

var limitInput = document.getElementById("limit"); 
var totalPrice = document.getElementById("total"); // soma valores carrinho compras

var limitInput = document.getElementById("limit");

function removeLine(event) {

    var event = event || window.event;
    var target = event.target || event.srcElement;
    console.log(event.target.tagName);
    if (event.target.tagName !== "BUTTON") {
    return;
    }

    var row = event.target.parentNode.parentNode;
    
    //var row = this.parentElement.parentElement;

    var index = row.rowIndex - 1;
    var order = orders[index];
    orders.splice(index, 1);
    console.log(orders)
    total -= order.value;

    tbody.removeChild(row);
    totalElem.innerHTML = total;
}

tbody.addEventListener("click", removeLine);



/* RED LINE */


function paintLine(row, order, limit){
    if (limit < order.value){
        row.style.backgroundColor = "red";
        return;
    }
    
    row.style.backgroundColor = "white";
  }
  
  function updateBackgroundColor() {
    var limit = limitInput.value;
    var rows = tbody.getElementsByTagName("tr");
    for (var i = 0; i < orders.length; i++) {
      paintLine(rows[i], orders[i], limit);
    }
  }
  
  limitInput.addEventListener("change", updateBackgroundColor);







