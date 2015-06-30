# Repo to quick reproduce issue with promisify, watch and mocha
Steps to reproduce
- clone this repo
- run `gulp` in console
- resave few times `index.js` to force tests to restart 
- check console for error

```
Message:
    Object.keys called on non-object
Stack:
TypeError: Object.keys called on non-object
    at Function.keys (native)
    at processExports (/home/c301/JOB/promisify-issue/node_modules/nodegit/node_modules/promisify-node/index.js:44:16)
    at module.exports (/home/c301/JOB/promisify-issue/node_modules/nodegit/node_modules/promisify-node/index.js:112:10)
    at Object.<anonymous> (/home/c301/JOB/promisify-issue/node_modules/nodegit/lib/nodegit.js:108:26)
    at Module._compile (module.js:456:26)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Module.require (module.js:364:17)
    at require (module.js:380:17)
    at Object.<anonymous> (/home/c301/JOB/promisify-issue/index.js:2:15)
```
