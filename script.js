const linha = () => {
    document.write("<br>")
}

const calculo = () => {
    var nome = document.querySelector("#nome");
    var nomeTexto = nome.value;
    var peso = document.querySelector("#peso");
    var pesoTexto = peso.value;
    var altura = document.querySelector("#altura");
    var alturaTexto = altura.value;

    var imc = pesoTexto / (alturaTexto ** 2);

    var user = [nomeTexto, pesoTexto, alturaTexto, imc]

    document.write("Olá, " + user[0])
    linha()
    document.write("Seu peso é: " + user[1] + "Kg")
    linha()
    document.write("Sua altura é: " + user[2] + "m")
    linha()
    document.write(" Seu IMC é de: " + user[3].toFixed(2))

    if(imc = 18 && imc < 25){
        linha()
        document.write("Sua classificação é Normal");
    }else if(imc = 25 && imc < 30){
        linha()
        document.write("Sua classificação é Sobrepeso");
    }else if(imc > 30 && imc < 40){
        linha()
        document.write("Sua classificação é Obesidade");;
    }else if(imc > 40){
        linha()
        document.write("Sua classificação é Obesidade grave");
    }
}