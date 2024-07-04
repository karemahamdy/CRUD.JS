'use strict'
const productNameInput =document.getElementById('productNameInput');
const productCategoryInput =document.getElementById('productCategoryInput');
const productPriceInput =document.getElementById('productPriceInput');
const productDiscountInput =document.getElementById('productDiscountInput');
const productQuantityInput =document.getElementById('productQuantityInput');
const productDescriptionInput =document.getElementById('productDescriptionInput')
const addProductBtn = document.getElementById('addProductBtn');
const updateProductBtn = document.getElementById('updateProductBtn');
const searchInput =document.getElementById('searchInput')
let productContainer = [];


// start add product logic 
function addProduct (){
  const product = {
    name:productNameInput.value,
    category:productCategoryInput.value,
    price:productPriceInput.value,
    discount:productDiscountInput.value,
    quantity:productQuantityInput.value,
    description:productDescriptionInput.value,
}
productContainer.push(product)
console.log(productContainer);
localStorage.setItem('products' ,JSON.stringify(productContainer))
dispalyProduct()
clearInputs ()
}

addProductBtn.addEventListener('click' ,addProduct);

// add product in table
function dispalyProduct (){
  let content = ``;
      for (let i = 0; i < productContainer.length; i++) {
        content+= `
          <tr>
                          <td>${productContainer[i].name}</td>
                          <td>${productContainer[i].category}</td>
                          <td>${productContainer[i].price}</td>
                          <td>${productContainer[i].discount}</td>
                          <td>${productContainer[i].quantity}</td>
                          <td>${productContainer[i].description}</td>
                          <td><button onclick='setForm(${i})' class="fas fa-pen-to-square btn btn-success"></button></td>
                          <td><button onclick='deleteProduct(${i})' class="fas fa-xmark btn btn-danger"></button></td>
                      </tr>`
          
      }
      document.getElementById('showData').innerHTML = content ;
  }

  // clear Inputs 
function clearInputs (){
  productNameInput.value = '';
  productCategoryInput.value = '';
  productPriceInput.value = ''
  productDiscountInput.value = ''
  productQuantityInput.value = ''
  productDescriptionInput.value = ''
}

  // local storage 
  if(localStorage.getItem('products')){
    productContainer = JSON.parse(localStorage.getItem('products'))
    dispalyProduct()
}

// delete element
function deleteProduct (productIndex){
  // console.log(`Delete ${productIndex}`);
  productContainer.splice(productIndex,1);
  localStorage.setItem('products' ,JSON.stringify(productContainer));
  dispalyProduct();
}