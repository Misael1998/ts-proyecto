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
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45]
    }]
},
});

new Chart(amplitudeCanvas, {
  type: "line", 
  data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45]
      }]
  },
});
