const axios = require('axios');

async function getCep(cep){
    const response = await axios.get('https://viacep.com.br/ws/'+ cep + '/json/');
    return response;
}

module.exports = getCep;