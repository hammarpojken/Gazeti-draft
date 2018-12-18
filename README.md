## Before you get started
Follow all the steps for a complete functional application
#### Note
It is possible to run and develop the application without using i3,
excluding the article flow. [read more](#additional-information)

## Requirements    
- **Node.js**    
    - [Install Node.js](https://nodejs.org/en/download/), Node.js making it possible to run JavaScript locally on your computer
- **GIT**
    - [Install GIT](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- **i3** 
    - i3 stores and handles all the articles except the images
    - Get in touch with Findwise 
    
- **A text editor of your choice**

## Setup

- **Step 1:**
    - Clone down the repository to your local computer
    
- **Step 2:**
    - Navigate to the root folder of the project using a terminal and run 'npm install' to install all the required dependencies
   
- **Step 3:**
    - Navigate to the sub folder named 'backend' and run 'npm install', to install all the required dependencies
    
- **Step 4:** 
    - Contact Andreas Franzon at Findwise for the i3 config
   
## Running the application

- **Step 1:** 
    - Navigate to the root folder of the project using a terminal and run 'npm start',
    this will start up a local server and automaticly run the application in your webbrowser at http://localhost:3000
   
- **Step 2:** 
    - Open up a new terminal and navigate to the sub folder named 'backend' and run 'npm start',
    this will start up a local server for storing/receiving images at http://localhost:3001

- **Step 3:** 
    - In your local i3 folder navigate to the bin folder and run the following .bat files:
        - index.bat
        - elasticsearch.bat.
        - process.bat
        - search.bat
        
## Additional Information

It is possible to start the application without running i3, however the application will not be able to load any content i.e articles, the same goes for publishing any content to the i3 database. Further development that is affiliated with articles e.g publishing and reading is not recommended. 

You still need to follow the guide but you can ignore the following steps:

- **'Setup': step 4**
- **'Running the application': step 3'**
    
If you are not developing anything affiliated with image content there is no need to go through 'Running the application, step 2'
