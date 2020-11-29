import test from "./test";
import BaseScript from "./BaseScript";

import Button = Laya.Button;

export default class home extends BaseScript {
    /** @prop {name:intType, tips:"整数类型示例", type:Int, default:1000}*/

    //绑定组件在图形界面上
     /** @prop {name:button, tips:"开始按钮", type:Node, default:null}*/

     public button:Button = null;
    /** @prop {name:age, tips:"玩家年龄", type:Int, default:18}*/
    public age:number = null;
    // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0
    
    constructor() { super(); }

    onAwake():void{
        //获取子节点来
        //方法一：通过编译器和组件的双向绑定
        // console.log("玩家年龄"+this.age)
        // let Button = this.button as unknown as Laya.Button
        // Button.label = "我是按钮"
        // // 方法二：通过名称来查找节点
        // let Button2 :Laya.Button = this.owner.getChildByName('Btn') as Laya.Button;
        // console.log(Button2.label)
        //方法三：通过索引来获取子节点
        // console.log(this.owner.getChildAt(1))
        let btn :Button = this.owner.getChildAt(1) as Button;
        console.log(this.owner.numChildren)
        let txt:Laya.Text = new Laya.Text() as Laya.Text;
        txt.fontSize = 50;
        txt.text = 'sdasd';
        txt.color = 'red';
        txt.x = 0;
        txt.y = 0;
        this.owner.addChild(txt)

    }
    
    onEnable(): void {
    }
    onStart():void{
        let Sprite = this.owner as Laya.Sprite
        console.log(Sprite.x)
        //添加脚本test
        Sprite.addComponent(test)

        setTimeout(()=>{
            //销毁节点脚本！
            // let Test =  this.owner.getComponent(test) as Laya.Sprite
            // Test.destroy();
            this.removeCoponet(test)
            console.log('销毁成功！')
        },1000)
       

    }

    onDisable(): void {
    }
}