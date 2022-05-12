let foodData = [
    {
        foodname:"Bread Butter",
        qty:"1 Slice",
        calorie:"169KCals",
        category:"veg",
    },
    {
        foodname:"Bread Jam Butter",
        qty:"1 Slice",
        calorie:"240KCals",
        category:"nonveg",
    },
    {
        foodname:"Curd",
        qty:"100gm",
        calorie:"98KCals",
        category:"nonveg",
    },
    {
        foodname:"Juise",
        qty:"1 Glass",
        calorie:"54KCals",
        category:"veg",
    }
]


let select_breakfast_food = [];
let select_lunch_food = [];
let select_snacks_food = [];
let select_dinner_food = [];
var index=1;
function getBreakfastData(){
    var pos=0;
    
    for(const i in foodData)
    {
        
        var t = document.getElementById("breakfast-item");
        var row = t.insertRow(pos);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        pos++;
        
        cell1.innerHTML = `${foodData[i].foodname}`;
        if(foodData[i].category == "veg")
        {
            cell2.innerHTML = `<img src="images/veg2.jpg" style={{ height="20px";}}/>`;
        }
        else
        {
            cell2.innerHTML = `<img src="images/nonveg.jpg" style={{ height="20px";}}/>`;
        }
        cell3.innerHTML = `${foodData[i].calorie}`;
        cell4.innerHTML = `${foodData[i].qty}`;
       
        cell5.innerHTML = `<div class='quantity' style='display: flex; float: right; width: 70%; justify-content: space-between;'>
                            <button onClick='decrementQty(this.id);' id=${index++} class='decrement-btn' style='cursor: pointer; font-size: 20px; color:#F46036; float: right; width:25px; border-radius: 5px; background-color: transparent; border-color:#F46036 ;'>&#8722;</button>
                            <input type='text' style='text-align:center;border: none; border-color: transparent;' maxlength='2' size='1'max='10' value='0' width='10px' >
                            <button onClick='incrementQty(this.id);' id=${index++} class='increment-btn' style='cursor: pointer; font-size: 20px; color:#F46036; float: right; width:25px; border-radius: 5px; background-color: transparent; border-color:#F46036 ;'>&#43;</button></div>`
    
    }
    // select_food=[];
    pos=0;
    for(const i in foodData)
    {
        
        var t = document.getElementById("lunch-item");
        var row = t.insertRow(pos);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        pos++;
        
        cell1.innerHTML = `${foodData[i].foodname}`;
        if(foodData[i].category == "veg")
        {
            cell2.innerHTML = `<img src="images/veg2.jpg" style={{ height="20px";}}/>`;
        }
        else
        {
            cell2.innerHTML = `<img src="images/nonveg.jpg" style={{ height="20px";}}/>`;
        }
        cell3.innerHTML = `${foodData[i].calorie}`;
        cell4.innerHTML = `${foodData[i].qty}`;
       
        cell5.innerHTML = `<div class='quantity' style='display: flex; float: right; width: 70%; justify-content: space-between;'>
                            <button onClick='decrementQty(this.id);' id=${index++} class='decrement-btn' style='cursor: pointer; font-size: 20px; color:#F46036; float: right; width:25px; border-radius: 5px; background-color: transparent; border-color:#F46036 ;'>&#8722;</button>
                            <input type='text' style='text-align:center;border: none; border-color: transparent;' maxlength='2' size='1'max='10' value='0' width='10px' >
                            <button onClick='incrementQty(this.id);' id=${index++} class='increment-btn' style='cursor: pointer; font-size: 20px; color:#F46036; float: right; width:25px; border-radius: 5px; background-color: transparent; border-color:#F46036 ;'>&#43;</button></div>`
    
    }

    pos=0;
    for(const i in foodData)
    {
        
        var t = document.getElementById("snacks-item");
        var row = t.insertRow(pos);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        pos++;
        
        cell1.innerHTML = `${foodData[i].foodname}`;
        if(foodData[i].category == "veg")
        {
            cell2.innerHTML = `<img src="images/veg2.jpg" style={{ height="20px";}}/>`;
        }
        else
        {
            cell2.innerHTML = `<img src="images/nonveg.jpg" style={{ height="20px";}}/>`;
        }
        cell3.innerHTML = `${foodData[i].calorie}`;
        cell4.innerHTML = `${foodData[i].qty}`;
       
        cell5.innerHTML = `<div class='quantity' style='display: flex; float: right; width: 70%; justify-content: space-between;'>
                            <button onClick='decrementQty(this.id);' id=${index++} class='decrement-btn' style='cursor: pointer; font-size: 20px; color:#F46036; float: right; width:25px; border-radius: 5px; background-color: transparent; border-color:#F46036 ;'>&#8722;</button>
                            <input type='text' style='text-align:center;border: none; border-color: transparent;' maxlength='2' size='1'max='10' value='0' width='10px' >
                            <button onClick='incrementQty(this.id);' id=${index++} class='increment-btn' style='cursor: pointer; font-size: 20px; color:#F46036; float: right; width:25px; border-radius: 5px; background-color: transparent; border-color:#F46036 ;'>&#43;</button></div>`
    
    }

    pos=0;
    for(const i in foodData)
    {
        
        var t = document.getElementById("dinner-item");
        var row = t.insertRow(pos);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        pos++;
        
        cell1.innerHTML = `${foodData[i].foodname}`;
        if(foodData[i].category == "veg")
        {
            cell2.innerHTML = `<img src="images/veg2.jpg" style={{ height="20px";}}/>`;
        }
        else
        {
            cell2.innerHTML = `<img src="images/nonveg.jpg" style={{ height="20px";}}/>`;
        }
        cell3.innerHTML = `${foodData[i].calorie}`;
        cell4.innerHTML = `${foodData[i].qty}`;
       
        cell5.innerHTML = `<div class='quantity' style='display: flex; float: right; width: 70%; justify-content: space-between;'>
                            <button onClick='decrementQty(this.id);' id=${index++} class='decrement-btn' style='cursor: pointer; font-size: 20px; color:#F46036; float: right; width:25px; border-radius: 5px; background-color: transparent; border-color:#F46036 ;'>&#8722;</button>
                            <input type='text' style='text-align:center;border: none; border-color: transparent;' maxlength='2' size='1'max='10' value='0' width='10px' >
                            <button onClick='incrementQty(this.id);' id=${index++} class='increment-btn' style='cursor: pointer; font-size: 20px; color:#F46036; float: right; width:25px; border-radius: 5px; background-color: transparent; border-color:#F46036 ;'>&#43;</button></div>`
    
    }

        
        
        
        
}

