console.log("------------------------------------------------");
console.log("O))     O)) O))))))) O)))))))        O))))");
console.log("O))     O)) O))      O))    O))    O))    O))");
console.log("O))     O)) O))      O))    O))  O))        O))");
console.log("O)))))) O)) O))))))  O) O))      O))        O))");
console.log("O))     O)) O))      O))  O))    O))        O))");
console.log("O))     O)) O))      O))    O))    O))     O))");
console.log("O))     O)) O))))))) O))      O))    O))))");
console.log("------------------------------------------------");
                                    
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
    nivel = "Erro do Professor ;)";
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

console.log(`O XP do ${hero.nome} é ${hero.xp}, portanto seu personagem é nível ${nivel}.`);
