import getCurrentTime from "./getTime";

const element = document.querySelector("p");
const price = document.querySelector(".price");
const btn = document.querySelector("button");
console.log("hello");

setInterval(() => {
  element.innerHTML = getCurrentTime();
}, 1000);

const printData = async () => {
  const response = await fetch(
    "https://api.upbit.com/v1/ticker?markets=KRW-BTC"
  );
  const data = await response.json();
  console.log(data);
  price.innerHTML = `${data[0].trade_price} 원`;
};

btn.addEventListener("click", printData);
