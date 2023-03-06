function ok () {
    t2 = input.runningTime()
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.pause(500)
    basic.showString("T=" + (t2 - ti) + "ms")
    Item()
}
function Item () {
    basic.pause(100)
    _var = randint(0, 1)
    if (_var == 0) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        ti = input.runningTime()
    } else {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
        ti = input.runningTime()
    }
}
let ti = 0
let t2 = 0
let _var = 0
_var = 0
t2 = 0
ti = 0
basic.showNumber(3)
basic.pause(500)
basic.showNumber(2)
basic.pause(500)
basic.showNumber(1)
basic.pause(500)
basic.clearScreen()
basic.showString("GO!")
Item()
basic.forever(function () {
    if (_var == 0 && input.buttonIsPressed(Button.A)) {
        ok()
    }
})
basic.forever(function () {
    if (_var == 1 && input.buttonIsPressed(Button.B)) {
        ok()
    }
})
