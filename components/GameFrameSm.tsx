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
import ReactCardFlip from 'react-card-flip'
import {useState, useEffect} from 'react'
import FlipCell from './FlipCell'
import scratch from '../scratchEngine/Scratch'
import { observer } from "mobx-react-lite"
import store from '../store/store'
import {useSound} from 'use-sound'

interface GameProps {
    title: string;
  }



const GameFrame = observer(() => {

    const [playKerching] = useSound('/assets/sfx/kerching.mp3')
    

    useEffect(()=> {
        if(store.flipCount === 9) {
            playKerching()
        }
    },[store.flipCount])
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
             
            <div className=' h-full w-full row-span-3 grid grid-cols-5 '>
                <div className='col-span-3'>
                    <div className=' h-full w-full grid grid-rows-3 col-span-1'>

                        <div className=' row-span-1 grid grid-cols-3'>
                            <div className='flex justify-center items-center'>
                                <FlipCell flippedImg={scratch.cardImgArr[0]}/>
                            </div>
                            <div className='flex justify-center items-center'>
                                <FlipCell flippedImg={scratch.cardImgArr[1]}/>
                            </div>
                            <div className='flex justify-center items-center'>
                                <FlipCell flippedImg={scratch.cardImgArr[2]}/>
                            </div>
                        </div>

                        <div className=' row-span-1 grid grid-cols-3'>
                            <div className='flex justify-center items-center'>
                                <FlipCell flippedImg={scratch.cardImgArr[3]}/>
                            </div>
                            <div className='flex justify-center items-center'>
                                <FlipCell flippedImg={scratch.cardImgArr[4]}/>
                            </div>
                            <div className='flex justify-center items-center'>
                                <FlipCell flippedImg={scratch.cardImgArr[5]}/>
                            </div>
                        </div>

                        <div className=' row-span-1 grid grid-cols-3'>
                            <div className='flex justify-center items-center'>
                                <FlipCell flippedImg={scratch.cardImgArr[6]}/>
                            </div>
                            <div className='flex justify-center items-center'>
                                <FlipCell flippedImg={scratch.cardImgArr[7]}/>
                            </div>
                            <div className='flex justify-center items-center'>
                                <FlipCell flippedImg={scratch.cardImgArr[8]}/>
                            </div>
                        </div>
                        
                    </div>

                </div>

                <div className='bg-white   col-span-2 grid grid-rows-8 mt-2 ml-2' >
                    <div className='outline outline-amber-600 items-center justify-start m-1 flex space-x-2 row-span-1'>
                        <Image className='ml-4' height={20} width={20} src={Zig} alt={''}/>
                        <p className='text-sm'>$103,000</p>
                    </div>                  
                    <div className='outline outline-amber-600 items-center justify-start m-1 flex space-x-2'>
                        <Image className='ml-4' height={20} width={20} src={Ruby} alt={''}/>
                            <p className='text-sm'>$97,629</p>
                    </div>
                    <div className='outline outline-amber-600 items-center justify-start m-1 flex space-x-2'>
                        <Image className='ml-4' height={20} width={20} src={Go} alt={''}/>
                            <p className='text-sm'>$91,044</p>
                    </div>
                    <div className='outline outline-amber-600 items-center justify-start m-1 flex space-x-2'>
                        <Image className='ml-4' height={20} width={20} src={Rust} alt={''}/>
                            <p className='text-sm'>$86,897</p>
                    </div>
                    <div className='outline outline-amber-600 items-center justify-start m-1 flex space-x-2'>
                        <Image className='ml-4' height={20} width={20} src={Python} alt={''}/>
                            <p className='text-sm'>$78,000</p>
                    </div>
                    <div className='outline outline-amber-600 items-center justify-start m-1 flex space-x-2'>
                        <Image className='ml-4' height={20} width={20} src={JavaScript} alt={''}/>
                            <p className='text-sm'>$73,249</p>
                    </div>
                    <div className='outline outline-amber-600 items-center justify-start m-1 flex space-x-2'>
                        <Image className='ml-4' height={20} width={20} src={PHP} alt={''}/>
                            <p className='text-sm'>$58,898</p>
                    </div>
                    <div className='outline outline-amber-600 items-center justify-start m-1 flex space-x-2 '>
                        <Image className='ml-4' height={20} width={20} src={Dart} alt={''}/>
                            <p className='text-sm'>$55,687</p>
                    </div>
                </div>
            </div>
            
            <div className='bg-blue-900  h-full w-full p-5'>
            <p className='text-xs text-white py-2'>Match 3 of the same symbol to pursue a career in a language and receive a payment every year for life!!</p>
            <p className='text-xs text-white'>Local taxes may vary. Your language may devalue. Gamble responsibly. </p>
            </div>
            
            
        </div>
    )
})


export default GameFrame