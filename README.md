# Steps

1. npm init -y
2. npm install typescript ts-node @types/node nodemon --save-dev
3. npx tsc --init
4. update tsconfig.json file
   ->"rootDir":"./src"
   ->"outDir":"./dist"

   -> package.json:-
   "scripts": {
   "start": "node dist/index.js",
   "dev": "nodemon --exec ts-node src/index.ts",
   "build": "tsc"
   },

5. create src folder
   -> create `index.ts` file
6. npm install express sequelize pg pg-hstore bcrypt jsonwebtoken body-parser winston morgan swagger-jsdoc swagger-ui-express
7. npm install @types/express @types/jsonwebtoken @types/bcrypt --save-dev
8. npm install zod -> for request validation
9. npm install typescript ts-node --save-dev

## RabbitMQ

10. npm install amqplib

## OAuth

11. npm i passport @types/passport
12. npm i passport-google-oauth20 @types/passport-google-oauth20
13. npm install express-session @types/express-session

 
## Security
14. npm i cors @types/cors  
15. npm i express-rate-limit
16. npm i express-slow-down
17. npm i helmet
18. npm install xss-clean   ## Removes or escapes malicious scripts from user input.
19. npm i dotenv

## Testing
20. npm install jest supertest ts-jest @types/jest @types/supertest --save-dev
21. npx jest --init
22. npx jest -> for running


## npm run dev

## Project completed and Working fine
