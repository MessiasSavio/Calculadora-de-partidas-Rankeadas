# Programa em Node.js que calcula o nível de um herói

Este programa pede o nome, o número de vitórias e o número de derrotas de um usuário pelo terminal e mostra o seu nível de herói, de acordo com uma tabela pré-definida.

## Como executar o programa

Para executar o programa, você precisa ter o Node.js instalado no seu computador. Você pode baixar o Node.js no site oficial ou seguir um tutorial para aprender como instalar e configurar o Node.js no Windows.

Depois de instalar o Node.js, você pode abrir o terminal e navegar até a pasta onde o arquivo com o código está salvo. Então, você pode digitar o comando `node index.js` para executar o programa e responder às perguntas.

## Como funciona o código

O código é um programa em Node.js que usa o módulo readline para interagir com o usuário pelo terminal. O módulo readline permite ler e escrever dados de forma assíncrona, usando callbacks para lidar com as entradas e saídas.

O programa começa importando o módulo readline e criando uma interface chamada rl, que recebe os dados de entrada do teclado (process.stdin) e envia os dados de saída para o terminal (process.stdout).

```js
// Importar o módulo readline
const readline = require('readline');

// Criar uma interface para ler e escrever no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

Em seguida, o programa usa o método rl.question para fazer três perguntas ao usuário: qual é o seu nome, quantas vitórias e quantas derrotas você possui. O método rl.question recebe dois argumentos: uma string com a pergunta e uma função callback que é chamada quando o usuário digita a resposta. A resposta do usuário é passada como um parâmetro para a função callback.

A primeira pergunta é feita usando uma template string que interpola a variável nameHero, que armazena o nome do usuário. As outras perguntas são feitas dentro das funções callback das anteriores, criando uma sequência de perguntas. As variáveis victory e defeat armazenam o número de vitórias e derrotas do usuário, respectivamente.

// Pedir o nome e xp do usuário pelo terminal
rl.question('Qual é o seu nome nobre guerreiro? ', (nameHero) => {
    rl.question(`Quantas vitórias você possui ${nameHero}? `, (victory) => {
        rl.question(`Sei que é chato ${nameHero}, mais quantas derrotas você possui? `, (defeat) => {

Depois de obter as respostas do usuário, o programa define uma função chamada subtraction que recebe dois parâmetros X e Y e retorna a subtração de X por Y. Essa função é usada para calcular o saldo do usuário, que é a diferença entre o número de vitórias e derrotas. A variável final_result armazena o valor do saldo.

            function subtraction (X, Y) {
                let result = X-Y
                return result
            }

            let final_result = subtraction(victory, defeat)

Em seguida, o programa usa uma estrutura condicional if-else para atribuir um nível ao usuário, de acordo com o seu saldo. A variável nivel guarda o nome do nível, que pode ser Ferro, Bronze, Prata, Ouro, Diamante, Lendário ou Imortal.

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

Por fim, o programa usa o método console.log para mostrar uma mensagem no terminal com o nome, o saldo e o nível do usuário, usando outra template string. O método rl.close é chamado para encerrar a interface e o programa.

            console.log(`O Herói ${nameHero} tem de saldo ${final_result} e está no nível de ${nivel}`);

            rl.close();
        });
    });
});

Referências
Node.js
Readline
Markdown

