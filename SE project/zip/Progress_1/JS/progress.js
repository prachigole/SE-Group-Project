function getAllBtn(){
    

    for(var i=1; i<=30; i++)
    {
        var btn = document.getElementById("boxes");
        var newdiv = document.createElement('div');
        newdiv.classList.add("inner-btn");
                    
        newdiv.insertAdjacentHTML("beforeend",`<button style='background-color: #93B963;'>${i++}</button>`);
        newdiv.insertAdjacentHTML("beforeend",`<button style='background-color: #93B963;'>${i}</button>`);
        btn.appendChild(newdiv);
    }
    
}

console.log("working");