import React from 'react'

import Apt1 from '../../assets/apt1.jpeg'
import Apt2 from '../../assets/apt2.jpeg'
import Apt3 from '../../assets/apt3.jpeg'

import './Best.css'

const Best = () => {
    return (
        <div className='best'>
            <h1>Find New Properties</h1>
            <div>
                <p><span className='bold'>Properties</span></p>
                <p>Relavant</p>
                <p>Residential</p>
                <p>Enviornment</p>
            </div>
            <div className='container'>
                <img src={"http://cdn.wallpapersafari.com/37/82/BI78kU.jpg"} alt='' />
                <img src={"https://tse3.mm.bing.net/th?id=OIP.bqo6fdJ4kA_mexrs3hT52wHaEo&pid=Api&P=0&h=180"} alt='' />
                <img src={"https://images6.alphacoders.com/343/thumb-1920-343179.jpg"} alt='' />
            </div>
            <button className='btn'>View All</button>
        </div>
    )
}

export default Best
