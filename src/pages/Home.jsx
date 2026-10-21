// @ts-nocheck
import React from 'react'
import "../App.css"
import { RiImageAddLine, RiImageAiLine } from 'react-icons/ri'
import { MdChatBubbleOutline } from 'react-icons/md'
export function Home() {
  return (
    <div className="home">
      <nav>
        <div className='logo'>
          Picxora AI
        </div>
      </nav>

      <div className='hero'>
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
    </div>
  )
}

export default Home