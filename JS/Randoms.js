// var myarray= new Array(
//     "ความท้อแท้และล้มเหลว เป็นสองก้าวที่สำคัญที่สุดในการก้าวไปสู่ความสำเร็จ",
//     "เอาจริงนะเว้ย แกแบ่งคนอื่นเก่งบ้างก็ได้ แต่ละคนมีเอกลักษณ์อยู่แล้ว",
//     "วันพรุ่งนี้ ทุกอย่างจะดีขึ้นเอง",
//     "เข้าใจความรู้สึกของเธอนะ รู้ไว้ว่าเราจะอยู่ข้างเธอเสมอ",
//     "ขอให้สนุกกับงานนะคะ",
//     "วันนี้อาจจะเหนื่อย และมีเรื่องให้ต้องทุกข์ใจเยอะ ตอนนี้เรามาพักสักหน่อยกันเถอะ",
//     "ไม่ต้องดีกว่าใครแค่ทำให้ดีกว่าตัวเองคนเมื่อวานก็พอแล้ว",
//     "เมื่อไหร่ที่คุณสามารถปล่อยอดีตให้ผ่านไปได้ สิ่งที่ดียิ่งกว่าจะตามมาแน่นอน",
//     "ไม่ต้องเสียใจหรอก เพราะเธอทำดีที่สุดแล้ว",
//     "ช่วงเวลาดีๆ จะกลายเป็นความทรงจำที่ดี และช่วงเวลาแย่ๆ จะกลายเป็นบทเรียนที่ดี",
//     "เวลาจะเยียวยาทุกอย่าง เธออาจรู้สึกแย่ โคตรจะแย่ แต่เดี๋ยวมันก็จะผ่านไปเป็นแค่อดีต",
//     "วันพรุ่งนี้ ทุกอย่างจะต้องดีขึ้นแน่นอน",
//     "ฉันมีความสุขที่ได้มองเธอยิ้มและเติบโตจากตรงนี้เสมอ",
//     "ท้ออยู่ใช่ไหมถ้าไม่ไหวก็พักบ้างนะ",
//     );
// var random = myarray[Math.floor(Math.random() * myarray.length)];




//Side Nav
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
//Random Nav

function openRandomNav() {
  document.getElementById("myRandomnav").style.height = "100%";
}
//Random function
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

// document.getElementById("GetRandom").addEventListener("input", function() {
//     if( isPriceCheck(this.value) ) {
//       console.log( `${this.value}`);
//     } else {
//       console.log( `ราคา: ${this.value}` );
  
//       if ( this.value < 5) {
//           console.log( `ซื้อไม่ได้ 5 บาท`);
//         }
        
//       else if (this.value <= 20) {
//           console.log( `5-20`);
//       }
  
//       else if (this.value < 40) {
//           console.log( `21-40`);
//       }
//     }
//   });