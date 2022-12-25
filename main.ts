function turnLeft () {
    wuKong.setAllMotor(80, -80)
}
function goBackward () {
    wuKong.setAllMotor(80, 80)
}
function goForward () {
    wuKong.setAllMotor(-80, -80)
}
function stop () {
    wuKong.stopAllMotor()
}
input.onButtonPressed(Button.A, function () {
    basic.pause(5000)
    goForward()
})
function turnRight () {
    wuKong.setAllMotor(-80, 80)
}
input.onButtonPressed(Button.AB, function () {
    wuKong.stopAllMotor()
})
basic.showIcon(IconNames.Happy)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        stop()
        basic.pause(1000)
        goBackward()
        basic.pause(500)
        stop()
        basic.pause(1000)
        turnLeft()
        basic.pause(1000)
        stop()
    } else {
        goForward()
    }
})
