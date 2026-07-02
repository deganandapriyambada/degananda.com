Create a new folder which will hold the express js web api source code. Use following command to create a folder

	mkdir auth-management 

Initialize the git

	git init

Exclude unnecesary folder which doenst require to be added to the git. Create a blank file called as .gitignore (dont forget to the "." dot) by executing following command

	touch .gitignore

Add following lines

```json
node_modules
.DS_STORE
```

initialize nodejs project by executing following command

	npm init

it will create package.json on the folder. 

add typescript as dependency

	npm install typescript --save-dev

initialize typescript project

	npx tsc --init

it will create tsconfig.json and adjust the tsconfig json as follow

```json
{
  "compilerOptions": {
    "module": "nodenext",
    "target": "esnext",
    "moduleResolution": "NodeNext",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

above configuration is tailored for NodeJS based web services.

Install expressjs with types so that the IDE can recognize typescript anotation and put it under the  development dependencies.

	npm install --save-dev @types/express

and then install express for the javascript 

	npm install express
	
note: express need to be installed twice. First for the typescript and 2nd is for the javascript runtime as the build will be done in javascript manner.

it will takesome, add --verbose to know the instalation details.

[image instlal express in typescript]

create a new folder called as src

	mkdir src

create a new file called app.ts.

	touch app.ts

its where the express instances located.

add following code initialize express and create hello-world endpoint that will return {"hello" : "world"}

```typescript
import express, { type Request, type Response } from "express";

const app = express();
const PORT = 3000;

app.get("/hello-world", (req: Request, res: Response) => {
    res.json({
        hello: "world",
    });
});

app.listen(PORT, () => {/
    console.log(`Server is alive at http://localhost:${PORT}`);
});
```

compile the typescript to javascript

	tsc

and then run the express server throught the javascript output file under dist folder

	node ./dist/app.js

if all typescript and express configuration has no issue, it should shown following console response

[insert console start express]

open browser and access the endpoint

[insert brwoser ss]