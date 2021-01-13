React-Transactions
=================

This application is used to showcase a demo application created for a previous tech-test. There are still improvement to be made which I could not implement due to lack of available time, these improvements will be made over time and can be found in the issues of this repository.
On this page I will explain some of the basic practices used throughout the frontend and server application.

Frontend application
--------------------

This frontend application is built with the ReactJS framework and initialized with the create-react-app npx command.
 Simply run ```npm run start``` to start the application.

### Components

The application is divided into different levels of components. first of all in src \> pages are the page components. These gather the more specific components that build up a page. These can be found in src \> components and are defined by their logical name. Inside this folder is also a folder called "common" This folder contains common components that can be used anywhere in the application and changed by passing props (defined in the component);

### Styling

For styling I have used [styled-component](https://styled-components.com/)
 This keeps the styles defined inside the scope of the component, different examples of usage can be found throughout the application. For example the usage of media queries and passing props.
 Global styles can still be placed in app.css or index.css.
 I have also used [react-bootstrap](https://react-bootstrap.github.io/) to keep the responsiveness simple.

### Server interaction

Server interactions from the frontend are separated per business concerns in the services folder. The request url is shortend in the code because the property "proxy" is provided in the package.json file and set to http://localhost:8000 (where the server runs).

### Utilities

The utils folder contains a file with common functions for checking user input. These functions are placed here to be used throughout the application.

### Unit tests

The unit tests can be found in the tests folder and are separated per component and are written with [jest](https://jestjs.io/en/). Writing unit tests for a web application is a skill I still want to improve upon as I have only worked with JUnit / java testing before. I am looking forward to improve upon this skill as it is something I have been wanting to learn for some time now. This techtest was a basic intro to the testing for me.
Simply run ```npm run test``` to run the written unit tests.

### Extras

There is a file called "sonar-project.properties" This file can be used to save the settings for sonarqube and shortens the run command. To run sonarqube, ensure sonarqube and sonarscanner are installed (see the file for some more detailed comments). after setting up the project in sonarqube simply run ```sonarscanner.bat``` in the root of this frontend application (inside the frontend folder). Feel free to run it! The only flags are one security hotspot concerning a regex expression and three concerning the alert which I have used for simplicity sake.

Additionally, ESlint has been added to the project to scan for common mistakes and best practices Some rules are disabled and can be found in the "eslintrc.json" file

Server application
------------------
To start the server run ```npm run start``` in the "server" root folder.

To be written soon...

