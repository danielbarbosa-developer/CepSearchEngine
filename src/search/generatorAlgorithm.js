const treeNumbersArray = () =>{
    var stringArray = [];
    var stringValue;
    var value = 0;

    for(num = 0; num<1000; num++){
        value = num;
        stringValue = value.toString(10)
        stringArray[num] = stringValue;
    }
    for(i = 0; i<= stringArray.length; i++){
        if(i<100){
            if(i<10){
                stringArray[i] = '00' + stringArray[i];
            }
            else{
                stringArray[i] = '0' + stringArray[i]
            }
        }
    }
    return stringArray;
}
const fiveNumbersArray = () =>{
    
    var stringArray = [];
    var stringValue;
    var value = 0;

    for(num = 0; num<100000; num++){
        value = num;
        stringValue = value.toString(10)
        stringArray[num] = stringValue;
    }
    for(i = 0; i<= stringArray.length; i++){
        if(i<10000){
            if(i<1000){
                if(i<100){
                    if(i<10){
                        stringArray[i] = '0000' + stringArray[i];
                    }
                    else{
                        stringArray[i] = '000' + stringArray[i]
                    }
                }
                else{
                    stringArray[i] = '00' + stringArray[i];
                }  
            }
            else{
                stringArray[i] = '0' + stringArray[i];
            }
        }
    }
    return stringArray;

}
const cepArrayGenerator = (initialCep, lastCep) =>{
    var cepArray = [];
    var cep = '';
    var treeArray = treeNumbersArray();
    var fiveArray = fiveNumbersArray();
    for(cont = initialCep; cont<lastCep; cont++){
        five = fiveArray[cont];
        for(i = 0; i<=treeArray.length; i++){
            tree = treeArray[i];
            cep = five + tree;
            cepArray.push(cep)
        }
    }
    return cepArray;
}

const cepGenerator = (index) =>{
    const arrayCep = cepArrayGenerator(88056, 88057);
    return arrayCep[index];
}

module.exports = cepGenerator;