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

    var imc = pesoTexto / (alturaTexto * 2)

    document.write("Olá, " + nomeTexto)
    linha()
    document.write("Seu peso é: " + pesoTexto)
    linha()
    document.write("Sua altura é: " + alturaTexto)
    linha()
    document.write(" Seu IMC é de: " + imc.toFixed())
}