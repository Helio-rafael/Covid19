let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function isnumero(n){

if (Number (n) >=1 && Number(n) <=100){
return true;

} else{

    return false;
}


}

function inlista(n, l){
    if (l.indexOf(Number(n)) !=-1) {
    return true;
        } else {
    return false;
        }
    }

    


    function adicionar() {
        
        if (isnumero (num.value) && !inlista(num.value, valores)){
           // window.alert('tudo ok')
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text= `valor ${num.value} adicionado`
            lista.appendChild(item)
        }
        else{
            res.innerHTML=(`<h2>O numero  ${num.value} é Invalido  ou ja se  encontra na lista</h2>`)
        }
        num.value= '' // para deixar o campo de digitaçao limpo
        num.focus() // ele vai deixar sempre o curso do mouse para digitar sem precisar clicar 
        }
       


        function finalizar() {
            if (valores.length==0) {
            window.alert('adicione valores antes de finalizar!');
                } else {
            let tot=valores.length;
            let maior=valores[0];
            let menor=valores[0];
            let soma=0;
            let media=0;
             
            for (let pos in valores){
            soma+=valores[pos];
            if (valores[pos] >maior) maior=valores[pos];
            if (valores[pos] <menor) menor=valores[pos];
                    }
             
            for (let pos in valores) {
            if (valores[pos] >maior) maior=valores[pos];
            if (valores[pos] <menor) menor=valores[pos];
                    }
            
            // faltou calculo media
            media= soma / tot;
             
            res.innerHTML='';
            res.innerHTML+=`<p> Ao todo, temos ${tot} numeros cadastrados.</p>`;
            res.innerHTML+=`<p> o maior valor informado foi  ${maior} .</p>`;
            res.innerHTML+=`<p> o menor valor informado foi ${menor}</p>`;
            res.innerHTML+=`<p> somando todos os valores, temos ${soma}</p>`;
            res.innerHTML+=`<p> A  media dos valores é ${media}</p>`;
                }
            }





            /*if (isnumero(num.Value) &&!inlista(num.Value, valores)) { esse é o codigo errado
        valores.push(Number(num.Value));
        let item=document.createElement('option');
        
        item.text=` valor ${num.Value} adicionado`;
        lista.appendChild(item);
            } else {
        window.alert('valor invalido ou ja encontrado na lista ');
            }
        num.Value ='';
        num.focus();*/