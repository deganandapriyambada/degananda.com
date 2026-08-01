# What is Arduino and Why its Popular?

XXXX

## Physical Connectivity Installation

connect the usb cable into mac. a converter dongle from usb to type C might be required as newer generation of mac doesnt provide usb port by default (recommended to use USB hub to have more ports).

once the usb cable is connected, a greenlight from the arduino board should be appear including blinking greenlight which indicating that the arduiono is powered on.

[image greenlight was appeared followed by blinking greenlight. good sign that arduino is powered on]

new arduino interfaces will be detected. Use following command to get all available interconnected interfaces on the mac

	ls /dev/tty.*
	ls /dev/cu.*

interfaces list before arduino is connected

```json
Last login: Sat Jul 18 09:28:00 on console
(base) deganandaferdian@pumpkinlaboo ~ % ls /dev/tty.*
/dev/tty.Bluetooth-Incoming-Port	/dev/tty.debug-console
/dev/tty.JETE-OPENTUNE			/dev/tty.wlan-debug
/dev/tty.MINISOBT120
(base) deganandaferdian@pumpkinlaboo ~ % ls /dev/cu.*
/dev/cu.Bluetooth-Incoming-Port	/dev/cu.debug-console
/dev/cu.JETE-OPENTUNE		/dev/cu.wlan-debug
/dev/cu.MINISOBT120
(base) deganandaferdian@pumpkinlaboo ~ % 
```

interfaces list after arduino is connected

```json
(base) deganandaferdian@pumpkinlaboo ~ % ls /dev/tty.*
/dev/tty.Bluetooth-Incoming-Port	/dev/tty.debug-console
/dev/tty.JETE-OPENTUNE			/dev/tty.usbmodem11201
/dev/tty.MINISOBT120			/dev/tty.wlan-debug
(base) deganandaferdian@pumpkinlaboo ~ % ls /dev/cu.* 
/dev/cu.Bluetooth-Incoming-Port	/dev/cu.debug-console
/dev/cu.JETE-OPENTUNE		/dev/cu.usbmodem11201
/dev/cu.MINISOBT120		/dev/cu.wlan-debug
(base) deganandaferdian@pumpkinlaboo ~ % 
```

as shown on above cli logs, a new interface on /dev/tty.usbmodem11201 is detected which is came from arduino. Now the microcontroller from arduino is successfully communicated with mac over **usb serial port**.

## Data Acquisition Checks

As the arduino comes with preinstalled proximity sensors on top of the breadboard and preloaded arduino code, by now it should sending data every x miliseconds. Use "screen" command to stream the data logs

	screen /dev/cu.usbmodem11201 9600

change the BAUD rates (the 9600 value) to preferred number. BAUD rates is a measurement value of signal changes. Most common BAUD rates are: 9600, 19200, 38400 and 115200. Execute those command on mac terminal

[image sensor readings is successfully captured on mac]

## Manage the arduino code

Every arduino has built in microcontroller which embedded on the harware board that has 8-bit AVR processor (for example ATMega328P). Those code can be managed and updated using arduino IDE (integrated development environment).

Apart from the IDE which has GUI (graphical user interfaces). arduino also offered cli (command line interfaces) tools which is more lightweight as it doesnt have any UI. Personally i prefer the CLI one because of the practicality and aligned with backend engineering practices which use CLI most of the time.

install arduino cli can be installed through various ways.

via homebrew

	brew update
	brew install arduino-cli

using official arduino installer in form of shell script (preferred)

	curl -fsSL https://raw.githubusercontent.com/arduino/arduino-cli/master/install.sh | sh

above command will automatically detect the machine OS and CPU architecture

[image arduino-cli is being installed]

wait until the download and installation process is completed

add ~bin to PATH

	echo 'export PATH="$HOME/bin:$PATH"' >> ~/.zshrc
	source ~/.zshrc

restart the cli (exit and then re-open) and ensure the "arduino-cli" command is pointed to the correct binary location. it should work as the binary folder where arduino is existed has been added to the PATH

	(base) deganandaferdian@pumpkinlaboo ~ % which arduino-cli 
	/Users/deganandaferdian/bin/arduino-cli

execute below command to ensure arduino cli is successfully installed

	arduino-cli version

it should return the arduino cli version.

check the whether arduino can be detected by arduino cli

	arduino-cli board list

above command will download all the required tools to manage the arduino board. If the installation is success, the arduino board will be shown on the CLI console.

[image arduino uno is successfully detected using arduino-cli]