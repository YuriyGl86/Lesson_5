const counterElement = document.querySelector('#clicker__counter')
let counter = Number(counterElement.innerText)
const cookie = document.querySelector('#cookie')
let prevClickTime
let speed

cookie.addEventListener('click', onCookieClick)

function onCookieClick(){
    if(counter % 2 === 0){
        cookie.width += 20
    } else cookie.width -= 20   

    if(!prevClickTime){
        prevClickTime = Date.now()
        console.log('prev' + prevClickTime)

        let speedElement = document.createElement('div')
        speedElement.className = 'speed'
        speedElement.innerText = 'Скорость клика: 0'
        document.querySelector('.clicker__status').after(speedElement)
    }
    if(counter > 0){
        let currentClickTime = Date.now()
        speed = 1000 / (currentClickTime - prevClickTime)
        prevClickTime = currentClickTime

        document.querySelector('.speed').innerText = `Скорость клика: ${speed}`
    }

    counter++
    counterElement.innerText = counter
}