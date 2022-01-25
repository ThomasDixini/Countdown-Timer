

function startTime() {
    let today = new Date;
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    minute=checkTime(minute);
    second=checkTime(second);

    const date = document.getElementById('date')
    date.innerHTML = hour + ":" + minute + ":" + second;
    t= setTimeout('startTime()',500)


}

function checkTime(time) {

    if(time< 10){
        time= "0" + time;
        return time;
    } else {
        return time;
    }

}


