export default class WidgScrpit extends Laya.Script {
    /** @prop {name:label_title, tips:"标题", type:Node, default:null}*/
    public label_title :Laya.Label;

    public btnStart :Laya.Button;

    public aa :Laya.Node;
    public send :number = 10
    
    // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0
    
    constructor() { super(); }
    
    onEnable(): void {
    }

    onDisable(): void {
    }
    onStart():void{
        setInterval(()=>{
            setInterval((): void=>{
                let r = Math.random()*255;
                let g = Math.random()*255;
                let b = Math.random()*255;
                this.label_title.color = 'rgb(' + r +',' +g + ',' + b +')'
            },1000)

            if(this.label_title.x<=280){
                this.label_title.x +=10;

            }else{
                this.label_title.x = 0
            }
                
        },50)
       
    }
    onAwake():void{
        this.aa = this.owner.getChildAt(0) as Laya.Panel
        this.btnStart = this.aa.getChildByName('btn') as Laya.Button
        
        
    }
    onUpdate():void{
      
        if(this.btnStart.x>300){
            this.send = -this.send
           
        }

        if(this.btnStart.x<10){
            this.send = -this.send
        }
        this.btnStart.x +=this.send;
        
    }
}