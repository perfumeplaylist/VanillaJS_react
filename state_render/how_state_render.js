import Component from "./core.js";

class Text extends Component {
  template() {
    return `<p>Count: ${this.state}</p>`;
  }
}

class Button extends Component {
  template() {
    return `<button>+</button>`;
  }

  setEvent() {
    this.target
      .querySelector("button")
      .addEventListener("click", () => this.state());
  }
}

class App extends Component {
  init() {
    this.state = {
      count: 0,
    };
    this.onClick = () => this.setState({ count: this.state.count + 1 });
  }

  template() {
    return `<header class="header"></header>
    <ul class="list"></ul>
    `;
  }

  mounted() {
    const header = document.querySelector(".header");
    const list = document.querySelector(".list");
    new Text({
      target: list,
      initalState: this.state.count,
    });
    new Button({ target: header, initalState: this.onClick });
  }
}

new App({ target: document.querySelector("#app") });
