let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((display) => {
    let startValue = 0;
    let endValue = parseInt(display.getAttribute("data-val"));
    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function () {
        startValue += 1;
        display.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
})