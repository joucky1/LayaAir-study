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
        console.log("测试是否获取子节点："+this.owner.numChildren)

        //创建节点！
        let txt:Laya.Text = new Laya.Text() as Laya.Text;
        txt.fontSize = 50;
        txt.text = 'sdasd';
        txt.color = 'red';
        txt.x = 0;
        txt.y = 0;
        this.owner.addChild(txt)

        //handler 回调函数
        let handler = function(x){
            console.log(x)
        }
        handler('测试回调函数：我是一个回调语句')

       /*  缓存池(创建一个缓存池)将不再频繁创建新的节点，而是将要重复使用的动画节点，讲执行完后不销毁，放入缓存池中，再要使用
        的时候直接再从缓存池中拿出来使用，释放CPU效率*/

        //z中放入的是一个对象
         let h: Laya.Handler = Laya.Handler.create( {Zane:'作用域中的上下文(this)'} ,function(x,y,arg){
            console.log(this,x,y)
            console.log("多余的参数",arg)
        },['安保','撒旦'],false) 
        // h.run();
        h.runWith(['sadasdas!'])


    }
    // 鼠标点击事件事件
    // onMouseDown(e:Laya.Event):void{
    //     e.stopPropagation(); //阻止冒泡即当前事件遍历不会在向父节点传递
    //     console.log('scence按下了',e.target)

    // }
    // 键盘按下事件
    onKeyDown(e:Laya.Event):void{
        console.log('我按键盘了')
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
            console.log('测试是否引入test脚本：销毁成功！')
        },1000)
       

    }

    onDisable(): void {
    }
}