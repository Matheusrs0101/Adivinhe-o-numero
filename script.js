// gerar numeros inteiros aleatorio de 0 100 
const numeroaleatorio = (parseInt(Math.random() * 100 + 1));
console.log(numeroaleatorio);

// variaveis contador de tentativas
let tentativas = 10;
let maximotentativas = 0;


function jogar(){

let numberdigit = document.getElementById("Sort").value;// variavel que recebe numero que o usuario digitar
  
// Loop de tentativas 
  while(tentativas >= maximotentativas){

      if(numberdigit == numeroaleatorio){
        document.getElementById("msg").textContent = "🏆Parabens Você Acertou!🏆";
        document.getElementById("tent").textContent = "Numero de tentativas Restantes:  " + tentativas;
        document.getElementById("Fimdejogo").textContent = "🚀Atualize a Pagina para reiniciar o jogo🚀";
      break;
        
    } else if (numberdigit < numeroaleatorio){
        document.getElementById("msg").textContent = "O número secreto é maior!";
        document.getElementById("tent").textContent = "Numero de tentativas Restantes:  " + tentativas;
        tentativas--; 
      break;
    } else if (numberdigit > numeroaleatorio){
        document.getElementById("msg").textContent = "O número secreto é menor!";
        document.getElementById("tent").textContent = "Numero de tentativas Restantes:  " + tentativas;
        tentativas--; 
      break;
    } 
    
  }
      // Fim do jogo
      if (tentativas == maximotentativas) {
        document.getElementById("tent").textContent = "❌Suas Tentativas acabaram: " + tentativas;
        document.getElementById("numbersecret").textContent = " Você perdeu o número secreto era:  " + numeroaleatorio;
        document.getElementById("Fimdejogo").textContent = "Game Over"; 
        tentativas++;  
         
    } 

       

}    
    
function reiniciar(){
        window.location.href = "index.html"
}








