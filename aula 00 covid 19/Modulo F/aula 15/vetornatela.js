var valor = [1,2,6,7]


console.log(valor)
let pos = valor.indexOf(3)
console.log(pos)

if(pos == -1){
    console.log('o valor nao foi encontrado')
}else{
    console.log(`o valor esta na posição ${pos}`)
}

/*
for( let pos =0;pos <valor.length; pos++){
    console.log(` a posição do ${pos} tem o valor ${valor[pos]}`)
}*/

for(let pos in valor){
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
}