# Radio telescope Mobile App

A Mobile app for the admins of the radio telescope

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

Clone the project<br/>
In the terminal navigate into the project folder<br/>
run npm install<br/> 
If on a mac<br/>
cd pod<br/>
run pod install<br/>
cd ..<br/>
If some libraries don't install, you can also run yarn add <br/>
Go to the firebase console <br/>
Click on the rtMobile project <br/>
Click on the setting 'gear' at the top left <br/>
Click on the general tab in the middle<br/>
Scroll to the bottom and download the google-services.json file<br/>
Place this file in rtMobile/android/app... do not commit this file on github <br/>

Go to https://facebook.github.io/react-native/docs/getting-started and follow their React Native CLI Quickstart guide. 

## Running the tests

Navigate to the project directory in the terminal and run yarn test

## Troubleshooting

If you get an error similar to this, Keystore file '/Project-Folder/android/app/debug.keystore' not found for signing config 'debug' in react-native 0.60<br/>
Generate a keystore file with this command -> keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000 –<br/>
Place the new file in rtMobile/android/app folder<br/>
If keytool is not recognized as a command, you will have to navigate to where your keytool is an executable file somewhere in your java jdk folder, and run the command while in that folder.  Cut and paste the new keystore file in rtMobile/android/app<br/>
<br/>
Other common issues can be found here https://facebook.github.io/react-native/docs/troubleshooting

## Deployment

https://facebook.github.io/react-native/docs/running-on-device
