// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response =>{
        console.log(response.data.topics)
        response.data.topics.forEach(item => {
            const titleName = Tabs(item);
            topicsDiv.appendChild(titleName);
        });
    });
    
const topicsDiv = document.querySelector('.topics')//sets '.topics class to topicsDiv to later append 'Tabs' function



function Tabs(name){    
    const tabDiv = document.createElement('div');    
    tabDiv.classList.add('tab');
    tabDiv.textContent = name
   
    return tabDiv;
};
