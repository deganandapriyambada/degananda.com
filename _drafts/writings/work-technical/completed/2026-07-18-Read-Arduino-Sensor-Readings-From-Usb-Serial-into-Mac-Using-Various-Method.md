# Various Methods to Capture Arduino Sensor Readings

There are various way to read arduino sensor readings from **usb serial**. Every method is solving different problem and has specific purposes depending on the situation. Below are the available method of data acquisition from arduino towards local machine

| Scenario           | Approach                                                     | Possible Tools                 |
| ------------------ | ------------------------------------------------------------ | ------------------------------ |
| Connectivity check | direct listening to the interfaces                           | terminal                       |
| Production Grade   | 1. utilize programming language which can read serial port<br />2. perform business logics with strong customizability<br /> 3. utilize the programming language system resiliency, ops and performance <br />(to avoid reinventing the wheel) | nodejs, python, C#, java, rust |

For production grade deployment, its recommended to pair arduino with raspberry pi.

## Direct Interface Readings Through Terminal

Once arduino is connected to local machine through usb serial and the interfaces is detected, the sensor readings can be imemdiately captured using terminal (applicable in any operating system).

use following command to read arduino interfaces on mac and linux

	screen [interface-path] [baud-rate]

replace [interface-path] with the actual arduino interfaces name (for exampe: /dev/cu.usbmodem11201). leave the baud-rate as blank to use fault refresh rate.

[image reading promity sensor from arduino uno using mac terminal]

sensor readings from usb serial can also be captured from windows terminal with the help of powershell through COM ports.

```json
$readings = New-Object System.IO.Ports.SerialPort COM5,9600,None,8,one
$readings.Open()

while ($true) {
    $port.ReadLine()
}
```

note: replace COM5 with the actual COM port used by the arduino.

## Reading USB Serial Port using NodeJS

Serial port is physical as well as virtual communication interfaces that transfer data sequentialy (one bit a time). USB (universal serial bus) is the most well known serial port implementation in our daily life.

NodeJS has dozens of open sources library which can listen from serial port, some of them are:

Node serial port (preferred, has more than 6K stars with 100K++ average weekly downloads)

	https://www.npmjs.com/package/serialport

browser serial port

	 https://www.npmjs.com/package/browser-serialport

both of them is working perfectly.

below is the sample code to listen from usb serial port using node serialport.

install node serial port

	npm install serialport --save

import serial port package to the project

```javascript
const { SerialPort } = require('serialport')
```

import readline parser (to automatically parse the buffer readings), still within same serialport packages.

```javascript
const { ReadlineParser } = require('@serialport/parser-readline');
```

stream the readings.

```javascript
const port = new SerialPort({
    path: '/dev/cu.usbmodem11201',
    baudRate: 9600
});

const parser = port.pipe(
    new ReadlineParser({ delimiter: '\n' })
);

parser.on('data', (line) => {
    console.log('Received:', line);
});
```

execute the nodejs file

	node read-from-serial

it will now read whatever readings given from the arduino.

[image listening to the usb serial port using node serial port]

note: **only one active program** can listen to the serial port. be careful!

## Reading USB Serial Port using Python

serial port can also be listened using python with the help of pyserial package.

create a new virtual environment using conda or simply python venv

	python venv -m serial-port-reading

activate the environment and then instal pyserial using pip

	pip install pyserial

use following code to read and parse serial port readings.

```python
import serial

ser = serial.Serial('/dev/cu.usbmodem11201', 9600)

while True:
    line = ser.readline().decode().strip()
    print(line)
```

execute the python file and the readings will be poped up on the terminal.