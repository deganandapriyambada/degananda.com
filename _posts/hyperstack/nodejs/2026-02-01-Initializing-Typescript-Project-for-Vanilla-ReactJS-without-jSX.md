---
layout: posts
author: Degananda Ferdian
categories: typescript
series-code: n/a
excerpt: By default, vanilla reactjs project is created with nodejs as the runtime engine and javascript as the programming language through npm initialize command. In order to migrate into typescript based nodejs, a sets of library is required to be installed including tsc (typescript compiler), bundler (example is eslint) as well as typescript based react library.
tags: typescript setup
background: Modern nodejs application are slowly leaving javascript as the programming language due to the absence of OOP (object oriented programming) capabilitiy such as class, inheritances and polymorphism. The industry is leaning towards typescript as the programming language for their web-based system (frontend or backend)
objective: to understand how to intialize typescript based nodejs project for vanilla reactjs web application
deliverables: Article & Illustration
---

# Typescript for Enterprise Appplication

Javascript nowdays are often only used for non customer oriented frontend applications due to the simplicity and beginner friendly. 

In contrast, most of enterprise application (B2B or B2B) are ditching javascript into typescript as enterprise project tends to have huge team member that require general consensus of the programming syntax/style/guidance.

Typescript is the superset of javascript with richer syntax feature and more rigid for example each variable must have determined data types. 

However, the rigidness comes with a lot of object oriented programming (OOP) syntax that previously not available on javascript. 

some syntax that now available on typescript

1. class
2. interfaces
3. inheritances
4. polymorphism
5. strict datatypes for function and variable 
6. Union types, intersection & Mapped Types.

# Steps to initializing typescript project with NodeJS

Below are the steps to initialize react JS typescript project

## Create typescript project

initialize nodejs based project

    npm init

install typescript as package dependency during development

    npm install typescript --save--dev

if the install is success, typescript will be shown under dependencies parameter on package.json

```json
{
  "dependencies": {
    "typescript": "^5.9.3"
  }
}
```

Initialize typescript project by executing following command

  tsc init

it will generate tsconfig.json, this is where all the configuration related with the typescript is located. For example, directory location for the compiled tsc file into javascript file.

## Create tsc file and Compile it

typescript will detect all files inside that folder that has .tsc extension and compile them.

for example create a simple app.ts file and add following code

```typescript
console.log("Hello World this is typescript :) ! ");

class Animal {

    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

}

console.log("Now i can write a class beautifucally like others OOP language hhe...")
console.log(new Animal("Dog", "Cihuahua"));
```

compile it by executing following commands

  tsc app.ts

it will compile the typescript source code and compile it into javascript code and finally will be generated as app.js file that will be located under certain directory/folder based on the configuration at tsconfig.json file.

these typescript source code will be compiled and transpiled into following javascript file

```javascript
console.log("Hello World this is typescript :) ! ");
var Animal = /** @class */ (function () {
    function Animal(name, species) {
        this.name = name;
        this.species = species;
    }
    return Animal;
}());
console.log("Now i can write a class beautifucally like others OOP language hhe...");
console.log(new Animal("Dog", "Cihuahua"));
```

## Watch Active Changes

The most common setup for development is to have actively watcher for any changes on the typescript source code. For example we update app.ts, its more convinient if typescript will automatically compile it.

execute following command to watch for anychanges on the typescript files

  typescript --watch

# Initializing Vanilla React

install **reactjs library for typescript** using following command

    npm install --save-dev @types/react @types/react-dom


note: Non @types (typescript) based library can't be used for typescript project including reactjs.

below is the code to initialize vanilla react without JSX

```typescript
import { createRoot } from 'react-dom/client';
import { createElement } from 'react';

function Layout() {
    return createElement(
        'div',
        {
            id: "main-container"
        },
        "Hello react!"
    )
}

const mainContainer = createRoot(document.getElementById("app-name"));
mainContainer.render(Layout())
```

compile the typescript code using following command

    tsc app.ts

and then use the compile javascript file on the web application by import it using script tags.

    <script src="./app.dist.js"></script>

Done. Typescript based vanilla reactjs project has been successfully initiated and ready to be development further.