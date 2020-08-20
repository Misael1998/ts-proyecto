const songGraphCanvas = document.getElementById("song-graph");
const playPause = document.getElementById("play-pause");
const song = document.getElementById("file");
const songName = document.getElementById("song-name");
let songCanvas;
let loadedSong;

let songGraphSketch = (p) => {
  let urlObj;
  let fft;

  p.preload = () => {
    try {
      urlObj = URL.createObjectURL(song.files[0]);
      songName.textContent = song.files[0].name;
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
    p.background(0);
    if (loadedSong) {
      let spectrum = fft.analyze(256);
      let c = p.color(107, 103, 255);
      // p.stroke(255);
      p.noStroke();
      for (let i = 0; i < spectrum.length; i++) {
        let amp = spectrum[i];
        let y = p.map(amp, 0, 255, p.height, 0);
        p.fill(c);
        p.rect(i * 5, y, 5, p.height - y);
      }
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
