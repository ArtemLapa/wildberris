const cart = function () {
  const cartBtn = document.querySelector(".button-cart"),
    modalCart = document.getElementById("modal-cart"),
    modalClose = document.querySelector(".modal-close");
      
  cartBtn.addEventListener("click", function () {
    modalCart.style.display = "flex";
  });

  modalClose.addEventListener("click", function () {
    modalCart.style.display = "";
  });
};

cart();