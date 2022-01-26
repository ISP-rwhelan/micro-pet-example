input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    soundExpression.spring.playUntilDone()
})
input.onButtonPressed(Button.A, function () {
    loneliness = 0
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    soundExpression.giggle.playUntilDone()
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    soundExpression.yawn.playUntilDone()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(loneliness)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Chessboard)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        . . . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    soundExpression.happy.playUntilDone()
})
let loneliness = 0
soundExpression.hello.playUntilDone()
loneliness = 0
basic.showLeds(`
    . . . . .
    . . . . .
    # . . . #
    . # # # .
    . . . . .
    `)
basic.forever(function () {
    basic.pause(1000)
    loneliness += 1
    if (loneliness < 15) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
    } else if (loneliness < 40) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            # . . . #
            . . . . .
            `)
        music.playTone(139, music.beat(BeatFraction.Whole))
    }
})
