import React,{useEffect} from 'react';
import './Screen3 copy.css'
import '../../game/main.js'



const Screen1 = (props) => {
    const container = document.querySelector(".image-container")
    const startButton = document.querySelector(".start-button")
    const gameText = document.querySelector(".game-text")
    const playTime = document.querySelector(".play-time")
    const tileCount = 16;

    let tiles = [];

    let timeInterval =null
    let time=0;
    const dragged = {
        el:null,
        class:null,
        index:null
    }
    let isPlaying = false;
    function checkStatus(){
        const currentList = [...container.children];
        const unMatchedList =currentList.filter((li,index)=> Number(li.getAttribute("data-index"))!==index )
        console.log(unMatchedList)
        if(unMatchedList.length === 0){
            gameText.style.display = "block";
            isPlaying = false;
            clearInterval(timeInterval)
            startButton.style.display='block';
        }
    }
    function setGame(){
        isPlaying =true;
        time = 0;
        document.innerHTML="";
        gameText.style.display='none'
        startButton.style.display='none'
        playTime.innerText = time;
        tiles = createImageTiles();
        (tiles).forEach(tile=>{container.appendChild(tile)})
        setTimeout(()=>{
            container.innerHTML = "";
            shuffle(tiles).forEach(tile=>{container.appendChild(tile)})
            timeInterval = setInterval(()=>{
                playTime.innerText = time;
                time++;
            },1000)
        },3000)
    }
    function createImageTiles(){
        const tempArray=[];
        Array(tileCount).fill().forEach((_,i)=>{
            const li = document.createElement("li");
            li.setAttribute('data-index',i);
            li.setAttribute('draggable','true');
            li.classList.add(`list${i}`);
            tempArray.push(li)
        })
        return tempArray;
    
    }
    function shuffle(array){
        let index = array.length -1;
        while(index > 0){
            const randomIndex = Math.floor(Math.random()*(index+1));
            [array[index], array[randomIndex]] = [array[randomIndex],array[index]]
            index--;
        }
        return array;
    }
    useEffect(()=>{
        document.addEventListener("dragstart",e=>{
            if (!isPlaying) return;
            const obj =e.target
            dragged.el=obj;
            dragged.class=obj.className;
            dragged.index= [...obj.parentNode.children].indexOf(e.target)
        })
        },[]);
        useEffect(()=>{
            document.addEventListener("dragover",e=>{
            e.preventDefault()
        })
        },[]);
        useEffect(()=>{
            document.addEventListener("drop",e=>{
            if (!isPlaying) return;
            const obj = e.target;
            if (obj.className !== dragged.class){
                let originPlace;
                let isLast = false;
                if(dragged.el.nextSibling){
                    originPlace = dragged.el.nextSibling
                } else{
                    originPlace = dragged.el.previousSibling
                    isLast =true;
                }
                const droppedIndex = [...obj.parentNode.children].indexOf(obj);
                dragged.index > droppedIndex? obj.before(dragged.el) : obj.after(dragged.el)
                isLast ? originPlace.after(obj):originPlace.before(obj)
            }
            checkStatus();
        })
        },[]);
        useEffect(()=>{
            document.addEventListener('click',()=>{
            setGame()
        })
        },[]);
    return (
        <>
        
        <div className="wrap-all">
        <p className="play-time">0</p>
        <ul className="image-container">
           
        </ul>
        <button className="start-button">Start</button>
        <p className="game-text">Complete</p>
        </div>
        
        </>
    );
};
export default Screen1;

