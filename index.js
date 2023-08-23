import {EventEmitter} from 'events'
class EE extends EventEmitter{}
const ee=new EE()

ee.on('tick',(a)=>{

    console.log(`Tick - ${a}`)
})
let a=1
const funcTimer=(sec)=>{
    const startInt=setInterval(()=>{
    ee.emit("tick",a)
    if (a==sec){
        clearInterval(startInt)
    }
    a++
},1000)}

funcTimer(15)

