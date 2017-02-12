var exports = module.exports = {};

exports.drawChart = function() {
    var vals = getVals();
    var ctx = document.getElementById("myChart");
    var myObj = {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: vals,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    };
    var myChart = new Chart(ctx, myObj);
}

function getVals(){
  var testVal = NumberData.find({numKey: "colourNums1"});
  var val = testVal.fetch();
  var retVal = 0;
  var retVals = [];
  for (var i=0; i < val.length; i++) {
      retVal = val[i].big_num;
      retVals[0] = val[i].Red;
      retVals[1] = val[i].Blue;
      retVals[2] = val[i].Yellow;
      retVals[3] = val[i].Green;
      retVals[4] = val[i].Purple;
      retVals[5] = val[i].Orange;
  }
  return retVals;
}
