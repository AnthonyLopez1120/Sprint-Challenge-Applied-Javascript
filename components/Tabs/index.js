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
        console.log(response.data)
        const topicName =response.data;//set data from api to varible 'topicName
    });

const topicsDiv = document.querySelector('.topics')//sets '.topics class to topicsDiv to later append 'Tabs' function

topicName.forEach(name => {//this forEach will take the name each name from the topicName array and append to the topicsDiv using the Tab componet
    topicsDiv.appendChild(tabDiv)
});

function Tabs(data){
    
    const tabDiv = document.createElement('div');
    
    tabDiv.classList.add('tab');

    tabDiv.textContent = '${topicName}';

    topicsDiv.appendChild(tabDiv);

    return tabDiv;
};