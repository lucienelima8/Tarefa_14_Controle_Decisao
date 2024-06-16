/*MÉDIA ARITMÉTICA DE 3 NÚMEROS*/

/*Usuáiro digitar 3 números e o JS fazer a média aritmética*/

function calcular_media () {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
   
    const media = (num1 + num2 + num3) / 3;

    document.getElementById('resultArea').innerHTML = `A média é: ` + media;

}

/*USUÁRIO É MENOR DE IDADE OU NÃO*/

function calcular_idade () {

    let idade = parseFloat(document.getElementById('idade').value);

    if(idade >= 18) {
    alert("Vocé é maior de idade");

    }else {
    alert("Você é menor de idade");

    }

}