const p = document.querySelector('p')
const sizeUpbtn = document.querySelector('button.sizeUp')
const sizeDownbtn = document.querySelector('button.sizeDown')
const colorbtn = document.querySelector('button.color')
const colors = ['royalblue','tomato','lime','limegreen','black','yellow','white']
let fontSize = 36

function randomChoice(arr) 
{
    return arr[Math.floor(Math.random() * arr.length)]
}
function sizeUp()
{
    fontSize += 5
    p.style.fontSize = fontSize + "px"
    if(fontSize >= 80)
    {
        fontSize = 80
    }
}
function sizeDown()
{
    fontSize -= 5
    p.style.fontSize = fontSize + "px"
    if(fontSize <= 25)
    {
        fontSize = 25
    }
}
function changecolor()
{
    p.style.color = randomChoice(colors)
}
sizeUpbtn.addEventListener('click', sizeUp)
sizeDownbtn.addEventListener('click', sizeDown)
colorbtn.addEventListener('click', changecolor)