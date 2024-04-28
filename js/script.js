import { modalCartController } from "./modules/modalCartController.js";
import { modalController } from "./modules/modalController.js";
import { renderPizzas } from "./modules/renderPizzas.js";
import { renderToppings } from "./modules/renderToppings.js";
import { toppingsToggle } from "./modules/toppingToggle.js";

const init = () => {
  toppingsToggle();
  renderToppings();
  renderPizzas();
  modalController({
    modal: ".modal-cart",
    btnOpen: ".header__cart",
    btnClose: ".modal__close",
    cbOpen() {
      modalCartController();
    },
  });
};

init();
