const cartBtn = document.querySelector('.cart-btn');
const cart = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');

//Openning Cart Onclick
cartBtn.addEventListener('click', ()=>{
 cartOverlay.style.visibility = 'visible';
 cart.style.transform = 'translateX(0%)';
//  console.log(cart.style.transform);
})

 //Closing Cart onclick
 const closeCartBtn = document.querySelector('.close-cart');
 closeCartBtn.addEventListener('click', ()=>{
    cart.style.transform = 'translateX(100%)';
    cartOverlay.style.visibility = 'hidden';
 })
  //CART FUNCTIONALITY
   //remove Product from cart
//parentELement for single cartItems  
 const ItemContainer = document.querySelectorAll('.cart-item');
//looping through all of them so we can add an eventListener each's remove button
 for(var i=0; i<ItemContainer.length; i++){
    var EachItemContainer = ItemContainer[i];
    const EachremoveBtn = EachItemContainer.getElementsByClassName('remove-item')
     //adding an Event Listener to each of them
    EachremoveBtn[0].addEventListener('click', removeItem);
    function removeItem(event){
       const container = event.target;
        container.parentElement.parentElement.remove();
      //   UpdateTotal();
    }
 }  

 //CLEAR CART BUTTON
 const clearCartBtn = document.querySelector('.clear-cart');
 clearCartBtn.addEventListener('click', ()=>{
    clearCartBtn.parentElement.parentElement.remove();// clears cart
      /* close cart automitacally
       after it is cleared of all products*/
    setTimeout( ()=>{
      cart.style.transform = 'translateX(100%)';
      cartOverlay.style.visibility = 'hidden';
    },1000)
   //  UpdateTotal();
 })
 
// FINDIND TOTAL and all related calculations 
UpdateTotal()
function UpdateTotal(){
// cartRowContainer is already stored in variable cart
const cartRows = cart.getElementsByClassName('cart-content');
var total = 0; 
for(var i=0; i<cartRows.length; i++){
   var EachCartRow = cartRows[i];
   var amount = EachCartRow.getElementsByClassName('item-price')[0];
   var quantity = EachCartRow.querySelectorAll('.item-quantity')[0];
   var price = parseFloat(amount.innerText.replace('$', ''));
   var quantityValue = parseFloat(quantity.innerText);
   // console.log(quantityValue); 
total = total + (price * quantityValue);
console.log(total);
}
document.getElementsByClassName('cart-total')[0].innerText = total;
// return;
}
