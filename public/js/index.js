const frequencyCanvas = document
  .getElementById("frequency-graph")
  .getContext("2d");
const amplitudeCanvas = document
  .getElementById("amplitude-graph")
  .getContext("2d");

const form = document.getElementById("form");
const frequency = document.getElementById("frequency");
const amplitude = document.getElementById("amplitude");
const song = document.getElementById("file");
let soundPlay = false;
const wave = new p5.Oscillator();
wave.setType("sine");

new Chart(frequencyCanvas, {
  type: "bar",
  // The data for our dataset
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    datasets: [
      {
        label: "Barra",
        backgroundColor: "#307AFF",
        borderColor: "#307AFF",
        fontColor: "ffffff",
        data: [0, 10, 5, 2, 20, 30, 45, 20, 10, 5, 2, 20, 30, 45],
      },
    ],
  },
});

new Chart(amplitudeCanvas, {
  type: "line",
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    datasets: [
      {
        label: "linea",
        backgroundColor: "#6B67FF",
        borderColor: "#6B67FF",
        fontColor: "ffffff",
        data: [0, 10, 5, 2, 20, 30, 45, 20, 10, 5, 2, 20, 30, 45],
      },
    ],
  },
});

Chart.defaults.global.defaultFontColor = "#fff";

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
