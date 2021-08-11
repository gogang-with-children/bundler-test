import getCurrentTime from "./getTime";

const element = document.querySelector("p");
console.log("hello");

setInterval(() => {
  element.innerHTML = getCurrentTime();
}, 1000);

const init = async () => {
  const response = await fetch(
    "https://api.upbit.com/v1/ticker?markets=KRW-BTC"
  );
  const data = await response.json();
  console.log(data);
};

init();
