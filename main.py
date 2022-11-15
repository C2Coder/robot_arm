
Wrist_min = 30
Wrist_max = 135
Gripper_min = 50
Gripper_max = 130
Arm_min = 40
Arm_max = 140
Rotate_min = 0
Rotate_max = 180


def on_arm(deg):
    pins.servo_write_pin(AnalogPin.P15, int(deg))


def onEvery_interval():
    deg = Math.map(0, 1023, Gripper_min, Gripper_max, pins.analog_read_pin(AnalogPin.P1))
    pins.servo_write_pin(AnalogPin.P15, int(deg))

loops.every_interval(200, onEvery_interval)


def on_forever():
    pass
basic.forever(on_forever)