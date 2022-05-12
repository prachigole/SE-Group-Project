function increment(myInput) {
  myInput.value = (+myInput.value + 1) || 0;
}
function decrement(myInput) {
  var a = myInput.value = (myInput.value - 1) || 0;
}

// var a = myInput.value;
//   if(a>0)
//   {
//     myInput.value=myInput.value - 1;
//   }


function checkFirst() {
    var text = document.getElementById("lessthan").value;
    console.log(text);
    if (text <= 0) {
      console.log("lessthan");
        text.value=0;   
    }
}

function setGoal(){
  var a = document.getElementById("month").value;
  var b = document.getElementById("ip1").value;

  if(b>(a*3))
  {
      document.getElementById("msg").innerHTML="Exceeded maximum limit for month";
  }else{
    document.getElementById("msg").innerHTML=""; 
  }
}

function getData(){
  var name = document.querySelector("#ip1").value;
  var Goalweight = document.querySelector("#ip2").value;
  var DOB = document.querySelector("#ip3").value;
  var month = document.querySelector("#month").value;
  var level = document.querySelector("#dp").value;
  var gender = document.querySelector("#gender").value;
  var weight = document.querySelector("#lessthan").value;
  var height = document.querySelector("#h1").value;

  console.log(name);
  console.log(Goalweight);
  console.log(DOB);
  console.log(month);
  console.log(level);
  console.log(gender);
  console.log(weight);
  console.log(height);
}