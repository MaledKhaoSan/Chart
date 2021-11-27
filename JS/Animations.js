window.onload = function() {
	if(!window.location.hash) {
		window.location = window.location + '#Information';
		window.location.reload();
	}
}


ScrollTrigger.matchMedia({
    //Laptop
    "(min-width: 1024px)": function() {
    var tl = gsap.timeline();
        tl.to(".MainText", 1.8,{top: "25%", width:"31%", rotation:"0"},"<")
        tl.to(".MainStudent_animated0, .MainStudent_animated1", 0, {autoAlpha:0}, ">+2");
        tl.to(".MainStudent_animated2", 0, {autoAlpha:1}, "<");

        tl.to(".MainGum", 1, {width: "5%", ease: Power1.easeInOut}, ">+0.1");
        tl.to(".MainGum", 1, {width: "36%", ease: Power3.easeIn}, ">");

        tl.set(".main-graph-container",{display: "unset"}, ">");
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
            myChart.config.data.datasets[0].data[0] = 5;
            myChart.config.data.datasets[0].data[1] = 7;
            myChart.config.data.datasets[0].data[2] = 5;
            myChart.config.data.datasets[0].data[3] = 17;
            myChart.config.data.datasets[0].data[4] = 7;
            myChart.update();
        },"<+0.2" );

        tl.to(".bubble", 1, {autoAlpha:1, ease: Linear.easeNone}, "<+0.1");

        tl.to(".Food1", 1.9,{rotation: 60, left:"2%"},"<");
        tl.from(".Food2", 1.7,{top:"140%", left:"25%"},"<");
        tl.to(".Food3", 2,{rotation: -1, top:"0%"},"<");
        tl.to(".Food4", 1.8,{rotation: 30, left:"98%"},"<")
        tl.to(".Food5", 1.9,{rotation:30, top:"23%", left:"95%"},"<");

        tl.from(".SettingsNav", 2,{opacity:0, display:"none"},"<");
        tl.to(".MainStudent, .MainStudent_animated2, .MainText, .MainGum", 1.2, {autoAlpha:0, ease: Power3.easeOut}, "<");




    var mouth_animated = gsap.timeline({defaults:{},repeat:-1, repeatDelay: 0.1 });
        mouth_animated.to(".MainStudent_animated1", 0.1, {left:"50.1%", top:"55.1%", ease: Linear.easeNone}, ">");
        mouth_animated.to(".MainStudent_animated1", 0.1, {left:"50.2%", top:"55.2%", ease: Linear.easeNone}, ">");
        mouth_animated.to(".MainStudent_animated1", 0.1, {left:"50.1%", top:"55.3%", ease: Linear.easeNone}, ">");
        mouth_animated.to(".MainStudent_animated1", 0.1, {left:"50.0%", top:"55.2%", ease: Linear.easeNone}, ">");



    }
})



ScrollTrigger.matchMedia({
    //Mobile
    "(max-width: 480px)": function() {
    var tl = gsap.timeline();
        tl.to(".MainText", 1.8,{top: "30%", width:"41%", rotation:"0"},"<")
        tl.to(".MainStudent_animated0, .MainStudent_animated1", 0, {autoAlpha:0}, ">+2");
        tl.to(".MainStudent_animated2", 0, {autoAlpha:1}, "<");

        tl.to(".MainGum", 1, {width: "5%", ease: Power1.easeInOut}, ">+0.1");
        tl.to(".MainGum", 1, {width: "75%", ease: Power3.easeIn}, ">");

        tl.set(".main-graph-container",{display: "unset"}, ">");
        tl.add( function(){ 
            myChart.config.data.datasets[0].data[0] = 0;
            myChart.config.data.datasets[0].data[1] = 0;
            myChart.config.data.datasets[0].data[2] = 0;
            myChart.config.data.datasets[0].data[3] = 0;
            myChart.config.data.datasets[0].data[4] = 0;
            myChart.update();
        } )

        tl.to(".main-graph-container", 0.2, {autoAlpha:1}, ">");
        tl.add( function(){ 
            myChart.config.data.datasets[0].data[0] = 5;
            myChart.config.data.datasets[0].data[1] = 7;
            myChart.config.data.datasets[0].data[2] = 5;
            myChart.config.data.datasets[0].data[3] = 17;
            myChart.config.data.datasets[0].data[4] = 7;
            myChart.update();
        },"<+0.2" );

        tl.to(".bubble", 1, {autoAlpha:1, ease: Linear.easeNone}, "<+0.1");

        tl.to(".Food1", 1.9,{rotation: 60, left:"2%"},"<");
        tl.from(".Food2", 1.7,{top:"120%", left:"5%"},"<");
        tl.to(".Food3", 2,{rotation: -1, top:"0%"},"<");
        tl.to(".Food4", 1.8,{rotation: 30, left:"100%"},"<")
        tl.to(".Food5", 1.9,{rotation:30, top:"7%", left:"90%"},"<");

        tl.from(".SettingsNav", 2,{opacity:0, display:"none"},"<");
        tl.to(".MainStudent, .MainStudent_animated2, .MainText, .MainGum", 1.2, {autoAlpha:0, ease: Power3.easeOut}, "<");




    var mouth_animated = gsap.timeline({defaults:{},repeat:-1, repeatDelay: 0.11 });
        mouth_animated.to(".MainStudent_animated1", 0.11, {left:"50.1%", top:"45.6%", ease: Linear.easeNone}, ">");
        mouth_animated.to(".MainStudent_animated1", 0.11, {left:"50.2%", top:"45.7%", ease: Linear.easeNone}, ">");
        mouth_animated.to(".MainStudent_animated1", 0.11, {left:"50.1%", top:"45.8%", ease: Linear.easeNone}, ">");
        mouth_animated.to(".MainStudent_animated1", 0.11, {left:"50.0%", top:"45.7%", ease: Linear.easeNone}, ">");



    }
})
