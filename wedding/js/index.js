/* Smooth Scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          block: 'start',
          behavior: 'smooth'
      });
  });
});



/* End of Smooth Scroll*/



/* Start CountDown Casamento */

let countDown = (date) => {

let countDownDate = new Date(date).getTime();

  let x = setInterval(() => {
    
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = `${days}`;
    document.getElementById("hours").innerHTML = `${hours}`;
    document.getElementById("minutes").innerHTML = `${minutes}`;
    document.getElementById("seconds").innerHTML = `${seconds}`;

    if (distance < 0) {
      clearInterval(x); 
      document.getElementById("date").innerHTML = "expirado";
    }


  }, 1);

}

countDown("Jan 1, 2020 12:00:0  0");

/* End Timing Casamento */


/* Start Slider */

let sliders = document.querySelectorAll('.slider li');
let atual = 0;

let total = sliders.length - 1;


/* End Slider */


// TO DO

// Adicionar event listener click para menu
// adicionar classe de visible
// class .toggle para cada onClick
