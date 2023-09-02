import Dart from '../public/assets/logos/dart.png'
import PHP from '../public/assets/logos/php.png'
import JavaScript from '../public/assets/logos/JavaScript-logo.png'
import Python from '../public/assets/logos/pythonsml.png'
import Rust from '../public/assets/logos/rustsml.png'
import Go from '../public/assets/logos/gosml.png'
import Ruby from '../public/assets/logos/rubysml.png'
import Zig from '../public/assets/logos/zigsml.png'
import { StaticImageData } from 'next/image'

class Scratch {

    baseImgArr: Array<StaticImageData>; 
    cardImgArr: Array<StaticImageData>
    baseImgObj: {[key: string] : StaticImageData}
    
    constructor() {
        this.baseImgArr = [Dart, PHP, JavaScript, Python, Rust, Go, Ruby, Zig]
        this.baseImgObj = {
            "Dart": Dart, 
            "PHP": PHP, 
            "JavaScript": JavaScript, 
            "Python": Python, 
            "Rust": Rust, 
            "Go": Go, 
            "Ruby": Ruby, 
            "Zig": Zig
        }
        
        this.cardImgArr = this.getCardImages(this.rollResult())
    }

    rollResult() {
        const rollWin = Math.floor(Math.random() * 3) + 1;

        if (rollWin <= 0) {
            return 'Loss';
        } else {
            console.log('win')
            const rollPrize = Math.floor(Math.random() * 384) + 1;
            if (rollPrize <= 1) {
                return 'Zig'; 
            } else if (rollPrize <= 3) {
                return 'Ruby'; 
            } else if (rollPrize <= 7) {
                return 'Go'; 
            } else if (rollPrize <= 15) {
                return 'Rust'; 
            } else if (rollPrize <= 31) {
                return 'Python'; 
            } else if (rollPrize <= 63) {
                return 'JavaScript'; 
            } else if (rollPrize <= 127) {
                return 'PHP'; 
            } else {
                return 'Dart';
            }
        }
    }

    containsDuplicate(arr: StaticImageData[], target: StaticImageData): boolean {
        let count = 0;
        for (const item of arr) {
          if (item === target) {
            count++;
            if (count === 2) {
              return true; 
            }
          }
        }
        return false; 
      }

    getCardImages(result: string) {
        if (result === 'Loss') {
            const cardImgArr: StaticImageData[] = []
            for (let i = 0; i < 9; i++) {
                const img = this.rollForImageLoss(cardImgArr)
                cardImgArr.push(img)
            }
            return cardImgArr
        } else {
            console.log('result',result)
            const cardImgArr: StaticImageData[] = [this.baseImgObj[result], this.baseImgObj[result], this.baseImgObj[result]]
            const paddingImgArr: StaticImageData[] = []
            const excludedArr = this.baseImgArr.filter((img) => img !== this.baseImgObj[result])
            console.log('excludedArr', excludedArr)
            for (let i = 0; i < 6; i++) {
                const img = this.rollForImageWin(excludedArr, paddingImgArr)
                paddingImgArr.push(img)
            }
            const mergedArr = cardImgArr.concat(paddingImgArr)
            mergedArr.sort(()=> Math.random() - 0.5)
            return mergedArr
        }
    }

    rollForImageLoss(cardImgArr: StaticImageData[]): StaticImageData {
        const roll = Math.floor(Math.random() * 7)
            const img = this.baseImgArr[roll]
            if (!this.containsDuplicate(cardImgArr, img)) {
                return img
            } else {
               return this.rollForImageLoss(cardImgArr)
            }
    }

    rollForImageWin(excludedArr: StaticImageData[], paddingImgArr: StaticImageData[]): StaticImageData {
        const roll = Math.floor(Math.random() * 6)
            const img = excludedArr[roll]
            if (!this.containsDuplicate(paddingImgArr, img)) {
                return img
            } else {
               return this.rollForImageLoss(paddingImgArr)
            }
    }
}

export default Scratch