function disData(element){
    // var x = document.querySelector("#food");
    var temp = document.getElementById(element).parentElement.nextElementSibling.id;
    var x = document.getElementById(temp);
    if(temp == "breakfast-food")
    {
        document.getElementById("lunch-food").style.display = "none";
        document.getElementById("snacks-food").style.display = "none";
        document.getElementById("dinner-food").style.display = "none";
        if(x.style.display == "none")
        {
            x.style.display="block";
        }else{
            x.style.display="none";
        }
        
    }else if(temp == "lunch-food")
    {
        document.getElementById("breakfast-food").style.display = "none";
        document.getElementById("snacks-food").style.display = "none";
        document.getElementById("dinner-food").style.display = "none";
        if(x.style.display == "none")
        {
            x.style.display="block";
        }else{
            x.style.display="none";
        }
        
    }else if(temp == "snacks-food")
    {
        document.getElementById("lunch-food").style.display = "none";
        document.getElementById("breakfast-food").style.display = "none";
        document.getElementById("dinner-food").style.display = "none";
        if(x.style.display == "none")
        {
            x.style.display="block";
        }else{
            x.style.display="none";
        }
        
    }else if(temp == "dinner-food")
    {
        document.getElementById("lunch-food").style.display = "none";
        document.getElementById("snacks-food").style.display = "none";
        document.getElementById("breakfast-food").style.display = "none";
        if(x.style.display == "none")
        {
            x.style.display="block";
        }else{
            x.style.display="none";
        }
        
    }

    
    
}



function decrementQty(element){
    var rowJS =document.getElementById(element).id;
    var val = document.getElementById(rowJS).nextElementSibling.value;
    if(val>0)
    {
        document.getElementById(rowJS).nextElementSibling.value = val-1;
    }
    //var isbn = data[rowJS.rowIndex-1].ISBN;
}

function incrementQty(element){
    var rowJS =document.getElementById(element).id;
    var val = document.getElementById(rowJS).previousElementSibling.value;
    val++;
    document.getElementById(rowJS).previousElementSibling.value = val;
    
}

