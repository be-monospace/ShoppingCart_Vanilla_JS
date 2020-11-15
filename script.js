(function(){

    console.log("Teste");

    var tbody = document.getElementById("table-body"); // table body


    var totalPrice = document.getElementById("total"); // soma valores carrinho compras

    var total = 0;


    // Criar 2 funções construtoras - Product + Order

    function Product(name, price) {
        this.name = name;
        this.price = price;
    }

    function Order(product, qty) {
        this.product = product;
        this.qty = qty;
    }

    // Inicializar um array com n products e um array de orders

    var products = [
        new Product("sugar", 0.89),
        new Product("rice", 0.90),
        new Product("apple", 1.05),
        new Product("soap", 1),
        new Product("onions", 1.19),
        new Product("toothpaste", 2.49),
        new Product("cofee", 2.90)
    ];

    var orders = [];

    // Criar um “Combobox” (select) que mostre os vários products existentes,e um input que aceite a quantidade pretendida

    var productList = document.getElementById("products"); // drop-down selection element
    var qtdInput = document.getElementById("qtd"); //Qntd input
    var addToCartBtn = document.getElementById("add-to-cart"); // add to cart button

    function fillProductList(products) {
        var option = document.createElement("option");
        productList.appendChild(option);
        for (var i = 0; i < products.length; i++) {
          var option = document.createElement("option");
          option.innerHTML = products[i].name + " " + products[i].price;
          option.value = i;
          productList.appendChild(option);
        }
      }
      
      fillProductList(products);


      function addToCart() {
        var productIndex = productList.value;
        var product = products[productIndex];
        var order = new Order(product, qtdInput.value);
        orders.push(order);
        addLineToCart(order);
      
        total += order.value;
        totalElem.innerHTML = total;
      }
      
      addToCartBtn.addEventListener("click", addToCart);


      function addLineToCart(order) {
  var orderLine = document.createElement("tr");
  var itemCell = document.createElement("td");
  var priceCell = document.createElement("td");
  var qtdCell = document.createElement("td");
  var valueCell = document.createElement("td");
  var actionsCell = document.createElement("td");
  var removeBtn = document.createElement("button");
  //var editBtn = document.createElement("button");
  itemCell.innerHTML = order.product.name;
  priceCell.innerHTML = order.product.price;
  qtdCell.innerHTML = order.qtd;
  valueCell.innerHTML = order.value;
  removeBtn.innerHTML = "x";
  //editBtn.innerHTML = "Editar";

  //removeBtn.addEventListener("click", removeLine);

  orderLine.appendChild(itemCell);
  orderLine.appendChild(priceCell);
  orderLine.appendChild(qtdCell);
  orderLine.appendChild(valueCell);
  actionsCell.appendChild(removeBtn);
  //actionsCell.appendChild(editBtn);
  orderLine.appendChild(actionsCell);
  tbody.appendChild(orderLine);

  var limit = limitInput.value;
  paintLine(orderLine, order, limit);
}





})();