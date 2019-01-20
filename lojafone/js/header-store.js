const $headerStore = document.querySelector(".header-store");
const $menu = $headerStore.querySelector(".-menu");
const $list = $headerStore.querySelector(".list");

$menu.addEventListener("click", () => {
  $list.classList.toggle("-active");
});
