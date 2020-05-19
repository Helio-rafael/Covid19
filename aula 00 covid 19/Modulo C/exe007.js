function Somar(){

var tn1=window.document.getElementById('txtn1')

var tn2=window.document.getElementById('txtn2')
var n1=Number(tn1.value)
var n2=Number(tn2.value)
var s = n1+n2
res.innerHTML=`A soma entre ${n1} e ${n2} é <strong>${s}</strong> `
}

function Menos(){

    var tn1=window.document.getElementById('txtn1')
    
    var tn2=window.document.getElementById('txtn2')
    var n1=Number(tn1.value)
    var n2=Number(tn2.value)
    var s = n1-n2
    res.innerHTML=`A Subtração entre ${n1} e ${n2} é <strong>${s}</strong> `
    }

    function multi(){

        var tn1=window.document.getElementById('txtn1')
        
        var tn2=window.document.getElementById('txtn2')
        var n1=Number(tn1.value)
        var n2=Number(tn2.value)
        var s = n1*n2
        res.innerHTML=`A Multiplicação entre ${n1} e ${n2} é <strong>${s}</strong> `
        }

        function dividir(){

            var tn1=window.document.getElementById('txtn1')
            
            var tn2=window.document.getElementById('txtn2')
            var n1=Number(tn1.value)
            var n2=Number(tn2.value)
            if(n1==0 || n2==0){
                res.innerHTML='É impossivel dividir' 

            }
            else{
                var s = n1/n2
            res.innerHTML=`A Multiplicação entre ${n1} e ${n2} é <strong>${s}</strong> `
            }
            
            
            }
        
    

