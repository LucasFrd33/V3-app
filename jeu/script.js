let score = 0;

function moveL(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 100;
    if(left>-100){
        character.style.left = left + "px";
    }
}

function moveR(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 100;
    if(left<300){
        character.style.left = left + "px";
    }
}

document.addEventListener("keydown", event => {
    if(event.key==="ArrowLeft"){moveL();}
    if(event.key==="ArrowRight"){moveR();}
});

var block = document.getElementById("block");
block.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 100;
    block.style.left = left + "px";
    score += 1;
});

setInterval(function(){
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    if(characterLeft == blockLeft && blockTop<500 && blockTop>300){
        alert(score);
        block.style.animation = "none"
        block.style.top = -150 + "px";
        
    }
},100)


