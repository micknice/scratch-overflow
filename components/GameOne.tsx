import React, { FC } from 'react';
import GameFrame from './GameFrame';
import GameFrameSm from './GameFrameSm';
import {useSound} from 'use-sound'
import scratch from '../scratchEngine/Scratch'
import { useState, useEffect } from 'react';


interface GameProps {
    title: string;
  }

<div className='outline h-screen w-full justify-center items-center'>
            <GameFrameSm/>
        </div>



export default function App() {
    const [isMobile, setIsMobile] = useState(false);
    
    scratch.initializeGame()
    // playJazz()
  
    useEffect(() => {
      // Function to check if the screen width is less than a certain threshold (e.g., 768px)
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      // Add a listener to the window resize event to update the isMobile state
      window.addEventListener('resize', checkIsMobile);
  
      // Initial check when the component mounts
      checkIsMobile();
  
      // Clean up the listener when the component unmounts
      return () => {
        window.removeEventListener('resize', checkIsMobile);
      };
    }, []);
  
    return (
      <div>
        {isMobile ? (
            <div className='outline h-screen w-full justify-center items-center'>
                <GameFrameSm/>
            </div>
        ) : (
            <div className='outline h-screen w-full justify-center items-center'>
                <GameFrame/>
            </div>
        )}
      </div>
    );
  }