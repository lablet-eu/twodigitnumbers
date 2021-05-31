namespace TwoDigitNumbers{
    let numbers=[
        [[1,1,1,1,1],[1,1,1,1,1]], //0
        [[0,1,0,0,0],[1,1,1,1,1]], //1
        [[1,0,1,1,1],[1,1,1,0,1]], //2
        [[0,1,0,0,0],[1,1,1,1,1]],
        [[0,1,0,0,0],[1,1,1,1,1]],
        [[0,1,0,0,0],[1,1,1,1,1]],
        [[0,1,0,0,0],[1,1,1,1,1]],
        [[0,1,0,0,0],[1,1,1,1,1]],
        [[0,1,0,0,0],[1,1,1,1,1]],
        [[0,1,0,0,0],[1,1,1,1,1]],
        [[0,1,0,0,0],[1,1,1,1,1]]]
    export function show(value:number){
        TwoDigitNumbers.getImage(value)
    }
    export function getImage(value:number):Image{
        let img=images.createImage('.....\r\n.....\r\n.....\r\n.....\r\n.....');
        let t=Math.floor(value/10)
        let f=value-t*10
        copyDigit(0,t,img)
        copyDigit(3,f,img)
        return img
    }
    function copyDigit(offset:number,digit:number,img:Image){
        for(let column=0;column<2;column++){
            for(let row=0;row<5;row++){
                img.setPixel(offset+column, row, numbers[digit][column][row]==1)
            }
        }
    }
}