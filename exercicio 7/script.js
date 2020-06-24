function analisar(){
    var aluno = ['Hélio' ,  'Brayan ' ,  'Felipe ']
    var res = document.querySelector('div#res')
    var res2= document.querySelector('div#res2')
    var res3= document.querySelector('div#res3')
    var res4= document.querySelector('div#res4')
    var res5= document.querySelector('div#res5')
    var contador= aluno.length
    
    
    res.innerHTML=aluno
    /*adicionar um numero na posição desejada*/
    var adicionar= aluno[3]='Raquel Caminhoneira'
    res3.innerHTML=`Aluno adicionado  na posição  3 é '${adicionar}'`
    /*adicionar um numero em qualquer posição/*/
    var qualquer =aluno.push('Erick Deus')
    
    res4.innerHTML=`O Aluno adicionado em qualquer posição é ele o poderoso o incrivel "Deus ERICK"`
    
    /*Saber o tamanho do array/*/
    aluno.length
    res2.innerHTML=`Total de ${contador} Alunos`  
    /*Colocar os elementos em ordem crescente/*/
    var crescente =aluno.sort()
    res5.innerHTML=`Aqui estao os nomes em ordem crescente <h3>"${ crescente}"</h3>`
    
    
    
    }