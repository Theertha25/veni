let output=document.getElementById('input')
function show(number){
    output.value=output.value+number
}
function calculate(){
    try{
        output.value=eval(output.value)
    }
    catch{
        output.value="ERROR!!"
        output.value="red"
    }
}

function clr(){
    output.value=""
}

function remove(){
    output.value=output.value.slice(0,-1)
}