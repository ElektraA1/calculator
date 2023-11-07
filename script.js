function inserir(num) {
    document.querySelector('.screen').innerHTML += num;
}

function C(){
    document.querySelector('.screen').innerHTML = '';
}

function erase(){
    let tela = document.querySelector('.screen').innerHTML;
    document.querySelector('.screen').innerHTML = tela.substring(0, tela.length -1);
    if(tela.length===1){
        document.querySelector('.screen').innerHTML = '';
    }
   
}

function soma(){
    let tela = document.querySelector('.screen').innerHTML;
    
    if(tela){
        document.querySelector('.screen').innerHTML = eval(tela);
    }else{
        document.querySelector('.screen').innerHTML = "";
        }
}