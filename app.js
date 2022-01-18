// ajax project
const url = "https://api.chucknorris.io/jokes/random";
const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const container = document.querySelector(".container");
const img = document.querySelector(".container img");
btn.addEventListener("click", async () => {
  try {
    const data = await fetch(url);
    const response = await data.json();
    shakeChuck(response);
  } catch (error) {
    console.log(error);
  }

  // console.log(data);
  // console.log(response);
});
//add fetch

function shakeChuck({ value: data }) {
  img.classList.add("shake-img");
  const time = Math.ceil(Math.random() * 1000);
  content.textContent = data;
  setTimeout(() => {
    img.classList.remove("shake-img");
  }, time);
}

// console.log(xhr);

// console.log(getJoke());
