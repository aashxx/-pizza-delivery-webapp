// Typed JS animation
let type = new Typed(".auto-input", {
  strings: ["PIZZA", "PASTA", "FRIES", "DRINKS"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})

// Select Item method
for (let i = 0; i <= document.querySelectorAll('.item-des').length; i++) {
  let state = 0;
  document.querySelectorAll(".item-buy")[i].addEventListener("click", function () {
    if (state == 0) {
      this.innerHTML = "DESELECT";
      document.querySelectorAll(".item-des")[i].style.border = "7px double rgb(136, 30, 30)";
      document.getElementById('order_placed').style.visibility = "visible";
      state = 1;
    } else {
      this.innerHTML = "SELECT";
      document.querySelectorAll(".item-des")[i].style.border = "none";
      // document.getElementById('order_placed').style.visibility = "hidden";
      state = 0;
    }
  })
}

// Submit Contact Form
function submit_details() {
  window.alert("Your feedback has been submitted successfully.");
}

// Place Final Order
function place_order() {
  window.alert("Your order has been placed successfully");
  for (let i = 0; i <= document.querySelectorAll('.item-des').length; i++) {
    document.getElementsByClassName('item-buy')[i].innerHTML = "SELECT";
    document.querySelectorAll(".item-des")[i].style.border = "none";
  }
}
