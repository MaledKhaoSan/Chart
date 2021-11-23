// document.getElementById('RemoveData').addEventListener('click', function() {
//     // config.data.labels.splice(-1, 1); // remove the label first

//     config.data.datasets.forEach(function(dataset) {
//         dataset.data.popp();
//         dataset.backgroundColor.popp();
//     });


//     myChart.update();
// });


// window.onload = function() {
//     var ctx = document.getElementById("chart-area").getContext("2d");
//     var myChart = new Chart(ctx, config);
// };
var colorNames = Object.keys(window.chartColors);
var ctx = document.getElementById("chart-area").getContext("2d");
var myChart = new Chart(ctx, config);


const isPriceCheck = str => !str.trim().length;

document.getElementById("PriceInput").addEventListener("input", function() {
  if( isPriceCheck(this.value) ) {
    console.log( `${this.value}`);

    myChart.config.data.datasets[0].data[0] = 7;
    myChart.config.data.datasets[0].data[1] = 10;
    myChart.config.data.datasets[0].data[2] = 4;
    myChart.config.data.datasets[0].data[3] = 5;
    myChart.config.data.datasets[0].data[4] = 3;
    myChart.update();
    
  } else {
    console.log( `ราคา: ${this.value}` );

    if ( this.value < 5) {
        console.log( `ซื้อไม่ได้ 5 บาท`);
        myChart.config.data.datasets[0].data[0] = 0;
        myChart.config.data.datasets[0].data[1] = 0;
        myChart.config.data.datasets[0].data[2] = 0;
        myChart.config.data.datasets[0].data[3] = 0;
        myChart.config.data.datasets[0].data[4] = 0;
        myChart.update();
      }
      
    else if (this.value <= 20) {
        console.log( `5-20`);
    }

    else if (this.value < 40) {
        console.log( `21-40`);
    }
  }
});
// ก๋วยเตี๊ยว
function Food01(){
    myChart.getDatasetMeta(0).data[0].hidden;
    meta = myChart.getDatasetMeta(0).data[0];
    if (meta) {
        meta.hidden = !meta.hidden;
    }        
    myChart.update();
}

// อาหารจานเดียว
function Food02(){
    myChart.getDatasetMeta(0).data[1].hidden;
    meta = myChart.getDatasetMeta(0).data[1];
    if (meta) {
        meta.hidden = !meta.hidden;
    }        
    myChart.update();
}

// สเต๊ก
function Food03(){
    myChart.getDatasetMeta(0).data[2].hidden;
    meta = myChart.getDatasetMeta(0).data[2];
    if (meta) {
        meta.hidden = !meta.hidden;
    }        
    myChart.update();
}
// ของหวาน
function Food04(){
    myChart.getDatasetMeta(0).data[3].hidden;
    meta = myChart.getDatasetMeta(0).data[3];
    if (meta) {
        meta.hidden = !meta.hidden;
    }        
    myChart.update();
}

// เครื่องดื่ม/น้ำผลไม้
function Food05(){
    myChart.getDatasetMeta(0).data[4].hidden;
    meta = myChart.getDatasetMeta(0).data[4];
    if (meta) {
        meta.hidden = !meta.hidden;
    }        
    myChart.update();
}