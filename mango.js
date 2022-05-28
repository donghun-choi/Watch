const clockInnerText = document.getElementById("clockInnerText");
const AnalogClock = document.getElementById("Clock");
let Theme = "digital";
function updateClock() {
    const date = new Date();
    const hour = String(date.getHours());
    const minute = String(date.getMinutes());
    const second = String(date.getSeconds());
    clockInnerText.innerText = hour + ":" + minute + ":" + second;
}
updateClock();

setInterval(updateClock, 100);
