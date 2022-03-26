changeText();
function changeText(){
    document.getElementById('value').innerHTML=localStorage.getItem("myValue");
}