import React, { useRef, useState } from "react";
import './chat.css'
import EmojiPicker from "emoji-picker-react";
import { useEffect } from "react";
const ChatTable = () => {
 
const[open,setOpen]=useState(false);
const[text,setText]=useState('');
const endRef=useRef(null)
useEffect(() => {
    if (endRef.current && typeof endRef.current.scrollInfoview === 'function') {
        endRef.current.scrollInfoview();
    }
}, []);

const handelEmoji=e=>{
  setText(prev=>prev+e.emoji);
  setOpen(false);
};
  return (
    <div className="chatnew">
   <div className="top">
    <div className="user">
      <img src='assets/chatImage/avatar.png'/>
      <div className="texts">
        <span>Alaa Saijary</span>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
    
    <div className="icons" style={{ 
      display:'flex'
     }}>
   {/*
   <img src='assets/chatImage/phone.png'/>
    <img src='assets/chatImage/video.png'/>
   
   */ } 
    <img src='assets/chatImage/info.png'/>
    </div>
   </div>
   <div className="center">
    <div className="message">
    <img src='assets/chatImage/avatar.png'/>
    <div className="texts">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Exercitationem omnis odit natus consequuntur, assumenda dolore magnam 
         dolorem quod amet modi. Doloribus, deleniti sed.</p>
         <span>1 min ago</span>
    </div>
    </div>
    <div className="message own">
   
    <div className="texts">
    <img src='https://user-images.githubusercontent.com/13468728/233847739-219cb494-c265-4554-820a-bd3424c59065.jpg'/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Exercitationem omnis odit natus consequuntur, assumenda dolore magnam 
        voluptate numquam deleniti quisquam iste placeat tempore
         dolorem quod amet modi. Doloribus, deleniti sed.</p>
         <span>1 min ago</span>
    </div>
    </div>
    <div ref={endRef}></div>
    <div className="message">
    <img src='assets/chatImage/avatar.png'/>
    <div className="texts">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Exercitationem omnis odit natus consequuntur, assumenda dolore magnam 
        voluptate numquam deleniti quisquam iste placeat tempore
         dolorem quod amet modi. Doloribus, deleniti sed.</p>
         <span>1 min ago</span>
    </div>
    </div>
    <div className="message own">
   <div className="texts">
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem omnis odit natus consequuntur, 
      assumenda dolore magnam voluptate numquam deleniti quisquam iste placeat tempore
       </p>
        <span>1 min ago</span>
   </div>
   </div>
   </div>
   <div className="bottom">
    <div className="icons" style={{ 
      display:'flex'
     }}>
    <img src='assets/chatImage/img.png'/>
    <img src='assets/chatImage/camera.png'/>
    <img src='assets/chatImage/mic.png'/>
    </div>
    <input type="text" placeholder="Type a message..." 
    value={text}
    onChange={e=>setText(e.target.value)}/>
    <div className="emoji">
    <img src='assets/chatImage/emoji.png' onClick={()=>setOpen(prev=>!prev)}/>
    <div className="picker">
    <EmojiPicker open={open} onEmojiClick={handelEmoji}/>
    </div>
   
    </div>
<button className="sendButton">Send</button>
   </div>
    </div>
  );
};

export default ChatTable;
