var matchss = document.querySelector(".BMIsubcont")
console.log(matchss)

var indicator = "no"
document.querySelector(".calcbut").addEventListener("click",function (){
    for (n of matchss.children){
        if (n.matches(".bmitotal")){
            indicator = "yes"
        }
        else{
            null
        }
    }

    if (indicator === "yes"){
        var weightval = document.querySelector(".inputweight").value
        var heightval = document.querySelector(".inputheight").value
        var bmival = weightval/(Math.pow((heightval/100),2))
        if (isNaN(bmival) || !isFinite(bmival) || weightval== ""){
            document.querySelector(".inputbmi").value = "Invalid"
        }
        else{
            document.querySelector(".inputbmi").value  = Math.round(bmival*10)/10
        }
    }
    else{
        var weightval = document.querySelector(".inputweight").value
        var heightval = document.querySelector(".inputheight").value
        var bmival = weightval/(Math.pow((heightval/100),2))

        if (isNaN(bmival) || !isFinite(bmival) || weightval== ""){
            var createelem = document.createElement("div")
            matchss.append(createelem)
            createelem.setAttribute("class","bmitotal")

            var addelem = document.createElement("div")
            createelem.append(addelem)
            addelem.setAttribute("class", "Bmiword")
            addelem.innerText = "Bmi:"

            var addplace = document.createElement("input")
            createelem.append(addplace)
            addplace.setAttribute("class", "inputbmi")
            addplace.placeholder = "kg/m**2"
            addplace.type = "text"

            document.querySelector(".inputbmi").value = "Invalid"
        }
        else{
            var createelem = document.createElement("div")
            matchss.append(createelem)
            createelem.setAttribute("class","bmitotal")

            var addelem = document.createElement("div")
            createelem.append(addelem)
            addelem.setAttribute("class", "Bmiword")
            addelem.innerText = "Bmi:"

            var addplace = document.createElement("input")
            createelem.append(addplace)
            addplace.setAttribute("class", "inputbmi")
            addplace.placeholder = "kg/m**2"
            addplace.type = "text"
            addplace.readOnly = true

            document.querySelector(".inputbmi").value  = Math.round(bmival*10)/10
        }
    }
})


        
