let xhr = new XMLHttpRequest();

// With XML Http Request

xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/squirtle');
xhr.responseType = 'json';
xhr.send();

xhr.onload = function () {
    let responseObj = xhr.response;
    console.log(responseObj);
};

// With XML Http Request
//const axios = require('axios').default;
// import axios from 'axios';
axios.get('https://pokeapi.co/api/v2/pokemon/squirtle')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
