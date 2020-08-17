const form = document.getElementById("form");
const sineWaveCanvas = document.getElementById("sine-wave");
const songGraphCanvas = document.getElementById("song-graph");
const frequency = document.getElementById("frequency");
const amplitude = document.getElementById("amplitude");
const song = document.getElementById("file");
let soundPlay = false;
const wave = new p5.Oscillator();
wave.setType("sine");

const toggleSound = () => {
  soundPlay = !soundPlay;
};

let sineWaveSketch = (p) => {
  let xspacing = 8;
  let w;
  let theta = 0.0;
  let ampl = parseInt(amplitude.value);
  let period = parseInt(frequency.value);
  let dx;
  let yvalues;

  const calcWave = () => {
    theta += 0.03;

    let x = theta;

    for (let i = 0; i < yvalues.length; i++) {
      yvalues[i] = p.sin(x) * ampl;
      x += dx;
    }
  };

  const renderWave = () => {
    p.noStroke();
    p.fill(255);

    for (let x = 0; x < yvalues.length; x++) {
      p.ellipse(x * xspacing, p.height / 2 + yvalues[x], 8, 8);
    }
  };

  p.setup = () => {
    p.createCanvas(500, 250);
    w = p.width + 8;
    dx = (p.TWO_PI / period) * xspacing;
    yvalues = new Array(p.floor(w / xspacing));
  };

  p.draw = () => {
    p.background(0);
    calcWave();
    renderWave();
  };
};

const onSubmit = (e) => {
  e.preventDefault();
  toggleSound();
  let amp = parseInt(amplitude.value);
  let freq = parseInt(frequency.value);
  if (soundPlay) {
    wave.start();
    wave.amp(amp, 1);
    wave.freq(freq);
    soundPlay = true;
    new p5(sineWaveSketch, sineWaveCanvas);
  } else {
    wave.stop();
    soundPlay = false;
  }
};

form.addEventListener("submit", onSubmit);