function viewSelectedBreakfastItems()
{
    var select_food_index=0;
    select_breakfast_food = [];
    for(var i=2; i<index; i=i+2)
    {
        var val = document.getElementById(i).previousElementSibling.value;
        if(val>0)
        {
            var fname = document.getElementById(i).parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
            var c = document.getElementById(i).parentElement.parentElement.previousElementSibling.previousElementSibling.innerText;
            
            select_breakfast_food[select_food_index]={
                foodname:fname,
                cal:c,
                count:val
            }
            select_food_index++;
           
        }
    }

    for(var i in select_breakfast_food)
    {
        console.log(select_breakfast_food[i].foodname);
        console.log(select_breakfast_food[i].cal);
        console.log(select_breakfast_food[i].count);
    }

    alert("Your breakfast data is submitted successfully");
    // for(var i in select_food)
    // {
    //     document.getElementById("food").style.display="none";
    //     document.getElementById("selectFood").style.display="block";
    //     var pos=0;
    //     var t = document.getElementById("selected");
    //     var row = t.insertRow(pos);
    //     var cell1 = row.insertCell(0);
    //     var cell2 = row.insertCell(1);
    //     var cell3 = row.insertCell(2);
    //     var cell4 = row.insertCell(3);
    //     pos++;
        
    //     cell1.innerHTML = `${select_food[i].foodname}`;
    //     cell2.innerHTML = `${select_food[i].cal}`;
    //     cell3.innerHTML = `${select_food[i].count}`;
       
    //     cell4.innerHTML = `<div class='quantity' style='display: flex; float: right; width: 70%; justify-content: space-between;'>
    //                         <button style='font-size:24px; background: transparent; border:none'><i class="fa fa-edit" style="font-size:25px;color:#F46036;"></i></button></div>`
    
    // }
}

function viewSelectedLunchItems()
{
    var select_food_index=0;
    select_lunch_food = [];
    for(var i=2; i<index; i=i+2)
    {
        var val = document.getElementById(i).previousElementSibling.value;
        if(val>0)
        {
            var fname = document.getElementById(i).parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
            var c = document.getElementById(i).parentElement.parentElement.previousElementSibling.previousElementSibling.innerText;
            
            select_lunch_food[select_food_index]={
                foodname:fname,
                cal:c,
                count:val
            }
            select_food_index++;
           
        }
    }

    for(var i in select_lunch_food)
    {
        console.log(select_lunch_food[i].foodname);
        console.log(select_lunch_food[i].cal);
        console.log(select_lunch_food[i].count);
    }
    alert("Your lunch data is submitted successfully");
}

function viewSelectedSnacksItems()
{
    select_snacks_food = [];
    var select_food_index=0;
    for(var i=2; i<index; i=i+2)
    {
        
        var val = document.getElementById(i).previousElementSibling.value;
        if(val>0)
        {
            var fname = document.getElementById(i).parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
            var c = document.getElementById(i).parentElement.parentElement.previousElementSibling.previousElementSibling.innerText;
            
            select_snacks_food[select_food_index]={
                foodname:fname,
                cal:c,
                count:val
            }
            select_food_index++;
           
        }
    }

    for(var i in select_snacks_food)
    {
        console.log(select_snacks_food[i].foodname);
        console.log(select_snacks_food[i].cal);
        console.log(select_snacks_food[i].count);
    }
    alert("Your snacks data is submitted successfully");
}

function viewSelectedDinnerItems()
{
    var select_food_index=0;
    select_dinner_food = [];
    for(var i=2; i<index; i=i+2)
    {
        
        var val = document.getElementById(i).previousElementSibling.value;
        if(val>0)
        {
            var fname = document.getElementById(i).parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
            var c = document.getElementById(i).parentElement.parentElement.previousElementSibling.previousElementSibling.innerText;
            
            select_dinner_food[select_food_index]={
                foodname:fname,
                cal:c,
                count:val
            }
            select_food_index++;
           
        }
    }

    for(var i in select_dinner_food)
    {
        console.log(select_dinner_food[i].foodname);
        console.log(select_dinner_food[i].cal);
        console.log(select_dinner_food[i].count);
    }
    alert("Your dinner data is submitted successfully");
}