import React from 'react';
import './content.css';
import ContentElements from './@ContentElementsExports';
const SideBar = ContentElements.ContentSideBar;
const ChatBox = ContentElements.ContentChatBox;

export const Content = () => {
  return (
    <div className='content'>
      <SideBar/>
      <ChatBox/>
    </div>
  )
}