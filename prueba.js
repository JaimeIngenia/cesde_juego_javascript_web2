function setContenedorValue() {

    setTimeout(() => {
      const contenedor = document.getElementById('ahorcado-palabra');
      // this.textoAMostrar = this.palabra.split('').map(char => {
      //   console.log(char);
      //   if (!!char) {
      //     return '_';
      //   }
      //   return ' ';
      // });
      contenedor.textContent = this.textoAMostrar;
      console.log(this.textoAMostrar);
      // contenedor!.textContent = ahorcadoVacio.join('');
    });
  }

  function send (palabra) {
    if (!this.palabra.includes(palabra.value)) {
      alert(`loose ${this.count}`);
      this.count++;
      return;
    }
    let nuevaPalabraAMostrar = '';
    this.palabra.split('').forEach((p, idx) => {
      if (this.textoAMostrar.charAt(idx) !== '_') {
        nuevaPalabraAMostrar += this.textoAMostrar.charAt(idx);
        return;
      }
      if (p === palabra.value) {
        nuevaPalabraAMostrar += p;
        return;
      }
      nuevaPalabraAMostrar += this.textoAMostrar.charAt(idx);
    });
    this.textoAMostrar = nuevaPalabraAMostrar;
    this.setContenedorValue();
  }
