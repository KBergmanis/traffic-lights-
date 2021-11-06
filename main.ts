input.onPinPressed(TouchPin.P1, function () {
    pins.digitalWritePin(DigitalPin.P7, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P7, 0)
    for (let index = 0; index < 3; index++) {
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P9, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P9, 0)
    basic.pause(500)
})
led.enable(false)
