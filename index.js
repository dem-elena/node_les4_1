import {EventEmitter} from 'events'
class EE extends EventEmitter{}
const ee=new EE()

ee.on('tick',(a)=>{

    console.log(`Tick - ${a}`)
})
let a=1
const startInt=setInterval(()=>{
    
    ee.emit("tick",a)
    if (a==10){
        clearInterval(startInt)
    }
    a++
},1000)


