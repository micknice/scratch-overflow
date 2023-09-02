import React, { FC } from 'react';
import GameFrame from './GameFrame';

interface GameProps {
    title: string;
  }



export default function GameOne() {
    return (
        <div className='outline h-screen w-full justify-center items-center'>
            <GameFrame/>
        </div>
    )
}