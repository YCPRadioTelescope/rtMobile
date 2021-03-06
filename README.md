# Radio Telescope Mobile App

A Mobile app for the admins of the radio telescope

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installing

Install the latest version of Node.js https://nodejs.org/en/

Install Chocolatey: https://chocolatey.org/install<br>
Or brew if you are on a Mac: https://docs.brew.sh/Installation <br>
Then Install Yarn: https://classic.yarnpkg.com/en/docs/install/#windows-stable

Clone the project<br/>
In the terminal navigate into the project folder<br/>
<br/> Verify the version of react-native on your machine matches the version the project is running.  In your terminal run react-native -v.  Match that to the version in your package.json.  It will be under dependencies and look something like this -> "react-native": "0.63.3",  If the versions do not match you will have to use https://reactnative.dev/docs/upgrading to upgrade the project to match the version on your machine. The [upgrade helper](https://react-native-community.github.io/upgrade-helper/) can be very useful for this.<br/>
<br/> run npm install<br/> 
If on a mac<br/>
cd ios<br/>
run pod install<br/>
cd ..<br/>
If some libraries don't install, you can also run yarn add <br/>

## Additional Files You Will Need - Do NOT Commit These to GitHub

google-services.json:<br/>
Go to the firebase console (previous team members can give you the login info)<br/>
Click on the rtMobile project <br/>
Click on the setting 'gear' at the top left <br/>
Click on the general tab in the middle<br/>
Scroll to the bottom and download the google-services.json file<br/>
Place this file in rtMobile/android/app<br/>
<br/>config.json:<br/>
Get a hold of the UUID from previous members<br/>
This should also be available in previous semesters google drives<br/>
Create a config.json in the main folder and place the UUID in it.<br/>
<br/>encryption files:<br/>
Reach out to previous team members (Mobile or Control Room) for these<br/>
Place these in rtMobile/src/encryption

Go to https://facebook.github.io/react-native/docs/getting-started and follow their React Native CLI Quickstart guide. 

## Running the tests

Navigate to the project directory in the terminal and run yarn test

## Troubleshooting

If you get an error similar to this, Keystore file '/Project-Folder/android/app/debug.keystore' not found for signing config 'debug' in react-native 0.60<br/>
Generate a keystore file with this command -> keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000 –<br/>
Place the new file in rtMobile/android/app folder<br/>
If keytool is not recognized as a command, you will have to navigate to where your keytool is an executable file somewhere in your java jdk folder, and run the command while in that folder.  Cut and paste the new keystore file in rtMobile/android/app<br/>
<br/>

If you get an error like this:<br/>
[!] /bin/bash -c<br/> 
set -e<br/>
!/bin/bash<br/>
Copyright (c) Facebook, Inc. and its affiliates.<br/>
This source code is licensed under the MIT license found in the<br/>
LICENSE file in the root directory of this source tree.<br/>
set -e<br/>
PLATFORM_NAME="${PLATFORM_NAME:-iphoneos}"<br/>
CURRENT_ARCH="${CURRENT_ARCH}"<br/>
<br/>use this command:<br/>
git config --global --add core.autocrlf input<br/>
then, pod install<br/>

----

Other common issues can be found here https://facebook.github.io/react-native/docs/troubleshooting

----

## Deployment

https://facebook.github.io/react-native/docs/running-on-device<br/> 
Be very mindful that on android, the app can only be deployed using the same signing as the original upload... for students moving on make sure to pass this signing along to the next class.

