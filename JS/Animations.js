window.onload = function() {
	if(!window.location.hash) {
		window.location = window.location + '#Information';
		window.location.reload();
	}
}


// let MainAnimated = gsap.timeline({
//     scrollTrigger: {
//         trigger: "body",
//         start: "%top center",
//         end: "%bottom center",
//         toggleActions: "play complete reverse none",
//         markers: {
//             startColor: "blue",
//             endColor: "black"},

//     }
// });
var tl = gsap.timeline();
    // tl.from(".MainStudent, .MainStudent_animated0, .MainStudent_animated1", 3, {autoAlpha:0, yoyo:true, ease: Linear.easeNone}, "<");
    tl.to(".MainStudent_animated0, .MainStudent_animated1", 0, {autoAlpha:0}, ">+3");
    tl.to(".MainStudent_animated2", 0, {autoAlpha:1}, "<");

    tl.to(".MainGum", 0.8, {width: "19%", ease: Power1.easeInOut}, ">+0.1");
    tl.to(".MainGum", 1, {width: "36%", ease: Power3.easeIn}, ">");

    tl.to(".main-graph-container", 0, {display: "unset"}, ">");
    tl.add( function(){ 
        myChart.config.data.datasets[0].data[0] = 0;
        myChart.config.data.datasets[0].data[1] = 0;
        myChart.config.data.datasets[0].data[2] = 0;
        myChart.config.data.datasets[0].data[3] = 0;
        myChart.config.data.datasets[0].data[4] = 0;
        myChart.update();
    } )

    tl.to(".main-graph-container", 0.5, {autoAlpha:1}, ">");
    tl.add( function(){ 
        myChart.config.data.datasets[0].data[0] = 7;
        myChart.config.data.datasets[0].data[1] = 10;
        myChart.config.data.datasets[0].data[2] = 4;
        myChart.config.data.datasets[0].data[3] = 5;
        myChart.config.data.datasets[0].data[4] = 3;
        myChart.update();
    },"<+0.2" );

    tl.to(".bubble", 1, {autoAlpha:1, ease: Linear.easeNone}, "<+0.1");

    tl.to(".Food1", 1.9,{rotation: 60, left:"2%"},"<");
    tl.from(".Food2", 1.7,{top:"140%", left:"25%"},"<");
    tl.to(".Food3", 2,{rotation: -1, top:"0%"},"<");
    tl.to(".Food4", 1.8,{rotation: 60, left:"98%"},"<")
    tl.from(".Food5", 1.9,{top:"-15%", left:"130%"},"<");




var mouth_animated = gsap.timeline({defaults:{},repeat:-1, repeatDelay: 0.1 });
    mouth_animated.to(".MainStudent_animated1", 0.1, {left:"50.1%", top:"60.1%", ease: Linear.easeNone}, ">");
    mouth_animated.to(".MainStudent_animated1", 0.1, {left:"50.2%", top:"60.2%", ease: Linear.easeNone}, ">");
    mouth_animated.to(".MainStudent_animated1", 0.1, {left:"50.1%", top:"60.3%", ease: Linear.easeNone}, ">");
    mouth_animated.to(".MainStudent_animated1", 0.1, {left:"50.0%", top:"60.2%", ease: Linear.easeNone}, ">");
