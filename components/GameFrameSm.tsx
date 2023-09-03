import React, { FC } from 'react';
import Image from 'next/image'
import CashOverflow from '../public/assets/cashoverflowsmall.png'
import Dart from '../public/assets/logos/dart.png'
import PHP from '../public/assets/logos/php.png'
import JavaScript from '../public/assets/logos/JavaScript-logo.png'
import Python from '../public/assets/logos/pythonsml.png'
import Rust from '../public/assets/logos/rustsml.png'
import Go from '../public/assets/logos/gosml.png'
import Ruby from '../public/assets/logos/rubysml.png'
import Zig from '../public/assets/logos/zigsml.png'
import {useState, useEffect} from 'react'
import FlipCellSm from './FlipCellSm'
import scratch from '../scratchEngine/Scratch'
import { observer } from "mobx-react-lite"
import store from '../store/store'
import {useSound} from 'use-sound'

const GameFrameSm = observer(() => {

    const [gameStarted, setGameStarted] = useState(false)
    const [gameFinished, setGameFinished] = useState(false)

    const [playKerching] = useSound('/assets/sfx/kerching.mp3')
    const [playSigh] = useSound('/assets/sfx/sigh.mp3', {volume:0.2})
    const [playCork] = useSound('/assets/sfx/cork.mp3')
    const [playClick] = useSound('/assets/sfx/click.mp3')
    const [playRiser] = useSound('/assets/sfx/riser.mp3')
    const [playJazz, {stop}] = useSound('/assets/sfx/bigband.mp3', {volume:0.125})
    

    useEffect(()=> {
        if(store.flipCount === 9) {
            if(scratch.keyLang === 'Loss') {
                playSigh()
            } else {
                playKerching()
            }
            const delay = async() => {
                const delay = (duration: number) => new Promise(resolve => setTimeout(resolve, duration));
                await delay(800)
                setGameFinished(true)
            }
            delay()
            
            
        }
    },[store.flipCount])

    const handleStartGame = async() => {
        const delay = (ms : number) => new Promise(resolve => setTimeout(resolve, ms));
        stop()
        playJazz()
        playClick()
        playRiser()
        await delay(800)
        playCork()
        setGameStarted(true)
    }
    
    const handlePlayAgain = () => {
        scratch.initializeGame()
        store.flipCount = 0
        setGameFinished(false)
        setGameStarted(false)
    }
    return (
        <div id='title' className='bg-blue-900  outline h-full w-full  grid grid-rows-5 p-5 '>
            <div className='bg-white  h-full w-full row-span-1 flex items-center justify-center p-2'>
                <div className='h-full w-auto mr-4 flex items-center '>
                    <Image className='w-auto' src={CashOverflow} alt={''}/>
                </div>
                <div className=' h-full w-full '>
                    <p className="text-5xl font-sans font-normal ml-2 pb-2 flex ">cash</p>
                    <p className="ml-2 text-5xl font-sans font-bold pb-2">overflow</p>
                </div>
            </div>
             
            <div className=' h-full w-full row-span-3 grid grid-cols-5 pt-4'>
                <div className='col-span-3'>
                    {!gameStarted && 
                    <div className=' h-full w-full grid grid-rows-3 col-span-1'>
                        <div/>
                        <div onClick={handleStartGame} className=' flex justify-center items-center select-none'>
                            <p className='outline rounded text-2xl text-white p-3 shadow-xl hover:scale-105 }'>Start Game!</p>
                        </div>
                        
                        
                    </div>
                    }
                    {gameStarted && !gameFinished &&
                    <div className=' h-full w-full grid grid-rows-3 col-span-1'>

                        <div className=' row-span-1 grid grid-cols-3'>
                            <div className='flex justify-center items-center'>
                                <FlipCellSm flippedImg={scratch.cardImgArr[0]}/>
                            </div>
                            <div className='flex justify-center items-center'>
                                <FlipCellSm flippedImg={scratch.cardImgArr[1]}/>
                            </div>
                            <div className='flex justify-center items-center'>
                                <FlipCellSm flippedImg={scratch.cardImgArr[2]}/>
                            </div>
                        </div>

                        <div className=' row-span-1 grid grid-cols-3'>
                            <div className='flex justify-center items-center'>
                                <FlipCellSm flippedImg={scratch.cardImgArr[3]}/>
                            </div>
                            <div className='flex justify-center items-center'>
                                <FlipCellSm flippedImg={scratch.cardImgArr[4]}/>
                            </div>
                            <div className='flex justify-center items-center'>
                                <FlipCellSm flippedImg={scratch.cardImgArr[5]}/>
                            </div>
                        </div>

                        <div className=' row-span-1 grid grid-cols-3'>
                            <div className='flex justify-center items-center'>
                                <FlipCellSm flippedImg={scratch.cardImgArr[6]}/>
                            </div>
                            <div className='flex justify-center items-center'>
                                <FlipCellSm flippedImg={scratch.cardImgArr[7]}/>
                            </div>
                            <div className='flex justify-center items-center'>
                                <FlipCellSm flippedImg={scratch.cardImgArr[8]}/>
                            </div>
                        </div>
                        
                    </div>
                    }
                    {gameStarted && gameFinished && scratch.keyLang !== 'Loss' &&
                    <div className='h-full w-full grid grid-rows-3 col-span-1'>
                        <div className='flex justify-center items-center'>
                            <p className='text-white text-m '>Congratulations you are now a {scratch.keyLang} developer.</p>
                        </div>
                        <div onClick={handlePlayAgain} className=' flex justify-center items-center select-none'>
                            <p className='outline rounded text-2xl text-white p-3 shadow-xl hover:scale-105 }'>Play Again?</p>
                        </div>
                        
                    </div>
                    }
                    {gameStarted && gameFinished && scratch.keyLang === 'Loss' &&
                    <div className='h-full w-full grid grid-rows-3 col-span-1'>
                        <div className='flex justify-center items-center'>
                            <p className='text-white text-m '>Unfortunately we have decided to go with a candidate who's skills are better suited to the role.</p>
                        </div>
                        
                        <div onClick={handlePlayAgain} className=' flex justify-center items-center select-none'>
                            <p className='outline rounded text-2xl text-white p-3 shadow-xl hover:scale-105 }'>Play Again?</p>
                        </div>
                        
                    </div>
                    }
                </div>

                <div className='bg-white   col-span-2 grid grid-rows-8 mt-2 ml-6' >
                    <div className='outline outline-amber-600 items-center justify-start m-1 flex space-x-2 row-span-1'>
                        <Image className='ml-4' height={20} width={20} src={Zig} alt={''}/>
                        <p className='text-sm'>$103k</p>
                    </div>                  
                    <div className='outline outline-amber-600 items-center justify-start m-1 flex space-x-2'>
                        <Image className='ml-4' height={20} width={20} src={Ruby} alt={''}/>
                            <p className='text-sm'>$97k</p>
                    </div>
                    <div className='outline outline-amber-600 items-center justify-start m-1 flex space-x-2'>
                        <Image className='ml-4' height={20} width={20} src={Go} alt={''}/>
                            <p className='text-sm'>$91k</p>
                    </div>
                    <div className='outline outline-amber-600 items-center justify-start m-1 flex space-x-2'>
                        <Image className='ml-4' height={20} width={20} src={Rust} alt={''}/>
                            <p className='text-sm'>$86k</p>
                    </div>
                    <div className='outline outline-amber-600 items-center justify-start m-1 flex space-x-2'>
                        <Image className='ml-4' height={20} width={20} src={Python} alt={''}/>
                            <p className='text-sm'>$78k</p>
                    </div>
                    <div className='outline outline-amber-600 items-center justify-start m-1 flex space-x-2'>
                        <Image className='ml-4' height={20} width={20} src={JavaScript} alt={''}/>
                            <p className='text-sm'>$73k</p>
                    </div>
                    <div className='outline outline-amber-600 items-center justify-start m-1 flex space-x-2'>
                        <Image className='ml-4' height={20} width={20} src={PHP} alt={''}/>
                            <p className='text-sm'>$58k</p>
                    </div>
                    <div className='outline outline-amber-600 items-center justify-start m-1 flex space-x-2 '>
                        <Image className='ml-4' height={20} width={20} src={Dart} alt={''}/>
                            <p className='text-sm'>$55k</p>
                    </div>
                </div>
            </div>
            
            <div className='bg-blue-900  h-full w-full p-5'>
            <p className='text-xs text-yellow-400 py-2'>Match 3 of the same symbol to pursue a career in a language and receive a payment every year for life!!</p>
            <p className='text-xs text-yellow-400'>Local taxes may vary. Your language may devalue. Gamble responsibly. </p>
            </div>
            
            
        </div>
    )
})


export default GameFrameSm