class TrafficLight {
  constructor(container, button, ) {
    this.container = container;
    this.lamps = {
      red: container.querySelector('.Light1'),
      orange: container.querySelector('.Light2'),
      green: container.querySelector('.Light3'),
    }

    this.states = ["red", "orange", "green"];
    this.index = 0;
    button.addEventListener("click", () =>  this.next());
    this.render();
  }
  next() {
    this.index = (this.index + 1) % this.states.length;
    this.render();
  }
  render() {
    this.lamps.red.style.background = this.states[this.index] === "red" ? "red" : "grey";
    this.lamps.orange.style.background = this.states[this.index] === "orange" ? "orange" : "grey";
    this.lamps.green.style.background = this.states[this.index] === "green" ? "green" : "grey";
  }

}
const trafficLight = new TrafficLight(document.querySelector(".TrafficLight"), document.getElementById("next"));
