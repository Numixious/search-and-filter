const searchInput = document.querySelector(".header-input");
const productsDOM = document.querySelector(".items");
let allProductsdata = [];
const filters = {
  searchItems: "",
};
document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  axios
    .get("http://localhost:3000/items")
    .then((res) => (allProductsdata = res.data))
    .catch((err) => console.error(err));
});
function renderProducts(_products, _filter) {
  const filteredproducts = _products.filter((p) => {
    return p.title.toLowerCase().includes(_filter.searchItems.toLowerCase());
  });
  productsDOM.innerHTML = "";
  console.log(filteredproducts);
  filteredproducts.forEach((item) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("item-boxes");
    productDiv.innerHTML = `
    <div class="items-properties item-boxes">
        <img src="${item.image}" alt="" style="width: 20rem" />
        <div class="detail-of-watch">
          <div class="price-and-model">${item.price}</div>
          <div class="price-and-model">${item.title}</div>`;
    productsDOM.appendChild(productDiv);
  });
}
searchInput.addEventListener("input", search);
function search(e) {
  console.log(e.target.value);
  filters.searchItems = e.target.value;
  renderProducts(allProductsdata, filters);
}
