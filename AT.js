let moletile1
let moletile2
let moletile3
let moletile4
let moletile5

window.onload=function(){
    game();
}

function game(){
    for(let i=0;i<9;i++){
        let tile=document.createElement("div")
        tile.id=i.toString()
        document.getElementById("surface").appendChild(tile)
    }  
    
    setInterval(setmole1,1000)
    setInterval(setmole2,1500)
    setInterval(setmole3,2000)
    setInterval(setmole4,2500)
    setInterval(setantimole1,5000)
}

function randomint(){
    let num=Math.floor(Math.random()*9);
    return num.toString()
}

function setmole1(){
    if(moletile1){
        moletile1.innerHTML=""
    } 
    let mole=document.createElement('img')
    mole.src='bg3i.png'

    let num=randomint();
    if(moletile2 && moletile2.id == num){
        return;
    }
    else if(moletile3 && moletile3.id == num){
        return;
    }
    else if(moletile4 && moletile4.id == num){
        return;
    }
    else if(moletile5 && moletile5.id == num){
        return;
    }
    moletile1=document.getElementById(num)
    moletile1.appendChild(mole)
}

function setmole2(){
    if(moletile2){
        moletile2.innerHTML=""
    } 
    let mole=document.createElement('img')
    mole.src='bg3ii.png'

    let num=randomint();
    if(moletile1 && moletile1.id == num){
        return;
    }
    else if(moletile3 && moletile3.id == num){
        return;
    }
    else if(moletile4 && moletile4.id == num){
        return;
    }
    else if(moletile5 && moletile5.id == num){
        return;
    }
    moletile2=document.getElementById(num)
    moletile2.appendChild(mole)
}

function setmole3(){
    if(moletile3){
        moletile3.innerHTML=""
    } 
    let mole=document.createElement('img')
    mole.src='bg3iii.png'

    let num=randomint();
    if(moletile1 && moletile1.id == num){
        return;
    }
    else if(moletile2 && moletile2.id == num){
        return;
    }
    else if(moletile4 && moletile4.id == num){
        return;
    }
    else if(moletile5 && moletile5.id == num){
        return;
    }
    moletile3=document.getElementById(num)
    moletile3.appendChild(mole)
}

function setmole4(){
    if(moletile4){
        moletile4.innerHTML=""
    } 
    let mole=document.createElement('img')
    mole.src='bg3iv.png'

    let num=randomint();
    if(moletile1 && moletile1.id == num){
        return;
    }
    else if(moletile2 && moletile2.id == num){
        return;
    }
    else if(moletile3 && moletile3.id == num){
        return;
    }
    else if(moletile5 && moletile5.id == num){
        return;
    }
    moletile4=document.getElementById(num)
    moletile4.appendChild(mole)
}

function setantimole1(){
    if(moletile5){
        moletile5.innerHTML=""
    }
    let mole=document.createElement('img')
    mole.src='bg3v.png'

    let num=randomint();
    if(moletile1 && moletile1.id == num){
        return;
    }
    else if(moletile2 && moletile2.id == num){
        return;
    }
    else if(moletile3 && moletile3.id == num){
        return;
    }
    else if(moletile4 && moletile4.id == num){
        return;
    }
    moletile5=document.getElementById(num)
    moletile5.appendChild(mole)
}