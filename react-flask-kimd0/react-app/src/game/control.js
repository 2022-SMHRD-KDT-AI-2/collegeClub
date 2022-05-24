var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d');
const main = document.querySelector(".canvasdiv")
const timer1= document.querySelector(".timer1")
const send=document.querySelector(".send")


// 캔버스 넓이설정
canvas.width=300;
canvas.height=300;

// 캐릭터
var dragon = {
    x:142.5,
    y:142.5,
    width:15,
    height:15,
    draw(){
        ctx.clearRect(0,0, canvas.width,canvas.height);
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

// 장애물
class Enemy{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.width =15;
        this.height=15;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}


// enemy 생성시간설정
var timer = 0;
// enemy담을 배열
var enemys_xmin = [];
var enemys_xmax = [];
var enemys_ymin = [];
var enemys_ymax = [];
// enemy 생성
var eleft =false;
var eright =false;
var eup =false;
var edown =false;
var animation;
var time=0;
let timeInterval =null;


function frame(){
    send.style.display = "none";
    animation=requestAnimationFrame(frame);
    timer++;
    timeInterval = setInterval(()=>{
        time++;
    },1000)
    timer1.innerText = parseInt(timeInterval/70);
    ctx.clearRect(0,0, canvas.width,canvas.height);
    var enemy = new Enemy();
    // 캐릭터 키이동 이벤트
    if (left == true){
        dragon.x-=2
    }
    if (right == true){
        dragon.x+=2
    }
    if (up == true){
        dragon.y-=2
    }
    if (down == true){
        dragon.y+=2
    }
    if (left == false){
        dragon.x=dragon.x
    }
    if (right == false){
        dragon.x=dragon.x
    }
    if (up == false){
        dragon.y=dragon.y
    }
    if (down == false){
        dragon.y=dragon.y
    }
    //장애물 생성 이동
    // 좌 -> 우
    
    if (timer%1000===1){
        enemy.x=-15
        enemy.y=rand(1,canvas.height-15)
        enemys_xmin.push(enemy);

        eleft=true;
    }
    // 우 -> 좌
    if (timer%rand(131,140)===2){
        enemy.x=canvas.width+20
        enemy.y=rand(1,canvas.height-15)
        enemys_xmax.push(enemy);
        
        eright=true;
    }
    // 상 -> 하
    if (timer%rand(141,150)===5){
        enemy.x=rand(1,canvas.width-15)
        enemy.y=-10
        enemys_ymin.push(enemy);
        eup=true;
    }
    // 하 -> 상
    if (timer%rand(151,160)===6){
        enemy.x=rand(1,canvas.width-15)
        enemy.y=canvas.height+20
        enemys_ymax.push(enemy);
        edown=true;
    }


    //벽충돌(캐릭터,장애물) 이벤트
    if (dragon.x<0)
        dragon.x=0
    else if (dragon.x > canvas.width - dragon.width)
        dragon.x=canvas.width-15    
    
    if (dragon.y< 0)
        dragon.y=0
    else if (dragon.y > canvas.height - dragon.height)
        dragon.y = canvas.height -15

    
    
    console.log("dragon.x"+dragon.x)
    console.log("enemy.x+enemy.width"+(canvas.width-(canvas.width-enemy.x)));
    //그리기
    dragon.draw();
    // 좌 -> 우
    if(eleft==true){
    enemys_xmin.forEach((a,i,o)=>{
        if (a.x>canvas.width){
            o.splice(i,1)
        }
        a.x+=3;
        a.draw();
    })}
    // 우 -> 좌
    if(eright==true){
    enemys_xmax.forEach((e,i,o)=>{
        if (e.x<0){
            o.splice(i,1)
        }
        
        e.x-=3;
        e.draw();
        
    })}
    // 상 -> 하
    if(eup==true){
    enemys_ymin.forEach((d,i,o)=>{
        if (d.y>canvas.height){
            o.splice(i,1)
        }
        d.y+=3;
        d.draw();
    })}
    // 하 -> 상
    if(edown==true){
    enemys_ymax.forEach((d,i,o)=>{
        if (d.y<0){
            o.splice(i,1)
        }
        d.y-=3;
        d.draw();
        
    })}
    crashs(dragon,enemy);

}
console.log(dragon.x)
console.log(dragon.y)

function crashs(dragon,enemy){
   enemys_xmin.forEach((e)=>{

    // console.log("적 - x"+a.x)
    // console.log("적 - y"+a.y)
    // console.log("dragon-x"+ dragon.x)
    // console.log("dragon-y"+ dragon.y)
    // enemy_X=a.x+width
    if((canvas.x-enemy.x)-(canvas.x-enemy.width)>0)
        var enemy_rect = ((canvas.x-enemy.x)-(canvas.x-enemy.width));
    else
        enemy_rect = ((canvas.x-enemy.width)-(canvas.x-enemy.x));
    console.log("enemy_rect "+enemy_rect)
    var dragon_rect = ((canvas.y-dragon.y)&(canvas.y-(dragon.y+dragon.height))|(canvas.x-(dragon.x+dragon.width)&(canvas.y-(dragon.x+dragon.width))));
    if (dragon.x===(enemy.x+enemy.width)&&dragon.y===(enemy.y+enemy.height)){
        cancelAnimationFrame(animation);
    }
})
}

var left =false;
var right =false;
var up = false;
var down = false;
//키를 눌렀을때 이벤트
document.addEventListener("keydown",function(e){
    if(e.code ==='ArrowLeft'){
        left = true;
        right =false;
    }
    if(e.code ==='ArrowRight'){
        right = true;
        left = false;
    }
    if(e.code ==='ArrowUp'){
        up = true;
        down =false;
    }
    if(e.code ==='ArrowDown'){
        down = true;
        up = false;
    }
})
// 키를 떼었을때 이벤트
document.addEventListener("keyup",function(e){
    if(e.code ==='ArrowLeft'){
        left = false;
    }
    if(e.code ==='ArrowRight'){
        right = false;
    }
    if(e.code ==='ArrowUp'){
        up = false;
    }
    if(e.code ==='ArrowDown'){
        down = false;
    }
})

frame();

// enemys_xmin 
// enemys_xmax 
// enemys_ymin 
// enemys_ymax
//충돌확인
// ballWillHitLedge:function(ledge){
//     var ballRight = ball.left + ball.width,
//         ledgeRight = ledge.left + ledge.width,
//         ballBottom = ball.top + ball.height,
//         nextBallBottomEstimate = ballBottom + ball.velocityY / fps;
//     return ballRight > ledge.left && 
//             ball.left < ledgeRight &&
//             ballBottom < ledge.top &&
//             nextBallBottomEstimate > ledge.top;
// }


//랜덤 함수
function rand(min,max){
    return parseInt(Math.random()*(max-min))+min;
}








// 클릭이벤트선언
// document.addEventListener("keydown",keyDownHandler, false);
// document.addEventListener("keyup",keyUpHandler,false);

// 마우스 클릭시 이벤트
// function keyDownHandler(e){

//     if(e.key == 37 ||e.key =="ArrowRight"){
//         rightPressed=true;
//     } else if(e.key == 39||e.key =="ArrowLeft"){
//         leftPressed=true;
//     }
// }
// function keyUpHandler(e){
//     if(e.key == 37 ||e.key =="ArrowRight"){
//         rightPressed=false;
//     } else if(e.key == 39||e.key =="ArrowLeft"){
//         leftPressed=false;
//     }
// }
// setInterval(draw,10);