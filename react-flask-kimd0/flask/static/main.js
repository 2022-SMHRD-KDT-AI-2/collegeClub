var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;



var dino = {
    x : 100,
    y : 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}



class Cactus{
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

var timer = 0;
var cactuss = [];
var jumpTimer = 0;
var animation;

function frame() {
    animation = requestAnimationFrame(frame)
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (timer % 250 === 0) {
        var cactus = new Cactus();
        cactuss.push(cactus);
    }
    cactuss.forEach((a, i, o)=>{
        if(a.x<0){
            o.splice(i, 1);
        }
        a.x = a.x-3;
        crash(dino, a);
        a.draw();
    })

    if(switch1 == true){
        dino.y = dino.y - 3;
        jumpTimer++;
    }
    if(switch1 == false){
        if(dino.y < 200){
            dino.y = dino.y + 3;
        }
    }
    if(jumpTimer > 35){
        switch1 = false;
        jumpTimer = 0;
    }

    dino.draw()
}

frame();

function crash(dino, cactus){
    var x_result = cactus.x - (dino.x + dino.width);
    var y_result = cactus.y - (dino.y + dino.height);
    if(x_result < 0 && y_result < 0&& cactus.x > 60){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        cancelAnimationFrame(animation);
    }
}

var switch1 = false;
document.addEventListener('keydown', function (e){
    if(e.code==='Space'){
        switch1 = true;
    }
})