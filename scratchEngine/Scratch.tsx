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
    keyLang: string
    
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
        this.keyLang = 'None'
    }

    initializeGame() {
        this.cardImgArr = this.getCardImages(this.rollResult())
    }

    rollResult(): string {
        const rollWin = Math.floor(Math.random() * 3) + 1;

        if (rollWin <= 2) {
            this.keyLang = 'Loss'
            return 'Loss';
        } else {
            const rollPrize = Math.floor(Math.random() * 384) + 1;
            if (rollPrize <= 3) {
                this.keyLang = 'Zig';
                return 'Zig'; 
            } else if (rollPrize <= 6) {
                this.keyLang = 'Ruby'; 
                return 'Ruby'; 
            } else if (rollPrize <= 12) {
                this.keyLang = 'Go'; 
                return 'Go'; 
            } else if (rollPrize <= 25) {
                this.keyLang = 'Rust'; 
                return 'Rust'; 
            } else if (rollPrize <= 50) {
                this.keyLang = 'Python'; 
                return 'Python'; 
            } else if (rollPrize <= 100) {
                this.keyLang = 'JavaScript'; 
                return 'JavaScript'
            } else if (rollPrize <= 200) {
                this.keyLang = 'PHP'; 
                return 'PHP'; 
            } else {
                this.keyLang = 'Dart';
                return 'Dart';
            }
        }
        return 'None'
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

    getCardImages(result: string): StaticImageData[] {
        if (result === 'Loss') {
            const cardImgArr: StaticImageData[] = []
            for (let i = 0; i < 9; i++) {
                const img = this.rollForImageLoss(cardImgArr)
                cardImgArr.push(img)
            }
            return cardImgArr
        } else {
            const cardImgArr: StaticImageData[] = [this.baseImgObj[result], this.baseImgObj[result]]
            const paddingImgArr: StaticImageData[] = []
            const excludedArr = this.baseImgArr.filter((img) => img !== this.baseImgObj[result])
            console.log('excludedArr', excludedArr)
            for (let i = 0; i < 6; i++) {
                const img = this.rollForImageWin(excludedArr, paddingImgArr)
                paddingImgArr.push(img)
            }
            const mergedArr = cardImgArr.concat(paddingImgArr)
            mergedArr.sort(()=> Math.random() - 0.5)
            mergedArr.push(this.baseImgObj[result])
            if(mergedArr.length === 9) {
                return mergedArr
            } else {
                return this.getCardImages(result)
            }
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

const scratch = new Scratch()

export default scratch

