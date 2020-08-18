const songGraphCanvas = document.getElementById("song-graph");
const playPause = document.getElementById("play-pause");
const song = document.getElementById("file");
let songCanvas;
let loadedSong;

let songGraphSketch = (obj) => {
  return (p) => {
    p.preload = () => {
      loadedSong = p.loadSound(obj);
    };

    p.setup = () => {
      p.createCanvas(500, 250);
      loadedSong.setVolume(1);
    };

    p.draw = () => {
      p.background(0);
    };
  };
};

const onSubmit = (e) => {
  e.preventDefault();
  console.log(song.files);
  if (!song.files) return;

  const urlObj = URL.createObjectURL(song.files[0]);
  let graph = songGraphSketch(urlObj);
  const soundGraphObj = new p5(graph, songGraphCanvas);
};

const onPlayPause = (e) => {
  e.preventDefault();
  if (loadedSong.isPlaying()) {
    loadedSong.pause();
  } else {
    loadedSong.play();
  }
};

form.addEventListener("submit", onSubmit);
playPause.addEventListener("click", onPlayPause);
