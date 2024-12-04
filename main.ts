basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # . .
        . # . . .
        . # . . .
        `)
})
basic.forever(function () {
    basic.setLedColor(0xff0080)
})
