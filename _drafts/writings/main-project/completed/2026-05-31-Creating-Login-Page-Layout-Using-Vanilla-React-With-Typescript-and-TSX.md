# Environment Preparation

below is the tech stack used:

1. typescript
2. nodejs
3. vanilla react
4. esbuild

## Install neccesary build tools

initiate and create npm based project

	npm init

install type script

	npm install typescript --save--dev

setup web module bundler (basically a dependency resolver, combine it with other javascript file and then compile it into ready to consume javascript code at browser) for typescript

install esbuild

	npm install --save-exact --save-dev esbuild

validate

	./node_modules/.bin/esbuild --version

or install it globally

	npm install esbuild -g

install react on javascript

	npm install react react-dom

install react on typescript

	npm install --save-dev @types/react @types/react-dom

for now, only react (for createElement, useState, useEffect) and react-dom (for createRoot, main rendering library) is needed

initialize typescript project

	tsc --init

## Project skeleton

/dist: to store the compiled and bundled javascript output
/components: to store the re-useable react createElement component
/pages: to store the "page". One page consist of one or more components and often represented in single route.
index.html: main html files
app.jsx: root element of the web app
main.jsx: entry point of the react app initialization

note: all the folder except "dist", will be placed inside the "src" folder.

Key definition of done

1. All folder name is written in plurals (components instead of component)
2. useState, useEffect will still remain on the /components or /pages

below is the full project skeleton.

```json
|-- /dist
|-- /src
|		|-- /components
|		|-- /pages
|		|-- app.jsx
|		|-- main.jsx
|-- index.html
|-- package.json
|-- tsconfig.json
```

Initialize react app

main.jsx

```javascript

```

## HTML & CSS Skeleton Structure

## Dev Server

Install concurrently

	npm install --save-dev concurrently

add build command on the package.json

	"build": "./node_modules/.bin/esbuild ./src/main.jsx --bundle --minify  --loader:.tsx=tsx --loader:.ts=ts --platform=browser --outfile=./dist/app.js",

add watch command on the package.json

	"watch": "./node_modules/.bin/esbuild ./src/main.jsx --bundle --minify  --loader:.tsx=tsx --loader:.ts=ts --platform=browser --watch --outfile=./dist/app.js",

add http serve command on the package.json

	"serve": "python -m http.server 8000",

chain watch and http serve using concurrently and put it in one command

	"dev": "concurrently \"npm run watch\" \"npm run serve\""

open browser and access the port using localhost

	http://localhost:8000
