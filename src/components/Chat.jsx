import React from 'react'
import Avatar from '@mui/material/Avatar'
import './Chat.css'

const Chat = ({ name, profile, message, timeStamp }) => {
  return (
    <div className='chat'>
        <Avatar src={profile} alt={name} className='chat__image' />
        <div className="chat__info">
            <h2>{name}</h2>
            <p>{message}</p>
        </div>
        <p className="chat__timeStamp">{timeStamp}</p>
    </div>
  )
}

export default Chat