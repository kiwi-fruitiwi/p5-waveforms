class Wave {
    constructor(n, phase_shift, amplitude=100, c=color(0, 0, 100, 70)) {
        // a sine wave is represented by the equation
        // f(x) = Amp * sin(ω(x+phase_shift)) + midpoint
        // since the period of sin(x) is 2π, an ω of 1 gives a period 2π
        // thus, ω*T must be 2π

        this.n = n
        this.amplitude = amplitude

        // for the fundamental wave, half the period is the entire screen width
        // this means the period is 2 * width. for all smaller harmonics, we
        // divide by n
        this.period = 2*width/n

        // T = 2π/ω, ω = 2π/T
        this.ω = TAU/this.period
        this.phase_shift = phase_shift
        this.color = c
    }

    show() {
        strokeWeight(2)
        stroke(this.color)
        noFill()
        // fill(0, 0, 100, 10)
        // TODO there's a bug with fill not filling at y=0
        beginShape()
        for (let i=0; i<width; i++) {
            vertex(
                i,
                // y coordinates in p5.js are inverted, hence we multiply by -1
                this.getValue(i)
            )
        }
        endShape()
    }

    getValue(t) {
        return -this.amplitude*sin(this.ω*(t+this.phase_shift))
    }
}