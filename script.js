var nome = "Guilherme";
var notaDoPrimeiroBimestre = 6.5;
var notaDoSegundoBimestre = 8;
var notaDoTerceiroBimestre = 7.6;
var notaDoQuartoBimestre = 4.1;
var notaDoQuintoBimestre = 6.3;
var notaDoSextoBimestre = 7;
var notaFinal =
  (notaDoPrimeiroBimestre +
    notaDoSegundoBimestre +
    notaDoTerceiroBimestre +
    notaDoQuartoBimestre +
    notaDoQuintoBimestre +
    notaDoSextoBimestre) /
  6;

var notaFixada = notaFinal.toFixed(1);

//--------------------------------------------------------------------------------

console.log("Bem vindo " + nome);
console.log("Nota do 1º bimestre: " + notaDoPrimeiroBimestre);
console.log("Nota do 2º bimestre: " + notaDoSegundoBimestre);
console.log("Nota do 3º bimestre: " + notaDoTerceiroBimestre);
console.log("Nota do 4º bimestre: " + notaDoQuartoBimestre);
console.log("Nota do 5º bimestre: " + notaDoQuintoBimestre);
console.log("Nota do 6º bimestre: " + notaDoSextoBimestre);

//--------------------------------------------------------------------------------

if (notaFixada == 10) 
  console.log("Uau! Super aprovado!" + "Sua media é de: " + notaFixada);

if (notaFixada >= 6 && notaFixada <= 9.9)
  console.log("Parabens, aprovado! Sua media é de: " + notaFixada);

if (notaFixada < 6)
  console.log("Que pena, sua média foi de: " + notaFixada + "Reprovado!");




