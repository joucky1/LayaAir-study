import BaseScript from "../common/BaseScript2";

export default class TimerScript extends BaseScript {
    /** @prop {name:intType, tips:"整数类型示例", type:Int, default:1000}*/
    public intType: number = 1000;
   
    // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0
    
    constructor() { super(); }


    
    onEnable(): void {
    }

    onDisable(): void {
    }
    onStart():void{
        // console.log('timer start')
        // //每过60帧打印一次
        // Laya.timer.frameLoop(60,this,function(){
        //     console.log('我打印了')
        // })
        // //等待多少帧后执行一次
        // Laya.timer.frameOnce(60,this,function(){
        //     console.log('我就印一次',this)
        // })

        // //基于时间的定时器
        // Laya.timer.loop(1000,this,function(){
        //     console.log('时间：我打印了')
        // })

        // Laya.timer.once(5000,this,function(){
        //     console.log('时间：我就印一次')
            
        // })
        //   

    }
    onUpdate():void{
        // 每帧执行
        // 获取当前帧数
        let n:number = Laya.timer.currFrame;
        let t:number= Laya.timer.currTimer;     //获取当前帧数的时间

        // console.log(n,'这一帧的时间是：',t)

        // Laya.timer.callLater(this,function(){
        //     console.log('我跳一帧再打印')
        // })
        // Laya.timer.runCallLater(this,function(){
        // 立即执行后就删除这帧        
        //     console.log('马上打一帧打印')
        // })
    }

}