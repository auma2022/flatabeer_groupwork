const beerName = document.getElementById('beer-name');
const beerImage = document.getElementById('beer-image');
const beerDescription = document.getElementById('beer-description');
const beerReviews = document.getElementById('review-list');
const beerList = document.getElementById('beer-list')

const url = 'http://localhost:3000/beers'

//beerList.addEventListener("load",()=>)

fetch(url).then((response) => response.json())
    .then(beers => {
        beers.forEach(beer => {
            let listR = document.createElement('li');
            listR.textContent = beer.name;
            beerList.appendChild(listR);
        })
        beerName.innerHTML = beers[6].name;
        beerImage.src = beers[6].image_url;
        beerDescription.innerHTML = beers[6].description;
        beers[6].reviews.forEach((review) => {
            let listR = document.createElement('li');
            listR.textContent = review;
            beerReviews.appendChild(listR);
        })
    })
document.querySelector('#review-form').addEventListener('submit', (e) => {
    e.preventDefault();
    let text = document.querySelector('#review-form textarea')
    let listReveiw = document.createElement('li');
    listReveiw.innerText = text.value;
    beerReviews.appendChild(listReveiw);
    document.querySelector('#review-form').reset();
})