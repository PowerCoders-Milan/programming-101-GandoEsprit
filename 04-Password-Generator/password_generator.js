//insert your pseudocode below
/*
Avere un variabile password con una lungueza superiore o eguale a 8 carattere
- il variabile deve avere dei caracteri
- Almeno un numero
- un caratere speciale

Inizialisiamo una variabile chiamata password
generiamo 5 numeri random 
generiamo 4 lettere random
generiamo 2 caratteri speciali
Concateniamo le 3 variabili 
Fare il print
*/

//insert your code below

var lettere, carattereSpeciale, randomNumber, password, i;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


lettere = 'abcdefghijklmnopqrstuvz';
carattereSpeciale = '-_@#?&%$';
randomNumber = mathRandomInt(10000, 99999);
password = '';
for (i = 1; i <= 4; i++) {
  password += String(lettere.charAt((mathRandomInt(1, 25) - 1)));
}
for (i = 1; i <= 3; i++) {
  password += String(carattereSpeciale.charAt((mathRandomInt(1, 8) - 1)));
}
password += String(randomNumber);
window.alert(password);
