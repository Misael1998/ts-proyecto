const songGraphCanvas = document.getElementById("song-graph");
const playPause = document.getElementById("play-pause");
const song = document.getElementById("file");
let songCanvas;
let loadedSong;

let songGraphSketch = (p) => {
  let urlObj;
  let fft;

  p.preload = () => {
    try {
      urlObj = URL.createObjectURL(song.files[0]);
      loadedSong = p.loadSound(urlObj);
    } catch (err) {}
  };

  p.setup = () => {
    p.createCanvas(500, 250);
    if (loadedSong) {
      loadedSong.setVolume(1);
      fft = new p5.FFT();
    }
  };

  p.draw = () => {
    p.background(255);
    if (loadedSong) {
      let spectrum = fft.waveform();
      p.noStroke();

      p.noFill();
      p.beginShape();
      p.stroke(20);
      for (let i = 0; i < spectrum.length; i++) {
        let amp = spectrum[i];
        let x = p.map(i, 0, spectrum.length, p.width);
        let y = p.map(amp, -1, 1, 0, p.height);
        p.vertex(x, y);
      }
      p.endShape();
    }
  };
};

let soundGraphObj = new p5(songGraphSketch, songGraphCanvas);

const onSubmit = (e) => {
  e.preventDefault();
  soundGraphObj.preload();
  soundGraphObj.setup();
};

const onPlayPause = (e) => {
  e.preventDefault();
  if (loadedSong.isPlaying()) {
    loadedSong.pause();
  } else {
    loadedSong.play();
    soundGraphObj.draw();
  }
};

form.addEventListener("submit", onSubmit);
playPause.addEventListener("click", onPlayPause);
