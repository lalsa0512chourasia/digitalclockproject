setInterval(showTime, 1000);
function showTime(){
    const currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();
    am_pm = "AM";

if (hour > 12){
    hour = hour - 12;
    am_pm = "PM"
}
if (hour == 0){
     hr = 12;
     am_pm = "AM";
}

if(hour < 10){
    hour = "0" + hour;
}
if(minute < 10){
    minute = "0" + minute;
}
if(second < 10){
    second = "0" + second;
}

document.getElementById("hour").innerHTML = hour ;
document.getElementById("minute").innerHTML = minute ;
document.getElementById("second").innerHTML = second ;
document.getElementById("am").innerHTML = am_pm ;

// showTime();
}


function makeDiv(){
    const x = document.createElement("div");
    x.setAttribute("id", "display");
    // console.log(x);
    // x.className = "container";
    document.getElementById("dynamic").appendChild(x);
    console.log(x);

    var invalue = document.getElementById("time-1").value;


   var one = document.getElementById("display").innerHTML = "Wakeup Time" + "  " + invalue + "<br>";
    console.log(one);
//    var y = document.getElementById("dynamic").appendChild(one);
// dynamic.appendChild(one);
//    console.log(y);
    
   var invalue2 = document.getElementById("time-2").value;
   console.log(invalue2);
   var two =  document.getElementById("display").innerHTML =  one + " " + "\n"+ "Lunch Time" + "  " + invalue2 + "<br>";
   console.log(two);

  var invalue3 = document.getElementById("time-3").value;
  var three = document.getElementById("display").innerHTML = two + "Nap Time" + "  " + invalue3;

//    one.insertAdjacentText("beforeend", two);
// one.insertAdjacentElement("beforeend", two);


}


// var hours = new Date().getHours();
// // console.log(
// //     hours.toLocaleString('en-US',{hour: 'numeric', hour12:true})
// // );

// const selectTime = document.getElementById("time-1").value;
// // console.log(selectTime);

// if(selectTime == hours){
//     document.getElementById("imgchange").style.backgroundImage="url(./images/wakeupimg.PNG)";
//   }

// var hours = new Date().getHours();
// const selectTime2 = document.getElementById("time-2").value;
// // console.log(selectTime2);

// if(selectTime2 == hours){
//     document.getElementById("imgchange").style.backgroundImage="url(./images/lunchimg.PNG)";
//   } 

// var hours = new Date().getHours();
// const selectTime3 = document.getElementById("time-3").value;
// // console.log(selectTime3);
       
//  if(selectTime3 == hours) {
//     document.getElementById("imgchange").style.backgroundImage="url(./images/goodnightimg.PNG)";
//     }
//     // else
    //  document.getElementById("imgchange").style.backgroundImage="url(./images/food1.PNG)";


function setTime (){

var a = document.getElementById("time-1").value;
console.log(a);
// var hours = new Date().getHours();
var b = document.getElementById("time-2").value;
console.log(b);
var c = document.getElementById("time-3").value;
var hours = new Date().getHours();

//THROUGH SWITCH CASE 

// // switch (new Date().getHours()) {
    switch (true) {

    case (a==hours):
    document.getElementById("imgchange").style.backgroundImage="url(./images/wakeupimg.PNG)";
     break;
     
    case (b==hours):
    document.getElementById("imgchange").style.backgroundImage="url(./images/lunchimg.PNG)";
    break;

    case (c==hours):
    document.getElementById("imgchange").style.backgroundImage="url(./images/goodnightimg.PNG)";
    break;

    default:
     document.getElementById("imgchange").style.backgroundImage="url(./images/food1.PNG)";
     break;
}


//THROUGH IF-ELSE CONDITION

// if(a == hours){
//     document.getElementById("imgchange").style.backgroundImage = "url(./images/wakeupimg.PNG)";
// }

// else if(b == hours){
//     document.getElementById("imgchange").style.backgroundImage = "url(./images/lunchimg.PNG)";
// }

// else if(c == hours){
//     document.getElementById("imgchange").style.backgroundImage = "url(./images/goodnightimg.PNG)";
// }

// else{
//     document.getElementById("imgchange").style.backgroundImage = "url(./images/food1.PNG)";
// }


 makeDiv()
}