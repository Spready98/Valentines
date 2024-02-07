import React from 'react';
import './Landing.css';
import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate(); 

    const goToValentinePage = () => {
        navigate('/Valentines'); 
    };

    return (
        <div className='page'>
            <h1 className='text'>Hi Lauren! I have a question to ask you... 🥺</h1>
            <button className='question' onClick={goToValentinePage}>okay...</button> {/* Step 3: Add onClick event */}
        </div>
    );
}

export default Landing;
