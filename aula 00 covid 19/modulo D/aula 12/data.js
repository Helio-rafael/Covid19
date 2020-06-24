function diaSemana(){
    var relogio = document.getElementById('relogio') 
    var data = new Date()
    var diaSemana = data.getDay()

    switch(diaSemana){ 
          case 0:
          relogio.innerHTML = 'Domingo'
          break
          case 1:
          relogio.innerHTML = 'Segunda-Feira'
          break
          case 2:
          relogio.innerHTML = 'Terça-Feira'
          break
          case 3:
          relogio.innerHTML = 'Quarta-Feira'
          break
          case 4:
          relogio.innerHTML = 'Quinta-Feira'
          break
          case 5:
          relogio.innerHTML = 'Sexta-Feira'
          break
          case 6:
          relogio.innerHTML = 'Sábado'
          break
    }
}