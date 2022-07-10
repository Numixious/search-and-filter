const searchInput = document.querySelector("header-input");
let allProductsdata = [];
const filters = {
  searchItems: "",
};
document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  axios
    .get("http://localhost:3000/items")
    .then((res) => (allProductsdata = console.log(res)))
    .catch((err) => console.error(err));
});
function renderProducts(_products, _filter) {
  const filterdproducts = _products.filter((p) => {
    return p.title.toLowerCase().includes(_filter.searchItems.toLowerCase());
  });
}
searchInput.addEventListener("click", (e) => {
  filters.searchItems = e.target.value;
});
