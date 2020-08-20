const form = document.getElementById("form");
const generateButton = document.getElementById("generate-btn");
const sineWaveCanvas = document.getElementById("sine-wave");
const frequency = document.getElementById("frequency");
const amplitude = document.getElementById("amplitude");
let soundPlay = false;
let wave;

function setWave() {
  wave = new p5.Oscillator();
  wave.setType("sine");
}

//Inicializa el objeto wave
setWave();

const toggleSound = () => {
  soundPlay = !soundPlay;
};

let sineWaveSketch = (p) => {
  let xspacing = 2;
  let w;
  let theta = 0.0;
  let ampl;
  let period;
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
    let c = p.color(48, 122, 255);
    p.noStroke();
    p.fill(c);

    for (let x = 0; x < yvalues.length; x++) {
      p.ellipse(x * xspacing, p.height / 2 + yvalues[x], 2, 2);
    }
  };

  p.setup = () => {
    ampl = parseInt(amplitude.value);
    period = 2200 - parseInt(frequency.value);
    p.createCanvas(500, 250);
    w = p.width + 2;
    dx = (p.TWO_PI / period) * xspacing;
    yvalues = new Array(p.floor(w / xspacing));
  };

  p.draw = () => {
    p.background(0);
    p.clear();
    calcWave();
    renderWave();
  };
};

let soundWaveObj;

const onSubmit = (e) => {
  e.preventDefault();
  toggleSound();
  let amp = parseInt(amplitude.value);
  let freq = parseInt(frequency.value);

  if (amp === 0 || freq === 0) {
    alert("Debe ingresar valores de frecuencia y amplitud");
    return;
  }

  soundWaveObj = new p5(sineWaveSketch, sineWaveCanvas);

  if (soundPlay) {
    wave.start();
    wave.amp(amp, 1);
    wave.freq(freq);
    soundWaveObj.setup();
    soundPlay = true;
    document.getElementById("amp-val").innerHTML = amplitude.value;
    document.getElementById("frec-val").innerHTML = frequency.value;
  } else {
    wave.stop();
    soundPlay = false;
  }
  generateButton.disabled = true;
};

form.addEventListener("submit", onSubmit);

function limpiar() {
  document.getElementById("amp-val").innerHTML = " - ";
  document.getElementById("frec-val").innerHTML = " - ";
  frequency.value = "0";
  amplitude.value = "0";
  wave.stop();
  soundPlay = false;
  //Remueve el Canvas y reinicia el oscilador
  soundWaveObj.remove();
  setWave();
  generateButton.disabled = false;
}
