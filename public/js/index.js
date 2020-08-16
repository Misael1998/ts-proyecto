const p5 = require("p5");

const frequencyCanvas = document
  .getElementById("frequency-graph")
  .getContext("2d");
const amplitudeCanvas = document
  .getElementById("amplitude-graph")
  .getContext("2d");

const form = document.getElementById("form");
const frequency = document.getElementById("frecuency");
const amplitude = document.getElementById("amplitude");
let soundPlay = false;
const wave = new p5.Oscillator();
wave.setType("sine");

new Chart(frequencyCanvas, {
  type: "bar",
  // The data for our dataset
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  },
});

new Chart(amplitudeCanvas, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  },
});

const toggleSound = () => {
  soundPlay = !soundPlay;
};

const onSubmit = (e) => {
  e.preventDefault();
  toggleSound();
  let amp = parseInt(amplitude.value);
  let freq = parseInt(frequency.value);
  if (soundPlay) {
    wave.start();
    wave.amp(amp);
    wave.freq(freq);
    soundPlay = true;
  } else {
    wave.stop();
    soundPlay = false;
  }
};
form.addEventListener("submit", onSubmit);
