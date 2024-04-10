export default class Component {
  constructor({ target, initalState }) {
    this.target = target;
    this.init(initalState);
    this.render();
    this.mounted();
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
    this.setEvent();
    this.mounted();
  }

  init(initalState = {}) {
    this.state = initalState;
  }

  mounted() {}
}
