const axios = require('axios');

async function getData() {
    let getApi = await axios.get('https://api.nasa.gov/planetary/apod?api_key=2s8KwrunG9yeInuR7M6Myvqw4fHol2jUj6VcxU82');
    return getApi.data
}

getData().then((a) => console.log(a))
