// Importar o módulo readline
const readline = require('readline');

// Criar uma interface para ler e escrever no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pedir o nome e xp do usuário pelo terminal
rl.question('Qual é o seu nome nobre guerreiro? ', (nameHero) => {
    rl.question(`Quantas vitórias você possui ${nameHero}? `, (victory) => {
        rl.question(`Sei que é chato ${nameHero}, mais quantas derrotas você possui? `, (defeat) => {

            function subtraction (X, Y) {
                let result = X-Y
                return result
            }

            let final_result = subtraction(victory, defeat)
            
            let nivel =""

            if (final_result < 10 ) {
                nivel = "Ferro"
            } else if (final_result >= 11  && final_result <= 20) {
                nivel = "Bronze"
            } else if (final_result >= 21  && final_result <= 50) {
                nivel = "Prata"
            } else if (final_result >= 51  && final_result <= 80) {
                nivel = "Ouro"
            } else if (final_result >= 81 && final_result <= 90) {
                nivel = "Diamante"
            } else if (final_result >= 91 && final_result <= 100) {
                nivel = "Lendário"
            } else (final_result = "Imortal")

            console.log(`O Herói ${nameHero} tem de saldo ${final_result} e está no nível de ${nivel}`);

            rl.close();
        });
    });
});