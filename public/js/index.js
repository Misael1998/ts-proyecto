const frequencyCanvas = document
  .getElementById("frequency-graph")
  .getContext("2d");
const amplitudeCanvas = document
  .getElementById("amplitude-graph")
  .getContext("2d");

new Chart(frequencyCanvas, {
  type: "bar",
   // The data for our dataset
   data: {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13],
    datasets: [{
        label: 'Barra',
        backgroundColor: '#307AFF',
        borderColor: '#307AFF',
        fontColor: 'ffffff',
        data: [0, 10, 5, 2, 20, 30, 45,20, 10, 5, 2, 20, 30, 45]
    }]
},
});

new Chart(amplitudeCanvas, {
  type: "line", 
  data: {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13],
      datasets: [{
          label: 'linea',
          backgroundColor: '#6B67FF',
          borderColor: '#6B67FF',
          fontColor: 'ffffff',
          data: [0, 10, 5, 2, 20, 30, 45,20, 10, 5, 2, 20, 30, 45]
      }]
  },
});

Chart.defaults.global.defaultFontColor = "#fff";