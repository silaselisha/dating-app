import React from 'react'
import Chat from './Chat'

const Chats = () => {
  return (
    <div className='chats'>
        <Chat name='Jane' message='Hey! How are you?' profile='https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=600' timeStamp='2 minutes ago'/>
        <Chat name='John' message='Whats up yo?' profile='https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=600' timeStamp='10 minutes ago'/>
        <Chat name='Mary' message='Holla!' profile='https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=600' timeStamp='3 seconds ago'/>
        <Chat name='Anne' message='Jambo!' profile='https://images.pexels.com/photos/2896428/pexels-photo-2896428.jpeg?auto=compress&cs=tinysrgb&w=600' timeStamp='3 seconds ago'/>
        <Chat name='Trevor' message='Hope you are doing great.' profile='https://images.pexels.com/photos/2058659/pexels-photo-2058659.jpeg?auto=compress&cs=tinysrgb&w=600' timeStamp='3 seconds ago'/>
        <Chat name='Berer' message='Hi, how is everything?' profile='https://images.pexels.com/photos/1223343/pexels-photo-1223343.jpeg?auto=compress&cs=tinysrgb&w=600' timeStamp='3 seconds ago'/>
    </div>
  )
}

export default Chats