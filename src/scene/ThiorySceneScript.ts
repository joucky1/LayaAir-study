export default class ThiorySceneScript extends Laya.Script {
    /** @prop {name:intType, tips:"整数类型示例", type:Int, default:1000}*/
    public intType: number = 1000;
    private count :number = 0;
    
    constructor() { super(); }
    
    onEnable(): void {
    }

    onDisable(): void {
    }
    onStart():void{
        Laya.timer.loop(1000,this,function(){
            this.count ++;
            if(this.count >=5){
                console.log('条件满足响应动作')
            }

        })
    }
    onKeyDown():void{

    }
}