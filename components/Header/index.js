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

const headerContainer = document.querySelector('.header-container')
function Header() {
    const headerDiv = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const currentTemp = document.createElement('span');


    date.classList.add('date');
    currentTemp.classList.add('temp');

    date.textContent = 'March 28, 2019'

    headerContainer.appendChild(headerDiv);
    headerDiv.appendChild(date);
    headerDiv.appendChild(title);
    headerDiv.appendChild(currentTemp);

    return Header;
}
