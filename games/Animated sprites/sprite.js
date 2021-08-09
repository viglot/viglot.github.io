class Sprite {
constructor(speed, animation){

    this.animation = animation;
    this.len = this.animation.length;
    this.speed = speed;
    this.index = 0;
}

show() {
    Image(this.animation[this.index % this.animation.length], 0, 0);

}

animate(){
this.index += this.speed

}

}