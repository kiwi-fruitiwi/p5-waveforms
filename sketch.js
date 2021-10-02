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
let offset // how much is seahorse's phase offset?

function setup() {
    createCanvas(640, 360)
    frameRate(144)
    colorMode(HSB, 360, 100, 100, 100)

    hoggy = new Wave(1, 0)
    n = 5
    phase = 0
    offset = 150
}

function draw() {
    background(209, 80, 30)
    translate(0, height/2)

    strokeWeight(1)
    stroke(0, 0, 100)
    line(0, 0, width, 0)

    drawingContext.setLineDash([6, 2]);
    strokeWeight(1)
    stroke(0, 0, 100, 50)
    line(0, 100, width, 100)
    line(0, -100, width, -100)
    drawingContext.setLineDash([]); // reset into "solid line" mode

    hoggy = new Wave(n, phase, 50, color(0, 70, 70, 80))
    seahorse = new Wave(n, -phase+offset, 50, color(210, 70, 70, 80))

    phase += 1

    hoggy.show()
    seahorse.show()


    // let's add up both values to see our standing harmonic wave!
    stroke(0, 0, 100, 70)
    beginShape()
    for (let i=0; i<width; i++) {
        vertex(
            i,
            // y coordinates in p5.js are inverted, hence we multiply by -1
            hoggy.getValue(i) + seahorse.getValue(i)
        )

        // if (hoggy.getValue(i) + seahorse.getValue(i) === 0)
        //     circle(i, 0, 3)
    }
    endShape()
}

function mouseWheel(event) {
    // n += event.delta/100
    // console.log(n)

    offset += event.delta/10
}