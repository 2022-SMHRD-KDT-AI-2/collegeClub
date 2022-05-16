import { useState } from 'react';
import axios from 'axios';
import './App.css';
import logoImage1 from './images/logo.jpg'
import menubarImage01 from './images/menubar01.jpg'
import menubarImage02 from './images/menubar02.jpg'
import menubarImage03 from './images/menubar03.jpg'
import menubarImage04 from './images/menubar04.jpg'
import menubarImage05 from './images/menubar05.jpg'




function Logo(){
  return(
    <div className='logo'>
      <img src={logoImage1} alt='이미지가 없습니다.'></img>
    </div>
  )
}

function Main(){
  return(
    <div className='main'>
      
    </div>
  )
}

function Select(){
  return(
    <div className='select'>
      <div className='selectButton1'>
        <SelectButton></SelectButton>
      </div>
      <div className='selectButton2'>
        <SelectButton></SelectButton>
      </div>
    </div>
  )
}

function SelectButton(){
  return(
    <div className='selectButton'>

    </div>
  )
}

function Menubar(){
  const a = 
    [menubarImage01,
      menubarImage02,
      menubarImage03,
      menubarImage04,
      menubarImage05];
    

  return(
    <div className='menubar'>
      {a.map((i, index) => {
        return (
          <div key={index} className='menubarDiv'>
            <img src={i} alt='이미지없음'></img>
          </div>
        )
      })}
    </div>
  )
}

function App1(){
  
  return (
    <button className="btn btn-primary" onClick={()=>{
      
      axios.get('http://localhost:5000')
      .then((respose)=>{ console.log(respose.data.id) })
      

    }}>더보기</button>
  )
}

function App() {
  return (
    <div className="App">
      <Logo></Logo>
      <Main></Main>
      <Select></Select>
      <Menubar></Menubar>
      <App1>
      </App1>
    </div>
  );
}

export default App;
