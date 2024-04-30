//cor:
let cor_primaria;
let cor_secundaria;
//filmes:
let filmes = ['Super Mario Bros','Vidas ao vento','Casa da mãe Joana','Gente grande'];
let Idade = null;
let Comedia = false;

function setup() {
  cor_primaria = color(0,0,0);
  cor_secundaria = color(255, 0,0);
  createElement("h1","Recomendador de filmes:");
  createCanvas(400, 400);
  createSpan("Qual é a sua idade?");
  Idade = createInput("Idade");
  Comedia = createCheckbox("Gosta de Comedia");
}

function draw() {
  background(cor_primaria);
  fill(cor_secundaria);
  textAlign(CENTER,CENTER);
  textSize(30);
  text(Recomendacao(), width/2, height/2);
}

function Recomendacao(){
  let recomendacao = '';
  
  if(Idade.value() >= 14 && Comedia.checked()){
    recomendacao = filmes[2];
  } else if(Idade.value() >= 10){
    recomendacao = filmes[1];
  } else if(Comedia.checked()){
    recomendacao = filmes[3];
  } else {
    recomendacao = filmes[0];
  }
  
  return recomendacao;
}
