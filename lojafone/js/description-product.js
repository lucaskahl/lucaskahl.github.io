const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");
const lastPosition = $stars.length - 1;

$heart.addEventListener("click", handleClick);

$stars.forEach(function($star, key) {
  if (key == 0) {
    $star.addEventListener("click", firstStar);
  }
  if (key == lastPosition) {
    $star.addEventListener("click", lastStar);
  }

  if (key > 0 && key < lastPosition) {
    $star.addEventListener("click", () => {
      middleStar(key);
    });
  }
});

function handleClick() {
  this.classList.toggle("-active");
}

function firstStar() {
  $stars.forEach(function($star) {
    $star.classList.remove("-active");
  });
  this.classList.add("-active");
}

function middleStar(index) {
  $stars.forEach(function($star, key) {
    $star.classList.remove("-active");

    if (key <= index) {
      $star.classList.add("-active");
    }
  });
}

function lastStar() {
  $stars.forEach(function($star) {
    $star.classList.add("-active");
  });
}
