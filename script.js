document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obter os valores do formulário de cadastro
  var nome = document.getElementById('nome').value.trim();
  if (!nome) {
    alert('O campo nome é obrigatório.');
    return;
  }
  var email = document.getElementById('email').value;
  var dataNascimento = document.getElementById('dataNascimento').value;
  var genero = document.getElementById('genero').value;
  var senhaCadastro = document.getElementById('senhaCadastro').value;

  // Limpar o formulário de cadastro
  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('dataNascimento').value = '';
  document.getElementById('genero').value = '';
  document.getElementById('senhaCadastro').value = '';

  // Obter os cadastros existentes ou inicializar um novo array
  var cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

  // Adicionar o novo cadastro ao array
  cadastros.push({ nome: nome, email: email, dataNascimento: dataNascimento, genero: genero, senhaCadastro: senhaCadastro });

  // Salvar os cadastros atualizados no armazenamento local
  localStorage.setItem('cadastros', JSON.stringify(cadastros));

  alert('Cadastro realizado com sucesso!');

  // Redirecionar para a página de administração após o cadastro
  window.location.href = 'index2.html';
});

document.getElementById('acessar').addEventListener('click', function() {
  var senhaAcesso = document.getElementById('senhaAcesso').value;

  // Verificar se a senha de acesso corresponde à senha do administrador
  if (senhaAcesso === 'Adm123') {
    // Redirecionar para a página de administração
    window.location.href = 'index2.html';
  } else {
    // Exibir mensagem de acesso negado
    var resultadoAcesso = document.getElementById('resultadoAcesso');
    resultadoAcesso.textContent = 'Acesso negado. Senha incorreta.';
  }

  // Limpar o campo de senha de acesso
  document.getElementById('senhaAcesso').value = '';
});
