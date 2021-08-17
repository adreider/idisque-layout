const Payment = {
	open() {
		// Abrir Modal
		// Adicionar a classe active ao Modal
		document.getElementById('payment1').classList.add('active');
	},
	close() {
		// Fechar o Modal
		//Remover a classe active do Modal
		document.getElementById('payment1').classList.remove('active');
	},
};