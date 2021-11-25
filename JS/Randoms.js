
//Side Nav
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
//Random Nav



var ctx = document.getElementById("chart-area").getContext("2d");
var myChart = new Chart(ctx, config);

function openRandomNav() {
  closeNav();
  var myRandomColorChnage = gsap.timeline();
    myRandomColorChnage.set(".SettingsNav",{display: "none"},"0")
    myRandomColorChnage.add( function(){ 
      myChart.config.data.datasets[0].backgroundColor[0] ="#abbcd6";
      myChart.config.data.datasets[0].borderColor[0] ="#abbcd6";
      myChart.update();
    },"<" );

    myRandomColorChnage.add( function(){ 
      myChart.config.data.datasets[0].backgroundColor[1] ="#abbcd6";
      myChart.config.data.datasets[0].borderColor[1] ="#abbcd6";
      myChart.update();
    },">+0.1" );


    myRandomColorChnage.add( function(){ 
      myChart.config.data.datasets[0].backgroundColor[2] ="#abbcd6";
      myChart.config.data.datasets[0].borderColor[2] ="#abbcd6";
      myChart.update();
    },">+0.1" );

    myRandomColorChnage.add( function(){ 
      myChart.config.data.datasets[0].backgroundColor[0] ="#d4ddeb";
      myChart.config.data.datasets[0].borderColor[0] ="#d4ddeb";
      myChart.update();
    },">+0.1" );
    myRandomColorChnage.add( function(){ 
      myChart.config.data.datasets[0].backgroundColor[3] ="#abbcd6";
      myChart.config.data.datasets[0].borderColor[3] ="#abbcd6";
      myChart.update();
    },">+0.1" );

    myRandomColorChnage.add( function(){ 
      myChart.config.data.datasets[0].backgroundColor[1] ="#d4ddeb";
      myChart.config.data.datasets[0].borderColor[1] ="#d4ddeb";
      myChart.update();
    },">+0.1" );
    myRandomColorChnage.add( function(){ 
      myChart.config.data.datasets[0].backgroundColor[4] ="#abbcd6";
      myChart.config.data.datasets[0].borderColor[4] ="#abbcd6";
      myChart.update();
    },">+0.1" );

    myRandomColorChnage.add( function ColorChnageLoop(){
    var myRandomColorChnageLoop = gsap.timeline({defaults:{},repeat:1, repeatDelay:0});
        myRandomColorChnageLoop.add( function(){ 
          myChart.config.data.datasets[0].backgroundColor[2] ="#d4ddeb";
          myChart.config.data.datasets[0].borderColor[2] ="#d4ddeb";
          myChart.update();
        },">+0.1" );
        myRandomColorChnageLoop.add( function(){ 
          myChart.config.data.datasets[0].backgroundColor[0] ="#abbcd6";
          myChart.config.data.datasets[0].borderColor[0] ="#abbcd6";
          myChart.update();
        },">+0.1" );
        myRandomColorChnageLoop.add( function(){ 
          myChart.config.data.datasets[0].backgroundColor[3] ="#d4ddeb";
          myChart.config.data.datasets[0].borderColor[3] ="#d4ddeb";
          myChart.update();
        },">+0.1" );
        myRandomColorChnageLoop.add( function(){ 
          myChart.config.data.datasets[0].backgroundColor[1] ="#abbcd6";
          myChart.config.data.datasets[0].borderColor[1] ="#abbcd6";
          myChart.update();
        },">+0.1" );
        myRandomColorChnageLoop.add( function(){ 
          myChart.config.data.datasets[0].backgroundColor[4] ="#d4ddeb";
          myChart.config.data.datasets[0].borderColor[4] ="#d4ddeb";
          myChart.update();
        },">+0.1" );
        myRandomColorChnageLoop.add( function(){ 
          myChart.config.data.datasets[0].backgroundColor[2] ="#abbcd6";
          myChart.config.data.datasets[0].borderColor[2] ="#abbcd6";
          myChart.update();
        },">+0.1" );
        myRandomColorChnageLoop.add( function(){ 
          myChart.config.data.datasets[0].backgroundColor[0] ="#d4ddeb";
          myChart.config.data.datasets[0].borderColor[0] ="#d4ddeb";
          myChart.update();
        },">+0.1" );
        myRandomColorChnageLoop.add( function(){ 
          myChart.config.data.datasets[0].backgroundColor[3] ="#abbcd6";
          myChart.config.data.datasets[0].borderColor[3] ="#abbcd6";
          myChart.update();
        },">+0.1" );
      
        myRandomColorChnageLoop.add( function(){ 
          myChart.config.data.datasets[0].backgroundColor[1] ="#d4ddeb";
          myChart.config.data.datasets[0].borderColor[1] ="#d4ddeb";
          myChart.update();
        },">+0.1" );
        myRandomColorChnageLoop.add( function(){ 
          myChart.config.data.datasets[0].backgroundColor[4] ="#abbcd6";
          myChart.config.data.datasets[0].borderColor[4] ="#abbcd6";
          myChart.update();
        },">+0.1" );
      })
    //Finished Loop
    myRandomColorChnage.add( function(){ 
      myChart.config.data.datasets[0].backgroundColor[2] ="#d4ddeb";
      myChart.config.data.datasets[0].borderColor[2] ="#d4ddeb";
      myChart.update();
    },">+2" );

    myRandomColorChnage.add( function(){ 
      myChart.config.data.datasets[0].backgroundColor[3] ="#d4ddeb";
      myChart.config.data.datasets[0].borderColor[3] ="#d4ddeb";
      myChart.update();
    },">+0.1" );
    myRandomColorChnage.add( function(){ 
      myChart.config.data.datasets[0].backgroundColor[4] ="#d4ddeb";
      myChart.config.data.datasets[0].borderColor[4] ="#d4ddeb";
      myChart.update();
    },">+0.1" );

    myRandomColorChnage.add( function(){ 
      document.getElementById("myRandomnav").style.height = "100%";
      applyBlur();
    },"<" );
}




