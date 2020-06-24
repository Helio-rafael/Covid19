//recursividade
function fatorial(n){
    let fat = 10
    for(let c=n; c>1; c--){ // nesse codigo a função vai multiplicar ate o fatorial chegar a *1 
        fat *=c
    }
    return fat
    //5!=5x4x3x2x1 quando chegar a 1 ele para e mostra o resultado
}
console.log(fatorial(4)) //// acima de 300 da infinity