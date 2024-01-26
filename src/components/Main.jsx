import React, { useEffect, useState } from 'react'
import defaultImage from '../img/default.png'
import { useNavigate } from 'react-router';
import './Main.css'

const Main = ({text, delay}) => {
    const [currentText , setcurrentText] = useState('');
    const [currentIndex, setcurrentIndex] = useState(0);
    const navigate = useNavigate();
    console.log(navigate);

    useEffect(()=>{
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setcurrentText(prevText => prevText + text[currentIndex]);
                setcurrentIndex(prevIndex => prevIndex + 1);
              }, delay);
          
              return () => clearTimeout(timeout);
        }

        setTimeout(()=>{
            navigate('/list', {replace : true})
        },[1080])
    },[currentIndex, text, delay])
  return (
    <div className='grid lg:place-items-center h-screen'>
        <div>
            <h1 className='text-center text-4xl font-extrabold h-20'>{currentText}</h1>
            <img className="mx-auto fade-in-image" src={defaultImage} alt="" />
        </div>
    </div>
  )
}

export default Main