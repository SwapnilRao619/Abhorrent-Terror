let moletile


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
}

function randomint(){
    let num=Math.floor(Math.random()*9);
    return num.toString()
}

function setmole1(){
    if(moletile){
        moletile.innerHTML=""
    } 
    let mole=document.createElement('img')
    mole.src='bg3b.png'

    let num=randomint();
    moletile=document.getElementById(num)
    moletile.appendChild(mole)
}