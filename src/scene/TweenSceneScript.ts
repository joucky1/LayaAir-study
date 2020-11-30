export default class TweenSceneScript extends Laya.Script {
    /** @prop {name:player, tips:"玩家", type:Node, default:null}*/
    public player: Laya.Node = null;
     /** @prop {name:title, tips:"标题", type:Node, default:null}*/
     public title: Laya.Sprite = null;
   
    // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0
    
    constructor() { super(); }
    
    onEnable(): void {
    }

    onDisable(): void {
    }
    onStart():void{
        // TWEEN帧动画
        // this.title.visible = false;
       this.title.alpha = 0;
        // let h:Laya.Handler = Laya.Handler.create(this ,function(): void{
        //     Laya.Tween.to(this.title,{visible:true},1000)
        // })


        // let t:Laya.Tween = Laya.Tween.to(this.player,{x:567,y:320,scaleX:0.5,scaleY:0.5},2000,Laya.Ease.backIn,h)

        let r:Laya.TimeLine = Laya.TimeLine.to(this.player,{x:567,y:320,scaleX:0.5,scaleY:0.5},2000,Laya.Ease.backInOut)
        r.to(this.title,{alpha:1},1000)
        r.play(100)
        r.on(Laya.Event.COMPLETE,this,function(){
            console.log('动画结束！')
        })
    }
}