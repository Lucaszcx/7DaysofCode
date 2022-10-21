var textoInicial = document.write(
        "<h1>Jogo do destino</h1>" + 
            "<p>Responda as perguntas e escolha seu destino</p>" +
                "<br><br>"
)

var pergunta1 = prompt ("Para qual área da programação você quer seguir? Escolha (1) Para Front-End ou (2) Para Back-End")

if(pergunta1 == 1){
    var pergunta2 = prompt ("Você quer aprender (3) React ou aprender (4) Vue?");
    var pergunta3 = prompt ("quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?")
    document.write ("Parabéns continue estudando e lendo artigos sobre essa tecnologia do Front-End e vc tera muito sucesso!")

} else if (pergunta1 == 2){
    var pergunta2 = prompt ("Você quer aprender (3) C# ou aprender (4) Java?");
    var pergunta3 = prompt ("quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?")
    document.write ("Parabéns continue estudando e lendo artigos sobre essa tecnologia do Back-End e vc tera muito sucesso!")
} else {
    alert("Tente digitar um número valido");
}