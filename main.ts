let Wrist_min = 30
let Wrist_max = 135
let Gripper_min = 50
let Gripper_max = 130
let Arm_min = 40
let Arm_max = 140
let Rotate_min = 0
let Rotate_max = 180
function on_arm(deg: string) {
    pins.servoWritePin(AnalogPin.P15, parseInt(deg))
}

loops.everyInterval(200, function onEvery_interval() {
    let deg = Math.map(0, 1023, Gripper_min, Gripper_max, pins.analogReadPin(AnalogPin.P1))
    pins.servoWritePin(AnalogPin.P15, Math.trunc(deg))
})
basic.forever(function on_forever() {
    
})
