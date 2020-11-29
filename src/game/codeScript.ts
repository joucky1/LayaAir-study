import BaseScript from "./BaseScript";

export default class codeScript extends BaseScript {
    /** @prop {name:label_title, tips:"标题", type:Node, default:null}*/
    public label_title :Laya.Label;
     /** @prop {name:label_btn, tips:"btn", type:Node, default:null}*/
    public label_btn :Laya.Button;
    
    // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0
    
    constructor() { super(); }
    
    onEnable(): void {
    }

    onDisable(): void {
    }
    onStart():void{
        console.log(this.label_title.x,this.label_title.y)
        let p = new Laya.Point(0,0,) //设置目标位置 （舞台（0，0，）点坐标）
        this.label_btn.globalToLocal(p,false); //本地坐标指的是相对于按钮的坐标
        console.log(p.x,p.y);
        this.label_title.x = this.label_title.x - p.x;
        this.label_title.y = this.label_title.y - p.y;


    }
}