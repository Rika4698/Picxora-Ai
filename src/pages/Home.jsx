// @ts-nocheck
import React, { useContext } from 'react'
import "../App.css"
import { RiImageAddLine, RiImageAiLine } from 'react-icons/ri'
import { MdChatBubbleOutline } from 'react-icons/md'
import { FiPlus } from 'react-icons/fi'
import { FaArrowUpLong } from 'react-icons/fa6'
import { dataContext } from '../context/UserContext'
import Chat from './Chat'
export function Home() {

  let {startRes, setStartRes, popUp, setPopUp, input, setInput} = useContext(dataContext);

  async function handleSubmit (e){
    
    setStartRes(true);
  }

  
  return (
    <div className="home">
      <nav>
        <div className='logo'>
          Picxora AI
        </div>
      </nav>

      { !startRes ? <div className='hero'>
        <span id='tag'>What can I help with ?</span>
        <div className='cate'>
          <div className='upImg'>
         <RiImageAddLine/>
         <span>Upload Image</span>
          </div>
          <div className='genImg'>
          <RiImageAiLine/>
          <span>Generate Image</span>
          </div>
          <div className='chat'>
            <MdChatBubbleOutline/>
            <span>Let's Chat</span>
            </div>
        </div>
      </div>
      : <Chat/>
}

      <form className='input-box' onSubmit={(e) => { e.preventDefault();
        if(input) {handleSubmit(e)}}}>

        {popUp?  <div className='pop-up'>
          <div className='select-up'>
           <RiImageAddLine/>
         <span>Upload Image</span>
          </div>

          <div className='select-gen'>
          <RiImageAiLine/>
          <span>Generate Image</span>
          </div>

        </div> : null }
       

        <div id='add' onClick={() => { setPopUp(prev=>!prev)}}>
         <FiPlus/>
        </div>

        <input type="text" placeholder='Ask Something...' onChange={(e) => setInput(e.target.value)} value={input}/>
        {input? <button id='submit'>
        <FaArrowUpLong/>
        </button> : null}
        
      </form>
    </div>
  )
}

export default Home