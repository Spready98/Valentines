import React from 'react'
import './YesMessagePage.css'
import celebrationGif from './images/cat-jump.gif';

function YesMessagePage () {
    return (
        <div className='yesPage'>
            <img src={celebrationGif} alt='<3' className='gif' />
            <h1 className='yesText'>Great! See you after work on the 14th 😊❤️!</h1>
            <img src={celebrationGif} alt='<3' className='gif' />
        </div>
    )
}

export default YesMessagePage;