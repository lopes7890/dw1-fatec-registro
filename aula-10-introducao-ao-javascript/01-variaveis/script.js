// Javascript
// VARIÁVEIS
/* Variáveis podem ser declaradas de 3 formas:
VAR, LET e CONST */
// VAR: No geral, evite o seu uso, pode não ser muito seguro.
// LET: Utilize quando for necessário reatribuir o valor da variável.
// CONST: Utilize quando NÃO precisar reatribuir o valor da variável.
// VAR:
var nome = "Diego";
nome = "João";
var nome = "José";
// LET:
let cidade = "Registro";
cidade = "Sete Barras";
// let cidade -> isso não pode
// CONST:
const user = "pedro@email.com";
// user = "pedro@gmail.com" -> isso não pode
// const user = "" -> não poderia

// FUNÇÕES DO ELEMENTO WINDOW (navegador)
// Disparando uma janela de alerta no site
window.alert("Bem-vindo aos de Javascript!");
// Disparando uma janela de confirmação
const confirmacao = window.confirm("Vamos começar?");
if (confirmacao == true) {
  // Dispara uma janela de entrada de dados
  const nome = window.prompt("Qual é o seu nome?");
  const idade = window.prompt("Quantos anos você tem?")
  // Escrevendo no site
  document.writeln("Olá " + nome + "!"); // Concatenação
  // Concatenação - Template Strings
  // document.write("Você tem " + idade + " anos")
  document.writeln(`Você tem ${idade} anos!`)
}
// CRIE UM SITE COM UM SCRIPT QUE PERGUNTE A IDADE DO USUÁRIO. SE A IDADE FOR MAIOR QUE 18, ELE MOSTRA NO SITE: "VOCÊ É MAIOR DE IDADE.", SE NÃO ELE MOSTRA: "VOCÊ É MENOR DE IDADE."
const idade = Number(window.prompt("Digite sua idade: "));

if (idade <= 18){
  document.writeln("Maior de idade")
} else {
  document.writeln("Menor de idade")
}