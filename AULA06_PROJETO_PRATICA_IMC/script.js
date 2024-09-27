
//IMC

/*ABAIXO DE 17 - MUITO ABAIXO DO PESO 
entre 17 e 18 - abaixo do peso
entre 18.50 e 24.99 peso nromal
entre 25 e 29.99 acima do peso
a partir de 30 obesidade

 IMAC = PESO/(ALTURA*ALTURA)*/

 var peso;
 var altura;
 var imc;
 var resultado

 function calcular(event){
    //alert("Teste");
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    //testar a recepção das informações
    console.log(peso);
    console.log(altura);

    //calcular imc
    imc = peso/(altura*altura);
    resultado = document.getElementById('resultado');

    console.log(imc)
    if(imc<17){
        resultado.innerHTML = "</br> Seu resultado foi:"+imc+"</br>Cuidado você está muito abaixo do peso"

    }else if( imc>17 && imc<= 18.49){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = "</br> Seu resultado foi:"+imc+"</br>Cuidado você está abaixo do peso"

    }
 }

