// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cards = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res =>{
        console.log(res.data.articles)

        const arri = Object.values(res.data.articles)
        console.log(arri)
        
        arri.forEach(item =>{
            console.log(item)

            item.forEach(something=>{

                let filler = CardComponent(something)
                cards.appendChild(filler)
            })
        })
    })
    .catch(err=>{
        console.log(err, 'article section error')
    })



function CardComponent(stuff){
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const picDiv = document.createElement('div')
    const pic = document.createElement('img')
    const name = document.createElement('span')

    card.classList.add('card')
    author.classList.add('author')
    pic.classList.add('img-container')

    headline.textContent = stuff.headline
    pic.src = stuff.authorPhoto
    name.textContent = `By ${stuff.authorName}`

    card.appendChild(headline)
    card.appendChild(author)
        author.appendChild(picDiv)
            picDiv.appendChild(pic)
        author.appendChild(name)
   
    return card
}