function closeRandomNav() {
  document.getElementById("myRandomnav").style.height = "0%";
  document.getElementById("SettingsNavID").style.display = "unset";
  remBlur();
  myChart.config.data.datasets[0].backgroundColor[0] ="rgba(237,211,240,0.9)";
  myChart.config.data.datasets[0].backgroundColor[1] ="rgba(218,221,236,0.85)";
  myChart.config.data.datasets[0].backgroundColor[2] ="rgba(247,225,204,0.85)";
  myChart.config.data.datasets[0].backgroundColor[3] ="rgba(252,204,204,0.85)";
  myChart.config.data.datasets[0].backgroundColor[4] ="rgba(229,194,236,0.85)";
  myChart.config.data.datasets[0].borderColor[0] ="rgba(251,200,211,255)";
  myChart.config.data.datasets[0].borderColor[1] ="rgba(187,197,250,255)";
  myChart.config.data.datasets[0].borderColor[2] ="rgba(229,194,236,255)";
  myChart.config.data.datasets[0].borderColor[3] ="rgba(252,192,217,255)";
  myChart.config.data.datasets[0].borderColor[4] ="rgba(249,207,208,255)";
  myChart.update();
}
//Blur theme
function applyBlur()
{
    TweenMax.to('.Main-Section', 0.5,{filter:"blur(8px)"});
};
function remBlur()
{
    TweenMax.to('.Main-Section', 0.5,{filter:"blur(0px)"});
};









function changePicture(){
  var shopImglist = ['R1', 'R2', 'R3'];
  var shopNamelist = ['1', '2', '3'];
  var mylist = Math.floor(Math.random() * shopNamelist.length);
  function getChanged(){
      document.getElementById('RandomShopName').innerHTML = shopNamelist[mylist];
      document.getElementById("RandomShopImg").src="IMG/"+(shopImglist[mylist])+".png";
  }
  getChanged();
}







function myFunction() {
    let x = document.getElementById("PriceInput").value;
    // if (isNaN(x) || x < 1 || x > 10) {
    //   text = "Input not valid";
    // } else {
    //   text = "Input OK";
    // }

    if ( x < 5) {
        console.log( `55555555555555555555`);
      }
      
    else if (x <= 20) {
        console.log( `20000000000000`);
    }

    else if (x < 40) {
        console.log( `40000000000000`);
    }
  }
