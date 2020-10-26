const cepGenerator = require('./search/generatorAlgorithm')
const getCep = require('./requests/cepRequests.js');

var index = 0;

setInterval(function requisition(){
    const cep = cepGenerator(index);
    index++
    const res = getCep(cep);
    res.then(function (response){
        if(response.data.cep !== undefined){
            console.log(response.data.cep);
            console.log(response.data.logradouro);
            console.log(response.data.bairro);
            console.log(response.data.localidade);
        }
        else{
            console.log('CEP não existe...');
        }
    }).catch((err)=>{
        console.log(err);
    })
}, 3000);