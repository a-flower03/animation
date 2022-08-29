input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
