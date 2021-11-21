// document.getElementById('RemoveData').addEventListener('click', function() {
//     // config.data.labels.splice(-1, 1); // remove the label first

//     config.data.datasets.forEach(function(dataset) {
//         dataset.data.popp();
//         dataset.backgroundColor.popp();
//     });


//     window.myDoughnut.update();
// });





function Food01(){
    var checkbox = document.getElementById("Food01");
    if (checkbox.checked != false) {
	    window.myDoughnut.config.data.datasets[0].data[0] = 0;
        window.myDoughnut.update();
    }else{
        window.myDoughnut.config.data.datasets[0].data[0] = 12;
        window.myDoughnut.update();
    }
}


function Food02(){
    var checkbox = document.getElementById("Food02");
    if (checkbox.checked != false) {
	    window.myDoughnut.config.data.datasets[0].data[1] = 0;
        window.myDoughnut.update();
    }else{
        window.myDoughnut.config.data.datasets[0].data[1] = 2;
        window.myDoughnut.update();
    }
}


function Food03(){
    var checkbox = document.getElementById("Food03");
    if (checkbox.checked != false) {
	    window.myDoughnut.config.data.datasets[0].data[2] = 0;
        window.myDoughnut.update();
    }else{
        window.myDoughnut.config.data.datasets[0].data[2] = 7;
        window.myDoughnut.update();
    }
}