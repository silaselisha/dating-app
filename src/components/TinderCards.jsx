import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import db from '../Firebase.js'
import { onSnapshot, collection, query } from 'firebase/firestore'
import './TinderCards.css'

const TinderCards = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
       const queryStr = query(collection(db, "people"))
       const unsubscribe = onSnapshot(queryStr, (snapshot) => {
            setPeople(snapshot.docs.map(doc => doc.data()))
       })

       return () => {
        unsubscribe()
       }
    }, [people])
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