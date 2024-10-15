console.log("Shoping Checkout page");

let btn = document.getElementsByClassName('btn');
// let btn = document.querySelectorAll('.btn');

for (let i = 0 ; i < btn.length; i++) {
    btn[i].addEventListener('click', function Clicking(e){
        // e.preventDefault();
        // console.log("Thanks");

        // Set Product Name
        var product_name = btn[i+3].parentNode.parentNode.children[1].textContent;
        // console.log(product_name);
        
        // Set Product Price
        var product_price = btn[i+3].parentNode.parentNode.children[4].textContent;
        // console.log(product_price);
        
        // Set Product Category
        var product_category = btn[i+3].parentNode.parentNode.children[2].textContent;
        // console.log(product_price);


        product = [product_price, product_name, product_category]
        // console.log(product);
        
        if (localStorage.getItem('product') == null) {
            var product = {};
        }

        localStorage.setItem('product', JSON.stringify(product));
        console.log(product);
 
    });
}



