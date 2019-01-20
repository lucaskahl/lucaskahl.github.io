let initialValue = 10;
const $secondButton = document.querySelector(".button-store.-second");

$secondButton.addEventListener("click", handleClick);

function handleClick() {
  const $cartQuantity = document.querySelector(".-last");

  $cartQuantity.textContent = `Carrinho (${++initialValue})`;
}
