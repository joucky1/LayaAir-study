(function () {
    'use strict';

    class Button extends Laya.Script {
        constructor() {
            super();
            this.intType = 1000;
            this.numType = 1000;
            this.strType = "hello laya";
            this.boolType = true;
        }
        onEnable() {
        }
        onDisable() {
        }
        onMouseDown(e) {
            e.stopPropagation();
            console.log('鼠标按下了', e.target);
        }
    }

    class test extends Laya.Script {
        constructor() {
            super();
            this.intType = 1000;
            this.numType = 1000;
            this.strType = "hello laya";
            this.boolType = true;
        }
        onEnable() {
        }
        onStart() {
            console.log('我是测试脚本！');
        }
        onDisable() {
        }
    }

    class BaseScript extends Laya.Script {
        constructor() {
            super();
            this.intType = 1000;
            this.numType = 1000;
            this.strType = "hello laya";
            this.boolType = true;
        }
        removeCoponet(nodeCls) {
            let s = this.owner.getComponent(nodeCls);
            s.destroy();
        }
        onEnable() {
        }
        onDisable() {
        }
    }

    class home extends BaseScript {
        constructor() {
            super();
            this.button = null;
            this.age = null;
        }
        onAwake() {
            let btn = this.owner.getChildAt(1);
            console.log("测试是否获取子节点：" + this.owner.numChildren);
            let txt = new Laya.Text();
            txt.fontSize = 50;
            txt.text = 'sdasd';
            txt.color = 'red';
            txt.x = 0;
            txt.y = 0;
            this.owner.addChild(txt);
            let handler = function (x) {
                console.log(x);
            };
            handler('测试回调函数：我是一个回调语句');
            let h = Laya.Handler.create({ Zane: '作用域中的上下文(this)' }, function (x, y, arg) {
                console.log(this, x, y);
                console.log("多余的参数", arg);
            }, ['安保', '撒旦'], false);
            h.runWith(['sadasdas!']);
        }
        onKeyDown(e) {
            console.log('我按键盘了');
        }
        onEnable() {
        }
        onStart() {
            let Sprite = this.owner;
            console.log(Sprite.x);
            Sprite.addComponent(test);
            setTimeout(() => {
                this.removeCoponet(test);
                console.log('测试是否引入test脚本：销毁成功！');
            }, 1000);
        }
        onDisable() {
        }
    }

    class WidgScrpit extends Laya.Script {
        constructor() {
            super();
            this.send = 10;
        }
        onEnable() {
        }
        onDisable() {
        }
        onStart() {
            setInterval(() => {
                setInterval(() => {
                    let r = Math.random() * 255;
                    let g = Math.random() * 255;
                    let b = Math.random() * 255;
                    this.label_title.color = 'rgb(' + r + ',' + g + ',' + b + ')';
                }, 1000);
                if (this.label_title.x <= 280) {
                    this.label_title.x += 10;
                }
                else {
                    this.label_title.x = 0;
                }
            }, 50);
        }
        onAwake() {
            this.aa = this.owner.getChildAt(0);
            this.btnStart = this.aa.getChildByName('btn');
        }
        onUpdate() {
            if (this.btnStart.x > 300) {
                this.send = -this.send;
            }
            if (this.btnStart.x < 10) {
                this.send = -this.send;
            }
            this.btnStart.x += this.send;
        }
    }

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("game/Button.ts", Button);
            reg("game/home.ts", home);
            reg("game/WidgScrpit.ts", WidgScrpit);
        }
    }
    GameConfig.width = 1136;
    GameConfig.height = 640;
    GameConfig.scaleMode = "fixedheight";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "WidgeSence.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    new Main();

}());
