Funcionalidade: Cadastro no site Adopet

Cenário: Realizar um cadastro no site com sucesso

Passos:

O usuário acessa a página de cadastro.
O usuário preenche o campo "Nome".
O usuário preenche o campo "E-mail" com um endereço de e-mail cálido.
O usuário preenche o campo "Senha" com uma senha válida.
O usuário preenche o campo "confirmação de senha" com a mesma senha inserida no passo anterior.
O usuário clica no botão "Cadastrar".

Resultaros esperados:
O sistema processa as informações fornecidas.

Regra de negócio:
E-mail e senha sao campos obrigatórios para o cadastro.

-

Cenário: Falha na tentativa de cadastro

Passos:
O usuário acessa a página de cadastro.
O usuário deixa os campos obrigatórios (nome, email, senha e confimação de senha) em branco.
O usuário clica no botao "Cadastrar".

Resultados esperados:
O sistema valida os campos obrigatórios em branco.
O sistema exibe mensagens de erro indicando que os campos obrigatórios devem ser preenchidos.

-

Cenário: Login no sistema com sucesso

Passos:

O usuário acessa a páina de login
O usuário insere seu email "pamelafmunhoz@gmail.com" e a senha "Teste123" nos campos correspondentes.
O usuário clica no botão "Entrar".

O sistema autentica as credenciais forcedidas.
O sistema redireciona o usuário para a página "/home".

Funcionalidade: Login no site Adopet

Cenário: Falha no login do sistema