function imgSlides(anything) {
  document.querySelector('.coffeeDrink').src = anything;
}

function changeCircleColor(color) {
  const circle = document.querySelector('.circle');
  circle.style.background = color;
}

//First form only
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;

  //Send data to localStorage
  let data = {
    name,
    email,
  };
  let convertData = JSON.stringify(data);
  localStorage.setItem('lead', convertData);

  //Loading and done
  let content = document.getElementById('content');

  let loading = `<p>Just a minute...</p>`;

  let done = `<p>Done. Thank you!</p>`;

  content.innerHTML = loading;

  setTimeout(() => {
    content.innerHTML = done;
  }, 1000);
});
