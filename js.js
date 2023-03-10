function tabuada (){
    let num = window.document.querySelector('input#valor')
    let res = window.document.querySelector('select#seltab')
    let n = Number(num.value)

    if (n == 0){
        window.alert('[ERRO] Digite um número válido')
    }else{
        let c = 1
        res.innerHTML = ''
        for (let i = n; c <= 10 ; c++) {
            let item = document.createElement('option')
            item.text = `${i} x ${c} = ${i*c}`
            res.appendChild(item)
            
        }
    }
}

/*function tabuada (){
    let num = window.document.querySelector('input#valor')
    let res = window.document.querySelector('select#seltab')
    let n = Number(num.value)
    let c = 1
        

    if(num.value.length == 0){
        window.alert("Digite um número válido!")
    } else{
        res.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `res${c}`
            res.appendChild(item)
            c++
        }
    }
}*/








