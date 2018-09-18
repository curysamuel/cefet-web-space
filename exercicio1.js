// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML
const botoes = document.querySelectorAll(".botao-expandir-retrair");


botoes.forEach(function(botao){
	botao.addEventListener("click", expandir);
});

function expandir(e){
	// alert('mensagem aqui')
	let el = e.currentTarget;
	let expandiu = el.parentNode.classList.toggle("expandido");
	if (expandiu){
		el.innerHTML = "-";
	} else {
		el.innerHTML = "+";
	}
};
