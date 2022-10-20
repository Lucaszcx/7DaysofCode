var nomeUsuario = prompt ("Qual seu nome?");
var idadeUsuario = prompt ("Qual sua idade?");
var linguagemUsuario = prompt ("Qual lingugagem de programação você está estudando?");

document.write("Olá " + nomeUsuario + ", você tem " + idadeUsuario + " anos e está estudando " + linguagemUsuario + ".");

document.write("<br><br>");

var perguntaExtra = prompt("você gosta de estudar JavaScript? Responda 1 para SIM ou 2 para NÃO.");

if (perguntaExtra == 1) {
    document.write("Que bom! Continue estudando e você tera muito sucesso.");
}

if (perguntaExtra == 2) {
    document.write("Ahh que pena... Já tentou experimentar outras lingugagens?");
}