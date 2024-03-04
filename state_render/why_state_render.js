const app = document.querySelector("#app");

let count = 0;
const text = document.createElement("p");
const text2 = document.createElement("p");
const text2 = document.createElement("p");
const text2 = document.createElement("p");
const text2 = document.createElement("p");
const text2 = document.createElement("p");
text.innerHTML = `Count: ${count}`;

const btn = document.createElement("button");
btn.innerHTML = "+";

btn.addEventListener("click", () => {
  count++;
  // 렌더링 하는게 많아 진다면???!!
  text.innerHTML = `Count: ${count}`;
  text2.innerHTML = `Count: ${count}`;
  text2.innerHTML = `Count: ${count}`;
  text2.innerHTML = `Count: ${count}`;
  text2.innerHTML = `Count: ${count}`;
  text2.innerHTML = `Count: ${count}`;
  app.appendChild(text);
  app.appendChild(btn);
});

app.appendChild(text);
app.appendChild(btn);
