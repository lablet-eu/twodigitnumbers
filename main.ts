class N2x5{
  data:number[][][]
  constructor(){
    this.data=[
    [[1,1,1,1,1],[1,1,1,1,1]], //0
    [[0,1,0,0,0],[1,1,1,1,1]], //1
    [[1,0,1,1,1],[1,1,1,0,1]], //2
    [[1,0,1,0,1],[1,1,1,1,1]], //3
    [[1,1,1,0,0],[0,0,1,1,1]], //4
    [[1,1,1,0,1],[1,0,1,1,1]], //5
    [[1,1,1,1,1],[1,0,1,1,1]], //6
    [[1,0,0,0,0],[1,1,1,1,1]], //7
    [[1,0,1,0,1],[1,0,1,0,1]], //8
    [[1,1,1,0,1],[1,1,1,1,1]]] //9
  }
}
namespace TwoDigitNumbers{
    let n:N2x5
    //% blockId="TwoDigitNumbers_showXX $value"
    //% block="showXX $value"
    //% value.min=0 value.max= 99
    export function showXX(value:number){
        if (value < 0) {
            basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # . # .
            . . # . .`)
            return
        }
        if (value > 99) {
            basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .`)
            return
        }
        TwoDigitNumbers.getImage(value).plotFrame(0)
    }
    export function getImage(value:number):Image{
        let img=images.createImage('.....\r\n.....\r\n.....\r\n.....\r\n.....');
        let t=Math.floor(value/10)
        let f=value-t*10
        if(t>0)copyDigit(0,t,img)
        copyDigit(3,f,img)
        return img
    }
    function copyDigit(offset:number,digit:number,img:Image){
        if(n==null)n=new N2x5()
        for(let column=0;column<2;column++){
            for(let row=0;row<5;row++){
                img.setPixel(offset+column, row, n.data[digit][column][row]==1)
            }
        }
    }
}
