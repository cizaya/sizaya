dialog=document.getElementById("bron");
let button_zapis = document.getElementById("button_zapis");
function zapis(){

    dialog.showModal();
}
function close_zapis(){
    dialog.close()
}
function checkedd(){
    let checkbox=document.getElementById('flexCheckDefault');
        if(checkbox.checked==true)
        { 
            button_zapis.removeAttribute("disabled");
        }

}
function close_zapiss(){
    dialog.close();
}
let calendar = document.getElementById("date");
let time_slot = document.getElementById("time_slot");
let text_slot = document.getElementById("text_slot");
let button_time = document.getElementsByClassName("button_time");
function choise_data(){
    if (calendar.value == "2023-12-24" || calendar.value == "2023-12-26"){
        text_slot.style.display ="none";
        time_slot.style.display = "block";
    }
    else{
        time_slot.style.display = "none";
        text_slot.style.display ="block";
    }
}
function choise_time(but){
    for(let i=0; i<button_time.length;i++){
        button_time[i].style.backgroundColor = "white";
        if(button_time[i]==but){
            button_time[i].style.backgroundColor = "green";
        }
    }
}