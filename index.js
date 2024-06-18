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



/*QUAL É O MÊS?*/

function n_Mes(num) {

    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto","Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    if (num >= 1 && num <= 12){
        return meses[num - 1];

    }else {
        return "Seu número não corresponde a nenhum mês.Digite um número de 1 a 12.";
    }

}

function calcular_mes() {
    /*Pegar o número que o usuário digitou*/
    var num = parseInt(document.getElementById("numero").value);

    /*Chamando função dos números pra conversão*/
    var mes = n_Mes(num);

    
    /*Resultado*/
    document.getElementById("result_mes").textContent = mes;
    /*document.getElementById("result_mes").innerHTML = `O mês é:  ` + mes;*/

    
}