import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

const TinderCards = () => {
    const [people, setPeople] = useState([{
        name: 'Edward Snowden',
        url: 'https://i.guim.co.uk/img/media/ef1f5b4ae4b6d4bc9e4b1805f71b24c7eb707cb0/888_0_2952_1771/master/2952.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f66a7640eac88ab5d5266869805daa86'
    }, {
        name: 'Jack Ma',
        url: 'https://imageio.forbes.com/specials-images/imageserve/605e22fe6df966b3fcbd3e15/0x0.jpg?format=jpg&crop=1080,1080,x0,y0,safe&height=416&width=416&fit=bounds'
    }])

  return (
    <div className='tinderCards'>
        <div className="tinderCards__container">
            {people.map(person => (
                <TinderCard key={person.name} className='swipe' preventSwipe={['up', 'down']}>
                    <div className='card' style={{backgroundImage: `url(${person.url})`}}>
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    </div>
  )
}

export default TinderCards