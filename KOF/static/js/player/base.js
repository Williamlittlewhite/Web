import { WebGameObject } from "../web_game_object/base.js";

export class player extends WebGameObject {
    constructor(root, info) {
        super();

        this.root = root;
        this.id = info.id;
        this.x = info.x;
        this.y = info.y;
        this.width = info.width;
        this.height = info.height;
        this.color = info.color;

        this.direction = 1;

        this.vx = 0;
        this.vy = 0;

        this.speedx = 400;//水平速度
        this.speedy = -2000;//跳起的初始速度

        this.gravity = 50;

        this.ctx = this.root.$game_map.ctx;
        this.pressed_keys = this.root.$game_map.controller.pressed_keys;
        console.log(this.pressed_keys);

        this.status = 3; // 0:idle, 1:向前, 2：向后, 3:跳跃, 4:攻击, 5:被打, 6:死亡
        this.animations = new Map();
        this.frame_curr_cnt = 0;
    }

    start() {

    }
    update_move() {
        if (this.status === 3)
            this.vy += this.gravity;
        this.x += this.vx * this.timedelta / 1000;
        // console.log(this.x);
        this.y += this.vy * this.timedelta / 1000;
        // console.log(this.y);
        if (this.y > 450) {
            this.y = 450;
            this.vy = 0;
            this.status = 0;
        }
        if (this.x < 0) {
            this.x = 0;
        } else if (this.x + this.width > this.root.$game_map.$canvas.width()) {
            this.x = this.root.$game_map.$canvas.width() - this.width;
        }
    }

    update_control() {
        let w, a, d, space;
        if (this.id === 0) {
            w = this.pressed_keys.has('w');
            a = this.pressed_keys.has('a');
            d = this.pressed_keys.has('d');
            space = this.pressed_keys.has(' ');
        } else {
            w = this.pressed_keys.has('ArrowUp');
            a = this.pressed_keys.has('ArrowLeft');
            d = this.pressed_keys.has('ArrowRight');
            space = this.pressed_keys.has('Enter');
        }

        if (this.status === 0 || this.status === 1) {
            if (w) {
                if (d) {
                    this.vx = this.speedx;
                }
                else if (a) {
                    this.vx = -this.speedx;
                } else {
                    this.vx = 0;
                }
                this.vy = this.speedy;
                this.status = 3;
            } else if (d) {
                this.vx = this.speedx;
                this.status = 1;
            } else if (a) {
                this.vx = -this.speedx;
                this.status = 1;
            } else {
                this.vx = 0;
                this.status = 0;
            }
        }
    }

    update() {
        this.update_control();
        this.render();
        this.update_move();
    }

    render() {
        // this.ctx.fillStyle = this.color;
        // this.ctx.fillRect(this.x, this.y, this.width, this.height);
        let status = this.status;

        if (this.status == 1 && this.direction * this.vx < 0) {
            status = 2;
        }
        let obj = this.animations.get(status);
        if (obj && obj.loaded) {
            let k = parseInt(this.frame_curr_cnt / obj.frame_rate) % obj.frame_cnt;
            let Image = obj.gif.frames[k].image;
            // console.log(image);
            this.ctx.drawImage(Image, this.x, this.y + obj.offset_y, Image.width * obj.scale, Image.height * obj.scale);
        }
        this.frame_curr_cnt++;
    }
}