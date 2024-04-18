"use strict";
const data = JSON.parse(product);
const cartContainer = document.querySelector("div.content_item");
data.forEach((element) => {
  const tempEl = document.getElementById("cartTemplate");
  const clone = tempEl.content.cloneNode(true);
  clone.querySelector("img.item_card__img").src = element.imgUrl;
  clone.querySelector("p.item_card__content__title").innerHTML = element.title;
  clone.querySelector("p.item_card__content__text").innerHTML =
    element.description;
  clone.querySelector("p.item_card__content__cost").innerHTML = element.price;
  cartContainer.appendChild(clone);
});
