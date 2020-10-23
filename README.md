[![forthebadge](https://forthebadge.com/images/badges/compatibility-betamax.svg)](https://forthebadge.com) 
![logo](https://github.com/ajustinpatterson/light-box-solo-project/blob/master/client/assets/light_box.png)
Light Box Photo Network

Light Box Photo Network
Light Box is a mobile photo-sharing app that puts photos back in the center of the sharing experience! The app is a portal for people looking for a photography-centric online community.  Users can upload photos in the 16x9 format and enjoy full-screen presentation, as well as adding likes and comments to their favorites. The 16x9 format offers three main benefits:
1. It offers an easy full-screen experience on most mobile devices
2. It makes for an interesting artistic challenge
3. It encourages photographers to experiment with composition

Getting started
Having a device simulator is handy.
To use one, make sure you've got Xcode(latest version).
You'll also need Expo XDE - the Expo dev environment. ```npm install -g expo-cli```
And PostgreSQL(latest). ```brew install postgresql```

Installation
1. Clone this repo and enter.
```
git clone https://github.com/ajustinpatterson/light-box-solo-project.git
cd light-box-solo-project
```
2. Install dependencies for client and server.
```
cd client
npm i
expo install
cd ..
cd server
npm i
```
3. While in the client folder, run `npm start` to start the expo bundler and run the app.
4. At the moment, the app requires a Cloudinary account for image hosting, so go to 
https:///www.cloudinary.com to set one up!

Tech Stack
Front end:
React Native (with Expo)
Cloudinary
Back end:
Node/express
PostgreSQL
Sequelize

Team:
Justin Patterson
