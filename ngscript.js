angular.module("listaTelefonica", []);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope) {
	$scope.app = "Lista Telefonica";
	$scope.contatos = [
		{nome: "Bob", telefone: "999999999", cor: "blue"},
		{nome: "Mel", telefone: "999998888", cor: "pink"},
		{nome: "Tom", telefone: "999997777", cor: "purple"}
	];

	$scope.operadoras = [
		{nome: "Oi", codigo: "31", categoria: "Celular"},
		{nome: "Vivo", codigo: "15", categoria: "Celular"},
		{nome: "Tim", codigo: "41", categoria: "Celular"},
		{nome: "GVT", codigo: "25", categoria: "Fixo"},
		{nome: "Embratel", codigo: "21", categoria: "Fixo"}
	];

	$scope.adicionarContato = function (contato) {
		$scope.contatos.push(angular.copy(contato));
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
	};

	$scope.apagarContato = function (contatos) {
		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});					
	};

	$scope.isContatoSelecionado = function (contatos){
		return contatos.some(function (contato) {
			return contato.selecionado;
		});
	};
});				