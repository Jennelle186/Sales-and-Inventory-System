# Getting Started

This project was created using ReactJS with Material-UI as its main library for the design. Firebase was then used as its backend. 
A google drive link is also available for the step-by-step instructions with pictures on how to deploy the system. You may go to this link: https://drive.google.com/file/d/1WOHd12aIlEatNaarHFP91bU62LfvB2gr/view?usp=sharing

## What to Install

1. You may need to install Visual Studio Code if you do not have it installed in your computer. 
You may download it here: https://code.visualstudio.com/download

2. Install Node.js if you do not have it installed in your computer. 
You may download it here: https://drive.google.com/file/d/1WOHd12aIlEatNaarHFP91bU62LfvB2gr/view

## How to open the project in Visual Studio Code

1. Download the zip files of this project.

2. Unzip the files and open Visual Studio Code.

3. Click on Open Folder and locate the folder of the unzip files and click on it.

## How to deploy the project

1. From the Visual Studio Code terminal, enter these “npm i -g firebase-tools”

2. Enter “Firebase login”. You need to be logged in to your Gmail account that is
connected with your Firebase project.

3. If you are using another account, you may enter “firebase login –reauth”

4. Follow the given link and this will direct you a page for you to choose your gmail account that is connected with your Firebase project. You may then choose the Gmail account that is connected to your Firebase project.
  
5. Back to the Visual Studio Code terminal, Enter “firebase init”

6. Pick firebase hosting

7. Select “choose an existing project”

8. Choose what your Firebase Project is

9. You will be asked with the question, "What do you want to use as your public directory?", Enter “build”

10. You will be asked with the question, "Configure as a single-page app?", Enter "yes"

11. You will be asked with the questions, "Set up automatic builds?", Enter "no"

12. Enter "npm run build" and wait for it to load. This might take a while

13. Enter "Firebase deploy" and wait for the message that says "Deploy complete!" along with the links for the project console and the hostung URL. 

14. Click on the hosting URL to view the hosted website.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
