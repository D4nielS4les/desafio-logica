const { blue, green, red, bold, underline } = require('colorette');
// Realizei pesquisa de uma biblioteca para lidar com cores via Prompt, encontrei essa (colorette) # https://chore-update--yarnpkg.netlify.app/pt-BR/package/colorette

console.log(blue("------------------------------------------------"));
console.log(red("##::::'##:'########:'########:::'#######::"));
console.log(red("##:::: ##: ##.....:: ##.... ##:'##.... ##:"));
console.log(red("##:::: ##: ##::::::: ##:::: ##: ##:::: ##:"));
console.log(red("#########: ######::: ########:: ##:::: ##:"));
console.log(red("##.... ##: ##...:::: ##.. ##::: ##:::: ##:"));
console.log(red("##:::: ##: ##::::::: ##::. ##:: ##:::: ##"));
console.log(red("##:::: ##: ########: ##:::. ##:. #######::"));
console.log(red("..:::::..::........::..:::::..:::.......:::"));
console.log(blue("------------------------------------------------"));
                                    
const prompt = require('prompt-sync')();
// Realizei pesquisa de uma biblioteca para lidar com entradas via Prompt, encontrei essa (prompt-sync) # https://www.npmjs.com/package/prompt-sync

const hero = {
  nome: "",
  xp: 0
};

hero.nome = prompt("Digite o nome do seu Herói: ");
hero.xp = parseInt(prompt("Digite o XP do seu Herói: "));

let nivel;

switch (true) {
  case hero.xp <= 1000:
    nivel = "Ferro";
    break;
  case hero.xp >= 1001 && hero.xp <= 2000:
    nivel = "Bronze";
    break;
  case hero.xp >= 2001 && hero.xp <= 5000:
    nivel = "Prata";
    break;
  case hero.xp >= 5001 && hero.xp <= 6000:
    nivel = "Você digitou um XP, que está em um intervalo ignorado pelo Professor ;)";
    break;
  case hero.xp >= 6001 && hero.xp <= 7000:
    nivel = "Ouro";
    break;
  case hero.xp >= 7001 && hero.xp <= 8000:
    nivel = "Platina";
    break;
  case hero.xp >= 8001 && hero.xp <= 9000:
    nivel = "Ascendente";
    break;
  case hero.xp >= 9001 && hero.xp <= 10000:
    nivel = "Imortal";
    break;
  case hero.xp >= 10001:
    nivel = "Radiante";
    break;
}

console.log(blue("------------------------------------------------------------------------------------------------------------------------------"));
console.log(green(`O XP do -->> ${bold(red(hero.nome))} <<-- é: ${bold(red(hero.xp))}, portanto seu personagem é Nível: --> ${bold(red(nivel))}.`));
console.log(blue("------------------------------------------------------------------------------------------------------------------------------"));