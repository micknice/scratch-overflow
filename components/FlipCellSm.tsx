import ReactCardFlip from 'react-card-flip'
import {useState, useEffect} from 'react'
import Dart from '../public/assets/logos/dart.png'
import PHP from '../public/assets/logos/php.png'
import JavaScript from '../public/assets/logos/JavaScript-logo.png'
import Python from '../public/assets/logos/pythonsml.png'
import Rust from '../public/assets/logos/rustsml.png'
import Go from '../public/assets/logos/gosml.png'
import Ruby from '../public/assets/logos/rubysml.png'
import Zig from '../public/assets/logos/zigsml.png'
import Ainsley from '../public/assets/logos/ainsleyml.png'
import Image, { StaticImageData } from 'next/image'
import store from '../store/store'
import {useSound} from 'use-sound'



interface FlipCellProps {
    flippedImg?: StaticImageData; // The image URL to display when flipped
}


export default function FlipCell({flippedImg}: FlipCellProps) {

    const [flipped, setFlipped] = useState(false)

    const [playFlipSfx] = useSound('/assets/sfx/swish.mp3', {volume: 0.2})
    

    const handleFlip = () => {
        if(!flipped) {
            setFlipped(true)
            store.incrementFlipCount()
            playFlipSfx()

        }
    }
    
    return (
        <div onClick={handleFlip} className='h-full flex justify-center items-center'>
            <div className='flex justify-center items-center'>
                <ReactCardFlip containerClassName=' rounded-lg w-3/3 h-3/3 ' isFlipped={flipped} flipDirection='horizontal'>
                    <Image className='  rounded-lg w-full h-full'
                        src={Ainsley}
                                        
                        alt="/" 
                    />
                    {flippedImg &&
                        <Image className=' rounded-lg w-full h-full'
                            src={flippedImg}
                                            
                            alt="/" 
                                            
                        />
                    }
                </ReactCardFlip>
            </div>
            
        </div>
    )

}