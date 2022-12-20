function onLoad(){
    var categories = ["Super", "Dunkin", "Alcohol", "Comidas", "Vapes", "Telefono", "Farmacia", "Renta", "Gasolina", "Paycheck"]; // categorias de cuentas
    var numCats = categories.length;
    var totals = []; // total de caga categoria
    var inputs = []; // text box en el que pones los numeros
    var outputs = []; // el html en donde se escribe el total
    
    var numID = "";
    var inputID = "";
    var catID = "";

    document.getElementById("addCategory").addEventListener("keypress", function(event){
        if(event.key === "Enter"){
            addCategory();
        }
    })


    // initialize all default categories
    for(let i = 0; i < numCats; i++){

        numID = "num" + i.toString();
        inputID = "in" + i.toString();
        catID = "cat" + i.toString();
        
        
        totals.push(0.0);
        inputs.push(document.getElementById(inputID));
        outputs.push(document.getElementById(numID));
        document.getElementById(catID).innerHTML = "\t" + categories[i] + ": ";

        inputs[i].addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                 b(i);
            }
        });
    }

    // other expenses
    var otherVal = document.getElementById("otherVal");
    var otherName = document.getElementById("otherName");
    var otherAmountOut = document.getElementById("otherAmount");
    var otherTotal = 0.0;
    var otherList = document.getElementById("otherList");
    otherVal.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
             c();
        }
    });
    otherName.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
             c();
        }
    });

    function b(i){
        if(isNaN(parseFloat(inputs[i].value))){
            return;
        }
        totals[i] += parseFloat(inputs[i].value);
        inputs[i].value = "";
        outputs[i].innerHTML = totals[i].toFixed(2);
      }

      function c(){
        if(isNaN(parseFloat(otherVal.value))){
            return;
        }
        otherTotal += parseFloat(otherVal.value);
        var otherg = otherVal.value;
        otherAmountOut.innerHTML = otherTotal.toFixed(2).toString();

        otherList.innerHTML += otherName.value + " " + otherVal.value + "</br>";
        otherVal.value = "";
        otherName.value = "";
        

      }

      function addCategory(){

      }
  }
  window.onload = onLoad;

/*
super
alcohol/bares
salir a comer
vapes
farmacia
telefono
renta
gasolina
otros
8 + otros
*/
