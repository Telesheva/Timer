(() => {
    let inputMin = document.getElementById('inputMinute');
    let inputSec = document.getElementById('inputSeconds');
    let button = document.querySelector('#clockBtn');
    button.addEventListener('click', () => {
        if (inputSec.value !== '' && inputMin.value !== '') {
            let time = ((inputMin.value * 60000) + (inputSec.value * 1000)) + new Date().getTime();
            let timer = setInterval(function () {
                let now = new Date().getTime();
                let result = time - now;
                let minutes = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((result % (1000 * 60)) / 1000);
                console.log(minutes + ' : ' + seconds);
                inputMin.value = minutes;
                inputSec.value = seconds;
                if (minutes === 0 && seconds === 0) {
                    alert('Time is out!!!');
                    clearInterval(timer);
                }
            }, 980);
        }
    });
<<<<<<< Updated upstream
})();
=======
    let inpMin = document.getElementById('inputMinute2');
    let inpSec = document.getElementById('inputSeconds2');
    let btn = document.querySelector('#clockBtn2');
    let btnStop = document.querySelector('#clockBtn3');
    btn.addEventListener('click', () => {
        let milisec = 0;
        let stopwatch = setInterval(() => {
            milisec++;
            let minutes = Math.floor((milisec % (100 * 60 * 60)) / (100 * 60));
            let seconds = Math.floor((milisec % (100 * 60)) / 100);
            inpMin.value = minutes;
            inpSec.value = seconds;
            console.log(minutes + ' : ' + seconds);
            btnStop.addEventListener('click', () => {
                clearInterval(stopwatch);
            })
        }, 10);
    });
})();
>>>>>>> Stashed changes
