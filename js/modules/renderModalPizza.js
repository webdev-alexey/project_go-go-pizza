import {
  changefirstUpperCase,
  createLabel,
  createRadioInput,
} from "./helpers.js";

export const renderModalPizza = ({ id, images, name, price, toppings }) => {
  const modalPizzaMain = document.querySelector(".modal-pizza__main");
  modalPizzaMain.textContent = "";

  let size = Object.keys(price)[0];

  const picture = document.createElement("picture");
  const source = document.createElement("source");
  source.srcset = images[1];
  source.type = "image/webp";

  const img = document.createElement("img");
  img.classList.add("modal-pizza__img");
  img.src = images[0];
  img.alt = name.ru;
  picture.append(source, img);

  const title = document.createElement("h2");
  title.classList.add("modal-pizza__title");
  title.textContent = changefirstUpperCase(name.ru);

  const toppingsElement = document.createElement("p");
  toppingsElement.classList.add("modal-pizza__toppings");
  toppingsElement.textContent = changefirstUpperCase(toppings.ru);

  const priceSizeInfo = document.createElement("p");
  priceSizeInfo.classList.add("modal-pizza__info");

  const priceElement = document.createElement("span");
  priceElement.classList.add("modal-pizza__price");
  const slashElement = document.createElement("span");
  slashElement.textContent = "/";
  const sizeElement = document.createElement("span");
  sizeElement.classList.add("modal-pizza__size");

  priceSizeInfo.append(priceElement, slashElement, sizeElement);

  const updatePrice = () => {
    const selectedSizeInput = form.querySelector('input[name="size"]:checked');
    size = selectedSizeInput.value;
    priceElement.textContent = `${price[size]} ₽`;
    sizeElement.textContent = `${parseInt(size)} см`;
  };

  const form = document.createElement("form");
  form.id = id;
  form.classList.add("modal-pizza__form");

  const groupFieldset = document.createElement("div");
  groupFieldset.classList.add("modal-pizza__group-fieldset");

  const fieldsetCrust = document.createElement("fieldset");
  fieldsetCrust.classList.add("modal-pizza__fieldset");

  const thickInput = createRadioInput(
    "modal-pizza__radio",
    "thick",
    "crust",
    "thick"
  );
  const thickLabel = createLabel("modal-pizza__label", "thick", "Пышное тесто");
  thickInput.checked = true;

  const thinInput = createRadioInput(
    "modal-pizza__radio",
    "thin",
    "crust",
    "thin"
  );
  const thinLabel = createLabel("modal-pizza__label", "thin", "Тонкое тесто");

  fieldsetCrust.append(thickInput, thickLabel, thinInput, thinLabel);

  const fieldsetSize = document.createElement("fieldset");
  fieldsetSize.classList.add("modal-pizza__fieldset");

  const sizeInputs = Object.keys(price).map((size) =>
    createRadioInput("modal-pizza__radio", size, "size", size)
  );
  sizeInputs[0].checked = true;
  sizeInputs.forEach((input) => {
    const label = createLabel(
      "modal-pizza__label",
      input.id,
      `${parseInt(input.value)} см`
    );
    input.addEventListener("change", updatePrice);
    fieldsetSize.append(input, label);
  });

  groupFieldset.append(fieldsetCrust, fieldsetSize);

  const addToCartBtn = document.createElement("button");
  addToCartBtn.classList.add("modal-pizza__add-cart");
  addToCartBtn.textContent = "В корзину";

  form.append(groupFieldset, addToCartBtn);

  const closeBtn = document.createElement("button");
  closeBtn.classList.add("modal__close");
  closeBtn.innerHTML = `
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <rect
        x="14.8333"
        y="4"
        width="0.851136"
        height="15.3204"
        transform="rotate(45 14.8333 4)"
        fill="#C1AB91"
    />
    <rect
        x="4"
        y="4.60181"
        width="0.851136"
        height="15.3204"
        transform="rotate(-45 4 4.60181)"
        fill="#C1AB91"
    />
    </svg>`;

  modalPizzaMain.append(
    picture,
    title,
    toppingsElement,
    priceSizeInfo,
    form,
    closeBtn
  );

  updatePrice();
};
