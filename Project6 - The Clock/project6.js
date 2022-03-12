var colorArray = ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1',
    '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', 
    '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', 
    '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', 
    '#1565C0', '#0D47A1']

index = 0;

function countingClock() {

    console.log("tick")

    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let meridiem = 'AM'

    if (hour == 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour = hour - 12;
        meridiem = 'PM'
    }

    if (hour < 10) {
        hour = '0' + hour;
    } else {
        hour;
    }

    minute = (minute < 10) ? "0" + minute : minute;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = hour + ":" + minute + ":" + seconds + ":" + meridiem;
    
    document.getElementById("my-clock").innerText = time;
    
    setTimeout(function(){countingClock()}, 1000); 
}

function changeBgColor () {

    document.body.style.backgroundColor = colorArray[index];
    index++;
    console.log("Background Color is " + colorArray[index]);
    if (index >= colorArray.length) {
        index = 0;
        console.log("back to the beginnig of the background color array")
    }

    setTimeout(function(){changeBgColor()}, 1000);
}

countingClock();
changeBgColor();

