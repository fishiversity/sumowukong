function turnLeft () {
    wuKong.setAllMotor(80, -80)
}
function goForward () {
    wuKong.setAllMotor(-80, -80)
}
function stop () {
    wuKong.stopAllMotor()
}
input.onButtonPressed(Button.A, function () {
    basic.pause(5000)
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
	
})
