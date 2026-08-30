# Run x86_x64 Operating System on ARM based host OS through Emulation  

Emulation technology bridge the gap between different CPU architecture which enable ARM based machine like macbook M1 or android phone that uses snapdragon to run x86_x64 operating system. By default, ARM CPU can't read and execute x86_x64 based application or OS. Emulation will become the realtime translator between ARM CPU and native x86_x64 codes. Hence, its not like the ARM executing x86_x64 codes but the emulation programs were translate x86_x64 codes to ARM codes.

Apple silicon environment has three different method to execute x86_x64 depending on the use cases.

**run intel based app application**: Rosetta 2 JIT (just in time) translation of x86_x64 codes from the apple intel based application into ARM codes at runtime level.

**run windows applications**: Crossover/wine is also using rosetta 2 for the translation. However, they allow executing the .executable file immediately.

**run x86_x64 operating system**: Full system emulation to run x86_x64 operating system like windows 7. The performance will be slugish compared (still acceptable as long as its not for gaming or graphic processing purposes) to native windows 11 ARM virtualization inside parallel.

## Download & Install UTM for Apple Silicon MAC

go to following website to download UTM

	https://getutm.app/

Optionally, UTM also provide VM (virtual machine) templates for older operating system like windows 7 that require specific configuration. Find the windows 7 UTM template on following url

	https://mac.getutm.app/gallery/windows-7

it is recommended to use utm template unless you want to configure the emulation settings from the scratch.

## Create windows 7 VM on UTM

Import the windows 7 template for UTM and add following configuration

| Parameter     | Value                      |
| ------------- | -------------------------- |
| UEFI Boot     | Disabled                   |
| Boot ISO file | Add the windows 7 ISO path |
| RAM           | Minimum of 2 gb            |

Install windows 7

Follow the installation wizard.

done. windows 7 is up and running. its recommended to take snapshot at this stage.

## Install OPC Simulator

a

## Validate if OPC Simulator is up and running

b