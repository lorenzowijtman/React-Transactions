import React from 'react';

import styled from "styled-components";

const Styles = styled.div`
    max-width: 80%;
    margin: auto;
`;

export default function Home() {
    return(
        <Styles>
            <h1>Frontend-Techtest</h1>
            <p>
                On this page i will explain some of the basic practices used throughout
                the frontend and server application. In both the frontend application and server application
                there are several //TODO lines to be found, these are additional improvements which would be nice
                but a bit out of scope due to mainly my own limited time.
            </p>
            <h2>Frontend application</h2>
            <p>
                This frontend application is built with the ReactJS framework and initialized with the
                create-react-app npx command.<br /><br /> Simply run
                &qout;npm run start&qout; to start the application.
            </p>
            <h3>Components</h3>
            <p>
                The application is divided into different levels of components.
                first of all in src &gt; pages are the page components. These gather the more specific
                components that build up a page. These can be found in src &gt; components and are defined by their
                logical name. Inside this folder is also a folder called &qout;common&qout; This folder contains common
                components that can be used anywhere in the application and changed by passing props (defined in the
                component);
            </p>
            <h3>Styling</h3>
            <p>
                For styling I have used
                <a href={'https://styled-components.com/'} target={'_blank'} rel={"noreferrer"}> styled-component </a>
                <br /> This keeps the styles defined inside the scope of the component, different examples of
                usage can be found throughout the application. For example the usage of media queries and passing props.
                <br /> Global styles can still be placed in app.css or index.css.
                <br /> I have also used
                <a href={'https://react-bootstrap.github.io/'} target={'_blank'} rel={"noreferrer"}> react-bootstrap </a>
                 to keep the responsiveness simple.
            </p>
            <h3>Server interaction</h3>
            <p>
                Server interactions from the frontend are separated per business concerns in the services folder.
                The request url is shortend in the code because the property &qout;proxy&qout; is provided in
                the package.json file and set to http://localhost:8000 (where the server runs).
            </p>
            <h3>Utilities</h3>
            <p>
                The utils folder contains a file with common functions for checking user input.
                These functions are placed here to be used throughout the application.
            </p>
            <h3>Unit tests</h3>
            <p>
                The unit tests can be found in the tests folder and are separated per component and are written
                with
                <a href={'https://jestjs.io/en/'} target={'_blank'} rel={"noreferrer"}> jest. </a>
                Writing unit tests for a web application is a skill I still want to improve upon as I've only worked
                with JUnit / java testing before. I'm looking forward to improve upon this skill as it is something
                I have been wanting to learn for some time now. This techtest was a basic intro to the testing for me.
                <br /><br />Simply type npm run test to run the written unit tests.
            </p>
            <h3>Extras</h3>
            <p>
                There is a file called &qout;sonar-project.properties&qout;
                This file can be used to save the settings for sonarqube and shortens the run command.
                To run sonarqube, ensure sonarqube and sonarscanner are installed (see the file for some more detailed
                comments). after setting up the project in sonarqube simply run sonarscanner.bat in the root of
                this frontend application (inside the frontend folder).
            </p>
            <p>
                Additionally, ESlint has been added to the project to scan for common mistakes and best practices
                Some rules are disabled and can be found in the &qout;eslintrc.json&qout; file
            </p>
            <h2>Server application</h2>
            <p>
                I have made limited changes to the server application, I did not add extra functionalities
                but instead improved upon the existing ones. Below is a list of changes made
            </p>
            <ul>
                <li>getNewId function</li>
                <p>
                    Calculates a new id for the given array(container) looks for the last id in the array
                    and returns a new id (simple +1). Ensures unique ids up to a certain max number (Integer) of course.
                </p>
                <li>CalculateBalance function</li>
                <p>
                    Calculates balance for given accountID. previous function seemed to calculate using only the last
                    transaction.
                </p>
                <li>Delete account</li>
                    <p>
                        Seems like it always deleted the first account of the accountscontainer,
                        now deletes properly
                    </p>
                <li>Create Account</li>
                <p>
                    made duplicate ids when an account is deleted, id was based on container length.
                    Uses newId function now
                </p>
                <li>Typo</li>
                <p>
                    There is a typo on line 204 of the original application, es is written instead of res which will
                    throw an undefined error when reached.
                </p>
            </ul>
        </Styles>
    )
}
