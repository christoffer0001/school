let size = 40;
let rounds = 4;
let width = 800, height = 800;

function setup() {
    createCanvas(width + 10, height + 20);
    background(253);
    noFill();


    for (let k = 0; k < rounds; k++) {
     
        for (let j = 1; j < width / size; j++) {
            for (let i = 1; i < width / size; i++) {
                strokeWeight(random(3));
                stroke(random(255), random(255), random(255));
                //quad(0 + size*i + random(5), 0 + size * i + random(5), size + size * i + random(5), 0 + size * i + random(5), size + size * i + random(5), 0 + size * i + random(5), 0 + size*i + random(5), 0 + size * i + random(5));
                quad(
                    0 + size * j + random(5), 0 + size * i + random(5),
                    size + size * j + random(5), 0 + size * i + random(5),
                    size + size * j + random(5), size + size * i + random(5),
                    0 + size * j + random(5), size + size * i + random(5)
                );
            }
        }
    }
}

const random = function(q) {
    return Math.floor(Math.random() * q) + 1;
}
