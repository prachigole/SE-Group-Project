function increment(myInput) {
  myInput.value = (+myInput.value + 1) || 0;
}
function decrement(myInput) {
  // var a = myInput.value = (myInput.value - 1) || 0;

  var a = myInput.value;
  if(a>0)
  {
    myInput.value=myInput.value - 1;
  }
}

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
      document.getElementById("msg").innerHTML="Exited maximum limit for month";
  }else{
    document.getElementById("msg").innerHTML=""; 
  }
}

function getData(){
  var email = document.querySelector("#email").value;
  var weight = document.querySelector("#Weight").value;
  var height = document.querySelector("#lessthan").value;
  var activity = document.querySelector("#activity").value;
  var gender = document.querySelector("#gender").value;
  var Goalweight = document.querySelector("#ip1").value;
  var time = document.querySelector("#month").value;

  console.log(email);
  console.log(weight);
  console.log(lessthan);
  console.log(activity);
  console.log(gender);
  console.log(Goalweight);
  console.log(month);
}