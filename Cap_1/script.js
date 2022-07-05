var myVariable = 'global';
myOtherVariable = 'global';
function myFunction() {
  var myVariable = 'local';
  return myVariable;
}
function myOtherFunction() {
  myOtherVariable = 'local';
  return myOtherVariable;
}
console.log(myVariable); //global
console.log(myFunction()); //local
console.log(myOtherVariable); //global
console.log(myOtherFunction()); //local
console.log(myOtherVariable); //local

/*Talvez você ouça falar que variáveis globais em JS são prejudiciais, e isso é verdade. Em geral, a qualidade do código-fonte JS é 
avaliada de acordo com o número de variáveis e funções globais (um número elevado é ruim). Portanto, sempre que possível, procure
evitar as variáveis globais.*/