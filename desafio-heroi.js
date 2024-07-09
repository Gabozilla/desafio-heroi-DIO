//importação do módulo para o reconhecimento o prompt no VSCode
const prompt = require("prompt-sync")();

//Variável para o laço de repetição
let continuar = true;

//Adição do laço de repetição
while (continuar){
//Variáveis para armazenar o nome e quantidade de experiência
    let nome = prompt("Informe o nome do Herói:  ");
    let qtExperiencia = prompt("Informe a quantidade de experiência do Herói:  ");
    let nivel;

//Estrutura de decisão 
if (qtExperiencia < 1000) {
    nivel = "Ferro";
} else if (qtExperiencia >= 1001 && qtExperiencia <=2000){
    nivel = "Bronze";
} else if (qtExperiencia >= 2001 && qtExperiencia <= 5000){
    nivel ="Prata";
} else if (qtExperiencia >= 5001 && qtExperiencia <= 7000){
    nivel ="Ouro";
} else if (qtExperiencia >= 7001 && qtExperiencia <= 8000){
        nivel ="Platina";
} else if (qtExperiencia >= 8001 && qtExperiencia <= 9000){
    nivel ="Ascendente";
} else if (qtExperiencia >= 9001 && qtExperiencia <= 10000){
    nivel ="Imortal";
} else if (qtExperiencia > 10001){
    nivel ="Radiante";
}

//Mensagem final
console.log(`O herói de nome ${nome} está no nível ${nivel}!`);

//Perguntando se o usuário deseja continuar
let resposta = prompt("Você quer adicionar outro herói? (sim/não)").toLowerCase();
    if (resposta !== "sim") {
        continuar = false;
    }
}