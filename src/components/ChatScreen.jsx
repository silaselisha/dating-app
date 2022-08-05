import React, { useState} from 'react'
import  Avatar  from '@mui/material/Avatar'
import './ChatScreen.css'

const ChatScreen = () => {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([{
        name: 'Mary',
        profile: 'https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=600',
        message: 'Hey!'
    },{
        name: 'Mary',
        profile: 'https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=600',
        message: 'How are you doing?'
    }, {
        message: 'I am fine, thank you and you?'
    }])

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessages([...messages, {message: input}])
        setInput('')
    }

  return (
    <div className='chatScreen'>
        <p className='chatScreen__timeStamp'>YOU MATCHED WITH MARY ON 08/05/2022</p>
        {
            messages.map((message, index) => (
                message.name ? 
               ( <div className='chatScreen__message' key={index}>
                    <Avatar src={message.profile} alt={message.name} className='chatScreen__image'/>
                    <p className='chatScreen__text'>{message.message}</p>
                </div> ) : (
                <div className='chatScreen__message'  key={index}>
                    <p className='chatScreen__textUser'>{message.message}</p>
                </div> ) 
            ))
        }
        <form action="#" className="chatScreen__form">
            <input value={input} type="text" name="message" id="message" placeholder='Type your message...' className='chatScreen__input' onChange={(e) => (setInput(e.target.value))}/>
            <button type="submit"  className='chatScreen__button' onClick={handleSubmit}>Send</button>
        </form>

    </div>
  )
}

export default ChatScreen