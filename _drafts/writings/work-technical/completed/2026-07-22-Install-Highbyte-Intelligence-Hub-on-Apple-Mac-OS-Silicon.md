Below are the steps to setup on local machine (apple mac os silicon)

## Download Highbyte

go to highbyte official account

	https://www.highbyte.com/intelligence-hub

an account is needed in order to download the highbype installer. Navigate the account registration page or click following links

	https://www.highbyte.com/request-account

fill all the required fields. you might need to input your organization email instead of personal email like gmail, hotmail or yahoo. It will take sometime until highbyte approve the registration. It is recommended to regularly check for the confirmation email from highbyte.

Once the confirmation email is received, follow the steps provided to create highbyte account.

[image confirmation email from highbyte. Now we're eligible for account creation]

Next step is to download the highbyte intelligence hub installer by go to following links (require login using highbyte account)

	https://support.highbyte.com/downloads

choose the latest version with appropriate CPU architecture. Highbyte also provide the docker image version which is **preferrable** so that it wont get mixed up with the mac/local machine system file.

[image choose docker version with arm64 compatibility]

note: for non silicone CPU / non-arm64, use the regular version.

[image wait until the download process is completed. it will take sometime due to the installer size]

## Highbyte Installation on Apple Silicon Mac

highbyte image is bundled using tar. Lets extract the .tar file using CLI command in order to validate whether its an actual container images.

	tar -zxcf highbyte-installer.tar

or just double click the tar and it will be automatically extracted. Open terminal and navigate to the extracted folder. For our cases, the highbyte folder is located on these path

	/Users/deganandaferdian/Documents/Digital Spine/highbyte/HighByte-Intelligence-Hub-4.5.0_Beta_Docker_Build_2026.6.26.214_arm64

below are the folder structure of **containerized highbyte binary**

```
drwx------@ 8 deganandaferdian  staff   256 Jul 22 20:30 .
drwxr-xr-x  5 deganandaferdian  staff   160 Jul 22 20:29 ..
-rw-r--r--@ 1 deganandaferdian  staff  8196 Jul 22 20:30 .DS_Store
drwxr-xr-x@ 4 deganandaferdian  staff   128 Jul 22 20:32 blobs
-rw-r--r--@ 1 deganandaferdian  staff   375 Jan  1  1970 index.json
-rw-r--r--@ 1 deganandaferdian  staff  6284 Jan  1  1970 manifest.json
-rw-r--r--@ 1 deganandaferdian  staff    31 Jan  1  1970 oci-layout
-rw-r--r--@ 1 deganandaferdian  staff    96 Jan  1  1970 repositories
```

above folder structure tree is a valid docker images sources because an oci-layout (OCI is stands for open container initiative) folder is available. 

now move to back to a folder where the original tar file is located. on our cases its located in following path:

	(base) deganandaferdian@pumpkinlaboo highbyte % ls -la | grep tar
	-rw-r--r--@ 1 deganandaferdian  staff  910730240 Jul 22 20:28 HighByte-Intelligence-Hub-4.5.0_Beta_Docker_Build_2026.6.26.214_arm64.tar

load the image into docker using following command.

	docker load -i highbyte-installer.tar

run the image

	docker run -p 45245:45245 -p 1885:1885 -p 8885:8885 -e ACCEPT_EULA=Y --name highbyte highbyte:4.5.0

replace 4.50 with the actual container tag version and the installation steps are done.

## Licensing & Free Mode

Free version of highbyte only provide 2 hours of trial time. Fortunately, highbyte kind enough to prolong the trial duration by restarting the highbyte every 2 hour. Meaning, we can use highbyte without "limited time" for learning purposes (not for commercial!).
