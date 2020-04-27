//js-project Digital Clock leftSide

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
showTime();
//js-project Digital Clock rightSide

function startTime(){
    const now = new Date();
    let h = now.getHours(); // 0 - 23
    let m = now.getMinutes(); // 0 - 59
    let s = now.getSeconds(); // 0 - 59
    let session = "am";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "pm";
    }
    m = (m < 10) ? "0" + m : m;

    const time = h + ":" + m + ":" + s + " " + session;
    document.querySelector('#clock').innerHTML = time;
    
    setTimeout(startTime, 500);
    
}
startTime();