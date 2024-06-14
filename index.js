/*Média aritmética*/
/*Usuáiro digitar 3 números e o JS fazer a média aritmética*/

function calcular_media () {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
   
    const media = (num1 + num2 + num3) / 3;

    document.getElementById('resultArea').innerHTML = `A média é: ` + media;

}