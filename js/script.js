// let needDate = new Date("Feb 6 2024 09:11:00")
//
// function timerCount(){
//     let nowDate = new Date();
//     let gap = needDate - nowDate;
//     console.log(gap);
//
//     let days = Math.floor(gap / 1000 / 60 / 60 / 24);
//     let hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((gap % (1000 * 60)) / 1000);
//
//     document.querySelector(".d").innerText = days < 10 ? '0' + days : days;
//     document.querySelector(".h").innerText = hours < 10 ? '0' + hours : hours;
//     document.querySelector(".m").innerText = minutes < 10 ? '0' + minutes : minutes;
//     document.querySelector(".s").innerText = seconds < 10 ? '0' + seconds : seconds;
// }
// timerCount();
//
// setInterval(timerCount, 1000);