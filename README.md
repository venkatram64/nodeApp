debug configuration:

"version": "0.2.0",
    "configurations": [
                        
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceFolder}\\myapp\\bin\\www"
        }

       
    ]
********************************

1. for secure 
npm i helmet -s
npm i -s http-errors
npm i -s express

npm install morgan-debug -s

npm install nodemon -g

2. $env:DEBUG='myapp:*';  for node app debug

Run npm audit fix

3. npm install jest --save-dev


4. To run all the test cases
npm test

5. To run individual test cases
npx jest sum.test.js

6. To test coverate
npm test -- --coverage

8. to Start the app:
nodemon