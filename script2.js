// Função para exibir os cadastros na área de administração
function exibirCadastros() {
  // Obter os cadastros salvos no armazenamento local
  var cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
  
  var areaExibicao = document.getElementById('areaExibicao');
  areaExibicao.innerHTML = '';

  cadastros.forEach(function(cadastro, index) {
    var div = document.createElement('div');
    div.classList.add('cadastro-item'); // Adiciona a classe cadastro-item

    var h3 = document.createElement('h3');
    var emailParaExibir = document.createElement('p');
    var dataNascimentoParaExibir = document.createElement('p');
    var generoParaExibir = document.createElement('p');
    var senhaParaExibir = document.createElement('p');

    h3.textContent = cadastro.nome;
    emailParaExibir.textContent = 'Email: ' + cadastro.email;
    dataNascimentoParaExibir.textContent = 'Data de Nascimento: ' + cadastro.dataNascimento;
    generoParaExibir.textContent = 'Gênero: ' + cadastro.genero;
    senhaParaExibir.textContent = 'Senha: ' + cadastro.senhaCadastro;

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'cadastroCheckbox';
    checkbox.value = index;

    div.appendChild(checkbox);
    div.appendChild(h3);
    div.appendChild(emailParaExibir);
    div.appendChild(dataNascimentoParaExibir);
    div.appendChild(generoParaExibir);
    div.appendChild(senhaParaExibir);

    areaExibicao.appendChild(div);
  });
}

// Chamar a função para exibir os cadastros quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
  exibirCadastros();
});
