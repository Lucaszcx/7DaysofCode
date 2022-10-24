let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";

let adicionarMais = "sim";
while (adicionarMais != "não") {
    adicionarMais = prompt("Você deseja adicionar algo a mais na sua lista de compras? Responda com 'sim ou 'não'.");
    while (adicionarMais != "sim" && adicionarMais != "não") {
        alert (`operação não reconhecida!`);
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    }

    if (adicionarMais === "não") {
        break;
    }

    comida = prompt("Qual comida você deseja insesir?");
    categoria = prompt("Em qual caregoria essa comida se encaixa: 'frutas', 'laticinios', 'doces' ou 'congelados'?");
    if (categoria === 'frutas') {
        frutas.push(comida);
    } else if (categoria === 'laticinios') {
        laticinios.push(comida);
    } else if (categoria === 'doces') {
        doces.push(comida);
    } else if (categoria === 'congelados') {
        congelados.push(comida);
    } else  {
        alert("Essa categoria não foi pré-definida")
    }
}
alert(`Lista de compras:\n Frutas: ${frutas}\n Laticinios: ${laticinios}\n doces: ${doces}\n congelados: ${congelados}`)