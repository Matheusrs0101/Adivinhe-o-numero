 jogo de adivinhação de números em JavaScript. O jogo irá gerar um número aleatório entre 1 e 100, e o jogador terá que adivinhar qual é esse número. O jogo dará dicas ao jogador, dizendo se o número chutado é maior ou menor que o número secreto. O jogo termina quando o jogador acerta o número ou quando ele atinge um número máximo de tentativa.

Requisitos

Estrutura HTML:

Crie um arquivo HTML com a seguinte estrutura:

Um título para o jogo (ex: "Jogo de Adivinhação").

Uma mensagem inicial explicando como o jogo funciona.

Um campo de entrada para o jogador inserir seu palpite.

Um botão com o texto "Chutar".

Uma tag <p> para exibir as mensagens do jogo (dicas, resultado, etc.).

Uma tag <p> para exibir o número de tentativas restantes.

Funcionalidades JavaScript:

Ao carregar a página, o JavaScript deve:

Gerar um número aleatório entre 1 e 100 e armazená-lo em uma variável.

Defina o número máximo de esforço (ex: 10).

Inicialize o contador de experimentos.

Ao clicar no botão "Chutar", o JavaScript deve:

Capturar o valor inserido no input (palpite do jogador).

Validar se o palpite é um número válido entre 1 e 100.

Comparar o palpite com o número secreto e exibir uma mensagem:

"Você acertou!" (o jogo termina).

"O número secreto é maior" (o jogador continua tentando).

"O número secreto é menor" (o jogador continua tentando).

Diminuir o contador de experimentos.

Exibir o número de tentativas restantes.

Se o jogador atingir o número máximo de tentativas, o jogo termina com a mensagem "Você perdeu! O número secreto era X".
