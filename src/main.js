import getCurrentTime from "./getTime";

const element = document.querySelector("p");
console.log("hello");

setInterval(() => {
  element.innerHTML = getCurrentTime();
}, 1000);
