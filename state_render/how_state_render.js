function Text({ node, initalState }) {
  this.state = initalState;
  const p = document.createElement("p");

  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    this.render();
  };

  this.render = () => {
    p.textContent = `Count: ${this.state.count}`;
    return;
  };

  this.init = () => {
    // 초기화를 위해서 선언
    node.appendChild(p);
    this.render();
  };

  this.init();
}

function Button({ node, onClick }) {
  const btn = document.createElement("button");

  this.render = () => {
    btn.innerHTML = "+";
    btn.addEventListener("click", onClick);
    return;
  };

  this.init = () => {
    node.appendChild(btn);
    this.render();
  };

  this.init();
}

function App({ target, initalState }) {
  this.state = initalState;

  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    text.setState(this.state);
  };

  const onClick = () => {
    this.setState({ ...this.state, count: this.state.count + 1 });
  };

  const text = new Text({ node: target, initalState: this.state });
  new Button({ node: target, onClick });
}

new App({ target: document.querySelector("#app"), initalState: { count: 0 } });
