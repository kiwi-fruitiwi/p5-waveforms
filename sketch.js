/*
@author Kiwi
@date 2021-10-01

 */
let font

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

let hoggy, seahorse // hoggy is a wave
let n // this is our harmonic number
let phase // tracks our phase changes


function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)

    hoggy = new Wave(1, 0)
    n = 5
    phase = 0
}

function draw() {
    background(209, 80, 30)
    translate(0, height/2)

    strokeWeight(1)
    stroke(0, 0, 100)
    line(0, 0, width, 0)
    line(0, 100, width, 100)
    line(0, -100, width, -100)

    hoggy = new Wave(n, phase, amplitude=50, c=color(0, 70, 70, 70))
    seahorse = new Wave(n, -phase, amplitude=50, c=color(210, 70, 70, 70))

    phase += 1

    hoggy.show()
    seahorse.show()

    stroke(0, 0, 100)
    beginShape()
    for (let i=0; i<width; i++) {
        vertex(
            i,
            // y coordinates in p5.js are inverted, hence we multiply by -1
            hoggy.getValue(i) + seahorse.getValue(i)
        )
    }
    endShape()
}

function mouseWheel(event) {
    // n += event.delta/100
    // console.log(n)

    phase += event.delta/100
}