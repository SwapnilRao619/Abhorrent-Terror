let moletile1
let moletile2
let moletile3
let moletile4
let moletile5
let scoreb=0
let gameend=false
let count=0

function reloaded(){
    location.reload();
}

function playmusic(nameau){
    let audio = new Audio(nameau);
    audio.play();
}

window.onload=function(){
    document.getElementById('b1').addEventListener('click', function () {
        playmusic("m1.mp3");
        var ele = document.getElementById('b1')
        if (ele){
            ele.parentNode.removeChild(ele)
        }
        game();
    });
}

function game(){
    for(let i=0;i<9;i++){
        let tile=document.createElement("div")
        tile.id=i.toString()
        tile.addEventListener("click", selecttile)  
        document.getElementById("surface").appendChild(tile)
    }  
    
    setInterval(setmole1,700)
    setInterval(setmole2,1200)
    setInterval(setmole3,1800)
    setInterval(setmole4,2300)
    setInterval(setantimole1,2500)
}

function randomint(){
    let num=Math.floor(Math.random()*9);
    return num.toString()
}

function setmole1(){
    if(gameend){
        return;
    }
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
    if(gameend){
        return;
    }
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
    if(gameend){
        return;
    }
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
    if(gameend){
        return;
    }
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
    if(gameend){
        return;
    }
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

function selecttile(){
    if(gameend){
        return;
    }
    if(this == moletile1){
        scoreb+=10;
        document.getElementById("score").innerText=scoreb.toString();
    }
    else if(this == moletile2){
        scoreb+=10;
        document.getElementById("score").innerText=scoreb.toString();
    }
    else if(this == moletile3){
        scoreb+=10;
        document.getElementById("score").innerText=scoreb.toString();
    }
    else if(this == moletile4){
        scoreb+=10;
        document.getElementById("score").innerText=scoreb.toString();
    }
    else if(this == moletile5){
        count+=1;
        scoreb-=20;
        if(count==2){
            document.getElementById("score").innerText= "Game Over! Score: " + scoreb.toString();
            gameend=true
            setTimeout(reloaded,5000);
        }
    }
}