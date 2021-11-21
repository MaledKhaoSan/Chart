document.getElementById('RemoveData').addEventListener('click', function() {
    // config.data.labels.splice(-1, 1); // remove the label first

    config.data.datasets.forEach(function(dataset) {
        dataset.data.popp();
        dataset.backgroundColor.popp();
        // dataset.hidden = !dataset.hidden;
    });


    window.myDoughnut.update();
});





function checkFluency(){
    var checkbox = document.getElementById("fluency");
    if (checkbox.checked != false) {
	    window.myDoughnut.config.data.datasets[0].data[1] = 0;
        window.myDoughnut.update();
    }else{
        window.myDoughnut.config.data.datasets[0].data[1] = 2;
        window.myDoughnut.update();
    }
}
