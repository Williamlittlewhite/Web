let WEB_GAME_OBJECTS = [];
class WebGameObject {
    constructor() {
        WEB_GAME_OBJECTS.push(this);
        this.timedelta = 0;
        this.has_call_start = false;
    }

    start() { //初始化

    }

    update() { //每一帧执行一次(除了第一帧以外)

    }

    destroy() { // 删除当前对象
        for (let i in WEB_GAME_OBJECTS) {
            if (WEB_GAME_OBJECTS[i] === this) {
                WEB_GAME_OBJECTS.splice(i, 1);
                break;
            }
        }
    }
}

let last_timestamp;

let WEB_GAME_OBJECTS_FRAME = (timestamp) => {
    for (let obj of WEB_GAME_OBJECTS) {
        if (!obj.has_call_start) {
            obj.start();
            obj.has_call_start = true;
        }
        else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(WEB_GAME_OBJECTS_FRAME);
}
requestAnimationFrame(WEB_GAME_OBJECTS_FRAME);

export {
    WebGameObject
}