const app = document.querySelector("#app");

let count = 0;
const text = document.createElement("p");
text.innerHTML = `Count: ${count}`;

const btn = document.createElement("button");
btn.innerHTML = "+";

btn.addEventListener("click", () => {
  count++;
  text.innerHTML = `Count: ${count}`;
  app.appendChild(text);
  app.appendChild(btn);
});

app.appendChild(text);
app.appendChild(btn);
