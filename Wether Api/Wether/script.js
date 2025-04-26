let wetherData = document.querySelectorAll(".wetherData");
let searchCity = document.querySelectorAll("#searchCity");
let searchButton = document.querySelectorAll("#searchButton");
let display = document.querySelectorAll(".display");
let displayData = document.querySelectorAll("#displayData");


let api="https://api.openweathermap.org/data/2.5/weather?q=surat&appid=f584f38780a7e16261d5d4efe3ebf399"

function callApi(){
    fetch(api).then((response)=>response.json).then((data)=>{
       document.writeln()
    })
}

callApi();