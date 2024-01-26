const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {    // == para igaul & === para igual e do mesmo tipo
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    }
    
    requestApi(searchTerm);
})

/* 
//Greeting
const greeting = document.getElementById("greeting");

function getGreetingMessage() {
    const localTime = new Date();
    const hours = localTime.getHours();
    if (hours >= 6 && hours < 12) {
        greeting.innerText = "Bom dia!";
    } else if (hours >= 12 && hours < 18) {
        greeting.innerText = "Boa tarde!";
    } else {
        greeting.innerText = "Boa noite!";
    }
}

getGreetingMessage()
*/