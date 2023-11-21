let moletile


window.onload=function(){
    setGame();
}

function game(){
    for(let i=0;i<9;i++){
        let tile=document.createElement("div")
        tile.id=i.toString()
        document.getElementById("surface").appendChild(tile)
    }     
}

