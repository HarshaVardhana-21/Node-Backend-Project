//? NVM version check
    nvm -v

//? node version check
    node -v

//? npm version check
    npm -v

// ----------------------------------------------------------

//* Project creation
    // package name: (backend) node-backend
    // version: (1.0.0)
    // description: A detailed backend project
    // entry point: (README.js) index.js
    // test command:
    // git repository:
    // keywords: Node Backend Javascript
    // author: Harsha L
    // license: (ISC)

    // Is this OK? (yes)


//* Project entry file
    // Create index.js file in root directory


// ----------------------------------------------------------

//! Changes in package.jscon file

    //? inject "start script" in scripts object

    //? Example
    //  "scripts": {
    //     "start": "node index.js",
    //   },


//TODO:
    //? inject "type": "module" in package.json file to use ES6 modules
    //? Create .env file in root directory

    //? install express, dotenv and nodemon package
        // npm install express dotenv
        // npm install --save-dev nodemon || npm i -D nodemon

        //After dev dependencies installation change script object in package.json file
            //!  "start": "node index.js",
            
            // to
            
            //  "scripts": {
            //     "start": "nodemon index.js",
            //   },

    //? Create a basic server in index.js file

    //RUN the server
        // COMMAND - "npm start"