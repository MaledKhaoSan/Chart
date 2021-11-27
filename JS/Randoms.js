
//Side Nav
function openNav() {
  const mediaQuery = window.matchMedia('(min-width: 1024px)')
  if (mediaQuery.matches) {
    document.getElementById("mySidenav").style.width = "250px";
  }
  else{
    document.getElementById("mySidenav").style.width = "350px";
  }
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









function getRandomFunction(){
  var MyRandomArray = [];
  let isPrice = document.getElementById("PriceInput").value;

  //ก๋วยเตี๊ยว
  if (document.getElementById('Food01').checked) {
    if (isPrice >= 20) {
      var noodle1={
        named:"ร้านก๋วยเตี๋ยว",
        price:"ราคา",
        img:"noodle1",
      }
      var noodle2={
        named:"ร้านก๋วยเตี๋ยว",
        price:"ราคา",
        img:"noodle2",
      }
      var noodle3={
        named:"ร้านก๋วยเตี๋ยว",
        price:"ราคา",
        img:"noodle3",
      }
      var noodle4={
        named:"ร้านก๋วยเตี๋ยว",
        price:"ราคา",
        img:"noodle4",
      }
      var noodle5={
        named:"ร้านก๋วยเตี๋ยว",
        price:"ราคา",
        img:"noodle5",
      }
      MyRandomArray.push(noodle1,noodle2,noodle3,noodle4,noodle5);
    }
  }

  //อาหารจานเดียว
  if (document.getElementById('Food02').checked) {
    // console.log("checked2");
    //น้อยกว่า 5 บาท
    if ( isPrice >= 20) {
      var DishMeal1={
        named:"ร้านอาหารหมอไฟ",
        price:"ราคา",
        img:"DishMeal1",
      }
      var DishMeal2={
        named:"ร้านอาหารหมอไฟ",
        price:"ราคา",
        img:"DishMeal2",
      }
      var DishMeal3={
        named:"ร้านอาหารหมอไฟ",
        price:"ราคา",
        img:"DishMeal3",
      }
      var DishMeal4={
        named:"ร้านอาหารหมอไฟ",
        price:"ราคา",
        img:"DishMeal4",
      }
      var DishMeal5={
        named:"ร้านอาหารหมอไฟ",
        price:"ราคา",
        img:"DishMeal5",
      }
      var DishMeal6={
        named:"ร้านอาหารหมอไฟ",
        price:"ราคา",
        img:"DishMeal6",
      }
      var DishMeal7={
        named:"ร้านอาหารหมอไฟ",
        price:"ราคา",
        img:"DishMeal7",
      }
      MyRandomArray.push(DishMeal1,DishMeal2,DishMeal3,DishMeal4,DishMeal5,DishMeal6,DishMeal7);
    }
  }
  
    //สเต๊ก
  if (document.getElementById('Food03').checked) {
    // console.log("checked3");
    if ( isPrice >= 30) {
      var Steak1={
        named:"ร้านสเต๊ก",
        price:"ราคา",
        img:"Steak1",
      }
      var Steak2={
        named:"ร้านสเต๊ก",
        price:"ราคา",
        img:"Steak2",
      }
      var Steak3={
        named:"ร้านสเต๊ก",
        price:"ราคา",
        img:"Steak3",
      }
      var Steak4={
        named:"ร้านสเต๊ก",
        price:"ราคา",
        img:"Steak4",
      }
      var Steak5={
        named:"ร้านสเต๊ก",
        price:"ราคา",
        img:"Steak5",
      }
      MyRandomArray.push(Steak1,Steak2,Steak3,Steak4,Steak5);
    }
  }

    //ของหวาน
    if (document.getElementById('Food04').checked) {
      // console.log("checked3");
      if (isPrice >= 15) {
        var Dessert15_1={
          named:"ร้านขนมหวาน",
          price:"ราคา",
          img:"Dessert15_1",
        }
        var Dessert15_2={
          named:"ร้านขนมหวาน",
          price:"ราคา",
          img:"Dessert15_2",
        }
        var Dessert15_3={
          named:"ร้านขนมหวาน",
          price:"ราคา",
          img:"Dessert15_3",
        }
        var Dessert15_4={
          named:"ร้านขนมหวาน",
          price:"ราคา",
          img:"Dessert15_4",
        }
        var Dessert15_5={
          named:"ร้านขนมหวาน",
          price:"ราคา",
          img:"Dessert15_5",
        }
        var Dessert15_6={
          named:"ร้านขนมหวาน",
          price:"ราคา",
          img:"Dessert15_6",
        }
        var Dessert15_7={
          named:"ร้านขนมหวาน",
          price:"ราคา",
          img:"Dessert15_7",
        }
        MyRandomArray.push(Dessert15_1,Dessert15_2,Dessert15_3,Dessert15_4,Dessert15_5,Dessert15_6,Dessert15_7);
      }
      
      else if (isPrice >= 25) {
        var Dessert25_1={
          named:"ร้านขนมหวาน",
          price:"ราคา",
          img:"Dessert25_1",
        }
        var Dessert25_2={
          named:"ร้านขนมหวาน",
          price:"ราคา",
          img:"Dessert25_2",
        }
        var Dessert25_3={
          named:"ร้านขนมหวาน",
          price:"ราคา",
          img:"Dessert25_3",
        }
        var Dessert25_4={
          named:"ร้านขนมหวาน",
          price:"ราคา",
          img:"Dessert25_4",
        }
        var Dessert25_5={
          named:"ร้านขนมหวาน",
          price:"ราคา",
          img:"Dessert25_5",
        }
        var Dessert25_6={
          named:"ร้านขนมหวาน",
          price:"ราคา",
          img:"Dessert25_6",
        }
        MyRandomArray.push(Dessert25_1,Dessert25_2,Dessert25_3,Dessert25_4,Dessert25_5,Dessert25_6);
      }
      
      else if (isPrice >= 30) {
        var Dessert30_1={
          named:"ร้านขนมหวาน",
          price:"ราคา",
          img:"Dessert30_1",
        }
        var Dessert30_2={
          named:"ร้านขนมหวาน",
          price:"ราคา",
          img:"Dessert30_2",
        }
        var Dessert30_3={
          named:"ร้านขนมหวาน",
          price:"ราคา",
          img:"Dessert30_3",
        }
        var Dessert30_4={
          named:"ร้านขนมหวาน",
          price:"ราคา",
          img:"Dessert30_4",
        }
        MyRandomArray.push(Dessert30_1,Dessert30_2,Dessert30_3,Dessert30_4);
      }
    }
  
    
            //เครื่องดื่ม
  if (document.getElementById('Food05').checked) {
    // console.log("checked3");
    if (isPrice <= 5) {
      var Drink5_1={
        named:"ร้านคุณป้าน้ำ",
        price:"ราคา",
        img:"Drink5_1",
      }
      MyRandomArray.push(Drink5_1);
    }
    
    else if (isPrice <= 25) {
      var Drink25_1={
        named:"ร้านคุณป้าน้ำ",
        price:"ราคา",
        img:"Drink25_1",
      }
      var Drink25_2={
        named:"ร้านคุณป้าน้ำ",
        price:"ราคา",
        img:"Drink25_2",
      }
      var Drink25_3={
        named:"ร้านคุณป้าน้ำ",
        price:"ราคา",
        img:"Drink25_3",
      }
      var Drink25_4={
        named:"ร้านคุณป้าน้ำ",
        price:"ราคา",
        img:"Drink25_4",
      }
      var Drink25_5={
        named:"ร้านคุณป้าน้ำ",
        price:"ราคา",
        img:"Drink25_5",
      }
      var Drink25_6={
        named:"ร้านคุณป้าน้ำ",
        price:"ราคา",
        img:"Drink25_6",
      }
      MyRandomArray.push(Drink25_1,Drink25_2,Drink25_3,Drink25_4,Drink25_5,Drink25_6);
    }
  }
  
  
  
  
  
  else if(document.getElementById('Food01','Food02','Food03','Food04','Food05').checked === false){
    var No01={
      named:"ไม่มี-1",
      img:"Empty01",
    }
    MyRandomArray.push(No01);
    // alert("no");
  }


  function getChanged(){
    var GetRandom = MyRandomArray[Math.floor(Math.random() * MyRandomArray.length)];
    // console.log(Arandom["img"]);

    document.getElementById("SettingsNavID").display="none";
    document.getElementById('RandomShopName').innerHTML = GetRandom["named"];
    document.getElementById("RandomShopImg").src="IMG/allFoods/"+(GetRandom["img"])+".png";
    document.getElementById("SettingsNavID").display="unset";
  }
  getChanged();
}
  
  // if มีก๋วยเตี๋ยว
  // let x = document.getElementById("PriceInput").value;
  // if ( x < 5) {
  //     console.log( `55555555555555555555`);
  //   }
    
  // else if (x <= 20) {
  //     console.log( `20000000000000`);
  // }

  // else if (x < 40) {
  //     console.log( `40000000000000`);
  // }
  
  // var A01={
  //   named:"A1",
  //   img:"A2",
  //   }

  // var B01={
  //   named:"B1",
  //   img:"B2",
  //   }

    // var Atype = ['At1', 'At2', 'At3'];
  // var Aname = ['An1', 'An2', 'An3'];
  // var MyRandomArray = [];
  // MyRandomArray.push(A01);
  // MyRandomArray.push(B01);



  // var Arandom = Math.floor(Math.random() * MyRandomArray.length);
  // var Arandom = MyRandomArray[Math.floor(Math.random() * MyRandomArray.length)];
  // Atype[Arandom],[Aname]
  // console.log(A01["named"])
  // console.log(Arandom["img"]);

//   var Atype = ['At1', 'At2', 'At3'];
//   var Aname = ['An1', 'An2', 'An3'];
//   var Arandom = Math.floor(Math.random() * shopNamelist.length);
//   Atype[Arandom],[Aname]


//   let strJoined = `${str1} ${str2} ${str3}`;
//   console.log(strJoined);
// }







function changePicture(){
  // var shopImglist = ['R1', 'R2', 'R3'];
  // var shopNamelist = ['1', '2', '3'];
  // var mylist = Math.floor(Math.random() * shopNamelist.length);
  // function getChanged(){
  //   document.getElementById("SettingsNavID").display="none";
  //     document.getElementById('RandomShopName').innerHTML = shopNamelist[mylist];
  //     document.getElementById("RandomShopImg").src="IMG/"+(shopImglist[mylist])+".png";
  //     document.getElementById("SettingsNavID").display="unset";
  // }
  // getChanged();
}







// function myFunction() {
//     let x = document.getElementById("PriceInput").value;
//     // if (isNaN(x) || x < 1 || x > 10) {
//     //   text = "Input not valid";
//     // } else {
//     //   text = "Input OK";
//     // }

//     if ( x < 5) {
//         console.log( `55555555555555555555`);
//       }
      
//     else if (x <= 20) {
//         console.log( `20000000000000`);
//     }

//     else if (x < 40) {
//         console.log( `40000000000000`);
//     }
//   }
