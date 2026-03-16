const searchBtn = document.querySelector(".search-btn");
const lastSearched = document.querySelector(".last-searched");
const searchBox = document.querySelector(".search-box");

const searchHistory = () => {
  const city = searchBox.value.trim();
  if (city == "") return;
  let li = document.createElement("li");
  li.innerHTML = `${city}<i class="fa-solid fa-delete-left"></i>`;
  lastSearched.appendChild(li);
  searchBox.value = "";
  li.querySelector("i").addEventListener("click", () => {
    li.remove();
  });
};

searchBtn.addEventListener("click", () => {
  searchHistory();
});

searchBox.addEventListener("keyup", (e) => {
  if (e.key == "Enter") searchHistory();
});
