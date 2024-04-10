export default class Component {
  constructor({ target, initalState }) {
    this.target = target;
    this.init(initalState);
    this.render();
  }

  setState(nextState) {
    this.state = { ...this.state, ...nextState };
    this.render();
  }

  template() {
    return;
  }

  setEvent() {}

  render() {
    this.target.innerHTML = this.template();
    this.mounted();
  }

  init(initalState = {}) {
    this.state = initalState;
  }

  mounted() {}
}
