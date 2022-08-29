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
    var classifica = "";

    var imc = pesoTexto / (alturaTexto * 2);

    var user = [nomeTexto, pesoTexto, alturaTexto, imc]

    document.write("Olá, " + nomeTexto)
    linha()
    document.write("Seu peso é: " + pesoTexto + "Kg")
    linha()
    document.write("Sua altura é: " + alturaTexto + "m")
    linha()
    document.write(" Seu IMC é de: " + imc.toFixed(2))

    if(imc = 18 && imc < 25){
        classifica = "Normal"
        linha()
        document.write("Sua classificação é: " + classifica);
    }else if(imc = 25 && imc < 30){
        classifica = "Sobrepeso"
        linha()
        document.write("Sua classificação é: " + classifica);
    }else if(imc > 30 && imc < 40){
        classifica = "Obesidade"
        linha()
        document.write("Sua classificação é: " + classifica);
    }else if(imc > 40){
        classifica = "Obesidade grave"
        linha()
        document.write("Sua classificação é: " + classifica);
    }
}