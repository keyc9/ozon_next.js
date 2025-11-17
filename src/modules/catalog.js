import getData from "./getData";
import renderGoods from "./renderGoods";
import { searchFilter } from "./filter";

const catalog = () => {
  const btnCatalog = document.querySelector(".catalog-button > button");
  const catalogModal = document.querySelector(".catalog");
  const catalogModalitems = document.querySelectorAll(".catalog-list li");

    let isOpen = false;

  btnCatalog.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
      catalogModal.style.display = "block";
    } else {
      catalogModal.style.display = "";
    }
  });
  
  catalogModalitems.forEach((item) => {
    item.addEventListener("click", () => {
          getData().then((data) => {
       renderGoods(searchFilter(data, value));

    })
    })

  });
};

export default catalog;
