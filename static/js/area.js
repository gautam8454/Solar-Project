console.log("Welcome...............")


const btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    let size = document.getElementById("size").value
    let light = document.getElementById("light").value
    let heading = document.getElementById("heading")
    // console.log(size, light);
    
    result = eval("size * light * 0.2")
    result2 = parseFloat(result).toFixed(3)                     // This is adjust for 3 digit of decimal.
    // console.log(result);

    if (result2 != null){
        if(result2 != 0){
            heading.innerHTML = "Result : " + result2 + "kWh per day";
        }
    }
})
