// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

const controle = document.querySelectorAll(".controle");

var posicao = 0;
var tamanho = todasAsImagens.length;
controle.forEach(function(botao){
	botao.addEventListener("click", seleciona);
});

function seleciona(e){
	let el = e.currentTarget;
	var img = document.getElementById('slide');
	if (el.innerHTML == "Próximo"){
		posicao = (posicao+tamanho+1)%tamanho;
	}
	else {
		posicao = (posicao+tamanho-1)%tamanho;
		;
	}
	img.src = servidorDasImagens + todasAsImagens[posicao]
};

