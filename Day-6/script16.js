function greet(name, byetext) {
    console.log("hello good morning " + name + " " + byetext);
}

setInterval(greet , 1000 , "garv" , "good night");

intervalid=setInterval(greet , 1000 , "garv" , "good night");
clearInterval(intervalid )

function displayTime(){
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}
setInterval(displayTime,  1000);
