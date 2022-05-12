function setSlider(){
    var slider = document.getElementById("myRange");
    var val = document.getElementById("prog-cal").innerHTML;
    // slider.min = "1";
    // slider.max = "100";
    // if(val<(50*slider.max)/100)
    // {
    //     console.log("underweight");
    //     var x = document.getElementById("head1").style.display="block";
    // }else if(val>(50*slider.max)/100)
    // {
    //     console.log("overweight");
    //     var y= document.getElementById("head3").style.display="block";
    // }else
    // {
    //     console.log("healthy");
    //     var z = document.getElementById("head2").style.display="block";
    // }
    console.log(slider.value)
    console.log(val)
    slider.value=val;
   
}