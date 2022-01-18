// ajax project
const url = "https://api.chucknorris.io/jokes/random";
const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const container = document.querySelector(".container");
const img = document.querySelector(".container img");
btn.addEventListener("click", () => {
  getJoke();
});
//add fetch

function getJoke() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // console.log(xhr.responseText);
      img.classList.add("shake-img");
      const time = Math.ceil(Math.random() * 1000);

      const { value: data } = JSON.parse(xhr.responseText);

      content.textContent = data;
      setTimeout(() => {
        img.classList.remove("shake-img");
      }, time);
      //
    } else {
      console.log({ status: xhr.status, text: xhr.statusText });
    }
  };

  xhr.send();
    // console.log(xhr);
}
// console.log(getJoke());
