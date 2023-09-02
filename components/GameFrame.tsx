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
import Scratch from '../scratchEngine/Scratch'

interface GameProps {
    title: string;
  }



export default function GameFrame() {

    const scratch = new Scratch()

    
    return (
        <div className='bg-blue-900 outline h-2/3 w-1/3  grid grid-rows-5 p-5 '>
            {/* title row */}
            <div className='bg-white  h-full w-full row-span-1 flex items-center justify-center p-2'>
                <div className='h-full w-auto mr-2'>
                    <Image className='h-full w-auto' src={CashOverflow} alt={''}/>
                </div>
                <p className="text-6xl font-sans font-normal ml-2 pb-2">cash</p>
                <p className="ml-1 text-6xl font-sans font-bold pb-2">overflow</p>
            </div>

            <div className='h-full w-full row-span-3 grid grid-cols-5'>
                {/* upperleft box - game 1 board here*/}
                <div className='col-span-3'>
                    <div className='h-full w-full grid grid-rows-3 col-span-1'>
                        {/* top-row */}
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
                        {/* middle-row */}
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
                        {/* bottom-row */}
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
                {/* upperright box - game 1 key here */}
                <div className='bg-white   col-span-2 grid grid-rows-8 mt-2 ml-2' >
                    <div className='outline outline-amber-600 items-center justify-start m-1 flex space-x-10 row-span-1'>
                        {/* <p>Zig</p> */}
                        <Image className='ml-4' height={30} width={30} src={Zig} alt={''}/>
                        <p>$103,000</p>
                    </div>                  
                    <div className='outline outline-amber-600 items-center justify-start m-1 flex space-x-10'>
                        {/* <p>Ruby</p> */}
                        <Image className='ml-4' height={30} width={30} src={Ruby} alt={''}/>
                            <p>$97,629</p>
                    </div>
                    <div className='outline outline-amber-600 items-center justify-start m-1 flex space-x-10'>
                        {/* <p>Go</p> */}
                        <Image className='ml-4' height={30} width={30} src={Go} alt={''}/>
                            <p>$91,044</p>
                    </div>
                    <div className='outline outline-amber-600 items-center justify-start m-1 flex space-x-10'>
                        {/* <p>Rust</p> */}
                        <Image className='ml-4' height={30} width={30} src={Rust} alt={''}/>
                            <p>$86,897</p>
                    </div>
                    <div className='outline outline-amber-600 items-center justify-start m-1 flex space-x-10'>
                        {/* <p>Python</p> */}
                        <Image className='ml-4' height={30} width={30} src={Python} alt={''}/>
                            <p>$78,000</p>
                    </div>
                    <div className='outline outline-amber-600 items-center justify-start m-1 flex space-x-10'>
                        {/* <p>JavaScript</p> */}
                        <Image className='ml-4' height={30} width={30} src={JavaScript} alt={''}/>
                            <p>$73,249</p>
                    </div>
                    <div className='outline outline-amber-600 items-center justify-start m-1 flex space-x-10'>
                        {/* <p>PHP</p> */}
                        <Image className='ml-4' height={30} width={30} src={PHP} alt={''}/>
                            <p>$58,898</p>
                    </div>
                    <div className='outline outline-amber-600 items-center justify-start m-1 flex space-x-10 '>
                        {/* <p>Dart</p> */}
                        <Image className='ml-4' height={30} width={30} src={Dart} alt={''}/>
                            <p>$55,687</p>
                    </div>
                </div>
            </div>
            {/* instructions row */}
            <div className='bg-blue-900  h-full w-full p-10'>
            <p className='text-xs text-white py-2'>Match 3 of the same symbol to pursue a career in a language and receive a payment every year for life!!</p>
            <p className='text-xs text-white'>Local taxes may vary. Your language may devalue. Gamble responsibly. </p>
            </div>
            
            
        </div>
    )
}