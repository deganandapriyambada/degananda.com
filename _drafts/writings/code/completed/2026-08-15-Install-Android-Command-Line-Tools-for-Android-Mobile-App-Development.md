# Android CLI is Enabling Android Mobile Apps Development Without Android Studio

Below are the steps to install and configure android command line tools on mac (ARM based SOC).

## Installation of SDK Manager

Create a folder which store the whole android SDK (software development kit) library. Ensure the folder is accessible by the current local machine's user.

	 mkdir "/Users/deganandaferdian/Documents/Digital Spine/android-sdk"

move android command line tools zip file towards the designated folder

	mv ~/Downloads/commandlinetools-mac_arm64-15859902_latest.zip ./android-sdk

unzip the android command line tools

	cd /Users/deganandaferdian/Documents/Digital Spine/android-sdk
	unzip commandlinetools-mac_arm64-15859902_latest.zip

a new folder called "cmdline-tools" will be created as shown below

```json
(base) deganandaferdian@pumpkinlaboo android-sdk % ls -la
total 304856
drwxr-xr-x  4 deganandaferdian  staff        128 Aug 15 11:22 .
drwxr-xr-x@ 9 deganandaferdian  staff        288 Aug 15 11:19 ..
drwxr-xr-x@ 6 deganandaferdian  staff        192 Jul 15 14:38 cmdline-tools
```

ensure binary (/bin) folder are exist on the sdk (note: the extracted SDK folder structure might differ depending on the downloaded version. this article use following build number: 15859902).

	ls -la ./cmdline-tools/bin

it should list down all available binary file. We will use sdk-manager to install other neccesary library/tools for android development.

```json
(base) deganandaferdian@pumpkinlaboo android-sdk % ls -la ./cmdline-tools/bin               
total 7336
drwxr-xr-x@ 13 deganandaferdian  staff      416 Jul 15 14:39 .
drwxr-xr-x@  7 deganandaferdian  staff      224 Aug 15 11:27 ..
-rwxr-xr-x@  1 deganandaferdian  staff  3670880 Jul 15 14:39 android
-rwxr-xr-x@  1 deganandaferdian  staff     5765 Jan  1  2010 apkanalyzer
-rwxr-xr-x@  1 deganandaferdian  staff     5758 Jan  1  2010 avdmanager
-rwxr-xr-x@  1 deganandaferdian  staff     5659 Jan  1  2010 d8
-rwxr-xr-x@  1 deganandaferdian  staff     5724 Jan  1  2010 lint
-rwxr-xr-x@  1 deganandaferdian  staff     5697 Jan  1  2010 profgen
-rwxr-xr-x@  1 deganandaferdian  staff     5659 Jan  1  2010 r8
-rwxr-xr-x@  1 deganandaferdian  staff     5752 Jan  1  2010 resourceshrinker
-rwxr-xr-x@  1 deganandaferdian  staff     5697 Jan  1  2010 retrace
-rwxr-xr-x@  1 deganandaferdian  staff     5753 Jan  1  2010 screenshot2
-rwxr-xr-x@  1 deganandaferdian  staff     5765 Jan  1  2010 sdkmanager
```

create a folder called as "latest" and move the bin and lib folder then add the cmdline-tools binary and platform tools on the path

	export ANDROID_SDK_HOME="$HOME/Documents/Digital Spine/android-sdk"
	export PATH="$ANDROID_SDK_HOME/cmdline-tools/latest/bin:$PATH"

**IMPORTANT!** dont forget the $PATH at the end, otherwise all of your commandline path will get overwritten. be careful.

restart zshrc

	source ~/.zshrc

validate if sdk-manager cli now can be accessed from the console

	sdkmanager --version

it should return the sdkmanager binary version that located under the PATH.

[image sdk-version 22 is currently being use]

## Installation of Additional Tools 

In order to build an APK that ready to be installed on an android devices, following package are required apart from the default package of android command line tools

1. platform
2. platform tools
3. build-tools

check if those package are available through sdk manager

	sdkmanager --list | grep -E "platform|platform-tools|build-tools"

Install platform tools
	
	sdkmanager "platform-tools"

Install Android Platform

	sdkmanager "platforms;android-<version>"

Install build tools

	sdkmanager "build-tools;<version>"

Replace both of the version using the most stable android version (by the time this artcile was released, the latest android version is 17, which is equal to **SDK version 37**)

Done. Now our local machine is ready for android development using android command line tools (just for the sake of learning, for actual project development please use android studio/flutter)