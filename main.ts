function turnLeft () {
    wuKong.setAllMotor(80, -80)
}
function goForward () {
    wuKong.setAllMotor(-80, -80)
}
function stop () {
    wuKong.stopAllMotor()
}
function turnRight () {
    wuKong.setAllMotor(-80, 80)
}
basic.showIcon(IconNames.Happy)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.forever(function () {
	
})
