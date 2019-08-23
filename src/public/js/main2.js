var descCom = document.querySelector('#descCom');
var nameCom = document.querySelector('#nameCom');


descCom.addEventListener('keydown', () => {

    let val = descCom.value.length;
    
    if(val >= 250) descCom.value = descCom.value.substring(0, 250);

});

nameCom.addEventListener('keydown', () => {

    let val = nameCom.value.length;
    
    if(val >= 30) nameCom.value = nameCom.value.substring(0, 30);

});