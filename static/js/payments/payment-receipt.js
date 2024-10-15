
console.log("Payment Page")

// var b = document.getElementById('Amount').value
// console.log(b)

// localStorage.setItem("LocalStorage", b)

var product = JSON.parse(localStorage.getItem("product"));
// console.log(product[0])
// console.log(product[1])
// console.log(product[2])

amt = document.getElementById('Amount');
prod = document.getElementById('Product');
cat = document.getElementById('Category');

amt.innerHTML = product[0];
prod.innerHTML = product[1];
cat.innerHTML = product[2];

/*
var OrderId = document.getElementById('OrderId').textContent
// console.log(OrderId)

var CustId = document.getElementById('CustId').textContent
console.log(CustId)

function autoIncrement(lastRecordId){
    let increasedNum = Number(lastRecordId.replace('ORD','')) + 1;
    let kmsStr = lastRecordId.substr(0,3);
    for(let i=0; i< 6 - increasedNum.toString().length; i++){
      kmsStr = kmsStr+'0';
    }
    kmsStr = kmsStr + increasedNum.toString();
    // console.log(kmsStr);
    return kmsStr
  }

  var NewOrderId = autoIncrement(OrderId)
  console.log(NewOrderId)
  OrderId.innerHTML = NewOrderId;

*/

