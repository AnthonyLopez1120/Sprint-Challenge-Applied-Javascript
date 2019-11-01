// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

let topPart = document.querySelector('.top-bar')
topPart.appendChild(Header())

function Header() {
    let headerDiv = document.createElement('div')
    let date = document.createElement('span')
    let mainTItle = document.createElement('h1')
    let temp = document.createElement('span')

    headerDiv.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')

    date.textContent = 'SMARCH 28, 2019'
    mainTItle.textContent = 'Lambda Times'
    temp.textContent = '98°'

    headerDiv.appendChild(date)
    headerDiv.appendChild(mainTItle)
    headerDiv.appendChild(temp)

    return headerDiv
}
