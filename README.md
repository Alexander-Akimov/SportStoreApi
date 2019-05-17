# SportStoreApi - demo api for Adam Freeman's sports store app. 
That frontend app was enhanced by me to use with Node.js

Example of site implemented on Angular + Node.js
**This demo project is still under construction.**

To develop it I'm using following:

Fron-End:
* Angular 7
* RxJs
* Bootstrap
* TypeScript

Back-end:
* Node (v12)
* Express
* MongoDB + mongoose ODM lib
* JWT tokens + passport.js for authentication

To enable support for ECMAScript modules (without Babel) I use [--experimental-modules](https://nodejs.org/api/esm.html#esm_ecmascript_modules) flag.

E.g.: ```node --experimental-modules src/index.js```

App settings reside in settings.js file:

```javascript
export default {
  "port": 3005,
  "mongoUrl": "mongodb://localhost:27017/sportStoreApi",
  "bodyLimit": "100kb"
}
```
*Public* folder contains prod version of Angular app.

> store url - http://localhost:3005/store

> admin url - http://localhost:3005/admin



