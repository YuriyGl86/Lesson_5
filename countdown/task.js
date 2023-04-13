const timeCounterElement = document.querySelector('div span')
const time = timeCounterElement.innerText.split(':')
console.log(time)

let timer = new Date()
timer.setHours(time[0])
timer.setMinutes(time[1])
timer.setSeconds(time[2])
console.log(timer.getTime())

function timerTrigger(){
    let currentTimer = timer.getTime()
    timer.setTime(currentTimer - 1000)
    console.log(timer.toTimeString().split(' ')[0])
    timeCounterElement.innerText = timer.toTimeString().split(' ')[0]
    if(timer.getSeconds() == 0){
        clearInterval(timeCounter)
        alert('Вы победили в конкурсе!')
        document.querySelector('#hidden-link').click()
    }
}

let timeCounter = setInterval(timerTrigger, 1000)