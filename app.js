let abc=document.getElementById("letras")
let content = '';

const array = ['a', 'b', 'c','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

array.forEach(letra => content += `<img class="${letra}" onclick="manejoLetras('${letra}')" src="./images/${letra}.svg" />`)
abc.innerHTML=content



const secretWord = "javascript";
let displayedWord = "_".repeat(secretWord.length);
let adivinanzasRestantes = 6;

const wordDisplay = document.getElementById("wordDisplay");

const guessesLeftDisplay = document.getElementById("guessesLeft");

const messageDisplay = document.getElementById("message");

wordDisplay.textContent = displayedWord;

 // INICIO FUNCIONALIDAD PARA MOSTRAR PARTES DEL AHORCADO

 const imagenes = document.querySelectorAll('.oculta');
 let indiceActual = 0;

//funcionalidad de las letras

function manejoLetras(juan){
  const guess = juan.toLowerCase();
  


  if (secretWord.includes(guess)) 
  {
    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === guess) {
            displayedWord = displayedWord.substring(0, i) + guess + displayedWord.substring(i + 1);
            
            
            
            console.log(juan)
            const index = array.indexOf(juan);
            console.log(index);

            if (index !== -1) {
              array.splice(index, 1);
              console.log('La letra "p" se ha encontrado y eliminado del arreglo.');
              abc.style.display="none";
              let content2 = '';
              let abc2=document.getElementById("letras2")
              array.forEach(letra => content2 += `<img class="${letra}" onclick="manejoLetras('${letra}')" src="./images/${letra}.svg" />`)
              abc2.innerHTML=content2
              console.log('Arreglo actualizado:', array);
            } else {
              console.log('La letra "p" no se encuentra en el arreglo.');
            }


        }
    }
    
    wordDisplay.textContent = displayedWord;



    if (!displayedWord.includes("_")) {
        messageDisplay.textContent = "¡Ganaste! La palabra era: " + secretWord;
        guessButton.disabled = true;
    }
  }
  else 
  {
    // INICIO FUNCIONALIDAD PARA MOSTRAR PARTES DEL AHORCADO


    console.log(juan)
    const index = array.indexOf(juan);
    console.log(index);

    if (index !== -1) {
      array.splice(index, 1);
      console.log('La letra "p" se ha encontrado y eliminado del arreglo.');
      abc.style.display="none";
      let content2 = '';
      let abc2=document.getElementById("letras2")
      array.forEach(letra => content2 += `<img class="${letra}" onclick="manejoLetras('${letra}')" src="./images/${letra}.svg" />`)
      abc2.innerHTML=content2
      console.log('Arreglo actualizado:', array);
    } else {
      console.log('La letra "p" no se encuentra en el arreglo.');
    }



    if (indiceActual < imagenes.length) {
    imagenes[indiceActual].style.display = 'block';
    indiceActual++;

    if (indiceActual === imagenes.length) {
        boton.textContent = 'Terminar';
    }
    }

    //FIN FUNCIONALIDAD PARA MOSTRAR PARTES DEL AHORCADO
    adivinanzasRestantes--;
    guessesLeftDisplay.textContent = "Intentos restantes: " + adivinanzasRestantes;
    if (adivinanzasRestantes === 0) {
        messageDisplay.textContent = "Perdiste. La palabra era: " + secretWord;
        guessButton.disabled = true;
    }
  }

}
