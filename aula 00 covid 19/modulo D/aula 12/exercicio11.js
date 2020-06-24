var idade = 25
if (idade < 12) {
    console.log('Menor de idade, nao pode votar')
} else {
    if (idade >= 65  || idade <= 18) {
        console.log('Voto opcional')
    }
    else{
        console.log('voto obrigatorio')
    }
}