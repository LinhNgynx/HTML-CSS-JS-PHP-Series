document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelectorAll(".category-selector");
  const category = document.querySelectorAll(".category");
  const name = document.querySelectorAll(".name");
  const form = document.getElementById("form");
  const search = document.getElementById("search");
  const handleCategorySelect = (e) => {
    const selectedCategory = e.target.innerHTML.toLowerCase();

    category.forEach((item) => {
      if (
        selectedCategory === "all" ||
        item.innerHTML.toLowerCase() === selectedCategory
      ) {
        item.parentNode.style.display = "";
      } else {
        item.parentNode.style.display = "none";
      }
    });
  };
  const handleSearch = (e) => {
    const searchValue=search.value.toLowerCase().trim();
    e.preventDefault();
    name.forEach((itemName) => {
      if (
        itemName.innerHTML.toLowerCase().includes(searchValue)
      ) {
        itemName.parentNode.style.display = "";
      } else {
        itemName.parentNode.style.display = "none";
      }
    });
  };
  button.forEach((btn) =>
    btn.addEventListener("click", (e) => handleCategorySelect(e))
  );
  form.addEventListener("submit", (e) => handleSearch(e));
});
