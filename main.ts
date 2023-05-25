basic.forever(function () {
    led.plotBarGraph(
    Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 0, 250),
    250
    )
})
