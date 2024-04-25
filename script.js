"use strict";
const data = JSON.parse(product);
const cartContainer = document.querySelector("div.content_item");
data.forEach((element) => {
  const tempEl = document.getElementById("cartTemplate");
  const clone = tempEl.content.cloneNode(true);
  clone.querySelector("div.item_card").id = element.id;
  clone.querySelector("img.item_card__img").src = element.imgUrl;
  clone.querySelector("p.item_card__content__title").innerHTML = element.title;
  clone.querySelector("p.item_card__content__text").innerHTML =
    element.description;
  clone.querySelector("p.item_card__content__cost").innerHTML = element.price;
  cartContainer.appendChild(clone);
});

let cart = [];

const addToCartBtn = document.querySelectorAll(".add_to_cart_button");
addToCartBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const cartEl = btn.parentElement;
    const item = {};
    item["id"] = cartEl.id;
    item["imgUrl"] = cartEl.querySelector("img").src;
    item["title"] = cartEl.querySelector(
      "p.item_card__content__title"
    ).textContent;

    item["description"] = cartEl.querySelector(
      "p.item_card__content__text"
    ).textContent;
    item["price"] = cartEl.querySelector(
      "p.item_card__content__cost"
    ).textContent;
    addToCart(item);
  });
});

function addToCart(params) {
  const cartParams = document.querySelector(".cart_params");
  cartParams.innerHTML = "Cart Items";
  const cartList = document.querySelector(".add_to_cart_product");

  if (cart.find((el) => el.id === params.id) !== undefined) {
    cart.find((el) => el.id === params.id).quantity += 1;
    cartList.querySelectorAll(".cart_items__card").forEach((el) => {
      if (el.id === item.id) {
        el.querySelector(".cart_items__text").textContent =
          "Quantity: " + cart.find((el) => el.id === params.id).quantity;
      }
    });
  } else {
    cart.push({ id: params.id, quantity: 1 });

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart_items__card");
    cartItem.id = params.id;
    cartList.appendChild(cartItem);

    const imgItem = document.createElement("img");
    imgItem.classList.add("cart_items__img");
    imgItem.src = params.imgUrl;
    cartItem.appendChild(imgItem);

    const itemInfo = document.createElement("div");
    itemInfo.classList.add("cart_items__desc");
    cartItem.appendChild(itemInfo);

    const btnClose = document.createElement("button");
    btnClose.classList.add("cart_items__close");
    btnClose.src = "img/close_hw_js.svg";
    itemInfo.appendChild(btnClose);

    const btnCloseImg = document.createElement("img");
    btnCloseImg.classList.add("cart_items__close");
    btnCloseImg.src = "img/close_hw_js.svg";
    btnClose.appendChild(btnCloseImg);

    const cartName = document.createElement("p");
    cartName.classList.add("cart_items__title");
    cartName.innerHTML = params.title;
    itemInfo.appendChild(cartName);

    const cartPrice = document.createElement("p");
    cartPrice.classList.add("cart_items__text");
    cartPrice.innerHTML = "Price: " + params.price;
    itemInfo.appendChild(cartPrice);

    const cartSize = document.createElement("p");
    cartSize.classList.add("cart_items__text");
    cartSize.innerHTML = "Size: XL";
    itemInfo.appendChild(cartSize);

    const cartColor = document.createElement("p");
    cartColor.classList.add("cart_items__text");
    cartColor.innerHTML = "Color: ";
    itemInfo.appendChild(cartColor);

    const cartQuantity = document.createElement("p");
    cartQuantity.classList.add("cart_items__text");
    cartQuantity.innerHTML = "Quantity: " + "1";
    itemInfo.appendChild(cartQuantity);
  }

  const deleteCart = document.querySelectorAll(".cart_items__close");
  deleteCart.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      console.log(btn.parentElement.parentElement.parentElement);
      deleteItem(btn.parentElement.parentElement.parentElement);
    });
  });
}
function deleteItem(el) {
  cart = cart.filter((e) => e.id !== el.id);
  el.remove();
  if (cart.length === 0) {
    document.querySelector(".cart_params").innerHTML = "";
  }
}
