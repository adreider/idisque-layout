const Products = {
	open() {
		// Abrir Modal
		// Adicionar a classe active ao Modal
		document.getElementById('products').classList.add('active');
	},
	close() {
		// Fechar o Modal
		//Remover a classe active do Modal
		document.querySelector('.modal-products').classList.remove('active');
	},
};