const express = require('express')
const axios = require('axios')
const app = express();

app.get('/api/autocomplete', (req, res) => {
    const endpoint = `http://autocomplete.geocoder.api.here.com/6.2/suggest.json?app_id=NJGYhnLuMRnFuyH22Hpj&app_code=CE0bEptPZiWwNOeCTemcfQ&query=22&beginHighlight=<b>&endHighlight=</b>&country=AUs&maxresults=5`
    axios({
        method: 'GET',
        url: endpoint,
        headers: {
            "Accept": "application/json",
            "Content-Type": "applicatioin/json"
        }
    }).then(response => {
        res.send(JSON.stringify(response.data));
    }).catch(error => {
        res.send(JSON.stringify(error),400);
    })
})

app.listen(3003, () => {
    console.log('app is running at 3003')
})