let spritesheet;
let spritedata;

let animation = [];
let horse;


function preload(){
spritedata = loadJSON('horse/horse.json')
spritesheet = loadImage('horse/horse.png')
}

function setup(){
    createCanvas(640, 480);
    let frames = spritedata.frames;
    for (let i  = 0; 1 < frames.length; i++) {
        let pos = frames[i].position;
        let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
        animation.push(img);
    }

    horse = new Sprite(animation, 1)
console.log(animation)
}

function draw(){
    background(0);

horse.show();
horse.animate();
    
   // Image(animation[frameCount % animation.length], 0, 0);
}