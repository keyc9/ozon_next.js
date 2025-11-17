import getData from "./getData";
import renderGoods from "./renderGoods";
import { categoryFilter } from "./filter";

const search = () => {
  const searchInput = document.querySelector(".search-wrapper_input");
  const searchBtn = document.querySelector(".search-btn button");
  const catalog = document.querySelector(".catalog");
  const catalogList = document.querySelector(".catalog-list");
  const catalogItems = document.querySelectorAll(".catalog-list li");

  searchInput.addEventListener("input", (e) => {
    const value = e.target.value;
    
    //     getData(value).then((data) => {
    //     renderGoods(data);
    // })

    getData().then((data) => {
        // renderGoods(data);
       renderGoods(categoryFilter(data, value));

    })
  });
};

export default search;
